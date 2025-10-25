"use client";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(31,109,255,0.45),_rgba(3,7,18,0.95)_65%)]" />
      <motion.div
        className="relative mx-auto max-w-4xl rounded-[3rem] border border-brand-400/30 bg-black/60 p-8 shadow-2xl shadow-brand-900/50 sm:p-12"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-200">
          Let&apos;s co-create momentum
        </span>
        <h2 className="mt-5 font-display text-4xl text-white md:text-5xl">
          Request a Dream-Finds Immersion.
        </h2>
        <p className="mt-4 text-base text-slate-300 md:text-lg">
          Share your next big objective and we&apos;ll curate a custom session
          with our strategy pod. Expect signal-rich insights, no fluff.
        </p>
        <form className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <label className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="Jordan Rivers"
              className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/40"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Work Email
            </label>
            <input
              required
              type="email"
              placeholder="hello@dreamfinds.co"
              className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/40"
            />
          </div>
          <div className="flex flex-col gap-3 md:col-span-2">
            <label className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Growth Objective
            </label>
            <textarea
              rows={4}
              placeholder="Break into the EU market with our next launch..."
              className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/40"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Ideal Timeline
            </label>
            <input
              type="text"
              placeholder="Q3 2024"
              className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/40"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Monthly Ad Spend
            </label>
            <select
              className="rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-white focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/40"
            >
              <option>Under $25k</option>
              <option>$25k - $75k</option>
              <option>$75k - $150k</option>
              <option>$150k+</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-500 via-sky-400 to-brand-300 px-8 py-4 font-semibold text-slate-950 shadow-xl shadow-brand-900/50 transition hover:brightness-110"
            >
              Send intention
            </button>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.35em] text-slate-500">
              Replies within 2 business days
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
