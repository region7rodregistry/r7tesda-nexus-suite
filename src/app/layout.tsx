import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TESDA Region VII - Nexus Suite",
  description: "Official TESDA Region VII internal hub and nexus suite",
  icons: "/icons/nexuslogo.png",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.className} min-h-screen flex flex-col bg-[#0A0F1E] text-white antialiased`}
      >
        <Header />
        <Sidebar />
        <main className="flex-1 lg:ml-64">
          {children}
        </main>
      </body>
    </html>
  );
}
