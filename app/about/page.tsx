'use client';

import { useState } from 'react';

export default function StreamlinedAboutPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12 px-4 bg-stone-50 text-stone-800 space-y-16">
      
      {/* HUMAN VERIFICATION PORTRAIT CARD: CEO CORNER */}
      <section className="max-w-4xl mx-auto bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-4 text-center md:text-left space-y-2">
          <div className="w-28 h-28 bg-stone-900 border-2 border-amber-500 rounded-2xl mx-auto md:mx-0 flex items-center justify-center text-amber-400 font-mono font-black text-3xl shadow-md">MA</div>
          <div>
            <h3 className="text-base font-black text-stone-900 leading-tight">Mohamed Afraz</h3>
            <p className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest">Chief Executive Officer</p>
            <p className="text-[11px] font-mono text-stone-400 mt-0.5">Laser Tech Sri Lanka</p>
          </div>
        </div>
        <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-stone-100 pt-4 md:pt-0 md:pl-6 relative">
          <span className="text-5xl font-serif text-stone-100 absolute top-[-16px] left-1 pointer-events-none select-none">&ldquo;</span>
          <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed italic">
            &ldquo;Since 2019, our mission has been simple: combine high-end craftsmanship with custom precision technology to deliver hardware engineering solutions and retail items our customers across Sri Lanka can trust implicitly.&rdquo;
          </p>
        </div>
      </section>

      {/* COMPRESSED SEAMLESS ROADMAP TIMELINE */}
      <section className="max-w-2xl mx-auto space-y-6 bg-white border p-6 rounded-2xl shadow-2xs">
        <h4 className="text-xs font-black font-mono uppercase text-stone-400 tracking-wider text-center">Our Core Journey Milestones</h4>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-xs font-medium divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          <div className="pt-2 sm:pt-0"><p className="font-mono font-black text-stone-900 text-sm">2019</p><p className="text-stone-500 mt-0.5">Pioneer Founded</p></div>
          <div className="pt-2 sm:pt-0 sm:pl-2"><p className="font-mono font-black text-amber-600 text-sm">2023</p><p className="text-stone-500 mt-0.5">CNC Router Bed Addition</p></div>
          <div className="pt-2 sm:pt-0 sm:pl-2"><p className="font-mono font-black text-stone-900 text-sm">2024</p><p className="text-stone-500 mt-0.5">Fiber Laser Cell Integration</p></div>
          <div className="pt-2 sm:pt-0 sm:pl-2"><p className="font-mono font-black text-emerald-600 text-sm">Today</p><p className="text-stone-500 mt-0.5">Serving Enterprise Islandwide</p></div>
        </div>
      </section>

      {/* EXPANDABLE ACCORDION FAQ BLOCK */}
      <section className="max-w-2xl mx-auto space-y-3">
        <h4 className="text-base font-black text-stone-900 tracking-tight text-center pb-2">Frequently Asked Production Questions</h4>
        {[
          { q: "What vector file formats do your engineering estimators accept?", a: "Our data routing controllers parse all industry standard schemas: Adobe Illustrator (.AI), CorelDraw (.CDR), vector PDFs, AutoCAD exchange formats (.DXF), and scaleable standard vectors (.SVG)." },
          { q: "What is your standard production processing turnaround window?", a: "Standard baseline stock items take 1 to 2 working days within our Mawanella facility. Complex multi-tier B2B custom routing components or volume contract sheets typically take 3 to 5 working days before logistics dispatch." },
          { q: "Do you provide certified delivery coverage across Sri Lanka?", a: "Yes, absolutely. We provide insured island-wide shipping channels running on automated Cash-on-Delivery (COD) loops, removing all buyer verification anxiety parameters." }
        ].map((faq, index) => (
          <div key={index} className="bg-white border rounded-xl overflow-hidden shadow-2xs">
            <button type="button" onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="w-full text-left px-5 py-3.5 font-bold text-xs sm:text-sm text-stone-900 flex justify-between items-center bg-stone-50/40 hover:bg-stone-50 cursor-pointer">
              <span>{faq.q}</span>
              <span className="text-amber-600 font-mono text-xs">{activeFaq === index ? '▲' : '▼'}</span>
            </button>
            {activeFaq === index && (
              <div className="px-5 py-4 border-t text-xs text-stone-500 leading-relaxed font-medium animate-fade-in bg-white">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </section>

    </div>
  );
}