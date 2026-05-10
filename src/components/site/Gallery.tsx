import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Utility-scale solar power plant", className: "sm:col-span-2 sm:row-span-2 h-64 sm:h-full" },
  { src: g2, alt: "Industrial switchgear control room", className: "h-48 sm:h-auto" },
  { src: g3, alt: "HT cable termination work", className: "h-48 sm:h-auto" },
  { src: g4, alt: "Transformer substation", className: "h-48 sm:h-auto sm:col-span-2" },
  { src: g5, alt: "Solar panel rooftop installation", className: "h-48 sm:h-auto" },
  { src: g6, alt: "Industrial LED lighting", className: "h-48 sm:h-auto" },
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

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 grid-rows-[auto] gap-3 sm:gap-4 sm:auto-rows-[200px]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
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
      </div>
    </section>
  );
}
