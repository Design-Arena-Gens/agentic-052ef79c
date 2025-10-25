import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f2f7ff",
          100: "#e6f0ff",
          200: "#bfd6ff",
          300: "#8fb7ff",
          400: "#5b93ff",
          500: "#1f6dff",
          600: "#1453db",
          700: "#103fad",
          800: "#0d2c7a",
          900: "#05163d"
        }
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at center, rgba(31,109,255,0.35) 0, rgba(5,22,61,0) 55%)",
        "grid-line":
          "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
