import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HARSHINI",
  description:
    "I am a pliable Full Stack Developer , on a consistent pursuit of learning.",
  generator: "Next.js",
  applicationName: "HARSHINI SHANKAR",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "fullstack",
    "react",
    "fullstack developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "india",
    "software",
    "software developer",
    "portfolio",
    "fullstack developer portfolio",
    "creative developer portfolio",
    "data analytics",
    "database"
  ],
  colorScheme: "dark",
  openGraph: {
    title: "HARSHINI",
    description:
      "I am a pliable Full Stack Developer , on a consistent pursuit of learning.",
    url: "https://www.harshinishankar.vercel.app",
    siteName: "www.harshinishankar.vercel.app",
    images: [
      {
        url: "https://www.harshinishankar.vercel.app",
        width: 1200,
        height: 630,
        alt: "HARSHINI SHANKAR - FULLSTACK DEVELOPER",
      },
    ],
    locale: "en-US",
    type: "website",
  },
    robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
