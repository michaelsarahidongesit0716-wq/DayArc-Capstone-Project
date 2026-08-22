// Draws a circular progress ring using SVG's stroke-dasharray trick:
// the circle's outline is "dashed" into one dash equal to (percent% of the
// circumference), which visually looks like a ring filling up.
export default function ProgressRing({ percent = 0, label = "", size = 120 }) {
    const stroke = 10;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className="progress-ring">
            <svg width={size} height={size}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="var(--ring-track)"
                    strokeWidth={stroke}
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="url(#ringGradient)"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
                <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent-start)" />
                        <stop offset="100%" stopColor="var(--accent-end)" />
                    </linearGradient>
                </defs>
                <text x="50%" y="48%" textAnchor="middle" className="ring-percent">
                    {percent}%
                </text>
                <text x="50%" y="66%" textAnchor="middle" className="ring-label">
                    {label}
                </text>
            </svg>
        </div>
    );
}