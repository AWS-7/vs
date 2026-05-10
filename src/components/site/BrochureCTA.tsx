import { motion } from "framer-motion";
import { Download, FileText, ShieldCheck } from "lucide-react";

const brochureLink = "mailto:vselectricworld@gmail.com?subject=VS%20Electrical%20Profile%20Request&body=Please%20share%20the%20company%20profile%20brochure.";

export function BrochureCTA() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-graphite to-navy-deep" />
      <div className="absolute inset-0 opacity-30 grid-bg" />
      <div className="absolute -top-24 left-12 h-72 w-72 rounded-full bg-electric/15 blur-[120px]" />
      <div className="absolute -bottom-24 right-12 h-72 w-72 rounded-full bg-gold/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass-strong rounded-3xl p-8 sm:p-10 lg:p-12 shine-border overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-gold">Download Company Profile</div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-balance">Get the full VS Electrical capability deck</h3>
              <p className="text-muted-foreground">Detailed services, certifications, project case studies, and safety procedures in one premium PDF.</p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                {["Certified Safety", "HT/LT Expertise", "Solar Utility Scale", "24/7 Response"].map((pill) => (
                  <span key={pill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{pill}</span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={brochureLink}
                  className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-electric to-electric-glow px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-glow"
                >
                  Download Brochure
                  <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </motion.a>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-gold" /> Secure • Instant email
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-electric/15 via-transparent to-gold/15 blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-elegant">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-electric to-electric-glow flex items-center justify-center shadow-glow">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Company Profile Preview</div>
                    <div className="text-xs text-muted-foreground">PDF • 18 pages • Updated 2025</div>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-electric" />
                    <span>Utility-scale solar O&M playbook with 648MW execution insights.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                    <span>HT/LT cable jointing SOPs, safety checklists, and QA templates.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-electric" />
                    <span>Case studies: Adani, NLC Kadamangalam, FEBL Global, Crescent Solar.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
