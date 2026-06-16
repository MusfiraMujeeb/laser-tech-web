import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Use your clean TypeScript @/ alias pointing straight to your root components folder
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
  title: "Laser Tech | Where Custom Meets Creativity",
  description: "Premium laser cutting, custom engraving, and corporate branding services based in Mawanella, Sri Lanka.",
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
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        
        {/* Main layout container expands dynamically */}
        <main className="flex-grow">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}