"use client";
import { caseStudies } from "@/data/site";
import { motion } from "framer-motion";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,83,219,0.3),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-300">
            Case Studies
          </p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
            Proof that bold storytelling and sharp analytics can co-exist.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-white/5 bg-gradient-to-b from-slate-950/70 to-slate-900/60 p-8 shadow-lg shadow-black/30"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-[0.4em] text-brand-200">
                {item.result}
              </span>
              <h3 className="mt-5 font-display text-2xl text-white">
                {item.title}
              </h3>
              <p className="mt-5 text-sm text-slate-300">{item.description}</p>
              <span className="mt-auto pt-6 text-xs uppercase tracking-[0.4em] text-slate-500">
                Growth Campaign
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
