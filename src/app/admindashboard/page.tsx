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
      <div className="relative flex-1 flex items-center justify-center p-4 py-16">
        <video
          className="fixed inset-0 w-full h-full object-cover -z-10 opacity-60"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/icons/greenneonbg.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-[#080d14]/70 -z-10" />
        <div
          className="absolute inset-0 opacity-20 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#080d14]/90 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_80px_rgba(6,182,212,0.12)] animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="inline-flex justify-center mb-4 transition-transform duration-500 hover:scale-105">
              <Image src="/icons/tlogo.png" alt="TESDA" width={72} height={72} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 tracking-tight">
              ACCESS TERMINAL
            </h1>
            <p className="text-slate-400 text-sm mt-1.5">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500
                  focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400/50
                  transition-all duration-300 ease-out"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500
                  focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400/50
                  transition-all duration-300 ease-out"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500/40 transition-colors duration-300"
              />
              <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer select-none">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-semibold bg-cyan-500 text-slate-900
                hover:bg-cyan-400 hover:shadow-[0_0_32px_rgba(6,182,212,0.4)]
                active:scale-[0.99]
                transition-all duration-400 ease-out"
            >
              INITIALIZE LOGIN
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-cyan-500/40 rounded" />
            <div className="w-2 h-2 rounded-full bg-cyan-500/70" />
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-500/40 rounded" />
          </div>

          <p className="text-center mt-6 text-sm">
            <Link
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              ← Back to Nexus Suite
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
