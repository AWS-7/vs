import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 top-0 z-[65] h-1 w-full origin-left bg-gradient-to-r from-electric via-gold to-electric-glow shadow-glow"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
