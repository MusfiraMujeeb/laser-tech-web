import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laser Tech | Precision Manufacturing & Creative Studio",
  description: "Sri Lanka's pioneering precision laser engineering facility since 2019. High-capacity 8x4 industrial wood/metal CNC routing and luxury keepsakes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ backgroundColor: '#F8F6F2' }}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#F8F6F2', color: '#26322E' }}>
        <div className="w-full h-1 bg-[#C08A3E]" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}