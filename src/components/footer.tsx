import Link from "next/link";
import { navigation } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-brand-500 via-sky-400 to-brand-300 font-display text-sm font-semibold text-slate-950 shadow-lg">
              DF
            </span>
            <div>
              <span className="font-display text-lg font-semibold text-white">
                Dream Finds Company
              </span>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Digital Marketing Collective
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            © {new Date().getFullYear()} Dream Finds Company. All rights
            reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-brand-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.35em] text-slate-500">
          <span>HQ: Remote-first / NYC</span>
          <a
            href="mailto:partnerships@dreamfinds.co"
            className="text-brand-200 transition hover:text-brand-50"
          >
            partnerships@dreamfinds.co
          </a>
        </div>
      </div>
    </footer>
  );
}
