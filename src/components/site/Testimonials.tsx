import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/site-data";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="group relative glass-strong rounded-3xl p-6 sm:p-7 h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-1 flex flex-col">
      <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-electric/40 mb-3 sm:mb-4" />
      <div className="flex gap-0.5 mb-3 sm:mb-4">
        {Array.from({ length: t.rating }).map((_, idx) => (
          <Star key={idx} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-foreground/85 leading-relaxed text-sm sm:text-base flex-1">"{t.quote}"</p>
      <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10 flex items-center gap-3">
        <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-gradient-to-br from-electric to-gold flex items-center justify-center font-display font-bold text-navy-deep text-sm sm:text-base">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll on mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let interval: ReturnType<typeof setInterval>;

    const startAuto = () => {
      interval = setInterval(() => {
        if (isPaused) return;
        const isMobile = window.innerWidth < 1024;
        if (!isMobile) return;
        const cardWidth = el.children[0]?.getBoundingClientRect().width ?? el.clientWidth;
        const gap = 16;
        const maxScroll = el.scrollWidth - el.clientWidth;
        let next = el.scrollLeft + cardWidth + gap;
        if (next > maxScroll) next = 0;
        el.scrollTo({ left: next, behavior: "smooth" });
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    };

    startAuto();
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollTo = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.children[0]?.getBoundingClientRect().width ?? el.clientWidth;
    const gap = 16;
    const delta = dir === "left" ? -(cardWidth + gap) : cardWidth + gap;
    el.scrollTo({ left: el.scrollLeft + delta, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold font-highlight mb-4">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            What our <span className="gradient-text-electric">clients</span> say
          </h2>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden lg:grid mt-14 grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div
          className="lg:hidden mt-10 sm:mt-14 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="snap-start snap-center flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw]"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => scrollTo("left")}
              className="h-10 w-10 rounded-full glass-strong flex items-center justify-center hover:border-electric/50 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === activeIndex ? "bg-gold w-5" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => scrollTo("right")}
              className="h-10 w-10 rounded-full glass-strong flex items-center justify-center hover:border-electric/50 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
