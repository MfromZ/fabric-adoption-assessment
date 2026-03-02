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

/**
 * Exports action items as a CSV file compatible with Microsoft Planner import.
 *
 * Planner CSV import supports these columns:
 * Task Name, Bucket Name, Progress, Priority, Notes,
 * Start Date, Due Date, Assigned To, Checklist Items
 *
 * We map:
 * - Bucket Name = Assessment Area (e.g., "Data Culture")
 * - Task Name   = Action title
 * - Notes       = Implementation details + level transition context
 * - Priority    = Based on distance from current to max (lower level = higher priority)
 * - Checklist   = (empty — user can add sub-tasks in Planner)
 */
export function exportToPlannerCSV(answers: Record<string, number>): void {
  const rows: string[][] = [];

  // Header row matching Planner CSV import format
  rows.push([
    'Task Name',
    'Bucket Name',
    'Progress',
    'Priority',
    'Notes',
    'Start Date',
    'Due Date',
    'Assigned To',
  ]);

  // Sort areas by level (lowest first = most improvement needed)
  const sorted = assessmentAreas
    .map((area) => ({ area, level: answers[area.id] || 100 }))
    .filter((s) => s.level < 500)
    .sort((a, b) => a.level - b.level);

  for (const { area, level } of sorted) {
    // Iterate through ALL transitions from current level to 500
    for (let fromLvl = level; fromLvl < 500; fromLvl += 100) {
      const actions = area.actionItems[fromLvl] || [];
      const toLvl = fromLvl + 100;

      // Priority: steps toward Level 400 (Optimal) get higher priority
      // Steps toward Level 500 (Excellent) are lower priority
      let priority: string;
      if (toLvl <= 400) {
        // Primary path to Optimal
        if (fromLvl <= 100) {
          priority = 'Urgent';
        } else if (fromLvl <= 200) {
          priority = 'Important';
        } else {
          priority = 'Medium';
        }
      } else {
        // Stretch goal to Excellent
        priority = 'Low';
      }

      const phase = toLvl <= 400 ? 'Primary (→ Optimal)' : 'Stretch (→ Excellent)';
      const bucketName = `${area.title} (${getLevelName(fromLvl)} → ${getLevelName(toLvl)})`;

      for (const action of actions) {
        const parts = action.split(' — ');
        const taskName = parts[0];
        const details = parts.length > 1 ? parts.slice(1).join(' — ') : '';

        const notes = [
          `Area: ${area.title}`,
          `Current Level: ${level} (${getLevelName(level)})`,
          `Step: ${fromLvl} → ${toLvl} (${getLevelName(toLvl)})`,
          `Phase: ${phase}`,
          details ? `\nImplementation:\n${details}` : '',
        ]
          .filter(Boolean)
          .join('\n');

        rows.push([
          taskName,
          bucketName,
          'Not started',
          priority,
          notes,
          '', // Start Date
          '', // Due Date
          '', // Assigned To
        ]);
      }
    }
  }

  // Convert to CSV with proper escaping
  const csv = rows
    .map((row) =>
      row
        .map((cell) => {
          // Escape cells that contain commas, quotes, or newlines
          if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
            return `"${cell.replace(/"/g, '""')}"`;
          }
          return cell;
        })
        .join(',')
    )
    .join('\r\n');

  // Add BOM for Excel/Planner UTF-8 compatibility
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  const today = new Date().toISOString().slice(0, 10);
  link.download = `Fabric-Adoption-Actions_Planner_${today}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
