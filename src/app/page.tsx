 "use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

type CardAccent = "blue" | "emerald" | "amber" | "cyan";

const cards: {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  accent: CardAccent;
  icon: JSX.Element;
}[] = [
  {
    title: "Regional Dashboard",
    subtitle: "ROD",
    description: "At-a-glance view of regional performance indicators and key metrics.",
    href: "https://r7tesdata.vercel.app/",
    accent: "blue",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M4 20V10M10 20V4M16 20V12M20 20V8" />
      </svg>
    ),
  },
  {
    title: "Document Management",
    subtitle: "DMS",
    description: "Centralized repository for memos, issuances, and official documents.",
    href: "https://r7communications.vercel.app",
    accent: "emerald",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Online Application System",
    subtitle: "OAS",
    description: "Streamlined intake for NTTCapplications.",
    href: "https://tesda-r7-forms.vercel.app/",
    accent: "amber",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5l5 4.5-5 4.5M23 7h-10" />
      </svg>
    ),
  },
  {
    title: "Official Website",
    subtitle: "TESDA VII",
    description: "Public-facing information hub for TESDA Region VII programs.",
    href: "https://tesda-region-vii.vercel.app/",
    accent: "cyan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const accentStyles: Record<CardAccent, string> = {
  blue: "from-blue-500/20 via-blue-500/5 to-slate-900/80 border-blue-400/40",
  emerald: "from-teal-400/20 via-emerald-500/5 to-slate-900/80 border-emerald-400/40",
  amber: "from-amber-400/20 via-orange-500/5 to-slate-900/80 border-amber-400/40",
  cyan: "from-cyan-400/20 via-sky-500/5 to-slate-900/80 border-cyan-400/40",
};

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
  accent: "blue" | "teal" | "amber" | "cyan";
};

const stats: StatItem[] = [
  { label: "Active Staff", value: 132, icon: "👥", accent: "blue" },
  { label: "Open Tickets", value: 18, icon: "🎫", accent: "teal" },
  { label: "Documents This Month", value: 245, icon: "📄", accent: "amber" },
  { label: "Pending Requests", value: 9, icon: "⏳", accent: "cyan" },
];

type Announcement = {
  title: string;
  date: string;
  image: string;
  excerpt: string;
};

const announcements: Announcement[] = [
  {
    title: "Regional Nexus Suite rollout for all units",
    date: "Mar 08, 2026",
    image: "/icons/8pointbanner.jpg",
    excerpt: "All TESDA Region VII units will progressively adopt the Nexus Suite as the primary access point for core systems and tools.",
  },
  {
    title: "Scheduled maintenance for Online Application System",
    date: "Mar 12, 2026",
    image: "/icons/8pointbanner.jpg",
    excerpt: "Temporary downtime is expected as we upgrade infrastructure and improve response times for high-volume application periods.",
  },
  {
    title: "New document templates now available",
    date: "Mar 01, 2026",
    image: "/icons/8pointbanner.jpg",
    excerpt: "Standardized templates for memos, endorsements, and regional issuances are now accessible via the Document Management System.",
  },
];

function useCountUp(target: number, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return value;
}

function StatCard({ item, index }: { item: StatItem; index: number }) {
  const value = useCountUp(item.value);

  const accentClass =
    item.accent === "blue"
      ? "from-blue-500/60 to-indigo-400/60"
      : item.accent === "teal"
      ? "from-teal-400/70 to-emerald-400/70"
      : item.accent === "amber"
      ? "from-amber-400/80 to-orange-400/70"
      : "from-cyan-400/80 to-sky-400/70";

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-white/5 bg-slate-900/60 px-4 py-3 sm:px-5 sm:py-4 shadow-[0_18px_45px_rgba(15,23,42,0.7)] transition-all duration-200 hover:border-blue-400/60 hover:bg-slate-900/80 hover:shadow-[0_22px_60px_rgba(15,23,42,0.95)]"
      style={{ animationDelay: `${80 + index * 40}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-tr from-white/4 to-transparent" />
      <div className="flex items-center gap-3 relative z-10">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-slate-900 to-slate-800 border border-white/10 text-base">
          <span>{item.icon}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
            {item.label}
          </span>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="bg-clip-text text-lg sm:text-xl font-semibold text-transparent bg-gradient-to-r {accentClass}">
              {value.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`pointer-events-none absolute -right-8 -bottom-8 h-20 w-20 rounded-full bg-gradient-to-tr ${accentClass} opacity-30 blur-xl`}
      />
    </div>
  );
}

export default function HomePage() {
  const [activeAnnouncement, setActiveAnnouncement] = useState(0);

  const currentAnnouncement = announcements[activeAnnouncement];

  const handlePrev = () => {
    setActiveAnnouncement((prev) =>
      prev === 0 ? announcements.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveAnnouncement((prev) =>
      prev === announcements.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex-1 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage: `radial-gradient(ellipse 80% 50% at 0% 0%, rgba(59,130,246,0.35), transparent),
                               radial-gradient(ellipse 80% 50% at 100% 0%, rgba(20,184,166,0.25), transparent),
                               radial-gradient(ellipse 60% 40% at 50% 100%, rgba(56,189,248,0.18), transparent)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' x='0' y='0' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(148,163,184,0.35)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-7 lg:py-8">
          {/* Hero */}
          <section className="mb-4 sm:mb-6 lg:mb-7 animate-fade-in-up">
            <div className="relative overflow-hidden rounded-lg border border-white/5 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/60 px-4 py-4 sm:px-6 sm:py-5 lg:px-7 lg:py-5 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
              <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-500/40 via-sky-400/40 to-teal-400/40 blur-3xl opacity-70 animate-[pulse_10s_ease-in-out_infinite]" />
              <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/40 via-blue-500/30 to-transparent blur-3xl opacity-70" />

              <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(45,212,191,0.4)]" />
                    Internal Hub
                  </p>
                  <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-[2.3rem] font-semibold tracking-tight text-white">
                    TESDA Region VII
                    <span className="block text-base sm:text-xl md:text-2xl font-normal text-slate-300">
                      Nexus Suite Intranet Portal
                    </span>
                  </h2>
                  <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-300">
                    One central starting point for regional staff to access dashboards, documents, applications, and support.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-3 border-t border-slate-700/60 pt-4 mt-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5 sm:mt-0">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 flex items-center justify-center text-slate-950 text-sm font-semibold shadow-[0_0_0_1px_rgba(15,23,42,0.8)]">
                      R7
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-slate-100">
                        Region VII Operations
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        Last sync: a few moments ago
                      </span>
                    </div>
                  </div>
                  <Link
                    href="https://r7tesdata.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(37,99,235,0.7)] hover:bg-blue-400 hover:shadow-[0_24px_60px_rgba(37,99,235,0.9)] transition duration-200"
                  >
                    Open Regional Dashboard
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Quick stats bar */}
          <section className="mb-4 sm:mb-6 lg:mb-7 animate-fade-in-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((item, index) => (
                <StatCard key={item.label} item={item} index={index} />
              ))}
            </div>
          </section>

          {/* Main content grid */}
          <section className="grid grid-cols-1 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-5 lg:gap-6 items-start">
            {/* Systems cards */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Core Systems
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {cards.map((card, i) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block animate-fade-in-up"
                    style={{ animationDelay: `${120 + i * 60}ms` }}
                  >
                    <div className="card-hover relative h-full min-h-[160px] rounded-lg overflow-hidden border border-white/5 bg-slate-900/80 backdrop-blur-2xl shadow-[0_18px_50px_rgba(15,23,42,0.9)] transition-all duration-200">
                      {/* Accent halo */}
                      <div
                        className={`pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_0%_0%,rgba(148,163,255,0.26),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(56,189,248,0.21),transparent_55%)] mix-blend-screen`}
                      />
                      {/* Accent border gradient */}
                      <div
                        className={`pointer-events-none absolute inset-[-1px] rounded-[0.6rem] bg-gradient-to-br ${accentStyles[card.accent]} opacity-60`}
                      />
                      <div className="relative h-full p-4 sm:p-4.5 flex flex-col gap-3.5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950/70 border border-white/10 text-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.9)]">
                              {card.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                                {card.subtitle}
                              </span>
                              <h4 className="mt-1 text-sm sm:text-base font-semibold text-white">
                                {card.title}
                              </h4>
                            </div>
                          </div>
                          <span className="rounded-full border border-white/10 bg-slate-900/70 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-300">
                            External
                          </span>
                        </div>

                        <p className="text-xs sm:text-[13px] text-slate-200/90 leading-relaxed">
                          {card.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-1">
                          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                            Open in new tab
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-300 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                            Open
                            <span aria-hidden="true" className="text-[10px]">
                              →
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Announcements carousel */}
            <aside className="animate-fade-in-up" style={{ animationDelay: "220ms" }}>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Latest Announcements
                </h3>
                <button
                  type="button"
                  className="text-[11px] font-medium text-blue-300 hover:text-blue-200 transition-colors duration-200"
                >
                  View All
                </button>
              </div>

              <div className="relative overflow-hidden rounded-lg border border-white/5 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
                <div className="relative flex flex-col">
                  <div className="relative h-32 sm:h-36 overflow-hidden">
                    <Image
                      src={currentAnnouncement.image}
                      alt={currentAnnouncement.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 320px, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/5" />
                    <div className="absolute left-3 bottom-3 flex items-center gap-2">
                      <span className="rounded-full bg-blue-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-[0_10px_30px_rgba(37,99,235,0.9)]">
                        Announcement
                      </span>
                      <span className="rounded-full bg-slate-900/80 border border-white/10 px-2 py-1 text-[10px] font-medium text-slate-200">
                        {currentAnnouncement.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 px-4 py-3 sm:px-5 sm:py-4">
                    <h4 className="text-sm sm:text-base font-semibold text-white">
                      {currentAnnouncement.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-200/90 leading-relaxed">
                      {currentAnnouncement.excerpt}
                    </p>

                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <span>
                          {activeAnnouncement + 1} of {announcements.length}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-200 hover:border-blue-400/60 hover:bg-blue-500/15 hover:text-white transition duration-200"
                          aria-label="Previous announcement"
                        >
                          <span aria-hidden="true">←</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-200 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white transition duration-200"
                          aria-label="Next announcement"
                        >
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
