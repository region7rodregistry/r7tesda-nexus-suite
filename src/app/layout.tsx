import type { Metadata } from "next";
import { Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-public-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
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

// Applied before React hydrates so the saved theme paints on the first frame
// (no flash of the wrong theme).
const themeBootScript = `
(function () {
  try {
    var t = localStorage.getItem('nexus-theme');
    if (t === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body
        className={`${publicSans.variable} ${ibmPlexMono.variable} font-sans min-h-screen flex flex-col bg-page text-ink antialiased`}
      >
        <ThemeProvider>
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-[264px]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
