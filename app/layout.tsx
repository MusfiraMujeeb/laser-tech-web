import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Laser Tech Mawanella | Laser Cutting, CNC Routing & Fiber Marking",
  description:
    "Laser Tech delivers laser cutting, engraving, CNC routing, fiber laser marking, signage, trophies, gifts, and custom manufacturing solutions across Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "#F8F6F2" }}>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ backgroundColor: "#F8F6F2", color: "#26322E", margin: 0, padding: 0 }}
      >
        <div className="w-full h-1 bg-[#C08A3E]" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
