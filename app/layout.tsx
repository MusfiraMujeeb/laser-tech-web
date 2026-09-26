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
    "wooden awards Sri Lanka",
    "custom wall clocks",
    "personalized notebooks",
    "wedding frames Sri Lanka",
  ],
  authors: [{ name: "Laser Tech" }],
  openGraph: {
    title: "Laser Tech | Precision Laser Cutting & Engraving",
    description:
      "Custom laser cutting, engraving, CNC routing, and signage in Sri Lanka. The Art of Engraving, Uniquely Yours.",
    type: "website",
    locale: "en_LK",
    siteName: "Laser Tech",
    images: [
      {
        url: "/products/planet-fitness-board.jpg",
        width: 1200,
        height: 630,
        alt: "Laser Tech custom illuminated signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Tech | Precision Laser Cutting & Engraving",
    description:
      "Custom laser cutting, engraving, and signage in Sri Lanka.",
    images: ["/products/planet-fitness-board.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Laser Tech",
    description:
      "Sri Lankan laser cutting, engraving, CNC routing, and custom manufacturing company.",
    image: "https://lasertech.lk/brand/logo.png",
    url: "https://lasertech.lk",
    telephone: "+94 75 799 1141",
    email: "lasertech0024@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "33/1 Kandy - Colombo Road",
      addressLocality: "Mawanella",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "7.2547",
      longitude: "80.4483",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "LKR",
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-ivory text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}