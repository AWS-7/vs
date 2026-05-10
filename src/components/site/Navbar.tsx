import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
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
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elegant" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
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
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground rounded-lg transition-colors relative group"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-electric to-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
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
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3"
            >
              <nav className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-white/5 text-sm"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
