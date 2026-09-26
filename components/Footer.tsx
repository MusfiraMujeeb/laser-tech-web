"use client";

import Link from "next/link";

export default function Footer() {
  const whatsappNumber = "94757991141";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Laser Tech, I'd like to enquire about your services."
  )}`;

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Laser Tech on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-full shadow-soft-lg transition"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>

      <footer className="w-full bg-espresso text-sand pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-walnut/60">
            {/* Brand */}
            <div className="md:col-span-4 space-y-4">
              <div className="font-heading text-2xl font-semibold text-surface">
                LASER<span className="text-copper">TECH</span>
              </div>
              <p className="text-sm text-sand/80 leading-relaxed">
                Laser cutting, engraving, CNC routing, laser marking, fiber
                laser services, signage, personalized products, and custom
                manufacturing solutions across Sri Lanka.
              </p>
              <div className="pt-2 space-y-2 text-sm text-sand/80">
                <p className="flex items-start gap-2">
                  <span className="text-copper">📍</span>
                  <span>33/1 Kandy - Colombo Rd, Mawanella, Sri Lanka</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-copper">📞</span>
                  <a href="tel:+94757991141" className="hover:text-copper transition">
                    +94 75 799 1141
                  </a>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-copper">✉</span>
                  <a
                    href="mailto:lasertech0024@gmail.com"
                    className="hover:text-copper transition"
                  >
                    lasertech0024@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-oak">
                Shop
              </h4>
              <div className="flex flex-col gap-2 text-sm text-sand/80">
                <Link href="/products" className="hover:text-copper transition">
                  All Products
                </Link>
                <Link href="/products?category=Awards" className="hover:text-copper transition">
                  Awards
                </Link>
                <Link href="/products?category=Keychains" className="hover:text-copper transition">
                  Keychains
                </Link>
                <Link href="/products?category=Signage" className="hover:text-copper transition">
                  Signage
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-oak">
                Services
              </h4>
              <div className="flex flex-col gap-2 text-sm text-sand/80">
                <Link href="/quote" className="hover:text-copper transition">
                  Custom Orders
                </Link>
                <Link href="/quote" className="hover:text-copper transition">
                  Bulk Quotes
                </Link>
                <Link href="/portfolio" className="hover:text-copper transition">
                  Portfolio
                </Link>
                <Link href="/about" className="hover:text-copper transition">
                  About Us
                </Link>
              </div>
            </div>

            {/* Company */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-oak">
                Company
              </h4>
              <div className="flex flex-col gap-2 text-sm text-sand/80">
                <Link href="/about" className="hover:text-copper transition">
                  Our Story
                </Link>
                <Link href="/contact" className="hover:text-copper transition">
                  Contact
                </Link>
                <Link href="/quote" className="hover:text-copper transition">
                  Request a Quote
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-copper transition"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Motto Card */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-oak">
                Our Motto
              </h4>
              <p className="font-heading text-lg italic text-copper leading-tight">
                &ldquo;The Art of Engraving, Uniquely Yours.&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sand/60">
            <p>
              © {currentYear} Laser Tech. All rights reserved.
            </p>
            <p className="flex items-center gap-4">
              <span>Mawanella, Sri Lanka</span>
              <span className="text-copper">•</span>
              <span>Founded 2019</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}