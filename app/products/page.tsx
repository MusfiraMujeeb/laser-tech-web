'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PerfectedHomepage() {
  const [activePortfolio, setActivePortfolio] = useState('All');

  const portfolioItems = [
    { category: 'Industrial', title: 'Fiber Laser Metal Serialization Tagging', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80' },
    { category: 'Sign Boards', title: '3D Mirror Gold Floating Acrylic Signboard', img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=400&q=80' },
    { category: 'Wedding', title: 'Royal Layered Mahogany Nikah Plaque', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80' },
    { category: 'Corporate', title: 'Precision CNC Router Decorative Wood Panels', img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=80' }
  ];

  const filteredPortfolio = activePortfolio === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activePortfolio);

  return (
    <div className="min-h-screen text-stone-800 bg-stone-50">
      
      {/* 1. HERO CONVERSION CORE (Priority 1 & 20) */}
      <section className="relative py-20 px-4 md:px-12 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/40 border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="bg-stone-900 text-amber-400 font-mono text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-xs">
                🛡️ ESTABLISHED SINCE 2019
              </span>
              <span className="bg-amber-100/70 text-amber-900 font-mono text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg border border-amber-200">
                🚀 FIRST LASER PLANT IN MAWANELLA
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-stone-900">
              Sri Lanka&apos;s Trusted <br />
              <span className="text-amber-600">Precision Manufacturing</span> Partner
            </h1>
            
            <p className="text-sm md:text-base text-stone-600 max-w-xl leading-relaxed">
              Pioneering custom laser fabrication across the island since 2019. We operate synchronized heavy-duty CNC routing, fiber metal engraving, and high-end corporate gift production pipelines with total precision.
            </p>

            {/* Value Proposition Tick Cross Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-bold text-stone-700 font-mono">
              <p className="flex items-center gap-1.5 text-emerald-700">✓ 2019 Pioneer Status</p>
              <p className="flex items-center gap-1.5 text-emerald-700">✓ Heavy-Duty Machinery</p>
              <p className="flex items-center gap-1.5 text-emerald-700">✓ Island-wide Delivery</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/products" className="px-6 py-3.5 bg-stone-900 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-stone-800 transition-all text-center">
                🛍️ Browse Catalog Products
              </Link>
              <Link href="/ai-booth" className="px-6 py-3.5 bg-amber-600 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-amber-700 transition-all text-center">
                🎨 Enter Creative Design Booth
              </Link>
            </div>
          </div>

          {/* NUMERICAL STATISTICS ENGINE (Priority 20) */}
          <div className="lg:col-span-5 bg-white border border-stone-200 p-6 rounded-3xl shadow-xl grid grid-cols-2 gap-4 relative">
            <div className="p-4 bg-stone-50 rounded-xl border">
              <p className="text-2xl font-black text-stone-900 font-mono">2019</p>
              <p className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wide mt-1">Founded Core</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border">
              <p className="text-2xl font-black text-amber-600 font-mono">500+</p>
              <p className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wide mt-1">Projects Shipped</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border">
              <p className="text-2xl font-black text-stone-900 font-mono">100+</p>
              <p className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wide mt-1">B2B Corporate Clients</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border">
              <p className="text-2xl font-black text-emerald-600 font-mono">100%</p>
              <p className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wide mt-1">Sri Lankan Owned</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OPERATIONAL DIVISION BI-FURCATION (Priority 3) */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black tracking-tight text-stone-900">Dual Industrial &amp; Creative Capabilities</h2>
          <p className="text-xs text-stone-500 max-w-md mx-auto">We explicitly segregate our manufacturing pipelines to address both volume corporate routing and artisan individual configurations smoothly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DIV A: INDUSTRIAL MACHINE PATHWAYS */}
          <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-3xl flex flex-col justify-between shadow-xs hover:shadow-lg transition-all">
            <div className="space-y-4">
              <span className="text-3xl">🏭</span>
              <h3 className="text-xl font-black text-stone-900">Commercial &amp; Industrial Solutions</h3>
              <p className="text-xs text-stone-500 leading-relaxed">High-capacity structural setups designed for structural engineering specs, architecture firms, and high-output branding marking matrices.</p>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-stone-600 bg-stone-50 p-3 rounded-xl border border-dashed">
                <div>• CNC Routing &amp; Carpentry</div>
                <div>• Fiber Metal Nameplates</div>
                <div>• Serial Number Tagging</div>
                <div>• QR Code Marking</div>
              </div>
            </div>
            <Link href="/quote?division=industrial" className="mt-6 w-full text-center py-3 bg-stone-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl">Request Industrial Quotation ➔</Link>
          </div>

          {/* DIV B: CREATIVE ARTISAN SERVICES */}
          <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-3xl flex flex-col justify-between shadow-xs hover:shadow-lg transition-all">
            <div className="space-y-4">
              <span className="text-3xl">🎁</span>
              <h3 className="text-xl font-black text-stone-900">Creative &amp; Personalized Keepsakes</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Bespoke luxury configurations engineered for milestone celebrations, events, interior name boards, and customized presentation gifts.</p>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-stone-600 bg-stone-50 p-3 rounded-xl border border-dashed">
                <div>• Royal Wedding Invites</div>
                <div>• Custom Awards &amp; Trophies</div>
                <div>• 3D Acrylic Letter Boards</div>
                <div>• Premium Mahogany Diaries</div>
              </div>
            </div>
            <Link href="/products" className="mt-6 w-full text-center py-3 bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl">Explore Creative Catalog ➔</Link>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC PORTFOLIO MATRIX LOG SHOWCASE (Priority 6 & 8) */}
      <section className="py-16 bg-stone-100 border-y border-stone-200 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-stone-200 pb-4">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-stone-900">Completed Projects Portfolio</h3>
              <p className="text-xs text-stone-500">Real, authentic workshop output items manufactured inside our local plant parameters.</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {['All', 'Industrial', 'Sign Boards', 'Wedding', 'Corporate'].map(tab => (
                <button key={tab} type="button" onClick={() => setActivePortfolio(tab)} className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${activePortfolio === tab ? 'bg-stone-900 text-white' : 'bg-white text-stone-500 border border-stone-200'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item, idx) => (
              <div key={idx} className="bg-white border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
                <div className="w-full aspect-video bg-stone-200 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[9px] font-mono font-bold bg-amber-50 text-amber-800 border px-2 py-0.5 rounded uppercase">{item.category}</span>
                  <h4 className="text-xs font-black text-stone-900 tracking-tight leading-snug pt-1">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HEAVY MACHINERY INFRASTRUCTURE TECH SPEC SHEET (Priority 5) */}
      <section className="py-20 px-4 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-1">
          <h3 className="text-2xl font-black tracking-tight text-stone-900">Our Production Technology Plant Capacity</h3>
          <p className="text-xs text-stone-500">We display our raw machine dimensions so industrial procurement agents can verify operational capability limits instantly.</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl shadow-xs overflow-hidden">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-stone-900 text-amber-400 font-mono font-bold uppercase tracking-wider text-[10px] border-b">
                <th className="p-4">Machine Instrumentation Profile</th>
                <th className="p-4">Maximum Work Bed Dimensions</th>
                <th className="p-4">Primary Application Processing Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-700">
              <tr className="hover:bg-stone-50/60"><td className="p-4 font-bold text-stone-900">🔧 Heavy Industrial CNC Router</td><td className="p-4 font-mono font-bold">8.0 × 4.0 Feet</td><td className="p-4">Thick Timber Carvings, MDF Boards, Alucobond Facades</td></tr>
              <tr className="hover:bg-stone-50/60"><td className="p-4 font-bold text-stone-900">⚡ Precision CO2 Laser Cutter</td><td className="p-4 font-mono font-bold">8.0 × 4.0 Feet</td><td className="p-4">Acrylic Floating Sheets, Display Letters, Wedding Card Stencils</td></tr>
              <tr className="hover:bg-stone-50/60"><td className="p-4 font-bold text-stone-900">🔬 Fiber High-Speed Metal Marker</td><td className="p-4 font-mono font-bold">2.0 × 2.0 Feet</td><td className="p-4">Stainless Steel Nameplates, Brass Tool IDs, QR Serialization</td></tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}