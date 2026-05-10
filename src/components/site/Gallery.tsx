import { motion } from "framer-motion";
import w1 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.12 PM.jpeg";
import w2 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.17 PM (1).jpeg";
import w3 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.17 PM.jpeg";
import w4 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.18 PM.jpeg";
import w5 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.29 PM.jpeg";
import w6 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.37 PM (1).jpeg";
import w7 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.37 PM.jpeg";
import w8 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.38 PM (1).jpeg";
import w9 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.38 PM (2).jpeg";
import w10 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.38 PM.jpeg";
import w11 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.39 PM (1).jpeg";
import w12 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.39 PM.jpeg";
import w13 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.40 PM (1).jpeg";
import w14 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.40 PM (2).jpeg";
import w15 from "@/assets/WhatsApp Image 2026-05-10 at 2.43.40 PM.jpeg";

const items = [
  { src: w1, alt: "On-site solar installation", className: "sm:col-span-2 sm:row-span-2 h-56 sm:h-full" },
  { src: w2, alt: "Electrical panel work", className: "h-56 sm:h-auto" },
  { src: w3, alt: "Cable routing & termination", className: "h-56 sm:h-auto" },
  { src: w4, alt: "Transformer maintenance", className: "h-56 sm:h-auto sm:col-span-2" },
  { src: w5, alt: "HT/LT switchgear", className: "h-56 sm:h-auto" },
  { src: w6, alt: "Solar module mounting", className: "h-56 sm:h-auto" },
  { src: w7, alt: "Industrial wiring", className: "h-56 sm:h-auto sm:col-span-2" },
  { src: w8, alt: "Substation equipment", className: "h-56 sm:h-auto" },
  { src: w9, alt: "Grounding & earthing work", className: "h-56 sm:h-auto" },
  { src: w10, alt: "Control panel assembly", className: "h-56 sm:h-auto sm:col-span-2" },
  { src: w11, alt: "Inverter installation", className: "h-56 sm:h-auto" },
  { src: w12, alt: "LED lighting upgrade", className: "h-56 sm:h-auto" },
  { src: w13, alt: "Safety compliance audit", className: "h-56 sm:h-auto sm:col-span-2" },
  { src: w14, alt: "Power distribution", className: "h-56 sm:h-auto" },
  { src: w15, alt: "Commissioning & testing", className: "h-56 sm:h-auto" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 radial-glow opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold font-highlight mb-4">Project Gallery</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            On-site <span className="gradient-text-gold">execution</span>, captured
          </h2>
        </motion.div>

        {/* Desktop masonry grid */}
        <div className="hidden sm:grid mt-14 grid-cols-4 auto-rows-[180px] lg:auto-rows-[200px] gap-3 lg:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl glass border border-white/10 ${it.className}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sm font-semibold text-white drop-shadow">{it.alt}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile horizontal carousel */}
        <div className="sm:hidden mt-10">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {items.map((it, i) => (
              <div key={i} className="snap-start snap-center flex-shrink-0 w-[78vw]">
                <div className="group relative overflow-hidden rounded-2xl glass border border-white/10 h-64">
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-sm font-semibold text-white drop-shadow">{it.alt}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
