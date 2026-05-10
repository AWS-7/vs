import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-50 flex flex-col items-end gap-2.5 sm:gap-3">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="hidden sm:block glass-strong rounded-2xl px-4 py-3 shadow-card border border-white/10 text-xs text-muted-foreground backdrop-blur-xl max-w-[220px]"
      >
        <div className="text-foreground font-semibold text-sm">24/7 Emergency Desk</div>
        <div className="mt-1">We respond in minutes for HT/LT faults and solar outages.</div>
      </motion.div>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
        className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <span className="absolute inset-0 rounded-full bg-electric animate-ping opacity-30" />
        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white relative" />
      </motion.a>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-[oklch(0.65_0.18_150)] to-[oklch(0.55_0.20_145)] flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[oklch(0.65_0.18_150)] animate-ping opacity-30" />
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white relative" />
      </motion.a>
    </div>
  );
}
