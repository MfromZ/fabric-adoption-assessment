import * as XLSX from 'xlsx';
import { assessmentAreas } from '../data/assessmentData';

function getLevelName(level: number): string {
  switch (level) {
    case 100: return 'Initial';
    case 200: return 'Repeatable';
    case 300: return 'Defined';
    case 400: return 'Optimal';
    case 500: return 'Excellent';
    default: return 'Unknown';
  }
}

export function exportToExcel(answers: Record<string, number>): void {
  const wb = XLSX.utils.book_new();

  // ── Sheet 1: Assessment Summary ──
  const summaryRows = assessmentAreas.map((area) => {
    const level = answers[area.id] || 100;
    return {
      'Area': area.title,
      'Current Level': level,
      'Level Name': getLevelName(level),
      'Max Level': 500,
      'Gap to Next': level < 500 ? (level + 100) - level : 0,
      'Question': area.question,
      'Selected Description': area.options.find((o) => o.level === level)?.description || '',
    };
  });

  const avgLevel = Math.round(
    assessmentAreas.reduce((sum, a) => sum + (answers[a.id] || 100), 0) / assessmentAreas.length
  );

  // Add overall summary row at top
  const overallRow = {
    'Area': '⭐ OVERALL AVERAGE',
    'Current Level': avgLevel,
    'Level Name': getLevelName(Math.round(avgLevel / 100) * 100),
    'Max Level': 500,
    'Gap to Next': '',
    'Question': '',
    'Selected Description': '',
  };

  const summarySheet = XLSX.utils.json_to_sheet([overallRow, ...summaryRows]);

  // Set column widths
  summarySheet['!cols'] = [
    { wch: 32 }, // Area
    { wch: 14 }, // Current Level
    { wch: 14 }, // Level Name
    { wch: 10 }, // Max Level
    { wch: 12 }, // Gap
    { wch: 60 }, // Question
    { wch: 80 }, // Description
  ];

  XLSX.utils.book_append_sheet(wb, summarySheet, 'Assessment Summary');

  // ── Sheet 2: Action Plan (all steps from current to 500) ──
  const actionRows: Record<string, string | number>[] = [];

  // Sort areas by level (lowest first)
  const sorted = assessmentAreas
    .map((area) => ({ area, level: answers[area.id] || 100 }))
    .filter((s) => s.level < 500)
    .sort((a, b) => a.level - b.level);

  let priority = 1;
  for (const { area, level } of sorted) {
    // Iterate through ALL transitions from current level to 500
    for (let fromLvl = level; fromLvl < 500; fromLvl += 100) {
      const actions = area.actionItems[fromLvl] || [];
      const toLvl = fromLvl + 100;
      const tag = toLvl === 400 ? '🎯 Optimal Target' : toLvl === 500 ? '🌟 Excellent' : '';
      const phase = toLvl <= 400 ? 'Primary (→ Optimal)' : 'Stretch (→ Excellent)';

      for (const action of actions) {
        const parts = action.split(' — ');
        const actionName = parts[0];
        const details = parts.length > 1 ? parts.slice(1).join(' — ') : '';

        actionRows.push({
          'Priority': priority,
          'Area': area.title,
          'Current Level': `${level} (${getLevelName(level)})`,
          'Transition': `${fromLvl} → ${toLvl}`,
          'Target Level': `${toLvl} (${getLevelName(toLvl)})`,
          'Phase': phase,
          'Tag': tag,
          'Action': actionName,
          'Implementation Details': details,
        });
        priority++;
      }
    }
  }

  const actionSheet = XLSX.utils.json_to_sheet(actionRows);

  actionSheet['!cols'] = [
    { wch: 8 },  // Priority
    { wch: 32 }, // Area
    { wch: 20 }, // Current Level
    { wch: 14 }, // Transition
    { wch: 20 }, // Target Level
    { wch: 22 }, // Phase
    { wch: 18 }, // Tag
    { wch: 55 }, // Action
    { wch: 80 }, // Implementation Details
  ];

  XLSX.utils.book_append_sheet(wb, actionSheet, 'Action Plan');

  // ── Sheet 3: Detailed Maturity Levels ──
  const detailRows: Record<string, string | number>[] = [];
  for (const area of assessmentAreas) {
    for (const option of area.options) {
      const currentLevel = answers[area.id] || 100;
      detailRows.push({
        'Area': area.title,
        'Level': option.level,
        'Level Name': getLevelName(option.level),
        'Label': option.label,
        'Description': option.description,
        'Status': option.level === currentLevel ? '✅ Current' : option.level < currentLevel ? '✓ Achieved' : '',
      });
    }
  }

  const detailSheet = XLSX.utils.json_to_sheet(detailRows);
  detailSheet['!cols'] = [
    { wch: 32 }, // Area
    { wch: 8 },  // Level
    { wch: 14 }, // Level Name
    { wch: 30 }, // Label
    { wch: 100 }, // Description
    { wch: 14 }, // Status
  ];

  XLSX.utils.book_append_sheet(wb, detailSheet, 'Maturity Levels');

  // ── Generate and download ──
  const today = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, `Fabric-Adoption-Assessment_${today}.xlsx`);
}
