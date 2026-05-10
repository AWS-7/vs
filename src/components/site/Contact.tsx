import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { contact } from "@/lib/site-data";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-20 left-1/4 h-[400px] w-[400px] rounded-full bg-electric/15 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">Get In Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Let's power your <span className="gradient-text-electric">next project</span>
          </h2>
          <p className="mt-5 text-muted-foreground">Reach out for a free consultation and quote. We respond within 24 hours.</p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contact.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 glass rounded-2xl p-5 hover:border-electric/50 transition-all hover:-translate-y-0.5"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Call us</div>
                  <div className="font-semibold group-hover:text-gold transition-colors">{p}</div>
                </div>
              </a>
            ))}

            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center gap-4 glass rounded-2xl p-5 hover:border-electric/50 transition-all hover:-translate-y-0.5"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center shadow-gold-glow">
                <Mail className="h-5 w-5 text-navy-deep" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email us</div>
                <div className="font-semibold truncate group-hover:text-gold transition-colors">{contact.email}</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 glass rounded-2xl p-5 hover:border-electric/50 transition-all hover:-translate-y-0.5"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[oklch(0.65_0.18_150)] to-[oklch(0.55_0.20_145)] flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
                <div className="font-semibold group-hover:text-gold transition-colors">Chat with us</div>
              </div>
            </a>

            <div className="glass rounded-2xl p-5 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Service Area</div>
                <div className="font-semibold">Pan-India</div>
                <div className="text-xs text-muted-foreground mt-1">Headquartered in Tamil Nadu</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.0%2C10.5%2C79.0%2C11.0&layer=mapnik"
                className="w-full h-full grayscale-[60%] contrast-110"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form side */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-8 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" className="sm:col-span-2" />
              <Field label="Service Required" name="service" />
              <Field label="Location" name="location" />
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/30 outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-electric-glow px-8 py-4 font-semibold text-white shadow-glow hover:shadow-[0_0_60px_-5px_oklch(0.58_0.24_258_/_0.7)] transition-all hover:-translate-y-0.5"
            >
              {submitted ? "Sent — we'll be in touch!" : <>Send Message <Send className="h-4 w-4" /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/30 outline-none transition"
      />
    </div>
  );
}
