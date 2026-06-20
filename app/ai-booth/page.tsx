'use client';

import { useState } from 'react';
import Link from 'next/link';

// Pre-set premium products with real-world curated assets
const PREMIUM_CATALOG = [
  {
    id: 'nikah',
    title: 'Premium Mahogany Nikah Frame',
    description: 'Rich dark mahogany wood with a traditional smooth finish. Perfect for elegant cursive scripts and timeless wedding frames.',
    material: 'Natural Mahogany Wood',
    bgImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    textColor: '#2a1103',
    textPosition: 'top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
  },
  {
    id: 'signboard',
    title: 'Minimalist Frosted Acrylic Sign',
    description: 'Sleek, transparent satin perspex that gives a beautiful glass-like glossy finish. Excellent for modern home signage and offices.',
    material: 'Glossy Clear Acrylic',
    bgImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    textColor: '#1e293b',
    textPosition: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
  },
  {
    id: 'trophy',
    title: 'Geometric Corporate Shield Award',
    description: 'A sharp, modern multi-layered token combining matte board bases with polished accents. Ideal for bold corporate lettering.',
    material: 'Multi-Layer Matte MDF',
    bgImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80',
    textColor: '#1a0a02',
    textPosition: 'bottom-1/4 left-1/2 -translate-x-1/2 text-center'
  }
];

export default function RealProductStudio() {
  const [selectedProduct, setSelectedProduct] = useState(PREMIUM_CATALOG[0]);
  const [fontStyle, setFontStyle] = useState('script');
  const [topText, setTopText] = useState('OUR WEDDING DAY');
  const [middleText, setMiddleText] = useState('AMRAN & FATHIMA');
  const [bottomText, setBottomText] = useState('2026.06.20');

  const generatedBlueprintText = `[LASER TECH CONFIGURATION MATRIX]\n• Base Archetype: ${selectedProduct.title.toUpperCase()}\n• Material Composition: ${selectedProduct.material}\n• Typography Choice: ${fontStyle.toUpperCase()}\n• Line 1 (Header text): "${topText}"\n• Line 2 (Subject text): "${middleText}"\n• Line 3 (Footer text): "${bottomText}"`;

  return (
    <div className="min-h-screen py-10 px-4 md:px-8" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DISPLAY PANEL */}
        <div className="mb-10 border-b pb-6" style={{ borderColor: 'var(--studio-border)' }}>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Interactive Customization Studio</h1>
          <p className="text-xs text-slate-500 mt-1">Select an authentic base catalog design model below and layout your lettering placement arrays dynamically.</p>
        </div>

        {/* WORKSPACE CONTENT LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTROL INTERFACE */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* STEP 1: CHOOSE THE REAL WORKSHOP MODEL */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-3" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400">1. Select Base Workshop Model</h3>
              <div className="space-y-2.5">
                {PREMIUM_CATALOG.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => setSelectedProduct(prod)}
                    className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-center gap-4 ${selectedProduct.id === prod.id ? 'border-slate-800 bg-slate-50 font-bold ring-4 ring-slate-100' : 'border-slate-100 hover:bg-slate-50'}`}
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                      <img src={prod.bgImage} alt={prod.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-800">{prod.title}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium truncate max-w-[240px]">{prod.material}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: CHOOSE FONT PROFILE */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-3" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400">2. Select Typography Style</h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'script', label: 'Elegant Calligraphy' },
                  { id: 'serif', label: 'Premium Serif' },
                  { id: 'sans', label: 'Modern Clean' }
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFontStyle(f.id)}
                    className={`py-2 px-1 text-xs rounded-lg border font-bold text-center transition-all ${fontStyle === f.id ? 'bg-slate-800 text-white border-slate-800' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 3: CUSTOM TEXT SEGMENT FIELDS */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">3. Layout Engraving Wording</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Top Header Line</label>
                  <input type="text" maxLength={28} value={topText} onChange={(e) => setTopText(e.target.value.toUpperCase())} className="w-full px-4 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Center Subject Names</label>
                  <input type="text" maxLength={28} value={middleText} onChange={(e) => setMiddleText(e.target.value.toUpperCase())} className="w-full px-4 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Bottom Date Line</label>
                  <input type="text" maxLength={28} value={bottomText} onChange={(e) => setBottomText(e.target.value.toUpperCase())} className="w-full px-4 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono focus:outline-none" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STUNNING REAL-WORLD MOCKUP DISPLAY VIEWPORT */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block px-1">📸 Real-World Material Preview</span>
            
            {/* CONTAINER MOCKUP VIEWPORT */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-lg select-none group">
              
              {/* High-Fidelity Product Backdrop Asset */}
              <img 
                src={selectedProduct.bgImage} 
                alt={selectedProduct.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out" 
              />
              
              {/* Semi-dark vignette shader layer to ensure font readability */}
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300"></div>

              {/* 🟢 DYNAMIC LIVE OVERLAY ZONE TEXT */}
              <div className={`absolute w-full px-6 pointer-events-none drop-shadow-md select-none ${selectedProduct.textPosition}`}>
                <div className="space-y-2 mix-blend-multiply opacity-80" style={{ color: selectedProduct.textColor }}>
                  
                  {/* Top Text Layer Element */}
                  <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase font-mono opacity-75">
                    {topText || ' '}
                  </p>
                  
                  {/* Core Middle Subject Text Element */}
                  <h2 
                    className="text-base md:text-2xl font-black tracking-wide uppercase"
                    style={{ 
                      fontFamily: fontStyle === 'serif' ? 'Georgia, serif' : fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif',
                      textTransform: fontStyle === 'script' ? 'none' : 'uppercase'
                    }}
                  >
                    {fontStyle === 'script' ? middleText.toLowerCase() : middleText || ' '}
                  </h2>
                  
                  {/* Bottom Text Layer Element */}
                  <p className="text-[10px] md:text-xs font-medium tracking-wider font-mono opacity-75">
                    {bottomText || ' '}
                  </p>
                  
                </div>
              </div>

              {/* Material Specs Floating Banner Tag */}
              <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white backdrop-blur-xs px-3 py-1.5 rounded-xl text-[10px] font-bold">
                🛠️ Material: {selectedProduct.material}
              </div>
            </div>

            {/* PRODUCT SPECIFICATION DESCRIPTION TEXT BOX */}
            <div className="bg-slate-50 border p-4 rounded-xl text-xs text-slate-600 italic leading-relaxed">
              "{selectedProduct.description}"
            </div>

            {/* DISPATCH SPECIFICATION FORWARD LINK BUTTON */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs text-center" style={{ borderColor: 'var(--studio-border)' }}>
              <Link 
                href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`}
                className="w-full text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md text-center inline-block transition-all hover:bg-slate-900 bg-slate-800 cursor-pointer"
              >
                Forward Custom Blueprint Specification Manifest →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}