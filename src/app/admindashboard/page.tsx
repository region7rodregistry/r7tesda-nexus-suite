"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AdminDashboardPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Login attempt for user: ${username}`);
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex flex-1 items-center justify-center p-4 py-16">
        <video
          className="fixed inset-0 -z-10 h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/icons/greenneonbg.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 -z-10 bg-[var(--c-overlay)] transition-colors duration-300" />

        <div className="animate-fade-in-up relative w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-card transition-colors duration-300 sm:p-8">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex justify-center transition-transform duration-500 hover:scale-105">
              <Image src="/icons/tlogo.png" alt="TESDA" width={72} height={72} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-accent sm:text-3xl">
              ACCESS TERMINAL
            </h1>
            <p className="mt-1.5 text-sm text-ink-sec">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-ink-sec">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                className="w-full rounded-xl border border-line bg-surface-alt px-4 py-3 text-ink placeholder:text-ink-muted transition-colors duration-300 focus:border-accent-line focus:outline-none focus:ring-2 focus:ring-accent-line"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-ink-sec">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full rounded-xl border border-line bg-surface-alt px-4 py-3 text-ink placeholder:text-ink-muted transition-colors duration-300 focus:border-accent-line focus:outline-none focus:ring-2 focus:ring-accent-line"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-line accent-[var(--c-accent)]"
              />
              <label htmlFor="remember" className="cursor-pointer select-none text-sm text-ink-sec">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-accent px-4 py-3.5 font-semibold text-white shadow-[0_6px_16px_var(--c-accent-shadow)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99]"
            >
              INITIALIZE LOGIN
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-14 rounded bg-gradient-to-r from-transparent to-accent-line" />
            <div className="h-2 w-2 rounded-full bg-accent" />
            <div className="h-px w-14 rounded bg-gradient-to-l from-transparent to-accent-line" />
          </div>

          <p className="mt-6 text-center text-sm">
            <Link
              href="/"
              className="text-accent transition-colors hover:opacity-80"
            >
              ← Back to Nexus Suite
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
