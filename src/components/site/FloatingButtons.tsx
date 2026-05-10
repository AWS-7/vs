import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
        className="group relative h-14 w-14 rounded-full bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <span className="absolute inset-0 rounded-full bg-electric animate-ping opacity-30" />
        <Phone className="h-6 w-6 text-white relative" />
      </motion.a>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative h-14 w-14 rounded-full bg-gradient-to-br from-[oklch(0.65_0.18_150)] to-[oklch(0.55_0.20_145)] flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[oklch(0.65_0.18_150)] animate-ping opacity-30" />
        <MessageCircle className="h-6 w-6 text-white relative" />
      </motion.a>
    </div>
  );
}
