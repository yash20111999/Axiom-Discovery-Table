import { memo } from "react";

interface SparklineProps {
  points: number[];
  isPositive: boolean;
}

function SparklineBase({ points, isPositive }: SparklineProps) {
  const max = Math.max(...points);
  const min = Math.min(...points);

  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * 100;
    const y = 24 - ((p - min) / (max - min || 1)) * 20;
    return { x, y };
  });

  const line = coords.map(p => `${p.x},${p.y}`).join(" ");
  const area =
    `${coords[0].x},24 ` +
    coords.map(p => `${p.x},${p.y}`).join(" ") +
    ` ${coords[coords.length - 1].x},24`;

  const color = isPositive ? "emerald" : "red";

  return (
    <svg
      width="50%"
      height="24"
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
      className={isPositive ? "text-emerald-400" : "text-red-400"}
    >
      <defs>
        <linearGradient id={`fade-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      <polygon
        points={area}
        fill={`url(#fade-${color})`}
      />

      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        points={line}
      />
    </svg>
  );
}

export const Sparkline = memo(SparklineBase);
