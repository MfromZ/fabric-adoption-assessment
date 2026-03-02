import { assessmentAreas } from '../data/assessmentData';

interface RadarChartProps {
  answers: Record<string, number>;
}

export default function RadarChart({ answers }: RadarChartProps) {
  const areas = assessmentAreas;
  const n = areas.length;
  const cx = 250;
  const cy = 250;
  const maxRadius = 180;

  const angleStep = (2 * Math.PI) / n;

  // Helper to get point on the chart
  const getPoint = (index: number, value: number): [number, number] => {
    const angle = angleStep * index - Math.PI / 2;
    const radius = (value / 500) * maxRadius;
    return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
  };

  // Draw grid rings
  const gridLevels = [100, 200, 300, 400, 500];
  const gridRings = gridLevels.map((level) => {
    const points = Array.from({ length: n }, (_, i) => {
      const [x, y] = getPoint(i, level);
      return `${x},${y}`;
    }).join(' ');
    return (
      <polygon
        key={level}
        points={points}
        fill="none"
        stroke="#333"
        strokeWidth="1"
        opacity="0.5"
      />
    );
  });

  // Draw axis lines
  const axisLines = areas.map((_, i) => {
    const [x, y] = getPoint(i, 500);
    return (
      <line
        key={i}
        x1={cx}
        y1={cy}
        x2={x}
        y2={y}
        stroke="#333"
        strokeWidth="1"
        opacity="0.5"
      />
    );
  });

  // Draw data polygon
  const dataPoints = areas
    .map((area, i) => {
      const value = answers[area.id] || 100;
      const [x, y] = getPoint(i, value);
      return `${x},${y}`;
    })
    .join(' ');

  // Draw labels
  const labels = areas.map((area, i) => {
    const [x, y] = getPoint(i, 570);
    const value = answers[area.id] || 100;
    return (
      <text
        key={area.id}
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#999"
        fontSize="10"
      >
        <tspan x={x} dy="0" fill="#ccc" fontSize="11">
          {area.icon}
        </tspan>
        <tspan x={x} dy="14" fill="#999" fontSize="9">
          {area.title.length > 14 ? area.title.substring(0, 12) + '...' : area.title}
        </tspan>
        <tspan x={x} dy="12" fill="#60cdff" fontSize="9" fontWeight="600">
          {value}
        </tspan>
      </text>
    );
  });

  // Draw data points (dots)
  const dots = areas.map((area, i) => {
    const value = answers[area.id] || 100;
    const [x, y] = getPoint(i, value);
    return (
      <circle
        key={area.id}
        cx={x}
        cy={y}
        r="4"
        fill="#60cdff"
        stroke="#fff"
        strokeWidth="1"
      />
    );
  });

  // Level labels on one axis
  const levelLabels = gridLevels.map((level) => {
    const [, y] = getPoint(0, level);
    return (
      <text
        key={level}
        x={cx + 4}
        y={y - 4}
        fill="#666"
        fontSize="8"
      >
        {level}
      </text>
    );
  });

  return (
    <div className="chart-container">
      <h3>Maturity Radar</h3>
      <svg viewBox="0 0 500 500" className="radar-chart">
        {gridRings}
        {axisLines}
        <polygon
          points={dataPoints}
          fill="rgba(96, 205, 255, 0.15)"
          stroke="#60cdff"
          strokeWidth="2"
        />
        {dots}
        {labels}
        {levelLabels}
      </svg>
    </div>
  );
}
