import type { AssessmentArea } from '../data/assessmentData';

interface QuestionCardProps {
  area: AssessmentArea;
  selectedLevel: number | undefined;
  onSelect: (level: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  canProceed: boolean;
}

export default function QuestionCard({
  area,
  selectedLevel,
  onSelect,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  canProceed,
}: QuestionCardProps) {
  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-icon">{area.icon}</span>
        <span className="question-area-label">{area.title}</span>
      </div>

      <h2 className="question-title">{area.question}</h2>

      <div className="question-help">{area.helpText}</div>

      <div className="options-list">
        {area.options.map((option) => (
          <div
            key={option.level}
            className={`option-card ${selectedLevel === option.level ? 'selected' : ''}`}
            onClick={() => onSelect(option.level)}
          >
            <div className="option-radio">
              <div className="option-radio-inner" />
            </div>
            <div className="option-content">
              <div className="option-level">Level {option.level}</div>
              <div className="option-label">{option.label}</div>
              <div className="option-description">{option.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation">
        <button
          className="btn btn-secondary"
          onClick={onPrevious}
          disabled={isFirst}
        >
          ← Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={onNext}
          disabled={!canProceed}
        >
          {isLast ? 'See Results →' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
