import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { contact } from "@/lib/site-data";
import { Particles } from "./Particles";

function HeroCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2200, bounce: 0 });
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString());
  useEffect(() => { if (inView) mv.set(value); }, [inView, mv, value]);
  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>{suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Industrial electrical infrastructure" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/3 -left-40 h-[480px] w-[480px] rounded-full bg-electric/30 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />

      {/* Animated electric lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="elec" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.58 0.24 258 / 0)" />
            <stop offset="0.5" stopColor="oklch(0.72 0.20 250 / 0.8)" />
            <stop offset="1" stopColor="oklch(0.84 0.17 85 / 0)" />
          </linearGradient>
        </defs>
        {[15, 35, 60, 80].map((y, i) => (
          <line key={i} x1="0" y1={`${y}%`} x2="100%" y2={`${y + 5}%`} stroke="url(#elec)" strokeWidth="1">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur={`${6 + i * 1.5}s`} repeatCount="indefinite" />
          </line>
        ))}
      </svg>

      <Particles count={30} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs sm:text-sm mb-6 animate-flicker"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-foreground/90">Trusted Electrical & Solar Partner — Serving Since 2019</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-balance"
          >
            Powering Industries With{" "}
            <span className="gradient-text-electric">Trusted Electrical</span>{" "}
            <span className="gradient-text-gold">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground"
          >
            Industrial • Commercial • Solar • Maintenance Services. Engineered execution, certified safety and 24/7 support across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-electric-glow px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-glow hover:shadow-[0_0_60px_-5px_oklch(0.58_0.24_258_/_0.7)] transition-all hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-2xl glass-strong px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold text-foreground hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 text-gold" /> Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl"
          >
            {[
              { node: <><HeroCounter value={648} />MW+</>, v: "Solar Projects" },
              { node: <><HeroCounter value={500} />+</>, v: "Industrial Clients" },
              { node: "24/7", v: "Emergency Support" },
              { node: <><HeroCounter value={1000} />+</>, v: "Maintenance Tasks" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <div className="font-display text-lg sm:text-xl font-bold gradient-text-gold leading-tight">{s.node}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{s.v}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <div className="h-10 w-6 rounded-full border border-white/30 flex justify-center pt-2">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="h-1.5 w-1 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}
