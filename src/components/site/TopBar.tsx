import { Phone, MessageCircle, Zap } from "lucide-react";
import { contact } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] bg-gradient-to-r from-navy-deep via-graphite to-navy-deep border-b border-gold/20 text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Zap className="h-3.5 w-3.5 text-gold animate-flicker shrink-0" />
          <span className="truncate text-foreground/85">
            <span className="hidden sm:inline">⚡ </span>24/7 Emergency Electrical Support
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-electric/20 hover:bg-electric/30 px-2.5 py-1 text-[11px] font-semibold text-foreground transition"
          >
            <Phone className="h-3 w-3" /> <span className="hidden xs:inline sm:inline">Call</span>
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[oklch(0.55_0.20_145)]/30 hover:bg-[oklch(0.55_0.20_145)]/50 px-2.5 py-1 text-[11px] font-semibold text-foreground transition"
          >
            <MessageCircle className="h-3 w-3" /> <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
