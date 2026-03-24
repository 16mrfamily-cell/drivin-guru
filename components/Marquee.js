const items = [
  '100% Recommend',
  'Nationwide',
  'DVSA Approved',
  'Highly Trusted',
  '7 Days a Week',
  'Tailored Lessons',
  'Dual-Control Vehicles',
  'Learn The Safe Way, Right Away',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-lime py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-syne font-bold text-xs sm:text-sm tracking-widest uppercase text-ink px-6 sm:px-8 inline-flex items-center gap-4"
          >
            {item}
            <span className="text-[0.5rem] opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
