'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HighConversionMarketplaceHome() {
  const [activeGallery, setActiveGallery] = useState('All');

  const galleryItems = [
    { category: 'Industrial', title: 'High-Speed Fiber Laser Metal Part Serialization', material: '304 Stainless Steel', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80' },
    { category: 'Signage', title: '3D Floating Mirror Gold Acrylic Corporate Signboard', material: '8mm Cast Acrylic / Mahogany Base', img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=500&q=80' },
    { category: 'Creative', title: 'Bespoke Multi-Layered Royal Wedding Invitation Plaque', material: 'Cherry Wood Wrapper & Gold Acrylic Monogram', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80' },
    { category: 'CNC Routing', title: 'Intricate Architectural MDF Screen Divider Wall Panel', material: '16mm Premium Moisture-Resistant MDF', img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=500&q=80' }
  ];

  const filteredItems = activeGallery === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeGallery);

  const handleProfileDownload = () => {
    alert('Request intercepted by system core. Initiating fast, secure download sequence for LASER_TECH_COMPANY_PROFILE.pdf.');
  };

  return (
    <div className="min-h-screen text-stone-800 bg-stone-50 selection:bg-amber-500 selection:text-white">
      
      {/* 1. CINEMATIC HERO MATRICES WITH HISTORICAL PROOF OVERLAYS */}
      <section className="relative py-24 px-4 md:px-12 overflow-hidden border-b border-stone-200 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="bg-stone-900 text-amber-400 font-mono text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-md border border-stone-800">
                ⏳ ESTABLISHED SINCE 2019
              </span>
              <span className="bg-amber-100 text-amber-900 font-mono text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded-lg border border-amber-200">
                🇱🇰 PIONEER LASER PLANT IN MAWANELLA
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-stone-900">
              Sri Lanka&apos;s Trusted <br />
              <span className="text-amber-600">Precision Manufacturing</span> Partner
            </h1>
            
            <p className="text-sm md:text-base text-stone-600 max-w-xl leading-relaxed font-medium">
              Transforming complex engineering concepts and creative visions into flawless physical reality. We operate heavy-duty 8×4 ft CNC routing beds, fiber metal marking cells, and boutique customization lines with absolute accuracy.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/products" className="px-6 py-4 bg-stone-900 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-stone-800 transition-all text-center transform hover:-translate-y-0.5">
                Explore Products Catalog
              </Link>
              <Link href="/ai-booth" className="px-6 py-4 bg-amber-600 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-amber-700 transition-all text-center transform hover:-translate-y-0.5">
                Open Customizer Booth
              </Link>
              <button 
                type="button" 
                onClick={handleProfileDownload}
                className="px-6 py-4 bg-white text-stone-700 border border-stone-300 font-black text-xs uppercase tracking-wider rounded-xl shadow-sm hover:bg-stone-50 transition-all cursor-pointer text-center"
              >
                Download Company Profile
              </button>
            </div>
          </div>

          {/* DYNAMIC METRIC ACCELERATOR GRID LOGS CARD */}
          <div className="lg:col-span-5 bg-white border border-stone-200 p-6 rounded-3xl shadow-xl grid grid-cols-2 gap-4 relative">
            <div className="p-4 bg-stone-50 border rounded-xl">
              <p className="text-2xl font-black text-stone-900 font-mono">2019</p>
              <p className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider mt-1">Pioneer Launch</p>
            </div>
            <div className="p-4 bg-stone-50 border rounded-xl">
              <p className="text-2xl font-black text-amber-600 font-mono">500+</p>
              <p className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider mt-1">Projects Shipped</p>
            </div>
            <div className="p-4 bg-stone-50 border rounded-xl">
              <p className="text-2xl font-black text-stone-900 font-mono">100+</p>
              <p className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider mt-1">B2B Clients Serviced</p>
            </div>
            <div className="p-4 bg-stone-50 border rounded-xl">
              <p className="text-2xl font-black text-emerald-600 font-mono">100%</p>
              <p className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider mt-1">Island-wide COD</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SPLIT-SCREEN AUDIENCE BI-FURCATION PORTAL LINK (Objective 3 Mapping) */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black tracking-tight text-stone-900">Select Your Production Channel</h2>
          <p className="text-xs text-stone-500 max-w-md mx-auto">We split our operational focus to serve heavy industrial procurement orders and bespoke personal design lines with equal efficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* COMMERCIAL INDUSTRIAL解决方案 */}
          <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-3xl flex flex-col justify-between shadow-xs hover:shadow-xl transition-all border-t-4 border-t-stone-900">
            <div className="space-y-4">
              <span className="text-3xl block">Industrial Solutions</span>
              <h3 className="text-xl font-black text-stone-900">Commercial &amp; Architectural Engineering</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Built for interior designers, general contractors, and manufacturing operations. We execute volume runs matching absolute engineering criteria.</p>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-stone-600 bg-stone-50 p-3 rounded-xl border border-dashed">
                <div>• Heavy 8x4 CNC Routing</div>
                <div>• Metal Plate Fiber Laser Marking</div>
                <div>• Serial QR Inscription Tagging</div>
                <div>• Multi-Layered Acrylic Branding</div>
              </div>
            </div>
            <Link href="/quote?division=industrial" className="mt-6 w-full text-center py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl">Request Custom Engineering Estimate ➔</Link>
          </div>

          {/* RETAIL ARTISAN TOKENS CREATIVE FLOW */}
          <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-3xl flex flex-col justify-between shadow-xs hover:shadow-xl transition-all border-t-4 border-t-amber-500">
            <div className="space-y-4">
              <span className="text-3xl block">Creative Solutions</span>
              <h3 className="text-xl font-black text-stone-900">Personal &amp; Luxury Event Keepsakes</h3>
              <p className="text-xs text-stone-500 leading-relaxed">Artisan layered works, event accessories, custom signage displays, and personalized gifts made with beautiful finish combinations.</p>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-stone-600 bg-stone-50 p-3 rounded-xl border border-dashed">
                <div>• Layered Nikah Clock Frames</div>
                <div>• Premium Mahogany Notebooks</div>
                <div>• Dynamic Edge-Lit Acrylic Lamps</div>
                <div>• High-End Corporate Trophies</div>
              </div>
            </div>
            <Link href="/products" className="mt-6 w-full text-center py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl">Browse Personal Store Catalog ➔</Link>
          </div>
        </div>
      </section>

      {/* 3. EXPERT Portfolio Showcase Grid WITH DYNAMIC MAPPING */}
      <section className="py-16 bg-stone-100 border-y border-stone-200 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-stone-200 pb-4">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-stone-900">Completed Technical Works Portfolio</h3>
              <p className="text-xs text-stone-500">Real items manufactured inside our Mawanella facility, displaying precise edge tracking values.</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {['All', 'Industrial', 'Signage', 'Creative', 'CNC Routing'].map(tab => (
                <button key={tab} type="button" onClick={() => setActiveGallery(tab)} className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${activeGallery === tab ? 'bg-stone-900 text-white' : 'bg-white text-stone-500 border border-stone-200'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group">
                <div className="w-full aspect-video bg-stone-200 relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[9px] font-mono font-bold bg-amber-50 text-amber-900 border px-2 py-0.5 rounded uppercase">{item.category}</span>
                  <h4 className="text-xs font-black text-stone-900 tracking-tight leading-snug pt-1">{item.title}</h4>
                  <p className="text-[10px] font-mono text-stone-400 font-bold pt-1">Material Base: {item.material}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL MACHINERY PLANT LOG CAPACITY TABLES */}
      <section className="py-20 px-4 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-1">
          <h3 className="text-2xl font-black tracking-tight text-stone-900">Machinery Infrastructure Capabilities</h3>
          <p className="text-xs text-stone-500">We openly list our physical equipment dimensions so industrial procurement agents can verify our workshop bounds instantly.</p>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl shadow-xs overflow-hidden">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-stone-900 text-amber-400 font-mono font-bold uppercase tracking-wider text-[10px] border-b border-stone-950">
                <th className="p-4">Machine Instrumentation Profile</th>
                <th className="p-4">Maximum Processing Bed Dimensions</th>
                <th className="p-4">Primary Application Capabilities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-700">
              <tr className="hover:bg-stone-50/60"><td className="p-4 font-bold text-stone-900">🪵 Heavy Duty Industrial CNC Router</td><td className="p-4 font-mono font-bold text-stone-900">8.0 × 4.0 Feet Max Bed</td><td className="p-4">Architectural Screen Panels, MDF Trims, Solid Timber Carvings</td></tr>
              <tr className="hover:bg-stone-50/60"><td className="p-4 font-bold text-stone-900">⚡ High-Power CO2 Laser Cutter Cells</td><td className="p-4 font-mono font-bold text-stone-900">8.0 × 4.0 Feet Bed Shell</td><td className="p-4">Thick Cast Acrylic Signage, Stencil Patterns, Intricate Filigree Cuts</td></tr>
              <tr className="hover:bg-stone-50/60"><td className="p-4 font-bold text-stone-900">🔬 High-Frequency Fiber Laser Engraver</td><td className="p-4 font-mono font-bold text-stone-900">2.0 × 2.0 Feet Marking Frame</td><td className="p-4">Stainless Steel Serialization Nameplates, Brass IDs, Aluminum Tool Tagging</td></tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}