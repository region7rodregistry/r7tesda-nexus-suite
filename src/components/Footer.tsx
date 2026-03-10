import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080d14]/90 backdrop-blur-xl border-t border-white/[0.06] py-5 mt-auto transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-slate-400 text-sm">
          © 2025 Developed by TESDA Region VII. All rights reserved. — ROD /{" "}
          <Link
            href="/ictunit"
            className="text-blue-400 hover:text-cyan-300 underline underline-offset-2 transition-colors duration-300 ease-out"
          >
            ICT Unit
          </Link>
        </p>
      </div>
    </footer>
  );
}
