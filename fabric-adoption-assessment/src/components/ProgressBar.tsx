interface ProgressBarProps {
  current: number;
  total: number;
  areaTitle: string;
}

export default function ProgressBar({ current, total, areaTitle }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>
          Area {current} of {total}: {areaTitle}
        </span>
        <span>{Math.round(percentage)}% complete</span>
      </div>
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
