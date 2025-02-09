import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnimationProvider } from "@/components/providers/animation-provider";
import { InteractiveBackground } from "@/components/ui/interactive-background";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Injective Labs | Modern Landing Page",
  description:
    "A modern, responsive landing page built with Next.js, featuring beautiful animations and a sleek dark theme design.",
  keywords: ["Injective", "Injective Protocol", "Injective Labs"],
  authors: [{ name: "Orhan Özkerçin" }],
  creator: "Orhan Özkerçin",
  publisher: "Orhan Özkerçin",
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Injective Labs | Modern Landing Page",
    description:
      "A modern, responsive landing page built with Next.js, featuring beautiful animations and a sleek dark theme design.",
    siteName: "Injective Labs Landing Page",
  },
  twitter: {
    card: "summary_large_image",
    title: "Injective Labs | Modern Landing Page",
    description:
      "A modern, responsive landing page built with Next.js, featuring beautiful animations and a sleek dark theme design.",
    creator: "@orhanozkerin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AnimationProvider>
          <InteractiveBackground />
          <main className="relative min-h-screen">
            {children}
            <Footer />
          </main>
        </AnimationProvider>
      </body>
    </html>
  );
}
