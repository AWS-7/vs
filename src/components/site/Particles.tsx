// Seeded random generator so SSR and client produce identical particle positions
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Particles({ count = 24 }: { count?: number }) {
  const rng = mulberry32(42); // fixed seed
  const particles = Array.from({ length: count }, (_, i) => ({
    left: rng() * 100,
    top: rng() * 100,
    size: 1 + rng() * 2.5,
    delay: rng() * 6,
    duration: 6 + rng() * 8,
    gold: i % 3 === 0,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${p.gold ? "bg-gold" : "bg-electric-glow"} opacity-60`}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 4}px currentColor`,
            animation: `float-y ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
