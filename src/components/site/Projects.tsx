import { motion } from "framer-motion";
import { MapPin, Zap, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/site-data";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold font-highlight mb-4">Major Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Delivering at <span className="gradient-text-electric">utility scale</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            A track record of execution across India's largest solar plants and industrial installations — over 800 MW of cumulative project experience.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric/40 to-transparent" />

          <div className="space-y-10 lg:space-y-16">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Card */}
                <div className="group relative glass-strong rounded-3xl p-6 sm:p-8 hover:shadow-glow transition-all duration-500">
                  <div className="absolute -top-3 -right-3 px-4 py-2 rounded-xl bg-gradient-to-r from-gold to-gold-soft text-navy-deep font-display font-bold text-sm shadow-gold-glow">
                    {p.capacity}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> {p.location}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-5 group-hover:text-gold transition-colors">
                    {p.name}
                  </h3>
                  <ul className="space-y-2.5">
                    {p.works.map((w) => (
                      <li key={w} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-electric-glow mt-0.5 flex-shrink-0" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual side */}
                <div className="relative hidden lg:flex justify-center">
                  <div className="relative h-64 w-64 rounded-3xl glass flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-electric/20 to-gold/20 animate-glow-pulse" />
                    <div className="relative text-center">
                      <Zap className="h-12 w-12 text-gold mx-auto mb-3" />
                      <div className="font-display text-5xl font-bold gradient-text-gold">{p.capacity}</div>
                      <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">Capacity</div>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-gold shadow-gold-glow ring-4 ring-navy-deep ${i % 2 === 0 ? "-left-6" : "-right-6"}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
