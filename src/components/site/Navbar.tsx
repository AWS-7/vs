import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Phone, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-9 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 border ${
            scrolled ? "glass-strong shadow-elegant border-white/15" : "glass border-white/10"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-electric blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-sm sm:text-base tracking-tight">VS Electrical</div>
              <div className="text-[10px] sm:text-[11px] text-muted-foreground -mt-0.5">Services & Maintenance</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-gold" }}
                className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground rounded-lg transition-colors relative group"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-electric to-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-electric-glow px-4 py-2 text-sm font-semibold text-white shadow-glow hover:scale-105 transition-transform"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden rounded-lg p-2 hover:bg-white/10"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40 bg-navy/95 backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.58_0.24_258/_0.25),transparent_35%),radial-gradient(circle_at_80%_60%,oklch(0.84_0.17_85/_0.18),transparent_30%)]" />
              <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-12 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg">VS Electrical</div>
                      <div className="text-[11px] text-muted-foreground">Trusted since 2019</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-white/10 p-2 hover:bg-white/10"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="grid gap-3">
                  {links.map((l, idx) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-base font-semibold flex items-center justify-between group"
                    >
                      {l.label}
                      <span className="h-1 w-10 rounded-full bg-gradient-to-r from-electric to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>

                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
                    className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-electric to-electric-glow px-4 py-4 text-white font-semibold shadow-glow"
                  >
                    <Phone className="h-5 w-5" /> Call {contact.phones[0]}
                  </a>
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl glass-strong px-4 py-4 font-semibold text-foreground"
                  >
                    <MessageCircle className="h-5 w-5 text-gold" /> WhatsApp Support
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
