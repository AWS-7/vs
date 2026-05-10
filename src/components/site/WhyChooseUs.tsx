import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Clock, Users, ShieldCheck, Sparkles, Rocket } from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Emergency Support", desc: "Round-the-clock response for critical breakdowns." },
  { icon: Users, title: "Skilled Technical Team", desc: "Certified engineers and trained field technicians." },
  { icon: ShieldCheck, title: "Trusted Industrial Solutions", desc: "Compliance-first approach with safety standards." },
  { icon: Sparkles, title: "Quality Workmanship", desc: "Approved methods, materials and tooling." },
  { icon: Rocket, title: "Fast Service Response", desc: "Mobilization within hours, nationwide." },
];

const stats = [
  { value: 250, suffix: "+", label: "Projects Completed" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 60, suffix: "+", label: "Technical Experts" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-electric/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Built on <span className="gradient-text-gold">trust</span>, delivered with <span className="gradient-text-electric">precision</span>
          </h2>
        </motion.div>

        {/* Counters */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-6 text-center hover:shadow-glow transition-shadow"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold gradient-text-electric">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:-translate-y-1 hover:border-gold/40 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center mb-4 shadow-gold-glow">
                <f.icon className="h-5 w-5 text-navy-deep" />
              </div>
              <div className="font-semibold text-sm mb-1">{f.title}</div>
              <div className="text-xs text-muted-foreground">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
