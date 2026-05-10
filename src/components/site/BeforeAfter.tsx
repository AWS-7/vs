import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">Before / After</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Real <span className="gradient-text-electric">transformations</span> from our maintenance team
          </h2>
          <p className="mt-5 text-muted-foreground text-sm sm:text-base">Drag the slider to see the difference our certified maintenance delivers.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          ref={ref}
          onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
          className="relative mt-12 mx-auto max-w-5xl aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-elegant select-none cursor-ew-resize"
        >
          <img src={afterImg} alt="After maintenance" loading="lazy" width={1280} height={832} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute top-4 right-4 z-10 rounded-full glass-strong px-3 py-1 text-xs font-semibold text-gold uppercase tracking-wider">After</div>

          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img src={beforeImg} alt="Before maintenance" loading="lazy" width={1280} height={832} className="absolute inset-0 h-full w-full object-cover" style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }} />
            <div className="absolute top-4 left-4 rounded-full glass-strong px-3 py-1 text-xs font-semibold text-white/90 uppercase tracking-wider">Before</div>
          </div>

          <div className="absolute inset-y-0 z-20" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
            <div className="h-full w-0.5 bg-gradient-to-b from-electric via-gold to-electric shadow-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow ring-4 ring-navy-deep">
              <MoveHorizontal className="h-5 w-5 text-white" />
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            aria-label="Before/After comparison"
          />
        </motion.div>
      </div>
    </section>
  );
}
