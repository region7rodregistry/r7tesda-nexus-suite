"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

type SystemCard = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: JSX.Element;
};

const cardIcon = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--c-accent)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const systems: SystemCard[] = [
  {
    title: "Regional Dashboard",
    subtitle: "ROD",
    description: "At-a-glance view of regional performance indicators and key metrics.",
    href: "https://r7tesdata.vercel.app/",
    icon: (
      <svg {...cardIcon}>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
  {
    title: "Document Management",
    subtitle: "DMS",
    description: "Centralized repository for memos, issuances, and official documents.",
    href: "https://r7communications.vercel.app",
    icon: (
      <svg {...cardIcon}>
        <path d="M4 4h10l4 4v12H4z" />
        <path d="M14 4v4h4M8 13h6M8 16h6" />
      </svg>
    ),
  },
  {
    title: "Online Application System",
    subtitle: "OAS",
    description: "Streamlined intake for NTTC applications.",
    href: "https://tesda-r7-forms.vercel.app/",
    icon: (
      <svg {...cardIcon}>
        <path d="M15 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
        <path d="M14 4h6v6M20 4l-8 8" />
      </svg>
    ),
  },
  {
    title: "Official Website",
    subtitle: "TESDA VII",
    description: "Public-facing information hub for TESDA Region VII programs.",
    href: "https://tesda-region-vii.vercel.app/",
    icon: (
      <svg {...cardIcon}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
      </svg>
    ),
  },
];

type StatItem = {
  label: string;
  value: number;
  delta: string;
  deltaTone: "positive" | "muted";
  iconTone: "accent" | "warn";
  icon: JSX.Element;
};

const stats: StatItem[] = [
  {
    label: "ACTIVE STAFF",
    value: 482,
    delta: "▲ 6 this week",
    deltaTone: "positive",
    iconTone: "accent",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M4 19a5 5 0 0 1 10 0M16 7a3 3 0 0 1 0 5" />
      </>
    ),
  },
  {
    label: "OPEN TICKETS",
    value: 17,
    delta: "4 awaiting reply",
    deltaTone: "muted",
    iconTone: "warn",
    icon: (
      <>
        <path d="M4 7h16v4a2 2 0 0 0 0 2v4H4v-4a2 2 0 0 0 0-2z" />
        <path d="M12 7v10" />
      </>
    ),
  },
  {
    label: "DOCUMENTS THIS MONTH",
    value: 1294,
    delta: "▲ 12% vs last month",
    deltaTone: "positive",
    iconTone: "accent",
    icon: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
      </>
    ),
  },
  {
    label: "PENDING REQUESTS",
    value: 23,
    delta: "8 high priority",
    deltaTone: "muted",
    iconTone: "warn",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

type Announcement = {
  title: string;
  date: string;
  image: string;
  body: string;
};

const announcements: Announcement[] = [
  {
    title: "Regional Nexus Suite rollout for all units",
    date: "Mar 08, 2026",
    image: "/icons/8pointbanner.jpg",
    body: "All TESDA Region VII units will progressively adopt the Nexus Suite as the primary access point for core systems and tools.",
  },
  {
    title: "Q2 accomplishment reports now open",
    date: "Mar 05, 2026",
    image: "/icons/tesdabanner1.jpg",
    body: "Provincial and district offices may begin submitting unit accomplishment reports through the Document Management system.",
  },
  {
    title: "Scheduled maintenance: Document Management",
    date: "Feb 28, 2026",
    image: "/icons/banner1.jpg",
    body: "DMS will be briefly unavailable this weekend for a planned upgrade. Please plan critical submissions accordingly.",
  },
];

function useCountUp(target: number, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

function StatCard({ item }: { item: StatItem }) {
  const value = useCountUp(item.value);
  return (
    <div className="rounded-[14px] border border-line bg-surface px-4 py-3 shadow-card transition-colors duration-300">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] font-medium tracking-[1.1px] text-ink-muted">
          {item.label}
        </span>
        <span className="grid h-7 w-7 flex-none place-items-center rounded-lg bg-surface-alt">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={item.iconTone === "warn" ? "var(--c-amber)" : "var(--c-accent)"}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {item.icon}
          </svg>
        </span>
      </div>
      <div className="mt-2 text-[26px] font-extrabold leading-none tracking-[-0.5px] text-ink">
        {value.toLocaleString()}
      </div>
      <div
        className={`mt-1.5 text-[11px] font-semibold ${
          item.deltaTone === "positive" ? "text-positive" : "text-ink-muted"
        }`}
      >
        {item.delta}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [active, setActive] = useState(0);
  const current = announcements[active];
  const total = announcements.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <div className="flex flex-col xl:h-[calc(100vh-68px)] xl:overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-3.5 px-5 pb-4 pt-4 sm:px-8 xl:min-h-0">
        {/* HERO */}
        <section className="flex-none animate-fade-in-up rounded-2xl border border-line bg-surface px-6 py-4 shadow-card transition-colors duration-300 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-x-7 gap-y-4">
            <div className="min-w-[280px] flex-1">
              <span className="inline-flex items-center gap-[7px] rounded-full border border-positive-line bg-positive-soft px-[11px] py-1 font-mono text-[11px] font-semibold tracking-[0.8px] text-positive">
                <span className="h-[7px] w-[7px] rounded-full bg-positive" />
                INTERNAL HUB
              </span>
              <h1 className="mt-2.5 text-[26px] font-extrabold leading-tight tracking-[-0.5px] text-ink sm:text-[30px]">
                TESDA Region VII
              </h1>
              <div className="text-[17px] font-semibold text-ink-sec">
                Nexus Suite Intranet Portal
              </div>
              <p className="mt-1.5 max-w-[460px] text-sm leading-snug text-ink-sec [text-wrap:pretty]">
                One central starting point for regional staff to access dashboards, documents,
                applications, and support.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3 border-line pr-0 sm:border-r sm:pr-[22px]">
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-line bg-surface-alt text-sm font-bold text-accent">
                  R7
                </span>
                <span className="leading-[1.35]">
                  <span className="block text-sm font-bold text-ink">Region VII Operations</span>
                  <span className="block font-mono text-[11px] tracking-[0.5px] text-ink-muted">
                    LAST SYNC: A FEW MOMENTS AGO
                  </span>
                </span>
              </div>
              <Link
                href="https://r7tesdata.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-[11px] bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_var(--c-accent-shadow)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Open Regional Dashboard
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="grid flex-none grid-cols-2 gap-3.5 lg:grid-cols-4">
          {stats.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </section>

        {/* LOWER GRID */}
        <div className="grid grid-cols-1 gap-6 xl:min-h-0 xl:flex-1 xl:grid-cols-[1fr_380px]">
          {/* CORE SYSTEMS */}
          <section className="flex min-h-0 flex-col">
            <div className="mb-3 flex-none font-mono text-xs font-semibold tracking-[1.6px] text-ink-muted">
              CORE SYSTEMS
            </div>
            <div className="grid min-h-0 flex-1 grid-cols-1 gap-3.5 sm:grid-cols-2 sm:grid-rows-2">
              {systems.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover flex min-h-0 flex-col rounded-[14px] border border-line bg-surface p-4 shadow-card transition-colors duration-300 hover:border-accent-line"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] bg-surface-alt">
                        {card.icon}
                      </span>
                      <div>
                        <div className="font-mono text-[11px] tracking-[1px] text-ink-muted">
                          {card.subtitle}
                        </div>
                        <div className="mt-px text-[15px] font-bold leading-tight text-ink">
                          {card.title}
                        </div>
                      </div>
                    </div>
                    <span className="flex-none rounded-[5px] border border-line px-1.5 py-[3px] font-mono text-[9.5px] tracking-[0.8px] text-ink-muted">
                      EXTERNAL
                    </span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-[13px] leading-[1.5] text-ink-sec">
                    {card.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-[7px] pt-3 font-mono text-[11px] font-semibold tracking-[1px] text-accent">
                    OPEN IN NEW TAB
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ANNOUNCEMENTS */}
          <section className="flex min-h-0 flex-col">
            <div className="mb-3 flex flex-none items-center justify-between">
              <span className="font-mono text-xs font-semibold tracking-[1.6px] text-ink-muted">
                LATEST ANNOUNCEMENTS
              </span>
              <button
                type="button"
                className="text-xs font-semibold text-accent transition-colors hover:opacity-80"
              >
                View All
              </button>
            </div>
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[14px] border border-line bg-surface shadow-card transition-colors duration-300">
              <div className="relative min-h-[120px] flex-1 border-b border-line">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 380px, 100vw"
                />
                <div className="absolute bottom-3.5 left-3.5 flex gap-2">
                  <span className="rounded-md bg-accent px-[9px] py-1 font-mono text-[9.5px] font-semibold tracking-[0.8px] text-white">
                    ANNOUNCEMENT
                  </span>
                  <span className="rounded-md border border-line bg-surface px-[9px] py-1 font-mono text-[9.5px] tracking-[0.8px] text-ink">
                    {current.date}
                  </span>
                </div>
              </div>
              <div className="flex-none px-5 py-4">
                <h3 className="mb-1.5 text-[16px] font-bold leading-[1.3] text-ink">
                  {current.title}
                </h3>
                <p className="m-0 line-clamp-2 text-[13px] leading-[1.5] text-ink-sec [text-wrap:pretty]">
                  {current.body}
                </p>
                <div className="mt-3.5 flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-muted">
                    {active + 1} of {total}
                  </span>
                  <div className="flex gap-2.5">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous announcement"
                      className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line bg-surface text-ink-sec transition-colors duration-200 hover:border-accent-line hover:text-accent"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 12H5M11 6l-6 6 6 6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next announcement"
                      className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line bg-surface text-ink-sec transition-colors duration-200 hover:border-accent-line hover:text-accent"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
