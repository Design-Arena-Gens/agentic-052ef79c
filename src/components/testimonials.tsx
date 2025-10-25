"use client";
import { testimonials } from "@/data/site";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-300">
            Why Clients Choose Us
          </p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
            A team of brand strategists, analysts, and creatives obsessed with
            momentum.
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            We integrate seamlessly with your in-house players to ship work that
            feels on-brand from day one. Strategy, creative, and performance are
            aligned inside a single, nimble pod.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/70 p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <p className="text-sm text-slate-200">
                “{testimonial.quote}”
              </p>
              <div className="mt-auto pt-6 text-xs uppercase tracking-[0.35em] text-slate-400">
                <span className="block text-brand-200">{testimonial.author}</span>
                <span className="mt-2 block text-slate-500">{testimonial.role}</span>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
