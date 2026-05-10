import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Zap } from "lucide-react";
import { contact, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-graphite/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display font-bold">VS Electrical</div>
                <div className="text-[11px] text-muted-foreground -mt-0.5">Services & Maintenance</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Trusted electrical & solar service provider since 2019 — delivering certified industrial, commercial, and renewable energy execution across India.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:bg-electric/20 hover:border-electric/50 transition-colors">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[["Home","#home"],["About","#about"],["Services","#services"],["Projects","#projects"],["Gallery","#gallery"],["Contact","#contact"]].map(([l,h]) => (
                <li key={l}><a href={h} className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.slice(0, 8).map((s) => (
                <li key={s.title} className="hover:text-gold transition-colors cursor-default">{s.title}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {contact.phones.map((p) => (
                <li key={p} className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-electric-glow flex-shrink-0" /><a href={`tel:${p.replace(/\s/g,"")}`} className="hover:text-gold">{p}</a></li>
              ))}
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-electric-glow flex-shrink-0" /><a href={`mailto:${contact.email}`} className="hover:text-gold break-all">{contact.email}</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-electric-glow flex-shrink-0" />Pan-India Service • Tamil Nadu HQ</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} VS Electrical Services & Maintenance. All rights reserved.</div>
          <div>Engineered with precision · Powered by trust</div>
        </div>
      </div>
    </footer>
  );
}
