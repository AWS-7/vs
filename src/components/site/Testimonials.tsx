import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            What our <span className="gradient-text-electric">clients</span> say
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative glass-strong rounded-3xl p-7 hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="h-10 w-10 text-electric/40 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed text-sm sm:text-base">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-electric to-gold flex items-center justify-center font-display font-bold text-navy-deep">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
