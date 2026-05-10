import { motion } from "framer-motion";
import { Award, Users, Wrench, Zap } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

const highlights = [
  { icon: Award, title: "Certified Excellence", desc: "ISO standard practices" },
  { icon: Users, title: "Skilled Workforce", desc: "Trained technicians" },
  { icon: Wrench, title: "End-to-End Service", desc: "Design to maintenance" },
  { icon: Zap, title: "Power You Trust", desc: "Reliable execution" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-electric/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-electric/30 to-gold/20 rounded-3xl blur-2xl opacity-60" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-elegant">
              <img src={aboutImg} alt="VS Electrical engineer at work" className="w-full h-[500px] sm:h-[600px] object-cover" loading="lazy" width={1280} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-4 sm:p-5">
                <div className="text-3xl sm:text-4xl font-display font-bold gradient-text-gold font-highlight">Since 2019</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Trusted Electrical & Solar Service Provider</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold font-highlight mb-4 font-highlight">About VS Electrical</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Engineering <span className="gradient-text-electric">power</span> for industries that never stop.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              VS Electrical Services & Maintenance is a premier industrial electrical and solar contracting firm delivering certified workmanship across utility-scale solar plants, manufacturing facilities and commercial complexes since 2019.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From HT/LT cable jointing and transformer maintenance to inverter overhauling and full solar erections — our skilled technicians bring precision, safety and accountability to every project we undertake.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="glass rounded-2xl p-4 hover:border-electric/40 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center mb-3 shadow-glow">
                    <h.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="font-semibold text-sm">{h.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
