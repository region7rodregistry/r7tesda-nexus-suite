"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="Toggle theme"
      aria-label="Toggle light or dark theme"
      className="flex items-center gap-1.5 h-[42px] px-1.5 rounded-full border border-line bg-surface-alt transition-colors duration-300 hover:border-accent-line"
    >
      {/* Sun — highlighted in light mode via CSS variables */}
      <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[var(--c-sun-bg)] text-[var(--c-sun-fg)] transition-colors duration-300">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      </span>
      {/* Moon — highlighted in dark mode via CSS variables */}
      <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[var(--c-moon-bg)] text-[var(--c-moon-fg)] transition-colors duration-300">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      </span>
    </button>
  );
}
