"use client";

import { useState } from "react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "refund" | null>(null);

  return (
    <footer className="w-full border-t border-[#E4D7C4] pt-12 pb-6 px-4 md:px-12 relative bg-white">
      <a
        href="https://wa.me/94776632244"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Laser Tech on WhatsApp"
        className="fixed bottom-4 right-4 z-50 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 transition-all"
      >
        💬 Chat on WhatsApp
      </a>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-stone-100 pb-10">
        <div className="md:col-span-4 space-y-4 text-xs font-medium text-stone-500">
          <div className="font-black text-lg tracking-tight text-[#26322E]">
            LASER<span className="text-[#C7923B]">TECH</span>
          </div>
          <p className="leading-relaxed">
            Sri Lanka&apos;s laser engraving and high-capacity industrial fabrication partner.
          </p>
          <div className="text-[11px] font-mono text-stone-400 space-y-1 border-t pt-3">
            <p className="font-bold text-stone-600">📍 Physical Address:</p>
            <p>33/1 Kandy - Colombo Rd, Mawanella, Sri Lanka</p>
            <p className="pt-2 font-bold text-stone-600">📞 Support Channels:</p>
            <p>+94 77 663 2244 // customdesk@lasertech.lk</p>
          </div>
        </div>

        <div className="md:col-span-4 space-y-3">
          <h4 className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest">
            Base Cost Estimates
          </h4>
          <div className="divide-y divide-stone-100 font-mono text-[11px] font-bold text-stone-600 space-y-2">
            <div className="pt-1 flex justify-between">
              <span>Wedding Card Cuts:</span>
              <span className="text-stone-900">LKR 150 - 250 / Unit</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span>Bespoke Event Trophies:</span>
              <span className="text-stone-900">From LKR 2,000 / Piece</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span>3D Commercial Boards:</span>
              <span className="text-stone-900">Starting LKR 5,000 / Unit</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span>Industrial Marking:</span>
              <span className="text-[#C7923B] font-black">Volume Contract Tenders</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-3">
          <h4 className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest">
            Client Testimonials
          </h4>
          <div className="bg-stone-50 p-3 rounded-xl border border-dashed text-stone-600 space-y-2 text-[11px] leading-relaxed">
            <p className="italic font-medium">
              “Flawless precision router cuttings on our heavy mahogany architectural board segments.”
            </p>
            <p className="font-mono font-bold text-[10px] text-stone-400 uppercase tracking-wider text-right">
              — Nimal Perera, Project Engineer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-stone-400">
        <p>© {new Date().getFullYear()} Laser Tech LK Inc. All Rights Reserved.</p>
        <div className="flex flex-wrap gap-3 font-bold text-stone-500">
          <button type="button" onClick={() => setActiveModal("privacy")} className="hover:underline cursor-pointer">
            Privacy Framework
          </button>
          <span>//</span>
          <button type="button" onClick={() => setActiveModal("terms")} className="hover:underline cursor-pointer">
            Terms of Service
          </button>
          <span>//</span>
          <button type="button" onClick={() => setActiveModal("refund")} className="hover:underline cursor-pointer">
            Cancellation Rules
          </button>
        </div>
      </div>

      {activeModal && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-[#E4D7C4] rounded-2xl max-w-md w-full p-6 text-xs text-stone-500 space-y-3 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 font-bold text-stone-400 hover:text-stone-700"
            >
              ✕ Close
            </button>

            {activeModal === "privacy" && (
              <>
                <h4 className="text-sm font-black text-stone-900 font-mono uppercase tracking-wide">
                  Privacy Protection Protocol
                </h4>
                <p className="leading-relaxed font-medium">
                  We securely handle customer details and use them only for project communication and order handling.
                </p>
              </>
            )}

            {activeModal === "terms" && (
              <>
                <h4 className="text-sm font-black text-stone-900 font-mono uppercase tracking-wide">
                  Terms of Custom Processing Engagement
                </h4>
                <p className="leading-relaxed font-medium">
                  Custom work may require approval before production. Final pricing depends on material and complexity.
                </p>
              </>
            )}

            {activeModal === "refund" && (
              <>
                <h4 className="text-sm font-black text-stone-900 font-mono uppercase tracking-wide">
                  Bespoke Return Rules Matrix
                </h4>
                <p className="leading-relaxed font-medium">
                  Standard products may be eligible for return review. Custom-made items are non-returnable unless defective.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}