import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line py-3.5 text-center transition-colors duration-300">
      <p className="text-[12.5px] text-ink-muted">
        © 2025 Developed by TESDA Region VII. All rights reserved. · ROD /{" "}
        <Link
          href="/ictunit"
          className="text-accent underline underline-offset-2 transition-colors hover:opacity-80"
        >
          ICT Unit
        </Link>
      </p>
    </footer>
  );
}
