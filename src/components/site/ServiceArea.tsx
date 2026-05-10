import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Trichy", desc: "Tamil Nadu HQ region", x: "32%", y: "55%" },
  { name: "Kamuthi", desc: "Crescent Solar – 15 MW", x: "55%", y: "70%" },
  { name: "Vilaththikulam", desc: "FEBL Global – 60 MW", x: "70%", y: "50%" },
  { name: "Kadamangalam", desc: "NLC Solar – 100 MW", x: "45%", y: "30%" },
];

export function ServiceArea() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">Service Areas</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Powering projects across <span className="gradient-text-gold">Tamil Nadu</span> & beyond
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden border border-white/10 glass-strong h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-graphite" />
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-0">
              {locations.map((l, i) => (
                <div key={l.name} className="absolute" style={{ left: l.x, top: l.y }}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                    className="relative -translate-x-1/2 -translate-y-full group"
                  >
                    <span className="absolute inset-0 bg-electric rounded-full animate-ping opacity-50" style={{ width: 14, height: 14, top: "calc(100% - 7px)", left: "calc(50% - 7px)" }} />
                    <MapPin className="h-7 w-7 text-gold drop-shadow-[0_0_10px_oklch(0.84_0.17_85)]" fill="oklch(0.84 0.17 85 / 0.4)" />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-lg glass-strong px-2.5 py-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {l.name}
                    </div>
                  </motion.div>
                </div>
              ))}
              {/* connector lines */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <line x1="32%" y1="55%" x2="55%" y2="70%" stroke="oklch(0.58 0.24 258 / 0.5)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="55%" y1="70%" x2="70%" y2="50%" stroke="oklch(0.58 0.24 258 / 0.5)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="70%" y1="50%" x2="45%" y2="30%" stroke="oklch(0.58 0.24 258 / 0.5)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="45%" y1="30%" x2="32%" y2="55%" stroke="oklch(0.58 0.24 258 / 0.5)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl p-3 text-xs text-muted-foreground">
              Active project locations across Tamil Nadu — pan-India service available on request.
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {locations.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-4 flex items-start gap-3 hover:border-gold/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{l.name}</div>
                  <div className="text-xs text-muted-foreground">{l.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
