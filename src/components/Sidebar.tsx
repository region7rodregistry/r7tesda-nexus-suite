"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href?: string;
  decoy?: boolean;
  icon: JSX.Element;
  section: "workspace" | "systems";
};

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const navItems: NavItem[] = [
  {
    label: "Staff Directory",
    decoy: true,
    section: "workspace",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.5a3 3 0 0 1 0 5M18 19a4.5 4.5 0 0 0-3-4.2" />
      </svg>
    ),
  },
  {
    label: "Announcements",
    decoy: true,
    section: "workspace",
    icon: (
      <svg {...iconProps}>
        <path d="M3 11v3l11 5V6L3 11zM14 9l5-2v10l-5-2" />
      </svg>
    ),
  },
  {
    label: "HR Portal",
    decoy: true,
    section: "workspace",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    label: "Policies",
    decoy: true,
    section: "workspace",
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M8 13h8M8 17h6" />
      </svg>
    ),
  },
  {
    label: "Help Desk",
    decoy: true,
    section: "workspace",
    icon: (
      <svg {...iconProps}>
        <path d="M4 13a8 8 0 0 1 16 0M4 13v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 0zM20 13v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 0z" />
      </svg>
    ),
  },
  {
    label: "Forms",
    decoy: true,
    section: "workspace",
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    label: "ICT Unit",
    href: "/ictunit",
    section: "systems",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    label: "Access Terminal",
    href: "/admindashboard",
    section: "systems",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </svg>
    ),
  },
];

const baseRow =
  "flex items-center gap-3 rounded-[10px] px-[13px] py-[11px] text-sm transition-colors duration-200";

function NavRow({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const [hovered, setHovered] = useState(false);

  if (item.decoy) {
    return (
      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        aria-label={`${item.label} (Coming soon)`}
        className={`${baseRow} w-full border border-transparent font-medium text-ink-sec hover:bg-surface-alt`}
      >
        <span className="flex-none text-ink-muted">{item.icon}</span>
        <span className="flex-1 text-left">{item.label}</span>
        {hovered && (
          <span className="rounded-md bg-surface-alt px-2 py-0.5 font-mono text-[9px] font-semibold tracking-[0.6px] text-ink-muted">
            SOON
          </span>
        )}
      </button>
    );
  }

  return (
    <Link
      href={item.href!}
      aria-current={isActive ? "page" : undefined}
      className={`${baseRow} ${
        isActive
          ? "border border-accent-line bg-accent-soft font-semibold text-accent"
          : "border border-transparent font-medium text-ink-sec hover:bg-surface-alt"
      }`}
    >
      <span className={`flex-none ${isActive ? "text-accent" : "text-ink-muted"}`}>
        {item.icon}
      </span>
      <span className="flex-1">{item.label}</span>
    </Link>
  );
}

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`px-2 font-mono text-[10.5px] font-medium tracking-[1.6px] text-ink-muted ${className}`}
    >
      {children}
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  const workspaceItems = navItems.filter((i) => i.section === "workspace");
  const systemItems = navItems.filter((i) => i.section === "systems");

  return (
    <aside className="fixed left-0 top-[68px] bottom-0 z-40 hidden w-[264px] flex-col overflow-y-auto border-r border-line bg-surface px-4 py-[22px] transition-colors duration-300 lg:flex">
      <SectionLabel className="mb-3 mt-1">WORKSPACE</SectionLabel>
      <nav className="flex flex-col gap-1">
        {workspaceItems.map((item) => (
          <NavRow key={item.label} item={item} isActive={false} />
        ))}
      </nav>

      <SectionLabel className="mb-3 mt-7">CORE SYSTEMS</SectionLabel>
      <nav className="flex flex-col gap-1">
        {systemItems.map((item) => (
          <NavRow
            key={item.label}
            item={item}
            isActive={item.href ? pathname === item.href : false}
          />
        ))}
      </nav>
    </aside>
  );
}
