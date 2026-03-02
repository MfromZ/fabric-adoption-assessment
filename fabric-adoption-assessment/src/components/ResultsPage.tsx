import { useState } from 'react';
import { assessmentAreas } from '../data/assessmentData';
import { exportToExcel } from '../utils/exportExcel';
import { exportToPlannerCSV } from '../utils/exportPlanner';
import RadarChart from './RadarChart';

interface ResultsPageProps {
  answers: Record<string, number>;
  onRestart: () => void;
}

function getLevelName(level: number): string {
  switch (level) {
    case 100:
      return 'Initial';
    case 200:
      return 'Repeatable';
    case 300:
      return 'Defined';
    case 400:
      return 'Optimal';
    case 500:
      return 'Excellent';
    default:
      return 'Unknown';
  }
}

function getLevelTag(level: number): string {
  if (level <= 300) return '';
  if (level === 400) return '🎯 Optimal Target';
  return '🌟 Excellent';
}

/** Collect ALL action items from current level up to 500 for one area */
function getAllActionsForArea(
  area: (typeof import('../data/assessmentData'))['assessmentAreas'][number],
  currentLevel: number
): { fromLevel: number; toLevel: number; actions: string[] }[] {
  const transitions: { fromLevel: number; toLevel: number; actions: string[] }[] = [];
  for (let lvl = currentLevel; lvl < 500; lvl += 100) {
    const actions = area.actionItems[lvl] || [];
    if (actions.length > 0) {
      transitions.push({ fromLevel: lvl, toLevel: lvl + 100, actions });
    }
  }
  return transitions;
}

function getOverallDescription(avgLevel: number): string {
  if (avgLevel < 150) {
    return 'Your organization is in the early stages of Fabric adoption. There are significant opportunities to improve across most areas. Focus on quick wins and building foundational practices.';
  } else if (avgLevel < 250) {
    return 'Your organization has started its adoption journey with some early successes. Focus on standardizing practices and building repeatable processes across the organization.';
  } else if (avgLevel < 350) {
    return 'Your organization has made good progress with defined processes and practices in many areas. Focus on strengthening weaker areas and building consistency across all business units.';
  } else if (avgLevel < 450) {
    return 'Your organization has mature practices that deliver significant value. Focus on optimization, automation, and continuous improvement to reach the highest level.';
  } else {
    return 'Congratulations! Your organization has achieved an advanced level of Fabric adoption with optimized, automated, and continuously improving practices.';
  }
}

export default function ResultsPage({ answers, onRestart }: ResultsPageProps) {
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(new Set());

  const scores = assessmentAreas.map((area) => ({
    area,
    level: answers[area.id] || 100,
  }));

  const avgLevel = Math.round(
    scores.reduce((sum, s) => sum + s.level, 0) / scores.length
  );

  const toggleArea = (areaId: string) => {
    setExpandedAreas((prev) => {
      const next = new Set(prev);
      if (next.has(areaId)) {
        next.delete(areaId);
      } else {
        next.add(areaId);
      }
      return next;
    });
  };

  // Collect all areas that need improvement (not at level 500)
  const areasWithActions = scores.filter((s) => s.level < 500);

  // Sort: lowest maturity first (most improvement needed)
  const sortedActions = [...areasWithActions].sort(
    (a, b) => a.level - b.level
  );

  return (
    <div className="results">
      <div className="results-header">
        <h2>Your Assessment Results</h2>
        <p>
          Here's where your organization stands on the Microsoft Fabric
          Adoption Roadmap
        </p>
      </div>

      {/* Overall Score */}
      <div className="overall-score">
        <h3>Overall Maturity Score</h3>
        <div className="score-value">{avgLevel}</div>
        <div className="score-label">{getLevelName(Math.round(avgLevel / 100) * 100)}</div>
        <div className="score-description">{getOverallDescription(avgLevel)}</div>
      </div>

      {/* Radar Chart */}
      <RadarChart answers={answers} />

      {/* Area Scores Grid */}
      <div className="area-scores">
        {scores.map(({ area, level }) => (
          <div key={area.id} className="area-score-card">
            <div className="area-score-header">
              <span className="area-score-icon">{area.icon}</span>
              <span className="area-score-title">{area.title}</span>
            </div>
            <div className="area-score-level">
              <span className={`level-badge level-${level}`}>
                {level}
              </span>
              <span className="level-name">{getLevelName(level)}</span>
            </div>
            <div className="level-indicator-bar">
              {[100, 200, 300, 400, 500].map((l) => (
                <div
                  key={l}
                  className={`level-indicator-segment ${l <= level ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Action Items */}
      {sortedActions.length > 0 && (
        <div className="action-section">
          <h3>🚀 Your Roadmap to Level 500</h3>
          <p>
            All actions needed to reach the highest maturity, starting with the
            areas that need the most improvement. Steps to <span className="tag-optimal">🎯 Level 400 (Optimal)</span> are
            your primary target. Steps to <span className="tag-excellent">🌟 Level 500 (Excellent)</span> take
            you to exceptional maturity.
          </p>

          {sortedActions.map(({ area, level }) => {
            const isExpanded = expandedAreas.has(area.id);
            const transitions = getAllActionsForArea(area, level);
            const totalActions = transitions.reduce((n, t) => n + t.actions.length, 0);

            return (
              <div key={area.id} className="action-area">
                <div
                  className="action-area-header"
                  onClick={() => toggleArea(area.id)}
                >
                  <div className="action-area-left">
                    <span className="action-area-icon">{area.icon}</span>
                    <div className="action-area-info">
                      <h4>{area.title}</h4>
                      <p>
                        Level {level} ({getLevelName(level)}) → Level 500 ({getLevelName(500)})
                        {' · '}
                        {totalActions} action{totalActions !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`action-area-arrow ${isExpanded ? 'expanded' : ''}`}
                  >
                    ▶
                  </span>
                </div>
                {isExpanded && (
                  <div className="action-items-list">
                    {transitions.map((t) => {
                      const tag = getLevelTag(t.toLevel);
                      const isExcellent = t.toLevel === 500;
                      const isOptimal = t.toLevel === 400;

                      return (
                        <div key={t.fromLevel} className="transition-group">
                          <div className={`transition-header ${
                            isOptimal ? 'transition-optimal' : isExcellent ? 'transition-excellent' : ''
                          }`}>
                            <span className="transition-levels">
                              Level {t.fromLevel} → {t.toLevel} ({getLevelName(t.toLevel)})
                            </span>
                            {tag && <span className={`transition-tag ${
                              isOptimal ? 'tag-optimal' : 'tag-excellent'
                            }`}>{tag}</span>}
                          </div>
                          {t.actions.map((action, idx) => (
                            <div key={idx} className={`action-item ${
                              isExcellent ? 'action-item-excellent' : ''
                            }`}>
                              <span className="action-item-check">→</span>
                              <span className="action-item-text">{action}</span>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Export Section */}
      <div className="export-section">
        <h3>📤 Export Your Results</h3>
        <p>Download your assessment results to share with your team or import actions into your project management tool.</p>
        <div className="export-buttons">
          <button
            className="btn btn-export btn-excel"
            onClick={() => exportToExcel(answers)}
          >
            <span className="export-icon">📊</span>
            <span className="export-label">
              <strong>Export to Excel</strong>
              <small>Assessment summary, actions & maturity levels</small>
            </span>
          </button>
          <button
            className="btn btn-export btn-planner"
            onClick={() => exportToPlannerCSV(answers)}
          >
            <span className="export-icon">📋</span>
            <span className="export-label">
              <strong>Export for Microsoft Planner</strong>
              <small>CSV with tasks, buckets & priorities</small>
            </span>
          </button>
        </div>
      </div>

      {/* Restart */}
      <div className="restart-section">
        <button className="btn btn-secondary" onClick={onRestart}>
          🔄 Retake Assessment
        </button>
      </div>
    </div>
  );
}
