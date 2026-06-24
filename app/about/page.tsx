// app/about/page.tsx
'use client';

import { useState } from 'react';
import { companyProfile } from '@/app/data/site'; 

export default function AboutPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12 px-4 space-y-16" style={{ backgroundColor: '#F8F6F2', color: '#26322E' }}>
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* CEO Section */}
        <section className="bg-white border border-[#F1ECE4] rounded-3xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 text-center md:text-left space-y-2">
            <div className="w-28 h-28 bg-[#26322E] border-2 border-[#C08A3E] rounded-2xl mx-auto md:mx-0 flex items-center justify-center text-[#E8D4A2] font-mono font-black text-3xl shadow-md">MA</div>
            <div>
              <h3 className="text-base font-black tracking-tight text-[#26322E] leading-tight">{companyProfile.ceoName}</h3>
              <p className="text-[10px] font-mono font-bold text-[#C08A3E] uppercase tracking-widest">{companyProfile.ceoTitle}</p>
              <p className="text-[11px] font-mono text-stone-400 mt-0.5">Laser Tech Sri Lanka</p>
            </div>
          </div>
          <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-stone-100 pt-4 md:pt-0 md:pl-6 relative">
            <span className="text-5xl font-serif text-stone-200 absolute top-[-16px] left-1 select-none pointer-events-none">&ldquo;</span>
            <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed italic relative z-10">
              {companyProfile.about}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-3">
          <h4 className="text-base font-black text-[#26322E] tracking-tight text-center pb-2">Frequently Asked Production Questions</h4>
          {[
            { q: "What vector file formats do you accept?", a: "We accept .AI, .CDR, .PDF, .DXF, and .SVG." },
            { q: "What is your turnaround window?", a: "Standard items take 1-2 days. Complex B2B projects take 3-5 days." },
            { q: "Do you provide delivery?", a: "Yes, we provide insured island-wide shipping." }
          ].map((faq, index) => (
            <div key={index} className="bg-white border border-[#F1ECE4] rounded-xl overflow-hidden shadow-sm">
              <button type="button" onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="w-full text-left px-5 py-4 font-bold text-xs sm:text-sm text-[#26322E] flex justify-between items-center bg-stone-50/40 hover:bg-stone-50 cursor-pointer">
                <span>{faq.q}</span>
                <span className="text-[#C08A3E] font-mono text-xs">{activeFaq === index ? '▲' : '▼'}</span>
              </button>
              {activeFaq === index && (
                <div className="px-5 py-4 border-t border-[#F1ECE4] text-xs text-stone-500 leading-relaxed font-medium bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}