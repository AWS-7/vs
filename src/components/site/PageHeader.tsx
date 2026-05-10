import { motion } from "framer-motion";

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative pt-36 sm:pt-40 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-graphite to-navy-deep" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-electric/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-muted-foreground max-w-2xl text-base sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
