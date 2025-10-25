"use client";
import { services } from "@/data/site";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";

export function Services() {
  const gridStyle: CSSProperties = {
    ["--grid-image" as string]:
      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
  };

  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-grid" style={gridStyle} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,97,255,0.35),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-300">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
            High-converting storytelling aligned to your growth thesis.
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Whether you&apos;re architecting a launch or scaling retention, we
            blueprint systems that connect the emotional arc of your brand with
            the numbers the boardroom cares about.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="flex flex-col rounded-3xl border border-white/10 bg-slate-950/70 p-8 backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
                Service {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm text-slate-300">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[6px] h-1.5 w-6 rounded-full bg-gradient-to-r from-brand-400 to-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
