import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0F1E]/90 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4">
          {/* Left: logo + title */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500/40 to-teal-400/30 border border-white/10 shadow-[0_10px_30px_rgba(15,23,42,0.8)]">
              <Image
                src="/icons/tlogo.png"
                alt="TESDA Logo"
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                Internal Nexus Portal
              </span>
              <div className="flex items-baseline gap-2">
                <h1 className="truncate text-sm sm:text-lg md:text-xl font-semibold text-white">
                  TESDA Region VII — Nexus Suite
                </h1>
              </div>
            </div>
          </div>

          {/* Center: search */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-md">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M15.5 15.5L20 20"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="11"
                    cy="11"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search people, systems, or documents"
                className="w-full rounded-lg bg-slate-900/60 pl-9 pr-3 py-1.5 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-400 transition duration-200"
              />
            </div>
          </div>

          {/* Right: quick links + actions */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* Mobile quick links when sidebar is hidden */}
            <nav className="flex gap-1.5 lg:hidden">
              <Link
                href="/ictunit"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/90 hover:bg-blue-500/20 hover:border-blue-400/60 transition duration-200"
                aria-label="ICT Unit"
              >
                💻
              </Link>
              <Link
                href="/admindashboard"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/90 hover:bg-blue-500/20 hover:border-blue-400/60 transition duration-200"
                aria-label="Access Terminal"
              >
                ⛯
              </Link>
            </nav>

            {/* Notification bell */}
            <button
              type="button"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/60 text-slate-200 hover:text-white hover:border-blue-400/70 hover:bg-blue-500/20 transition duration-200"
              aria-label="Notifications"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M12 4C9.79086 4 8 5.79086 8 8V9.5C8 10.2128 7.76555 10.9089 7.33333 11.4833L6.25 12.9167C5.48613 13.9364 6.21206 15.4 7.5 15.4H16.5C17.7879 15.4 18.5139 13.9364 17.75 12.9167L16.6667 11.4833C16.2345 10.9089 16 10.2128 16 9.5V8C16 5.79086 14.2091 4 12 4Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 17C10.3072 17.5978 10.8469 18 11.4615 18H12.5385C13.1531 18 13.6928 17.5978 14 17"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 ring-2 ring-[#0A0F1E]">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
            </button>

            {/* User avatar */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-2.5 py-1.5 hover:border-teal-400/70 hover:bg-teal-500/15 transition duration-200"
              aria-label="User profile menu"
            >
              <div className="relative h-7 w-7 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 text-xs font-semibold text-slate-900 flex items-center justify-center shadow-[0_0_0_1px_rgba(15,23,42,0.8)]">
                RS
              </div>
              <div className="hidden sm:flex flex-col items-start">
                <span className="text-xs font-medium text-slate-100 leading-tight">
                  Regional Staff
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Online
                </span>
              </div>
              <svg
                viewBox="0 0 20 20"
                className="ml-0.5 h-3 w-3 text-slate-400 sm:inline-block"
                aria-hidden="true"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
