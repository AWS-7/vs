import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ShieldCheck, Wrench } from "lucide-react";

const faqs = [
  {
    q: "Do you provide 24/7 emergency electrical support?",
    a: "Yes. Our rapid-response engineers are available round the clock for HT/LT faults, switchgear trips, and plant-critical breakdowns.",
  },
  {
    q: "Can you maintain utility-scale solar plants?",
    a: "We maintain utility and rooftop plants end-to-end: string diagnostics, inverter overhauling, combiner box service, and switchgear upkeep.",
  },
  {
    q: "Do you execute HT cable joint works?",
    a: "Certified jointers handle HT/LT joints with approved kits, testing and documentation for QA compliance.",
  },
  {
    q: "Do you support industrial projects nationwide?",
    a: "Yes. We mobilize crews across India with project managers, safety officers, and QA documentation.",
  },
  {
    q: "Do you offer maintenance contracts (AMC)?",
    a: "We provide structured AMC for plants, transformers, UPS, inverters, and lighting systems with defined SLAs.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/35 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold font-highlight mb-4">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Answers to your critical queries</h2>
          <p className="mt-4 text-muted-foreground">Emergency support, solar maintenance, HT cable joints, industrial projects, and service contracts clarified.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const active = open === i;
              return (
                <div key={f.q} className="glass-strong rounded-2xl border border-white/10">
                  <button
                    onClick={() => setOpen(active ? -1 : i)}
                    className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left"
                  >
                    <span className="font-semibold text-sm sm:text-base text-foreground/90">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${active ? "rotate-180 text-gold" : "text-muted-foreground"}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 sm:px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="glass-strong rounded-3xl p-6 sm:p-8 shadow-elegant space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Safety-first, QA-driven</div>
                <div className="text-xs text-muted-foreground">Method statements, checklists, and permits aligned to your standards.</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center shadow-gold-glow">
                <Wrench className="h-6 w-6 text-navy-deep" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">HT/LT specialists</div>
                <div className="text-xs text-muted-foreground">Certified jointers, inverter experts, and solar commissioning teams.</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-5">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Support</div>
              <div className="font-display text-2xl font-bold text-white">24/7 Emergency Desk</div>
              <p className="text-sm text-muted-foreground mt-2">Call or WhatsApp anytime for critical faults and mobilization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
