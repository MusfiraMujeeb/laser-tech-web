"use client";

import Link from "next/link";

const testimonials = [
  "“Flawless precision and professional finish on our custom signage work.”",
  "“Excellent detailing on our trophy order and very clean edges.”",
  "“Fast turnaround and great communication from quote to delivery.”",
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E4D7C4] pt-12 pb-6 px-4 md:px-12 bg-[#F8F6F2]">
      <a
        href="https://wa.me/94776632244"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Laser Tech on WhatsApp"
        className="fixed bottom-4 right-4 z-50 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider px-4 py-3 rounded-xl shadow-2xl"
      >
        💬 Chat on WhatsApp
      </a>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-stone-100 pb-10">
        <div className="md:col-span-4 space-y-3 text-sm text-[#66706C]">
          <div className="font-black text-lg text-[#26322E]">
            LASER<span className="text-[#C7923B]">TECH</span>
          </div>
          <p>Sri Lanka’s laser engraving and custom fabrication partner.</p>
          <p className="text-xs leading-relaxed">
            📍 33/1 Kandy - Colombo Rd, Mawanella
            <br />
            📞 +94 77 663 2244
            <br />
            ✉ customdesk@lasertech.lk
          </p>
        </div>

        <div className="md:col-span-3 space-y-2">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-400">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2 text-sm font-bold text-[#26322E]">
            <Link href="/products" className="hover:text-[#C7923B]">
              Products
            </Link>
            <Link href="/portfolio" className="hover:text-[#C7923B]">
              Work
            </Link>
            <Link href="/quote" className="hover:text-[#C7923B]">
              Quote
            </Link>
            <Link href="/about" className="hover:text-[#C7923B]">
              About
            </Link>
          </div>
        </div>

        <div className="md:col-span-5 space-y-3">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-400">
            Customer Testimonials
          </h4>
          <div className="space-y-2">
            {testimonials.map((t) => (
              <div
                key={t}
                className="bg-white border border-[#E4D7C4] rounded-xl p-3 text-xs text-[#66706C] italic"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 text-[11px] text-stone-400 font-mono">
        © {new Date().getFullYear()} Laser Tech. All Rights Reserved.
      </div>
    </footer>
  );
}