'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BalancedEnterpriseHome() {
  const [activeTab, setActiveTab] = useState<'industrial' | 'creative'>('industrial');
  const [cadFile, setCadFile] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validExtensions = ['.pdf', '.dwg', '.dxf', '.svg', '.ai'];
      const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      
      if (!validExtensions.includes(ext)) {
        triggerToast(`❌ Error: Invalid format. Please upload an authenticated CAD drawing configuration.`);
        return;
      }
      
      setCadFile(file.name);
      triggerToast(`⚡ Blueprint [ ${file.name} ] synced to engineering queue.`);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F6F2', color: '#26322E' }}>
      
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#26322E] text-[#F8F6F2] font-mono text-xs font-bold px-5 py-3 rounded-xl shadow-xl border border-[#3C4A44] flex items-center gap-2">
          <span>⚙️</span> {toastMessage}
        </div>
      )}

      {/* HERO HERO CONTAINER WITH NORMALIZED VISUAL HEIGHT WHITESPACE */}
      <section className="relative pt-12 pb-20 px-4 md:px-12 border-b border-[#F1ECE4] bg-gradient-to-br from-[#F8F6F2] via-[#F1ECE4]/40 to-[#D8B8B0]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            {/* UNIFIED DESIGN BADGES */}
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-black tracking-widest uppercase border bg-[#26322E] text-[#E8D4A2] border-[#3C4A44]">
                ⏳ ESTABLISHED SINCE 2019
              </div>
              <div className="px-3 py-1.5 rounded-lg text-[10px] font-mono font-black tracking-widest uppercase border bg-[#F3E8D6] text-[#7C5A28] border-[#D5BC8D]">
                🇱🇰 MAWANELLA&apos;S FIRST LASER PLANT
              </div>
            </div>
            
            <div className="space-y-3 pt-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-[#26322E]">
                Precision Manufacturing <br />
                <span className="text-[#C08A3E]">For Enterprise Scales.</span>
              </h1>
              <p className="text-lg md:text-xl font-bold tracking-tight text-[#7C5A28]">
                Personalized Craftsmanship For Every Milestone Celebration.
              </p>
            </div>
            
            <p className="text-xs md:text-sm text-stone-500 max-w-xl leading-relaxed font-medium">
              Mawanella&apos;s pioneer laser manufacturing plant. We integrate high-capacity 8×4 ft CNC routers, precise fiber metal marking stencils, and interactive client design booth canvases to serve volume B2B operations and premium custom gifting lines with absolute execution accuracy.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/portfolio" className="px-6 py-3.5 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md bg-[#26322E] hover:bg-[#33423D]">
                Explore Industrial Solutions
              </Link>
              <Link href="/ai-booth" className="px-6 py-3.5 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md bg-[#C08A3E] hover:bg-[#B17C33]">
                Open Customizer Booth
              </Link>
            </div>
          </div>

          {/* TWO COLUMN COMPACT INLINE INFRASTRUCTURE LEDGER */}
          <div className="lg:col-span-5 bg-white border border-[#F1ECE4] p-6 rounded-3xl shadow-[0_20px_40px_rgba(38,50,46,0.04)] space-y-4">
            <h3 className="text-xs font-black tracking-widest text-stone-400 font-mono uppercase">⚙️ Plant Equipment Tolerances</h3>
            <div className="divide-y divide-stone-100 text-xs space-y-3 font-semibold text-stone-600">
              <div className="pt-2 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-8 text-stone-900">Heavy Duty CNC Router Bed:</span>
                <span className="col-span-4 font-mono text-right text-[#26322E] font-bold bg-[#F1ECE4] px-2 py-0.5 rounded">8.0 × 4.0 Ft</span>
              </div>
              <div className="pt-3 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-8 text-stone-900">Industrial CO2 Laser Bed:</span>
                <span className="col-span-4 font-mono text-right text-[#26322E] font-bold bg-[#F1ECE4] px-2 py-0.5 rounded">8.0 × 4.0 Ft</span>
              </div>
              <div className="pt-3 grid grid-cols-12 gap-2 items-center">
                <span className="col-span-8 text-stone-900">High-Speed Fiber Metal Marker:</span>
                <span className="col-span-4 font-mono text-right text-[#26322E] font-bold bg-[#F1ECE4] px-2 py-0.5 rounded">2.0 × 2.0 Ft</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DUAL WORKSTREAM DISPLAY BLOCK ROUTINGS */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#26322E]">Choose Your Operational Channel</h2>
          <p className="text-xs text-stone-400 max-w-md mx-auto">Toggle between industrial high-volume corporate manufacturing specs and artisan customized gifting routes instantly.</p>
        </div>

        <div className="flex bg-[#F1ECE4] max-w-sm mx-auto p-1 rounded-xl border border-stone-300/30">
          <button type="button" onClick={() => setActiveTab('industrial')} className={`w-1/2 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider text-center transition-all ${activeTab === 'industrial' ? 'bg-[#26322E] text-[#F8F6F2] shadow-xs' : 'text-stone-600'}`}>🏭 Industrial Projects</button>
          <button type="button" onClick={() => setActiveTab('creative')} className={`w-1/2 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider text-center transition-all ${activeTab === 'creative' ? 'bg-[#26322E] text-[#F8F6F2] shadow-xs' : 'text-stone-600'}`}>🎁 Custom Gifts Shop</button>
        </div>

        <div className="max-w-4xl mx-auto pt-4">
          {activeTab === 'industrial' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white border border-[#F1ECE4] p-6 md:p-8 rounded-3xl items-center shadow-xs">
              <div className="md:col-span-7 space-y-4">
                <span className="text-2xl block">Industrial Solutions</span>
                <h3 className="text-lg font-black text-[#26322E] tracking-tight">Commercial Architectural Fabrications &amp; Engravings</h3>
                <p className="text-xs leading-relaxed text-stone-500 font-medium">
                  Optimized specifically for procurement divisions, structural designers, and building operations. We implement automated high-volume markings matching strict blueprint guidelines.
                </p>
              </div>
              
              <div className="md:col-span-5 bg-[#F8F6F2] border-2 border-dashed border-stone-300 hover:border-[#C08A3E] p-6 rounded-2xl text-center relative transition-all group">
                <input type="file" accept=".pdf,.dwg,.dxf,.svg,.ai" onChange={handleFileDrop} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <span className="text-3xl block transform group-hover:scale-105 transition-transform">📁</span>
                <h4 className="text-xs font-black text-[#26322E] tracking-tight mt-2">Upload CAD Blueprint File</h4>
                <p className="text-[9px] font-mono text-stone-400 mt-0.5">Accepts complex .DWG, .DXF, .SVG, or vector .PDF</p>
                {cadFile ? (
                  <p className="mt-3 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md inline-block">✓ Loaded: {cadFile}</p>
                ) : (
                  <span className="mt-4 inline-block text-[9px] font-mono font-black uppercase tracking-wider bg-[#26322E] text-[#E8D4A2] px-3 py-1.5 rounded-lg shadow-sm">Initialize Automated Quote</span>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-[#F1ECE4] p-6 md:p-8 rounded-3xl space-y-4 max-w-xl mx-auto shadow-xs text-center animate-fade-in">
              <span className="text-2xl block">Creative Solutions</span>
              <h3 className="text-lg font-black text-[#26322E] tracking-tight">Luxury Keepsakes &amp; Personalized Gifting</h3>
              <p className="text-xs leading-relaxed text-stone-500 font-medium">
                Pristine 3D layered royal invitations, glowing edge-lit LED night lamps, and bespoke mahogany notebook binders customized in real-time. We combine computer precision with premium finishes to protect maximum emotional appeal.
              </p>
              <div className="flex gap-2 justify-center pt-2">
                <Link href="/portfolio" className="px-5 py-2.5 bg-[#26322E] text-[#F8F6F2] font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs">View Finished Catalog</Link>
                <Link href="/ai-booth" className="px-5 py-2.5 bg-[#C08A3E] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs">Open Design Studio ➔</Link>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}