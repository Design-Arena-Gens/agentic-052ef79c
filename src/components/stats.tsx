"use client";
import { stats } from "@/data/site";
import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-900/30 py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.value}
            className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-black/20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <div className="font-display text-3xl text-brand-200 md:text-4xl">
              {stat.value}
            </div>
            <p className="mt-4 text-sm text-slate-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
