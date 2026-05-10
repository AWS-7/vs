import { motion } from "framer-motion";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 radial-glow opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Comprehensive <span className="gradient-text-electric">electrical & solar</span> solutions
          </h2>
          <p className="mt-5 text-muted-foreground">
            From HT cable joints to utility-scale solar erections — we deliver certified, end-to-end execution across every electrical discipline.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:border-electric/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric/0 to-gold/0 group-hover:from-electric/5 group-hover:to-gold/5 transition-all duration-500" />
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-electric/0 group-hover:bg-electric/10 blur-3xl transition-all duration-500" />

              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-navy to-graphite border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <s.icon className="h-6 w-6 text-electric-glow group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
