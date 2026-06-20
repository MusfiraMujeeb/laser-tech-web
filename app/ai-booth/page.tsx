'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UltimateDynamicLaserStudio() {
  const [design, setDesign] = useState({
    itemType: 'nikah-clock-frame', // nikah-clock-frame | notebook | signboard
    shape: 'circular', // circular | arched | rectangular | oval
    woodTone: 'mahogany', // mahogany | oak-mdf | walnut
    crownStyle: 'royal', // royal | classic | minimalist | none
    hasClock: 'true', // true | false
    hasCalendar: 'true', // true | false
    ledColor: 'warm-white', // warm-white | golden-yellow | blush-pink | none
    fontStyle: 'script',
    topText: 'OUR WEDDING DAY',
    middleText: 'A & F', 
    bottomText: '2026.06.20'
  });

  const [realisticView, setRealisticView] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Smart override hooks to update layout boundaries automatically based on selected product type
    if (name === 'itemType') {
      if (value === 'notebook') {
        setDesign(prev => ({
          ...prev,
          itemType: value,
          shape: 'rectangular',
          topText: 'PERSONAL DIARY',
          middleText: 'M. MUJEEB',
          bottomText: 'ESTABLISHED 2026'
        }));
        return;
      } else if (value === 'signboard') {
        setDesign(prev => ({
          ...prev,
          itemType: value,
          shape: 'rectangular',
          topText: 'THE RESIDENCE',
          middleText: 'NO 45',
          bottomText: 'COLOMBO'
        }));
        return;
      } else {
        setDesign(prev => ({
          ...prev,
          itemType: value,
          shape: 'circular',
          topText: 'OUR WEDDING DAY',
          middleText: 'A & F',
          bottomText: '2026.06.20'
        }));
        return;
      }
    }

    setDesign(prev => ({ ...prev, [name]: value }));
  };

  const generatedBlueprintText = `[LASER TECH MASTER PRODUCTION BLUEPRINT]
• Product Line Model: ${design.itemType.toUpperCase()}
• Frame Shape Profile: ${design.shape.toUpperCase()}
• Base Wood Material: ${design.woodTone.toUpperCase()}
• Crown Monogram Accent: ${design.crownStyle.toUpperCase()}
• Clock Integration: ${design.hasClock === 'true' ? 'YES' : 'NO'}
• Calendar Highlight: ${design.hasCalendar === 'true' ? 'YES' : 'NO'}
• LED Backlit Configuration: ${design.ledColor.toUpperCase()}
• Selected Typography Engine: ${design.fontStyle.toUpperCase()}
• Inscription Layer 01 (Top Line): "${design.topText}"
• Inscription Layer 02 (Center Core): "${design.middleText}"
• Inscription Layer 03 (Bottom Line): "${design.bottomText}"`;

  // Wood tone styling variations
  const getWoodClass = () => {
    if (design.woodTone === 'mahogany') return 'from-orange-950 via-red-950 to-amber-950 border-orange-900 text-amber-100';
    if (design.woodTone === 'walnut') return 'from-stone-800 to-stone-900 border-stone-700 text-stone-100';
    return 'from-amber-100 via-amber-200 to-amber-300 border-amber-400 text-amber-950'; // Oak MDF Look
  };

  // Backlit LED glow mapping properties
  const getLedGlowClass = () => {
    if (!realisticView || design.ledColor === 'none') return 'shadow-[0_15px_35px_rgba(0,0,0,0.12)] border-stone-200';
    if (design.ledColor === 'warm-white') return 'shadow-[0_0_45px_rgba(255,253,245,0.65)] ring-4 ring-orange-100/20';
    if (design.ledColor === 'golden-yellow') return 'shadow-[0_0_50px_rgba(245,158,11,0.55)] ring-4 ring-amber-200/30';
    return 'shadow-[0_0_45px_rgba(244,63,94,0.45)] ring-4 ring-rose-100/20'; // Pink
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-stone-50 text-stone-800 selection:bg-amber-100 selection:text-amber-900">
      <div className="max-w-7xl mx-auto">
        
        {/* WORKSPACE CONTROLS TERMINAL HEADER */}
        <div className="mb-10 border-b border-stone-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-widest font-bold">Studio Suite Engine v5.0 // Advanced Canvas Multiplexing</span>
            <h1 className="text-3xl font-black tracking-tight text-stone-900 mt-1">Bespoke Customization Center</h1>
          </div>
          
          <div className="bg-white border p-1 rounded-xl shadow-xs inline-flex items-center gap-1">
            <button 
              type="button" 
              onClick={() => setRealisticView(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${!realisticView ? 'bg-stone-800 text-white shadow-sm' : 'text-stone-600 hover:bg-stone-50'}`}
            >
              📐 CAD Wireframe
            </button>
            <button 
              type="button" 
              onClick={() => setRealisticView(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${realisticView ? 'bg-amber-600 text-white shadow-sm' : 'text-stone-600 hover:bg-stone-50'}`}
            >
              📸 Realistic Material View
            </button>
          </div>
        </div>

        {/* MAIN STUDIO GRID CONFIGURATION SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: FORM CONSOLE */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* STAGE 1: SYSTEM LINE & MATERIAL SPECS */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>01 //</span> Product Line & Base Stock
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Product Target Catalog</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-bold">
                    <option value="nikah-clock-frame">3D Nikah Certificate Frame (Clock/Calendar)</option>
                    <option value="notebook">A5 Premium Engraved Wooden Notebook</option>
                    <option value="signboard">Custom Landscape Architecture Signboard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Core Wood Component</label>
                  <select name="woodTone" value={design.woodTone} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="mahogany">Premium Natural Mahogany Core</option>
                    <option value="oak-mdf">Oak-Veneered MDF (Golden Finish)</option>
                    <option value="walnut">Exotic Deep Dark Walnut Core</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STAGE 2: PHYSICAL ACCESSORIES & HOUSING ACCENTS */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>02 //</span> Hardware Modular Accessories
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Backboard Shape Frame</label>
                  <select name="shape" disabled={design.itemType !== 'nikah-clock-frame'} value={design.shape} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold disabled:opacity-50">
                    <option value="circular">Circular / Rounded Edge</option>
                    <option value="arched">Arched Dome Profile</option>
                    <option value="rectangular">Classic Rectangular Board</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Backlit LED Module Glow</label>
                  <select name="ledColor" disabled={design.itemType === 'notebook'} value={design.ledColor} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold disabled:opacity-50">
                    <option value="warm-white">Soft Warm White Backlighting</option>
                    <option value="golden-yellow">Bright Gold Candescent Glow</option>
                    <option value="blush-pink">Romantic Blush Pink Glow</option>
                    <option value="none">No LED Backlighting Circuit</option>
                  </select>
                </div>
              </div>

              {design.itemType === 'nikah-clock-frame' && (
                <div className="grid grid-cols-3 gap-4 pt-1">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Crown Top Icon</label>
                    <select name="crownStyle" value={design.crownStyle} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                      <option value="royal">Royal Crown</option>
                      <option value="classic">Vintage Tiara</option>
                      <option value="none">No Crown</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Center Clock Unit</label>
                    <select name="hasClock" value={design.hasClock} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                      <option value="true">Integrate Clock</option>
                      <option value="false">Remove Clock</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Calendar Highlight</label>
                    <select name="hasCalendar" value={design.hasCalendar} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                      <option value="true">Show Grid</option>
                      <option value="false">Hide Grid</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* STAGE 3: ENGRAVING TEXT CONTENT LAYERS */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>03 //</span> Text Placement Overlay Inscriptions
              </h3>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4 items-end">
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Layer 01: Top Heading Line</label>
                    <input type="text" name="topText" maxLength={28} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Font Engine</label>
                    <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-2 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-bold">
                      <option value="script">Calligraphy</option>
                      <option value="serif">Serif Style</option>
                      <option value="sans">Modern Sans</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Layer 02: Core Subject Text</label>
                    <input type="text" name="middleText" maxLength={24} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-center text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-bold tracking-widest" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Layer 03: Footer Meta Line</label>
                    <input type="text" name="bottomText" maxLength={24} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-center text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REVOLUTIONARY DYNAMIC MULTIPLEX PREVIEW SYSTEM CANVAS */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block px-1 font-mono">
              🖥️ Live Canvas Viewport Module
            </span>
            
            {/* STAGE ENVIRONMENT WRAPPER */}
            <div className="w-full aspect-square bg-stone-100 border border-stone-200 rounded-3xl flex items-center justify-center p-6 relative overflow-hidden bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] shadow-inner">
              
              <div className="relative flex items-center justify-center">
                
                {/* 📔 DYNAMIC ITEM CONDITION 01: Notebook Left Spiral Ring Hardware Binder */}
                {design.itemType === 'notebook' && (
                  <div className="absolute left-[-16px] top-6 h-64 w-6 flex flex-col justify-between z-20 pointer-events-none">
                    {Array.from({ length: 13 }).map((_, i) => (
                      <div key={i} className="w-5 h-2 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 rounded-full shadow-xs border-y border-stone-400"></div>
                    ))}
                  </div>
                )}

                {/* 🏢 DYNAMIC ITEM CONDITION 02: Signboard Corner Metallic Standoff Pin Fixings */}
                {design.itemType === 'signboard' && (
                  <>
                    <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-gradient-to-r from-stone-300 to-stone-100 border border-stone-400 rounded-full z-20 shadow-xs"></div>
                    <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-gradient-to-r from-stone-300 to-stone-100 border border-stone-400 rounded-full z-20 shadow-xs"></div>
                    <div className="absolute bottom-3 left-3 w-2.5 h-2.5 bg-gradient-to-r from-stone-300 to-stone-100 border border-stone-400 rounded-full z-20 shadow-xs"></div>
                    <div className="absolute bottom-3 right-3 w-2.5 h-2.5 bg-gradient-to-r from-stone-300 to-stone-100 border border-stone-400 rounded-full z-20 shadow-xs"></div>
                  </>
                )}

                {/* 🪵 THE MAIN CORE CHASSIS HOUSING BOARD (Updates geometry dynamically) */}
                <div 
                  className={`relative flex flex-col items-center justify-between p-6 transition-all duration-700 bg-gradient-to-br ${getWoodClass()} ${getLedGlowClass()} ${
                    design.itemType === 'notebook' ? 'w-68 h-80 rounded-r-2xl rounded-l-md pl-8' :
                    design.itemType === 'signboard' ? 'w-96 h-60 rounded-xl' : // Flat wide architecture board
                    /* Nikah Clock Frame Shapes mapping conditions */
                    design.shape === 'circular' ? 'w-85 h-85 rounded-full' :
                    design.shape === 'rectangular' ? 'w-85 h-85 rounded-2xl' :
                    'w-85 h-85 rounded-b-xl rounded-t-[140px]' // Arched dome profile curve lines
                  }`}
                >
                  
                  {/* DISPLAY RENDER FOR SYSTEM TYPE: NIKAH CLOCK WEDDING FRAME */}
                  {design.itemType === 'nikah-clock-frame' && (
                    <div className="w-full h-full flex flex-col justify-between items-center flex-1">
                      
                      {/* Monogram Top Crown Accent overlay */}
                      {design.crownStyle !== 'none' && (
                        <div className="text-xl select-none drop-shadow-md mt-1">
                          {design.crownStyle === 'royal' ? '👑' : '✨'}
                        </div>
                      )}

                      <div className="w-full flex-1 flex flex-col justify-around items-center text-center">
                        <p className="text-[8px] font-bold tracking-[0.25em] font-mono uppercase opacity-65">
                          {design.topText || 'HEADER SPEC'}
                        </p>

                        {/* Interactive Hardware Assembly Layer Center Grid */}
                        <div className="grid grid-cols-12 w-full items-center gap-1 px-1">
                          
                          {/* Clock Module Panel rendering conditional */}
                          <div className={`col-span-4 flex flex-col items-center justify-center transition-all duration-300 ${design.hasClock === 'true' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <div className="w-14 h-14 rounded-full border border-dashed border-current/30 flex items-center justify-center relative bg-black/5 shadow-inner">
                              <div className="w-1 h-1 bg-current rounded-full"></div>
                              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-current origin-bottom rotate-45"></div>
                              <span className="absolute top-0.5 text-[6px] font-mono font-bold">12</span>
                            </div>
                          </div>

                          {/* Central Text Names overlay block */}
                          <div className="col-span-4 text-center">
                            <h2 
                              className="text-lg md:text-2xl font-black tracking-widest drop-shadow-sm"
                              style={{ 
                                fontFamily: design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif',
                                textTransform: 'uppercase'
                              }}
                            >
                              {design.middleText || 'A & F'}
                            </h2>
                          </div>

                          {/* Calendar Module Grid rendering conditional */}
                          <div className={`col-span-4 flex flex-col items-center justify-center transition-all duration-300 ${design.hasCalendar === 'true' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <div className="w-14 h-14 border border-current/30 rounded-lg p-1 flex flex-col justify-between bg-black/5 shadow-inner">
                              <div className="border-b border-current/10 pb-0.5 text-[5px] font-mono font-bold text-center uppercase tracking-wide">Date</div>
                              <div className="grid grid-cols-4 gap-0.5 text-[4px] font-mono opacity-60 text-center">
                                <div>•</div><div>•</div><div className="bg-amber-500 text-stone-950 font-bold rounded-xs px-0.5">●</div><div>•</div>
                                <div>•</div><div>•</div><div>•</div><div>•</div>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* Footer Context line string */}
                        <p className="text-[9px] md:text-10px font-bold tracking-widest font-mono opacity-75 border-t border-current/10 pt-2.5 w-1/2 mx-auto">
                          {design.bottomText || '2026.06.20'}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* DISPLAY RENDER FOR SYSTEM TYPE: A5 NOTEBOOK JOURNAL CORE */}
                  {design.itemType === 'notebook' && (
                    <div className="w-full h-full flex flex-col justify-between items-center text-center p-4">
                      <div className="w-full border-l-2 border-current/20 h-full pl-4 flex flex-col justify-center space-y-6">
                        <p className="text-[8px] font-bold tracking-[0.3em] font-mono uppercase opacity-60">{design.topText}</p>
                        <h2 className="text-xl font-black border-y border-current/10 py-3 uppercase tracking-wide font-serif">{design.middleText}</h2>
                        <p className="text-[9px] font-medium font-mono opacity-70 tracking-widest">{design.bottomText}</p>
                      </div>
                    </div>
                  )}

                  {/* DISPLAY RENDER FOR SYSTEM TYPE: LANDSCAPE SIGNBOARD ARCHITECTURE */}
                  {design.itemType === 'signboard' && (
                    <div className="w-full h-full flex flex-col justify-center items-center text-center p-4 border border-dashed border-current/10 rounded-lg">
                      <div className="space-y-4">
                        <p className="text-[8px] font-bold tracking-[0.4em] font-mono uppercase opacity-60">{design.topText}</p>
                        <h2 className="text-2xl font-black tracking-widest font-sans border-b border-current/20 pb-2">{design.middleText}</h2>
                        <p className="text-[10px] font-bold tracking-widest opacity-80 font-mono">{design.bottomText}</p>
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Lower absolute template text node labels indicator overlay tag */}
              <div className="absolute bottom-4 left-4 bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 rounded-md text-[9px] font-mono uppercase tracking-wider">
                Active Render Node: {design.itemType.toUpperCase()}
              </div>
            </div>

            {/* SYNC DISPATCH ACTION DIRECT MANIFEST TRANSMIT ROUTE PIPELINE */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs text-center">
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