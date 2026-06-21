import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[68px] items-center gap-4 border-b border-line bg-surface px-4 transition-colors duration-300 sm:gap-6 sm:px-7">
      {/* Left: logo + title */}
      <div className="flex min-w-0 items-center gap-3 sm:w-[320px] sm:flex-none">
        <div className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-[11px] bg-[var(--c-logo-bg)]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--c-logo-fg)"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
          </svg>
        </div>
        <div className="min-w-0 leading-tight">
          <div className="font-mono text-[10.5px] font-medium tracking-[1.4px] text-ink-muted">
            INTERNAL NEXUS PORTAL
          </div>
          <div className="truncate text-[15px] font-bold text-ink sm:text-base">
            TESDA Region VII — Nexus Suite
          </div>
        </div>
      </div>

      {/* Center: search */}
      <div className="hidden flex-1 justify-center md:flex">
        <label className="flex h-[42px] w-full max-w-[600px] items-center gap-[11px] rounded-[10px] border border-line bg-surface-alt px-[15px] transition-colors duration-300 focus-within:border-accent-line">
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--c-text-muted)"
            strokeWidth={2}
            className="flex-none"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3-3" />
          </svg>
          <input
            type="search"
            placeholder="Search people, systems, or documents"
            aria-label="Search people, systems, or documents"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
        </label>
      </div>

      {/* Right: actions */}
      <div className="ml-auto flex items-center gap-2 sm:w-[320px] sm:flex-none sm:justify-end sm:gap-3.5">
        {/* Mobile quick links */}
        <nav className="flex gap-1.5 lg:hidden">
          <Link
            href="/ictunit"
            aria-label="ICT Unit"
            className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-line bg-surface text-ink-sec transition-colors duration-200 hover:border-accent-line hover:text-accent"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
              <rect x="3" y="4" width="18" height="12" rx="2" />
              <path d="M8 20h8M12 16v4" />
            </svg>
          </Link>
        </nav>

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-line bg-surface text-ink-sec transition-colors duration-200 hover:border-accent-line hover:text-accent"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
          <span className="absolute right-2.5 top-2.5 h-[7px] w-[7px] rounded-full border-[1.5px] border-surface bg-positive" />
        </button>

        {/* User chip */}
        <button
          type="button"
          aria-label="User profile menu"
          className="flex cursor-pointer items-center gap-2.5 rounded-[11px] border border-line bg-surface py-[5px] pl-1.5 pr-2.5 transition-colors duration-200 hover:border-accent-line"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-accent text-xs font-bold text-white">
            RS
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-[13px] font-semibold text-ink">Regional Staff</span>
            <span className="block text-[10px] font-semibold tracking-[0.6px] text-positive">
              ● ONLINE
            </span>
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--c-text-muted)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </header>
  );
}
