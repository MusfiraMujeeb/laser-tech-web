import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" style={{ backgroundColor: '#F8F6F2' }}>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ backgroundColor: '#F8F6F2', color: '#26322E', margin: 0, padding: 0 }}
      >
        <div className="w-full h-1 bg-[#C08A3E]" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
