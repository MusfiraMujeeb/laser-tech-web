'use client';

import { useState } from 'react';

export default function EnhancedCorporateAbout() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const steps = [
    { num: '1', name: 'File Blueprint Submission', desc: 'Send your design parameters via our customizable studio booth, or forward raw vector blueprints directly to our quote desk selectors.' },
    { num: '2', name: 'Operational Feasibility Check', desc: 'Our engineering supervisors in Mawanella verify layer tolerances, cross-match chosen raw wood parameters, and optimize laser line speeds.' },
    { num: '3', name: 'Precision CNC Execution', desc: 'The layout payload runs on high-power laser beds or multi-axis router arrays to produce clean cuts accurate to fractions of a millimeter.' },
    { num: '4', name: 'Fulfillment Delivery COD', desc: 'Finished products are packaged securely and dispatched across Sri Lanka under a safe, hassle-free Cash-on-Delivery logistics loop.' }
  ];

  const milestones = [
    { year: '2019', label: 'Company Inauguration', text: 'Laser Tech is founded as Mawanella’s pioneer industrial laser processing plant unit.' },
    { year: '2022', label: 'CNC Expansion', desc: 'Procured extensive 8×4 ft heavy-duty heavy CNC router arrays to handle full architectural wood and interior decoration fit-outs.' },
    { year: '2024', label: 'Fiber Technology Integration', desc: 'Injected rapid fiber markers into production blocks to serve localized industrial serial nameplate marking requirements.' },
    { year: '2026', label: 'Island-wide Customization Launch', desc: 'Integrated Next.js software platforms to let domestic customers configure bespoke tokens with absolute price transparency.' }
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-stone-50 text-stone-800 space-y-20">
      
      {/* 1. FOUNDER/CEO MESSAGE CARD GRID (Priority 2 & Top 5 Priority 1) */}
      <section className="max-w-5xl mx-auto bg-white border border-stone-200 rounded-3xl p-6 md:p-10 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 text-center md:text-left space-y-3">
          <div className="w-36 h-36 bg-stone-900 border-2 border-amber-500 rounded-2xl mx-auto md:mx-0 flex items-center justify-center text-amber-400 text-4xl font-black font-mono shadow-md">
            MA
          </div>
          <div>
            <h3 className="text-lg font-black text-stone-900 leading-tight">Mohamed Afraz</h3>
            <p className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest">Chief Executive Officer</p>
            <p className="text-[11px] font-mono text-stone-400 mt-0.5">Laser Tech Mawanella</p>
          </div>
        </div>
        
        <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-8 relative">
          <span className="text-6xl font-serif text-stone-200 absolute top-[-20px] left-2 select-none pointer-events-none">&ldquo;</span>
          <h4 className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider mb-2">Executive Address Matrix</h4>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic">
            &ldquo;Laser Tech was founded on a simple principle: translating complex concepts into high-quality physical realities with extreme accuracy. What started as Mawanella’s first custom cutting hub has grown into an industrial precision asset. We take pride in building long-term business partnerships by guaranteeing clear material parameters, pricing transparency, and structural excellence delivered on schedule.&rdquo;
          </p>
        </div>
      </section>

      {/* 2. CORPORATE CORE MISSION/VISION VALUES */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 font-medium text-xs">
        <div className="bg-white border p-6 rounded-2xl space-y-2 shadow-xs">
          <span className="text-xl">🎯</span>
          <h4 className="font-black font-mono text-stone-900 uppercase tracking-wide">Our Corporate Mission Statement</h4>
          <p className="text-stone-500 leading-relaxed">To engineer flawless custom pieces and technical components using high-tier precision machinery, accelerating localized corporate branding loops with absolute cost predictability.</p>
        </div>
        <div className="bg-white border p-6 rounded-2xl space-y-2 shadow-xs">
          <span className="text-xl">👁️</span>
          <h4 className="font-black font-mono text-stone-900 uppercase tracking-wide">Our Corporate Vision Target</h4>
          <p className="text-stone-500 leading-relaxed">To stand as Sri Lanka’s leading authority in laser processing and CNC routing manufacturing, expanding engineering boundaries while maintaining handcrafted artisan perfection metrics.</p>
        </div>
      </section>

      {/* 3. DYNAMIC INTERACTIVE CHRONOLOGICAL OPERATIONAL TIMELINE (Priority 19) */}
      <section className="max-w-3xl mx-auto bg-white border border-stone-200 p-6 md:p-8 rounded-3xl shadow-xs space-y-6">
        <div className="text-center">
          <h4 className="text-lg font-black text-stone-900 tracking-tight">Our Milestone Growth Journey Timeline</h4>
          <p className="text-xs text-stone-500 mt-0.5">Track our evolution from a creative local startup into an established production plant hub.</p>
        </div>

        <div className="flex justify-between items-center bg-stone-50 p-1 rounded-xl border border-stone-200 max-w-sm mx-auto overflow-x-auto gap-1">
          {milestones.map((m, idx) => (
            <button key={idx} type="button" onClick={() => setActiveMilestone(idx)} className={`px-3 py-1.5 font-mono text-xs font-black rounded-lg transition-all cursor-pointer ${activeMilestone === idx ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-400 hover:bg-stone-200/50'}`}>
              {m.year}
            </button>
          ))}
        </div>

        <div className="p-4 bg-amber-50/40 border border-dashed border-amber-200 rounded-xl text-center space-y-1 animate-fade-in max-w-lg mx-auto">
          <h5 className="text-xs font-mono font-black uppercase text-amber-800">{milestones[activeMilestone].label}</h5>
          <p className="text-xs text-stone-600 leading-relaxed font-medium">{milestones[activeMilestone].desc || milestones[activeMilestone].text}</p>
        </div>
      </section>

      {/* 4. PSYCHOLOGICAL CUSTOMER JOURNEY ACCORDION PATHWAYS (Priority 9) */}
      <section className="max-w-5xl mx-auto space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-black text-stone-900">How Crafting With Laser Tech Works</h3>
          <p className="text-xs text-stone-500 mt-1">A transparent, predictable process from initial digital layout to secure doorstep delivery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white border border-stone-200 p-5 rounded-2xl relative overflow-hidden group hover:shadow-md transition-all">
              <span className="absolute right-[-10px] top-[-10px] font-mono text-5xl font-black text-stone-100/80 group-hover:text-amber-50/50 transition-colors pointer-events-none select-none">{s.num}</span>
              <h4 className="text-xs font-black text-stone-900 tracking-tight z-10 relative pr-4">{s.name}</h4>
              <p className="text-[11px] text-stone-500 leading-relaxed font-medium pt-2 z-10 relative">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}