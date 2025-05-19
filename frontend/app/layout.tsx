import type { Metadata } from "next";
import { Poppins,  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
