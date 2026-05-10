import { motion } from "framer-motion";

const logos = [
  { name: "Adani", accent: "oklch(0.66 0.18 20)" },
  { name: "NLC", accent: "oklch(0.58 0.14 150)" },
  { name: "Bharathidasan University", accent: "oklch(0.70 0.12 240)" },
  { name: "FEBL Global", accent: "oklch(0.60 0.18 230)" },
  { name: "Crescent Solar", accent: "oklch(0.62 0.20 110)" },
];

export function LogoMarquee() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/25 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold font-highlight mb-3">Trusted By Industry Leaders</span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-balance">Partners powering India’s largest assets</h3>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 glass-strong">
          <div className="relative flex items-center gap-8 py-6">
            <div className="marquee min-w-max">
              {[...logos, ...logos].map((l, i) => (
                <motion.div
                  key={`${l.name}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 shadow-card"
                >
                  <div className="h-2 w-10 rounded-full" style={{ background: l.accent }} />
                  <span className="text-sm sm:text-base font-semibold text-foreground/90 whitespace-nowrap">{l.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
