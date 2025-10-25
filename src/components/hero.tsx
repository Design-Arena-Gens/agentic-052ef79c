"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const gradientBackdrop =
  "bg-[radial-gradient(circle_at_top,_rgba(31,109,255,0.4)_0%,_rgba(3,7,18,0.95)_60%)]";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className={`absolute inset-0 ${gradientBackdrop} grain-overlay`} />
      <motion.div
        className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-brand-200">
          Marketing Crafted for Dream-Forward Brands
        </span>
        <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          We weave narrative-driven growth systems for lifestyle brands ready to
          scale.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-slate-300 md:text-xl">
          Dream Finds Company blends cultural insight, conversion science, and
          relentless experimentation to design marketing programs that feel as
          artful as they are measurable.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 via-sky-400 to-brand-300 px-8 py-3 font-semibold text-slate-950 shadow-xl shadow-brand-900/50 transition hover:brightness-110"
          >
            Book an immersion call
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 font-semibold text-slate-100 transition hover:border-brand-200 hover:text-brand-50"
          >
            Explore capabilities
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
