import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cruxer.ai | Your AI Product Team",
  description: "Cruxer.ai is the AI Product Team for founders. We turn chaotic ideas into validated, developer-ready blueprints. Build with confidence.",
  keywords: ["AI", "product consultant", "startup", "founder", "product development", "validation"],
  authors: [{ name: "Cruxer.ai" }],
  openGraph: {
    title: "Cruxer.ai | Your AI Product Team",
    description: "Cruxer.ai is the AI Product Team for founders. We turn chaotic ideas into validated, developer-ready blueprints. Build with confidence.",
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruxer.ai | Your AI Product Team",
    description: "Don't let great ideas die from chaotic starts. Get your action blueprint today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="cruxer-ai-landing.vercel.app" src="https://plausible.io/js/script.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
