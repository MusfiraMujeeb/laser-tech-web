'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PremiumSplitLayerStudio() {
  const [design, setDesign] = useState({
    itemType: 'nikah-frame',
    shape: 'circular', // circular | rectangular | arched | hexagon
    woodTone: 'mahogany', // mahogany | walnut | oak
    fontStyle: 'script',
    topText: 'OUR WEDDING DAY',
    middleText: 'AMRAN & FATHIMA',
    bottomText: '2026.06.20'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDesign({ ...design, [e.target.name]: e.target.value });
  };

  const generatedBlueprintText = `[LASER TECH MULTI-LAYER MANIFEST]\n• Product Archetype: ${design.itemType.toUpperCase()}\n• Foreground Plate Shape: ${design.shape.toUpperCase()}\n• Base Wood Element: ${design.woodTone.toUpperCase()}\n• Font Profile: ${design.fontStyle.toUpperCase()}\n• Layer 01 Inscription (Top): "${design.topText}"\n• Layer 02 Inscription (Center): "${design.middleText}"\n• Layer 03 Inscription (Bottom): "${design.bottomText}"`;

  // Dynamic CSS Background handling for the Base Wood Layer
  const getWoodClass = () => {
    if (design.woodTone === 'mahogany') return 'from-amber-900 to-amber-950 border-amber-800';
    if (design.woodTone === 'walnut') return 'from-stone-800 to-stone-900 border-stone-700';
    return 'from-yellow-700 to-yellow-800 border-yellow-600';
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP WORKSPACE HEADER */}
        <div className="mb-10 border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-amber-500 font-mono text-[10px] uppercase tracking-widest font-bold">Studio Engine v4.0 // Dual-Layer Mode</span>
            <h1 className="text-3xl font-black tracking-tight text-white mt-1">Premium Spatial Configurator</h1>
          </div>
          <div className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 px-3 py-1.5 rounded-lg">
            ● SYSTEM PIPELINE ACCELERATED
          </div>
        </div>

        {/* MAIN STUDIO MULTI-LAYER INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE CONTROLS CONSOLE */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. LAYER MATERIAL BASES */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-500 flex items-center gap-2 font-mono">
                <span>01 //</span> Layer Material Options
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 font-mono">Backboard Wood Base</label>
                  <select name="woodTone" value={design.woodTone} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 focus:outline-none focus:border-amber-500">
                    <option value="mahogany">Premium Mahogany (Dark Rich Red)</option>
                    <option value="walnut">Exotic Walnut (Deep Charcoal Vibe)</option>
                    <option value="oak">Natural Oak (Warm Golden Grain)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 font-mono">Product Category</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 focus:outline-none focus:border-amber-500">
                    <option value="nikah-frame">Marriage / Nikah Certificate Frame</option>
                    <option value="signboard">Custom Home Floating Signboard</option>
                    <option value="token">Premium Dual-Layer Achievement Shield</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. GEOMETRY AND ACCENTS CONFIG */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-500 flex items-center gap-2 font-mono">
                <span>02 //</span> Geometric Plate & Font Config
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 font-mono">Foreground Plate Shape</label>
                  <select name="shape" value={design.shape} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 focus:outline-none focus:border-amber-500">
                    <option value="circular">Circular / Floating Disc</option>
                    <option value="rectangular">Classic Rectangular Plate</option>
                    <option value="arched">Arched Royal Dome Profile</option>
                    <option value="hexagon">Modern Geometric Hexagon</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 font-mono">Typography Engine</label>
                  <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 focus:outline-none focus:border-amber-500">
                    <option value="script">Elegant Calligraphy Script</option>
                    <option value="serif">Classic Editorial Serif</option>
                    <option value="sans">Minimalist Balanced Sans</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. CORE INSCRIPTION LAYER CODES */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-500 flex items-center gap-2 font-mono">
                <span>03 //</span> Engraving Text Placement Layers
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Top Alignment Text (Header)</label>
                  <input type="text" name="topText" maxLength={28} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 font-mono focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Center Alignment Text (Main Subject)</label>
                  <input type="text" name="middleText" maxLength={28} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 font-mono focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Bottom Alignment Text (Footer Date)</label>
                  <input type="text" name="bottomText" maxLength={28} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 font-mono focus:outline-none" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REVOLUTIONARY DUAL-LAYER PERSPECTIVE VIEWPORT */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block px-1 font-mono">
              🖥️ SPATIAL DEPTH RENDERING CORE CONSOLE
            </span>
            
            {/* DARK LUXURY OUTCROP GRID CANVAS STAGE */}
            <div className="w-full aspect-square bg-slate-950 border border-slate-800 rounded-3xl flex items-center justify-center p-6 relative overflow-hidden bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] shadow-2xl group">
              
              {/* Dynamic Environmental Ambient Lighting Core Glow */}
              <div className="absolute -top-12 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-500"></div>

              {/* 🪵 LAYER 1: BACKBOARD WOOD MATERIAL SOLID BASE CARD */}
              <div className={`w-80 h-80 rounded-2xl bg-gradient-to-br border-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative flex items-center justify-center p-6 transition-all duration-700 ${getWoodClass()}`}>
                
                {/* Simulated Laser Burn Outer Grooved Grid Path lines on backplate */}
                <div className="absolute inset-3 border border-black/10 rounded-xl pointer-events-none"></div>

                {/* 💎 LAYER 2: FOREGROUND FLOATING GLASS/ACRYLIC LAYER SHEET */}
                <div 
                  className={`w-64 h-64 bg-gradient-to-tr from-white/15 via-white/5 to-white/20 border border-white/30 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.85),inset_0_1px_15px_rgba(255,255,255,0.15)] flex flex-col items-center justify-center p-6 relative transition-all duration-500 backdrop-blur-md z-10 transform translate-y-[-8px] scale-[1.01] hover:translate-y-[-12px] group-hover:border-white/40 ${
                    design.shape === 'circular' ? 'rounded-full' :
                    design.shape === 'rectangular' ? 'rounded-xl' :
                    design.shape === 'hexagon' ? 'clip-path-hex' :
                    'rounded-b-lg rounded-t-[130px]' // Royal Arch Curves
                  }`}
                  style={{
                    clipPath: design.shape === 'hexagon' ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : ''
                  }}
                >
                  
                  {/* 🔩 4 METALLIC CORNER STUDS / SPACERS RENDER (Highly Satisfying Professional Touch) */}
                  {design.shape === 'rectangular' && (
                    <>
                      <div className="absolute top-2 left-2 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-200 border border-slate-600 rounded-full shadow-inner flex items-center justify-center"><div className="w-1 h-1 bg-slate-700 rounded-full"></div></div>
                      <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-200 border border-slate-600 rounded-full shadow-inner flex items-center justify-center"><div className="w-1 h-1 bg-slate-700 rounded-full"></div></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-200 border border-slate-600 rounded-full shadow-inner flex items-center justify-center"><div className="w-1 h-1 bg-slate-700 rounded-full"></div></div>
                      <div className="absolute bottom-2 right-2 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-200 border border-slate-600 rounded-full shadow-inner flex items-center justify-center"><div className="w-1 h-1 bg-slate-700 rounded-full"></div></div>
                    </>
                  )}
                  {design.shape === 'circular' && (
                    <>
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-200 border border-slate-600 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-slate-700 rounded-full"></div></div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-200 border border-slate-600 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-slate-700 rounded-full"></div></div>
                    </>
                  )}

                  {/* ✍️ CRUST FROSTED LASER CUT TEXT ENGRAVING OVERLAYS */}
                  <div className="w-full text-center space-y-4 select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] text-white/90">
                    
                    {/* Header Inscription Segment */}
                    <p className="text-[9px] font-bold tracking-[0.22em] font-mono opacity-60">
                      {design.topText || 'HEADER SPECS'}
                    </p>
                    
                    {/* Center Core Subject Names Segment */}
                    <h2 
                      className="text-sm md:text-lg font-black tracking-wide leading-tight px-2 drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]"
                      style={{ 
                        fontFamily: design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif',
                        textTransform: design.fontStyle === 'script' ? 'none' : 'uppercase'
                      }}
                    >
                      {design.fontStyle === 'script' ? design.middleText.toLowerCase() : design.middleText || 'MAIN INSCRIPTION'}
                    </h2>
                    
                    {/* Footer Date Inscription Segment */}
                    <p className="text-[10px] font-bold tracking-widest font-mono opacity-70">
                      {design.bottomText || 'FOOTER SPECS'}
                    </p>

                  </div>

                </div>

              </div>

              {/* Lower Canvas Spec tags overlays */}
              <div className="absolute bottom-4 left-4 bg-slate-900 border border-slate-800 text-slate-500 px-3 py-1 rounded-md text-[9px] font-mono tracking-wider">
                LASER COMPILER: ACTIVE DUAL-PASS // MATRIX RENDER
              </div>
            </div>

            {/* PIPELINE DISPATCH FORWARD LINK OVERLAY TRIGGER */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl text-center">
              <Link 
                href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`}
                className="w-full text-slate-950 font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md text-center inline-block transition-all bg-amber-500 hover:bg-amber-600 cursor-pointer"
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