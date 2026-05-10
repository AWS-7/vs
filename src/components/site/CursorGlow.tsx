import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const x = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const y = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.3 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(prefersFinePointer);
    if (!prefersFinePointer) return;

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="cursor-glow pointer-events-none">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-30 h-64 w-64 rounded-full bg-electric/25 mix-blend-screen blur-[90px]"
        style={{ translateX: smoothX, translateY: smoothY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-30 h-52 w-52 rounded-full bg-gold/15 mix-blend-screen blur-[90px]"
        style={{ translateX: smoothX, translateY: smoothY, rotate: 20 }}
      />
    </div>
  );
}
