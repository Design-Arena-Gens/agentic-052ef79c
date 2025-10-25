"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-white/10" aria-hidden />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-slate-950/70 text-slate-100 shadow-lg transition hover:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-300/60"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -20, scale: 0.75 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 20, scale: 0.75 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isDark ? "☀️" : "🌙"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
