import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tesda: {
          blue: "#2563eb",
          amber: "#f59e0b",
          dark: "#0c1222",
          navy: "#0f172a",
          slate: "#1e293b",
        },
        // Semantic theme tokens (driven by CSS variables in globals.css,
        // switched by the `.dark` class on <html>).
        page: "var(--c-page-bg)",
        surface: {
          DEFAULT: "var(--c-surface)",
          alt: "var(--c-surface-alt)",
        },
        line: "var(--c-border)",
        ink: {
          DEFAULT: "var(--c-text)",
          sec: "var(--c-text-sec)",
          muted: "var(--c-text-muted)",
        },
        accent: {
          DEFAULT: "var(--c-accent)",
          soft: "var(--c-active-bg)",
          line: "var(--c-active-border)",
        },
        positive: {
          DEFAULT: "var(--c-green)",
          soft: "var(--c-green-bg)",
          line: "var(--c-green-border)",
        },
        warn: "var(--c-amber)",
      },
      boxShadow: {
        card: "var(--c-shadow)",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "Public Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "monospace"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        "smooth-in": "cubic-bezier(0.32, 0, 0.67, 0)",
        "smooth-out": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-up": "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
