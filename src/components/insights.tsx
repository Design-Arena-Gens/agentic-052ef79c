"use client";
import { insights } from "@/data/site";
import { motion } from "framer-motion";
import Link from "next/link";

export function Insights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden border-y border-white/5 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(31,109,255,0.2),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-300">
              Perspective
            </p>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
              From our growth notebooks.
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              Essays and playbooks that unpack the insights guiding our client
              work. Built to help brand and growth leaders make sharper moves.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-brand-300/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-100 transition hover:border-brand-200 hover:text-brand-50"
          >
            Request the full library
          </Link>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              className="rounded-3xl border border-white/10 bg-slate-950/60 p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="text-xs uppercase tracking-[0.35em] text-brand-400">
                Insight {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-white">
                {insight.title}
              </h3>
              <p className="mt-4 text-sm text-slate-300">{insight.description}</p>
              <Link
                href={insight.link}
                className="mt-6 inline-flex items-center text-sm font-medium text-brand-200 transition hover:text-brand-50"
              >
                Read insight →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
