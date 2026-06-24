import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://laser-tech-mw.vercel.app"),
  title: {
    default: "Laser Tech | Precision Manufacturing & Creative Studio",
    template: "%s | Laser Tech",
  },
  description:
    "Laser Tech provides CNC routing, laser cutting, engraving, signage, and custom manufacturing in Sri Lanka.",
  openGraph: {
    title: "Laser Tech | Precision Manufacturing & Creative Studio",
    description:
      "CNC routing, laser cutting, engraving, signage, and custom manufacturing in Sri Lanka.",
    url: "https://laser-tech-mw.vercel.app",
    siteName: "Laser Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Tech | Precision Manufacturing & Creative Studio",
    description:
      "CNC routing, laser cutting, engraving, signage, and custom manufacturing in Sri Lanka.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-[#F8F6F2] text-[#26322E]">
        <div className="w-full h-1 bg-[#C7923B]" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}