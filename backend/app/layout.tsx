import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "API Documentation",
  keywords: ["API", "Documentation", "Next.js", "Prisma", "NextAuth"],
  authors: [
    {
      name: "Shofiyah",
    },
  ],
  creator: "Shofiyah",
  description:
    "API documentation for the Next.js application using Prisma and NextAuth",
  openGraph: {
    title: "API Documentation",
    description:
      "API documentation for the Next.js application using Prisma and NextAuth",
    siteName: "API Documentation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "API Documentation",
    description:
      "API documentation for the Next.js application using Prisma and NextAuth",
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
      </body>
    </html>
  );
}
