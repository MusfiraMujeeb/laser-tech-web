'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ElegantLightStudio() {
  const [design, setDesign] = useState({
    itemType: 'nikah-frame',
    shape: 'circular', // circular | rectangular | arched | hexagon
    woodTone: 'mahogany', // mahogany | walnut | oak
    acrylicFinish: 'frosted', // frosted | gold-infill
    mountingStyle: 'stand', // stand | ribbon-holes
    fontStyle: 'script',
    topText: 'OUR WEDDING DAY',
    middleText: 'AMRAN & FATHIMA',
    bottomText: '2026.06.20'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDesign({ ...design, [e.target.name]: e.target.value });
  };

  const generatedBlueprintText = `[LASER TECH PREMIUM SELECTION MANIFEST]
• Product Archetype: ${design.itemType.toUpperCase()}
• Foreground Geometric Plate Shape: ${design.shape.toUpperCase()}
• Base Wood Component: ${design.woodTone.toUpperCase()}
• Acrylic Treatment: ${design.acrylicFinish.toUpperCase()}
• Hardware/Mounting Assembly: ${design.mountingStyle.toUpperCase()}
• Typography Profile Selection: ${design.fontStyle.toUpperCase()}
• Layer 01 Inscription (Top Line): "${design.topText}"
• Layer 02 Inscription (Core Subject): "${design.middleText}"
• Layer 03 Inscription (Bottom Line): "${design.bottomText}"`;

  // Dynamic CSS Background vectors matching light, organic tones
  const getWoodClass = () => {
    if (design.woodTone === 'mahogany') return 'from-orange-950 via-red-950 to-amber-950 border-orange-900';
    if (design.woodTone === 'walnut') return 'from-stone-800 to-stone-900 border-stone-700';
    return 'from-amber-100 via-amber-200 to-amber-300 border-amber-300'; // Oak Finishes
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-stone-50 text-stone-800 selection:bg-amber-100 selection:text-amber-900">
      <div className="max-w-7xl mx-auto">
        
        {/* LIGHT WORKSPACE HEADER CONTROLS */}
        <div className="mb-10 border-b border-stone-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-widest font-bold">Studio Engine v4.2 // Light Canvas Grid</span>
            <h1 className="text-3xl font-black tracking-tight text-stone-900 mt-1">Bespoke Design Customizer</h1>
          </div>
          <div className="text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg font-bold">
            ● Premium Studio Mode Active
          </div>
        </div>

        {/* MAIN STUDIO LAYOUT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: MINIMALIST LIGHT CONTROL PANELS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. MATERIAL & STRUCTURAL BASE SELECTORS */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>01 //</span> Core Material & Base
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1.5 font-mono">Backboard Wood Base</label>
                  <select name="woodTone" value={design.woodTone} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-medium">
                    <option value="mahogany">Premium Mahogany Wood</option>
                    <option value="walnut">Deep Charcoal Walnut Wood</option>
                    <option value="oak">Natural Warm Oak Wood</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1.5 font-mono">Product Profile</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-medium">
                    <option value="nikah-frame">Marriage / Nikah Certificate Frame</option>
                    <option value="signboard">Custom Home Floating Signboard</option>
                    <option value="token">Bespoke Achievement Shield Award</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. GEOMETRIC INDEPENDENT ACCENT SELECTIONS */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>02 //</span> Physical Finishes & Hardware
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1.5 font-mono">Foreground Plate Shape</label>
                  <select name="shape" value={design.shape} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-medium">
                    <option value="circular">Circular / Floating Disc</option>
                    <option value="rectangular">Classic Rectangular Plate</option>
                    <option value="arched">Arched Royal Dome Profile</option>
                    <option value="hexagon">Modern Geometric Hexagon</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1.5 font-mono">Acrylic Lettering Style</label>
                  <select name="acrylicFinish" value={design.acrylicFinish} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-medium">
                    <option value="frosted">Frosted Laser Etch (Satin Matte)</option>
                    <option value="gold-infill">Premium Mirror Gold Acrylic Infill</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1.5 font-mono">Mounting Assembly</label>
                  <select name="mountingStyle" value={design.mountingStyle} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-medium">
                    <option value="stand">Integrated Desktop Easel Stand</option>
                    <option value="ribbon-holes">Laser-Cut Holes (For Hanger Ribbon)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1.5 font-mono">Typography Variant</label>
                  <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-medium">
                    <option value="script">Elegant Calligraphy Script</option>
                    <option value="serif">Premium Editorial Serif</option>
                    <option value="sans">Minimalist Balanced Sans</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. MULTI-LINE WORDING INJECTIONS */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>03 //</span> Engraving Text Layers
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Top Inscription (Header Text)</label>
                  <input type="text" name="topText" maxLength={28} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Center Inscription (Main Subjects Name)</label>
                  <input type="text" name="middleText" maxLength={28} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Bottom Inscription (Event Date / Location)</label>
                  <input type="text" name="bottomText" maxLength={28} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REFINED HIGH-END LIGHT COHESIVE PREVIEW CARD */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block px-1 font-mono">
              🖥_ Live Presentation Studio Preview
            </span>
            
            {/* MINIMALIST LIFESTYLE GRID BACKBOARD STAGE */}
            <div className="w-full aspect-square bg-stone-100 border border-stone-200 rounded-3xl flex items-center justify-center p-6 relative overflow-hidden bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] shadow-inner group">
              
              {/* Dynamic Bright Studio Ambient Spotlighting */}
              <div className="absolute -top-10 left-1/3 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>

              {/* 🪵 LAYER 1: SOLID BACKBOARD CARD BASE */}
              <div className={`w-80 h-80 rounded-2xl bg-gradient-to-br border-2 shadow-[0_20px_40px_rgba(44,41,38,0.12)] relative flex items-center justify-center p-6 transition-all duration-700 ${getWoodClass()}`}>
                
                {/* 🎀 MORE THINGS TO THINGS: Laser-Cut Ribbon Mounting Holes Overlay */}
                {design.mountingStyle === 'ribbon-holes' && (
                  <g className="absolute top-3 inset-x-0 flex justify-between px-10 pointer-events-none opacity-90">
                    <div className="w-3.5 h-3.5 bg-stone-100 border border-stone-300 rounded-full shadow-inner flex items-center justify-center"><div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div></div>
                    <div className="w-3.5 h-3.5 bg-stone-100 border border-stone-300 rounded-full shadow-inner flex items-center justify-center"><div className="w-1.5 h-1.5 bg-stone-900 rounded-full"></div></div>
                  </g>
                )}

                {/* 💎 LAYER 2: FLOATING SATIN/MIRROR GLASS GLOSSY ACRYLIC COMPONENT OVERLAY */}
                <div 
                  className={`w-64 h-64 border border-white/40 flex flex-col items-center justify-center p-6 relative transition-all duration-500 z-10 transform translate-y-[-4px] scale-[1.01] hover:translate-y-[-8px] ${
                    design.acrylicFinish === 'gold-infill' 
                      ? 'bg-gradient-to-tr from-amber-200/40 via-amber-100/30 to-amber-300/40 shadow-[0_25px_45px_rgba(0,0,0,0.18),inset_0_1px_10px_rgba(255,255,255,0.4)]'
                      : 'bg-white/20 backdrop-blur-md shadow-[0_25px_45px_rgba(0,0,0,0.15),inset_0_1px_10px_rgba(255,255,255,0.25)]'
                  } ${
                    design.shape === 'circular' ? 'rounded-full' :
                    design.shape === 'rectangular' ? 'rounded-xl' :
                    design.shape === 'hexagon' ? 'clip-path-hex' :
                    'rounded-b-lg rounded-t-[130px]' // Royal Arch curves
                  }`}
                  style={{
                    clipPath: design.shape === 'hexagon' ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : ''
                  }}
                >
                  
                  {/* 🔩 Metallic Corner Screw Studs */}
                  {design.shape === 'rectangular' && (
                    <>
                      <div className="absolute top-2.5 left-2.5 w-3 h-3 bg-gradient-to-r from-stone-200 to-stone-50 border border-stone-300 rounded-full flex items-center justify-center shadow-inner"><div className="w-1 h-1 bg-stone-400 rounded-full"></div></div>
                      <div className="absolute top-2.5 right-2.5 w-3 h-3 bg-gradient-to-r from-stone-200 to-stone-50 border border-stone-300 rounded-full flex items-center justify-center shadow-inner"><div className="w-1 h-1 bg-stone-400 rounded-full"></div></div>
                      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 bg-gradient-to-r from-stone-200 to-stone-50 border border-stone-300 rounded-full flex items-center justify-center shadow-inner"><div className="w-1 h-1 bg-stone-400 rounded-full"></div></div>
                      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 bg-gradient-to-r from-stone-200 to-stone-50 border border-stone-300 rounded-full flex items-center justify-center shadow-inner"><div className="w-1 h-1 bg-stone-400 rounded-full"></div></div>
                    </>
                  )}

                  {/* ✍️ DYNAMIC ENGRAVED TEXT LAYERS OVERLAYS */}
                  <div 
                    className={`w-full text-center space-y-4 select-none drop-shadow-sm ${
                      design.acrylicFinish === 'gold-infill' 
                        ? 'text-amber-900 font-bold opacity-90' 
                        : 'text-stone-800 opacity-80'
                    }`}
                  >
                    {/* Header Inscription Line Element */}
                    <p className="text-[9px] font-bold tracking-[0.25em] font-mono uppercase opacity-60">
                      {design.topText || 'HEADER LAYER'}
                    </p>
                    
                    {/* Core Subjects Typography Line Element */}
                    <h2 
                      className="text-sm md:text-lg font-black tracking-wide leading-tight px-2"
                      style={{ 
                        fontFamily: design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif',
                        textTransform: design.fontStyle === 'script' ? 'none' : 'uppercase'
                      }}
                    >
                      {design.fontStyle === 'script' ? design.middleText.toLowerCase() : design.middleText || 'MAIN HEAD SUBJECT'}
                    </h2>
                    
                    {/* Footer Date Line Element */}
                    <p className="text-[10px] font-bold tracking-widest font-mono opacity-70">
                      {design.bottomText || 'DATE LAYER'}
                    </p>

                  </div>

                </div>

                {/* 🪵 MORE THINGS TO THINGS: Integrated Countertop Wooden Stand Base support render */}
                {design.mountingStyle === 'stand' && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-44 h-4 bg-stone-900/90 rounded-md border-t border-stone-700 shadow-md z-20"></div>
                )}

              </div>

            </div>

            {/* SYNC DISPATCH QUOTATION ROUTE PIPELINE PANEL */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs text-center">
              <p className="text-[11px] text-stone-400 mb-4 font-medium leading-relaxed">
                Confirm your selections. Your material choices, custom lettering layers, and mountings specifications will be packaged instantly straight into the quotation manifest details.
              </p>
              <Link 
                href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`}
                className="w-full text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md text-center inline-block transition-all hover:bg-stone-900 bg-amber-600 cursor-pointer"
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