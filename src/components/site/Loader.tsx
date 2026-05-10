import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-navy-deep via-graphite to-navy"
        >
          <div className="absolute inset-0 radial-glow opacity-60" />
          <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
            {[20, 50, 80].map((y, i) => (
              <line
                key={i}
                x1="0"
                y1={`${y}%`}
                x2="100%"
                y2={`${y}%`}
                stroke="url(#loaderGradient)"
                strokeWidth="1"
                strokeDasharray="8 10"
              >
                <animate attributeName="stroke-dashoffset" values="0;100" dur={`${2 + i * 0.6}s`} repeatCount="indefinite" />
              </line>
            ))}
            <defs>
              <linearGradient id="loaderGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.58 0.24 258 / 0)" />
                <stop offset="50%" stopColor="oklch(0.58 0.24 258 / 0.7)" />
                <stop offset="100%" stopColor="oklch(0.84 0.17 85 / 0)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-electric blur-2xl opacity-70 animate-glow-pulse" />
              <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow ring-2 ring-white/10">
                <Zap className="h-10 w-10 text-white animate-flicker" strokeWidth={2.5} />
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="font-display font-bold text-xl tracking-tight">VS Electrical</div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold mt-1">Powering Industries</div>
            </motion.div>
            <div className="h-0.5 w-40 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-electric to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
