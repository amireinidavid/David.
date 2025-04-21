import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PageTransitionProvider } from "@/components/PageTransition";
import PageProgressBar from "@/components/PageProgressBar";

// Optimize font loading with display: swap and limited character subsets
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  // Preload only essential characters to improve initial load time
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111111",
};

export const metadata: Metadata = {
  title: "David | Portfolio",
  description: "Professional portfolio showcasing my skills and projects",
  // Add better browser caching hints
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <PageProgressBar />
        <Navbar />
        <PageTransitionProvider>
          <main className="min-h-screen pt-16">{children}</main>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
