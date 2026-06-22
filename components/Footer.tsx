'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SecurityFooter() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  return (
    <footer className="w-full bg-white border-t border-stone-200 pt-12 pb-6 px-4 md:px-12 relative">
      
      {/* 💬 FLOATING CONVERSION LINK NODE (Priority 11 & Top 5 Priority 5) */}
      <a 
        href="https://wa.me/94771234567" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 transition-all hover:-translate-y-0.5 animate-bounce"
      >
        💬 Chat on WhatsApp
      </a>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-stone-100 pb-10">
        
        {/* BLOCK 1: LOCAL SEO DIRECTORY */}
        <div className="md:col-span-4 space-y-4 text-xs font-medium text-stone-500">
          <div className="font-black text-lg tracking-tight text-stone-900">LASER<span className="text-amber-600">TECH</span></div>
          <p className="leading-relaxed">Sri Lanka&apos;s pioneering laser engraving and high-capacity industrial wood/metal fabrication processing core setup plant platform since 2019.</p>
          <div className="text-[11px] font-mono text-stone-400 space-y-1 border-t pt-3">
            <p className="font-bold text-stone-600">📍 Physical Factory Address Grid:</p>
            <p>33/1 Kandy - Colombo Rd, Mawanella, Sri Lanka</p>
            <p className="pt-2 font-bold text-stone-600">📞 Phone Support Hotlines Line:</p>
            <p>+94 77 123 4567 // customdesk@lasertech.lk</p>
          </div>
        </div>

        {/* BLOCK 2: PRICING GUIDANCE MOCK LEDGER (Priority 10) */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest">Base Cost Estimates Guidance</h4>
          <div className="divide-y divide-stone-100 font-mono text-[11px] font-bold text-stone-600 space-y-2">
            <div className="pt-1 flex justify-between"><span>Wedding Card Cuts:</span><span className="text-stone-900">LKR 150 - LKR 250 / Unit</span></div>
            <div className="pt-2 flex justify-between"><span>Bespoke Event Trophies:</span><span className="text-stone-900">From LKR 2,000 / Piece</span></div>
            <div className="pt-2 flex justify-between"><span>3D Commercial Boards:</span><span className="text-stone-900">Starting LKR 5,000 / Unit</span></div>
            <div className="pt-2 flex justify-between"><span>Industrial Marking Specs:</span><span className="text-amber-700 font-black">Volume Contract Tenders</span></div>
          </div>
        </div>

        {/* BLOCK 3: AUTHENTIC FEEDBACK COGNITIVE VERIFICATION (Priority 7 & Top 5 Priority 3) */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest">Client Testimonials Proof</h4>
          <div className="bg-stone-50 p-3 rounded-xl border border-dashed text-stone-600 space-y-2 text-[11px] leading-relaxed">
            <p className="italic font-medium">&ldquo;Flawless precision router cuttings on our heavy mahogany architectural board segments. Delivered on schedule to our Kandy work site layout.&rdquo;</p>
            <p className="font-mono font-bold text-[10px] text-stone-400 uppercase tracking-wider text-right">— Nimal Perera, Project Engineer</p>
          </div>
        </div>

      </div>

      {/* FOOTER SYSTEM REDIRECT & LEGAL OVERLAYS */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-stone-400">
        <p>© {new Date().getFullYear()} Laser Tech LK Inc. All Rights Reserved. Platform Build Track.</p>
        <div className="flex flex-wrap gap-3 font-bold text-stone-500">
          <button type="button" onClick={() => setActiveModal('privacy')} className="hover:underline cursor-pointer">Privacy Framework</button>
          <span>//</span>
          <button type="button" onClick={() => setActiveModal('terms')} className="hover:underline cursor-pointer">Terms of Service</button>
          <span>//</span>
          <button type="button" onClick={() => setActiveModal('refund')} className="hover:underline cursor-pointer">Cancellation Rules</button>
        </div>
      </div>

      {/* LEGAL Lightbox drawer overlays component blocks */}
      {activeModal && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white border rounded-2xl max-w-md w-full p-6 text-xs text-stone-500 space-y-3 relative shadow-2xl">
            <button type="button" onClick={() => setActiveModal(null)} className="absolute top-4 right-4 font-bold text-stone-400 hover:text-stone-700">✕ Close</button>
            {activeModal === 'privacy' && (
              <>
                <h4 className="text-sm font-black text-stone-900 font-mono uppercase tracking-wide">Privacy Regulation Protection Protocol</h4>
                <p className="leading-relaxed font-medium">We securely cache customer configuration text records inside local device parameters (`localStorage`). No profile metadata is shared with external commercial advertising aggregators across Sri Lanka.</p>
              </>
            )}
            {activeModal === 'terms' && (
              <>
                <h4 className="text-sm font-black text-stone-900 font-mono uppercase tracking-wide">Terms of Custom Processing Engagement</h4>
                <p className="leading-relaxed font-medium">Because direct laser burns and multi-axis CNC routers chemically alter the structure of timber composites and acrylics, configurations are validated via active phone lines before fabrication begins. Settle invoices comfortably via Cash-on-Delivery.</p>
              </>
            )}
            {activeModal === 'refund' && (
              <>
                <h4 className="text-sm font-black text-stone-900 font-mono uppercase tracking-wide">Bespoke Fabrication Return Matrix Rules</h4>
                <p className="leading-relaxed font-medium">Standard products maintain full 7-day transit warranty protection windows. Bespoke pieces etched with custom business logos or text strings are subject to validation reviews by workshop management in Mawanella.</p>
              </>
            )}
          </div>
        </div>
      )}

    </footer>
  );
}