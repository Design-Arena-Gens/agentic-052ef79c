"use client";
import Link from "next/link";
import { navigation } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-brand-500 via-sky-400 to-brand-300 font-display text-lg font-semibold text-slate-950 shadow-lg">
            DF
          </span>
          <div>
            <span className="block font-display text-lg font-semibold tracking-wide">
              Dream Finds Co.
            </span>
            <span className="block text-xs uppercase tracking-[0.25em] text-slate-400">
              Digital Marketing
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-100 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-brand-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-brand-400/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-200 transition hover:border-brand-200 hover:text-brand-50 md:inline-flex"
          >
            Start a project
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
