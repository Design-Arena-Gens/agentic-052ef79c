"use client";
import { process } from "@/data/site";
import { motion } from "framer-motion";

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-white/5 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(31,109,255,0.25)_0%,_transparent_65%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,rgba(15,23,42,0.5),rgba(15,23,42,0))]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-300">
            Process
          </p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
            Momentum engineered from immersion to iteration.
          </h2>
        </div>
        <div className="mt-16 grid gap-10">
          {process.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative rounded-3xl border border-white/10 bg-slate-950/60 p-6 md:p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <span className="inline-flex items-center gap-3 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
                  {step.time}
                </span>
                <span className="font-display text-2xl text-white md:text-3xl">
                  {step.title}
                </span>
              </div>
              <p className="mt-6 text-sm text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
