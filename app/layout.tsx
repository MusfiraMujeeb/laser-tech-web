import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Laser Tech | Precision Laser Cutting & Engraving in Sri Lanka",
    template: "%s | Laser Tech",
  },
  description:
    "Laser Tech is a Sri Lankan precision manufacturing company specializing in laser cutting, engraving, CNC routing, laser marking, and custom production. Based in Mawanella, serving customers island-wide.",
  metadataBase: new URL("https://lasertech.lk"),
  keywords: [
    "laser cutting Sri Lanka",
    "laser engraving Mawanella",
    "CNC routing Sri Lanka",
    "custom signage Sri Lanka",
    "personalized gifts Sri Lanka",
    "laser marking services",
  ],
  openGraph: {
    title: "Laser Tech | Precision Laser Cutting & Engraving",
    description:
      "Custom laser cutting, engraving, CNC routing, and signage in Sri Lanka. The Art of Engraving, Uniquely Yours.",
    type: "website",
    locale: "en_LK",
    siteName: "Laser Tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body bg-ivory text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}