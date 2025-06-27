import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard CMS",
  keywords: ["dashboard", "cms", "admin", "nextjs"],
  authors: [
    {
      name: "Permata Roti",
    },
  ],
  creator: "Nabila",
  description: "Dashboard CMS for Permata Roti",
  openGraph: {
    title: "Dashboard CMS",
    description: "Dashboard CMS for Permata Roti",
    siteName: "Dashboard CMS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard CMS",
    description: "Dashboard CMS for Permata Roti",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
