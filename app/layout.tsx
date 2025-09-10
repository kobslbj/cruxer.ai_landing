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
  title: "Cruxer.ai - AI Product Consultant for Founders",
  description: "Don't let a great idea die from a chaotic start. Cruxer.ai transforms your scattered ideas into validated, developer-ready action blueprints.",
  keywords: ["AI", "product consultant", "startup", "founder", "product development", "validation"],
  authors: [{ name: "Cruxer.ai" }],
  openGraph: {
    title: "Cruxer.ai - AI Product Consultant for Founders",
    description: "Transform scattered ideas into validated action blueprints with AI-powered product consulting.",
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruxer.ai - AI Product Consultant for Founders",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
