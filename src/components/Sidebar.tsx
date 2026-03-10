"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href?: string;
  decoy?: boolean;
  icon?: string;
  section?: "workspace" | "systems";
};

const navItems: NavItem[] = [
  { label: "Staff Directory", decoy: true, icon: "👥", section: "workspace" },
  { label: "Announcements", decoy: true, icon: "📋", section: "workspace" },
  { label: "HR Portal", decoy: true, icon: "🏢", section: "workspace" },
  { label: "Policies", decoy: true, icon: "📜", section: "workspace" },
  { label: "Help Desk", decoy: true, icon: "🛟", section: "workspace" },
  { label: "Forms", decoy: true, icon: "📝", section: "workspace" },
  { label: "ICT Unit", href: "/ictunit", icon: "💻", section: "systems" },
  { label: "Access Terminal", href: "/admindashboard", icon: "⛯", section: "systems" },
];

function NavButton({
  item,
  collapsed,
  isActive,
}: {
  item: NavItem;
  collapsed: boolean;
  isActive: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (item.decoy) {
    return (
      <button
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="relative w-full group nav-btn"
        aria-label={`${item.label} (Coming soon)`}
      >
        <span
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border backdrop-blur-xl min-h-[40px] w-full text-left text-xs sm:text-sm transition-all duration-300 ease-smooth ${
            isHovered
              ? "border-amber-400/60 bg-amber-500/20 text-amber-100"
              : "border-white/5 bg-white/[0.03] text-slate-200 hover:border-blue-400/50 hover:bg-blue-500/10"
          }`}
        >
          <span className="text-lg">{item.icon}</span>
          <span
            className={`font-medium flex-1 whitespace-nowrap transition-all duration-300 ease-smooth ${
              collapsed
                ? "opacity-0 -translate-x-2 max-w-0"
                : "opacity-100 translate-x-0 max-w-xs"
            }`}
          >
            {isHovered ? "Coming Soon" : item.label}
          </span>
        </span>
        {isHovered && !collapsed && (
          <span
            className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/95 text-slate-900 whitespace-nowrap shadow-lg z-50 pointer-events-none"
            style={{ boxShadow: "0 4px 20px rgba(245,158,11,0.4)" }}
          >
            Coming Soon
          </span>
        )}
      </button>
    );
  }

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Link
        href={item.href!}
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
        className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-lg border min-h-[40px] w-full text-left text-xs sm:text-sm backdrop-blur-xl transition-all duration-300 ease-smooth ${
          isActive
            ? "border-blue-500/70 bg-blue-500/15 text-slate-50 shadow-[0_0_0_1px_rgba(59,130,246,0.5)]"
            : "border-white/5 bg-white/[0.03] text-slate-200 hover:border-blue-400/60 hover:bg-blue-500/12 hover:text-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.8)]"
        } ${
          isActive
            ? "relative before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-blue-400 before:to-teal-400"
            : ""
        }`}
      >
        <span className="text-lg">{item.icon}</span>
        <span
          className={`font-medium whitespace-nowrap transition-all duration-300 ease-smooth ${
            collapsed
              ? "opacity-0 -translate-x-2 max-w-0"
              : "opacity-100 translate-x-0 max-w-xs"
          }`}
        >
          {item.label}
        </span>
      </Link>
      {collapsed && isHovered && (
        <span
          className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/95 text-slate-50 whitespace-nowrap shadow-lg z-50 pointer-events-none border border-blue-500/50"
          style={{ boxShadow: "0 4px 24px rgba(37,99,235,0.55)" }}
        >
          {item.label}
        </span>
      )}
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const workspaceItems = navItems.filter((item) => item.section === "workspace");
  const systemItems = navItems.filter((item) => item.section === "systems");

  return (
    <aside
      className={`fixed left-0 top-16 bottom-0 z-40 hidden lg:flex flex-col border-r border-white/5 bg-[#060914]/95 backdrop-blur-2xl shadow-[0_18px_60px_rgba(15,23,42,0.85)] transition-all duration-300 ease-smooth ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Collapse toggle */}
      <button
        type="button"
        onClick={() => setCollapsed((prev) => !prev)}
        className="absolute -right-3 top-16 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900 text-slate-200 shadow-[0_8px_20px_rgba(15,23,42,0.8)] hover:border-blue-400/70 hover:bg-blue-500/20 transition duration-200"
        aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
      >
        <svg
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path
            d={collapsed ? "M12.5 5L8 9.5L12.5 14" : "M7.5 5L12 9.5L7.5 14"}
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <nav className="flex flex-1 flex-col gap-4 px-3 py-4 overflow-y-auto">
        {/* Workspace group */}
        <div>
          {!collapsed && (
            <div className="mb-2 px-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Workspace
              </p>
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            {workspaceItems.map((item) => (
              <NavButton
                key={item.label}
                item={item}
                collapsed={collapsed}
                isActive={false}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-1 my-1 h-px bg-gradient-to-r from-transparent via-slate-700/70 to-transparent" />

        {/* Systems group */}
        <div>
          {!collapsed && (
            <div className="mb-2 px-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Core Systems
              </p>
            </div>
          )}
          <div className="flex flex-col gap-1.5">
            {systemItems.map((item) => {
              const isActive = item.href ? pathname === item.href : false;
              return (
                <NavButton
                  key={item.label}
                  item={item}
                  collapsed={collapsed}
                  isActive={isActive}
                />
              );
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
}
