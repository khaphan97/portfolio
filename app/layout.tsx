import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jb",
  display: "swap",
});

const description =
  "Portfolio of Phan Huy Kha — a full-stack software engineer building end-to-end web products with React, Vue, Next.js, Node.js, and NestJS.";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description,
  keywords: [
    "Phan Huy Kha",
    "Full-Stack Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "NestJS",
    "Node.js",
    "TypeScript",
    "Da Nang",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.title}`,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
