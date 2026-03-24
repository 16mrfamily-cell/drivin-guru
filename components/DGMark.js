export function DGMark({ size = 40 }) {
  const r = size * 0.15;
  const s = size * 0.55;
  const ox = (size - s) / 2;
  const oy = (size - s) / 2;
  const lw = size * 0.09;

  return (
    <div
      style={{ width: size, height: size, backgroundColor: '#CAFF00', borderRadius: r }}
      className="flex items-center justify-center flex-shrink-0"
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox={`0 0 ${s} ${s}`} fill="none">
        <path
          d={`M${s*0.18} ${s*0.18} L${s*0.55} ${s*0.18} Q${s*0.95} ${s*0.18} ${s*0.95} ${s*0.5} Q${s*0.95} ${s*0.82} ${s*0.55} ${s*0.82} L${s*0.18} ${s*0.82} Z`}
          stroke="#0A0A0A"
          strokeWidth={lw}
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        <line x1={s*0.6} y1={s*0.5} x2={s*1.0} y2={s*0.5} stroke="#0A0A0A" strokeWidth={lw} strokeLinecap="round"/>
        <polyline
          points={`${s*0.78},${s*0.3} ${s*1.0},${s*0.5} ${s*0.78},${s*0.7}`}
          stroke="#0A0A0A"
          strokeWidth={lw}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
