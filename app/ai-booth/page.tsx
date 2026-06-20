'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LuxuryLaserStudio() {
  const [design, setDesign] = useState({
    itemType: 'nikah-clock-frame', // nikah-clock-frame | notebook | signboard
    shape: 'circular', // circular | arched | rectangular
    woodTone: 'mahogany', // mahogany | oak-mdf | walnut
    crownStyle: 'royal', // royal | classic | minimalist | none
    hasClock: 'true', // true | false
    hasCalendar: 'true', // true | false
    ledColor: 'warm-white', // warm-white | golden-yellow | blush-pink | none
    fontStyle: 'script',
    topText: 'OUR WEDDING DAY',
    middleText: 'A & F', // Perfect for the dual letter monogram look
    bottomText: '2026.06.20'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDesign(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generatedBlueprintText = `[LASER TECH LUXURY WORKSHOP BLUEPRINT]
• Product Line: ${design.itemType.toUpperCase()}
• Frame Shape: ${design.shape.toUpperCase()}
• Base Wood Selection: ${design.woodTone.toUpperCase()}
• Crown Monogram Profile: ${design.crownStyle.toUpperCase()}
• Integrated Clock Assembly: ${design.hasClock === 'true' ? 'YES' : 'NO'}
• Calendar Highlight Assembly: ${design.hasCalendar === 'true' ? 'YES' : 'NO'}
• Backlit LED Configuration: ${design.ledColor.toUpperCase()}
• Custom Lettering Layout Font: ${design.fontStyle.toUpperCase()}
• Inscription Layer 01 (Top Header): "${design.topText}"
• Inscription Layer 02 (Monogram Initials): "${design.middleText}"
• Inscription Layer 03 (Calendar Highlight Date): "${design.bottomText}"`;

  // Wood tone styling mapping
  const getWoodClass = () => {
    if (design.woodTone === 'mahogany') return 'from-orange-950 via-red-950 to-amber-950 border-orange-900 text-amber-100';
    if (design.woodTone === 'walnut') return 'from-stone-800 to-stone-900 border-stone-700 text-stone-100';
    return 'from-amber-100 via-amber-200 to-amber-300 border-amber-400 text-amber-950';
  };

  // LED Backlight ambient ring drop shadow glow styling mapping
  const getLedGlowClass = () => {
    if (design.ledColor === 'warm-white') return 'shadow-[0_0_40px_rgba(255,253,245,0.6)] ring-4 ring-orange-100/30';
    if (design.ledColor === 'golden-yellow') return 'shadow-[0_0_45px_rgba(245,158,11,0.5)] ring-4 ring-amber-200/40';
    if (design.ledColor === 'blush-pink') return 'shadow-[0_0_40px_rgba(244,63,94,0.4)] ring-4 ring-rose-100/30';
    return 'shadow-[0_15px_35px_rgba(0,0,0,0.15)]'; // Default clean drop shadow
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-stone-50 text-stone-800 selection:bg-amber-100 selection:text-amber-900">
      <div className="max-w-7xl mx-auto">
        
        {/* STUDIO HEADER */}
        <div className="mb-10 border-b border-stone-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-widest font-bold">Luxury Studio Interface // 3D Multi-Layer Assembly</span>
            <h1 className="text-3xl font-black tracking-tight text-stone-900 mt-1">Bespoke Production Center</h1>
          </div>
          <div className="text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg font-bold shadow-xs">
            ● Luxury Backlit Catalog Connected
          </div>
        </div>

        {/* WORKSPACE SECTIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: SELECTION PANELS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* STAGE 1: CORE CHASSIS BASES */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>01 //</span> Wood Base & Category
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Product Line</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="nikah-clock-frame">3D Crown Monogram Frame (With Clock)</option>
                    <option value="notebook">A5 Premium Wooden Notebook (100 Pages)</option>
                    <option value="signboard">Custom Floating House Signboard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Core Wood Material</label>
                  <select name="woodTone" value={design.woodTone} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="mahogany">Premium Deep Mahogany Wood</option>
                    <option value="oak-mdf">Oak-Veneered MDF (Golden Look)</option>
                    <option value="walnut">Exotic Dark Walnut Plate</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STAGE 2: 3D EMBELLISHMENTS & FIXED MODULES */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>02 //</span> 3D Components & LED Modules
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Crown Monogram Top</label>
                  <select name="crownStyle" value={design.crownStyle} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="royal">Ornate Royal Crown Emblem</option>
                    <option value="classic">Traditional Vintage Crown</option>
                    <option value="minimalist">Clean Geometrical Tiara</option>
                    <option value="none">No Crown Accent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Backlit LED Mood Light</label>
                  <select name="ledColor" value={design.ledColor} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="warm-white">Soft Warm White Ambient Glow</option>
                    <option value="golden-yellow">Bright Gold Candle Light Glow</option>
                    <option value="blush-pink">Romantic Blush Pink Glow</option>
                    <option value="none">No LED Backlighting Modules</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Shape Boundary</label>
                  <select name="shape" value={design.shape} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="circular">Circular Panel</option>
                    <option value="arched">Arched Dome</option>
                    <option value="rectangular">Square Board</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Analog Clock</label>
                  <select name="hasClock" value={design.hasClock} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="true">Integrate Clock</option>
                    <option value="false">Remove Clock</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Calendar Grid</label>
                  <select name="hasCalendar" value={design.hasCalendar} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="true">Show Calendar</option>
                    <option value="false">Hide Calendar</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STAGE 3: ENGRAVING LAYERS CUSTOM TEXT */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>03 //</span> Text & Monogram Inscriptions
              </h3>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4 items-end">
                  <div className="col-span-2">
                    <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Layer 01: Top Heading Text</label>
                    <input type="text" name="topText" maxLength={28} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Font Family</label>
                    <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-2 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-bold">
                      <option value="script">Calligraphy</option>
                      <option value="serif">Serif</option>
                      <option value="sans">Clean Sans</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Layer 02: Monogram Dual Initials (Ex: A & F)</label>
                    <input type="text" name="middleText" maxLength={8} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-center text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-bold tracking-widest" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Layer 03: Date Context Box (Ex: 2026.06.20)</label>
                    <input type="text" name="bottomText" maxLength={16} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-center text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-END GRAPHIC RENDERING SYSTEM VIEWPORT */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block px-1 font-mono">
              🖥️ Live Studio Production Viewport
            </span>
            
            <div className="w-full aspect-square bg-stone-100 border border-stone-200 rounded-3xl flex items-center justify-center p-6 relative overflow-hidden bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] shadow-inner">
              
              {/* 🪵 MAIN ASSEMBLY: 3D WOOD BACKBOARD PANEL WRAPPER WITH ACTIVE LED EMBEDDED SHADOW GLOWS */}
              <div 
                className={`w-85 h-85 border-2 relative flex flex-col items-center justify-between p-6 transition-all duration-700 bg-gradient-to-br ${getWoodClass()} ${getLedGlowClass()} ${
                  design.shape === 'circular' ? 'rounded-full' :
                  design.shape === 'rectangular' ? 'rounded-2xl' :
                  'rounded-b-xl rounded-t-[140px]' // Arched Dome profiles
                }`}
              >
                
                {/* 👑 CROWN MONOGRAM ELEMENT LAYER (Fitted at top axis) */}
                {design.crownStyle !== 'none' && (
                  <div className="text-center select-none text-xl md:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] opacity-95">
                    {design.crownStyle === 'royal' && '👑'}
                    {design.crownStyle === 'classic' && '🪶'}
                    {design.crownStyle === 'minimalist' && '✨'}
                  </div>
                )}

                {/* MAIN INLAY GRID CONTENT BLOCK */}
                <div className="w-full flex-1 flex flex-col justify-around items-center py-2 text-center">
                  
                  {/* Layer 01: Header text string line */}
                  <p className="text-[8px] md:text-[9px] font-bold tracking-[0.22em] font-mono uppercase opacity-65">
                    {design.topText || 'OCCASION INSCRIPTION'}
                  </p>

                  {/* LAYER 02: MULTI-LAYER INTEGRATED FUNCTIONAL CORE GRID ROW */}
                  <div className="grid grid-cols-12 w-full items-center gap-2 px-1">
                    
                    {/* Left Frame Axis: Working Analog Clock face element representation */}
                    <div className={`col-span-4 flex flex-col items-center justify-center transition-all duration-300 ${design.hasClock === 'true' ? 'opacity-100' : 'opacity-0 scale-75'}`}>
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-dashed border-current/30 flex items-center justify-center relative shadow-inner">
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-0.5 bg-current origin-bottom rotate-45"></div>
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-current origin-bottom -rotate-45"></div>
                        <span className="absolute top-1 text-[7px] font-mono font-bold">XII</span>
                      </div>
                      <span className="text-[7px] font-mono font-bold uppercase tracking-wider mt-1 opacity-50">Clock Unit</span>
                    </div>

                    {/* Central Monogram Frame Axis: Monogram attached photo text layer */}
                    <div className="col-span-4 text-center">
                      <h2 
                        className="text-xl md:text-3xl font-black tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                        style={{ 
                          fontFamily: design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif',
                          textTransform: 'uppercase'
                        }}
                      >
                        {design.middleText || 'A & F'}
                      </h2>
                    </div>

                    {/* Right Frame Axis: Highlighted Mini Calendar Grid element representation */}
                    <div className={`col-span-4 flex flex-col items-center justify-center transition-all duration-300 ${design.hasCalendar === 'true' ? 'opacity-100' : 'opacity-0 scale-75'}`}>
                      <div className="w-14 h-14 md:w-16 md:h-16 border border-current/30 rounded-lg p-1 flex flex-col justify-between shadow-xs bg-black/5">
                        <div className="border-b border-current/20 pb-0.5 text-[6px] font-mono font-bold uppercase tracking-wider text-center">Calendar</div>
                        <div className="grid grid-cols-5 gap-0.5 text-[5px] font-mono font-medium text-center opacity-70">
                          <div>•</div><div>•</div><div className="bg-amber-500 text-stone-950 font-bold rounded-xs p-0.5">●</div><div>•</div><div>•</div>
                          <div>•</div><div>•</div><div>•</div><div>•</div><div>•</div>
                        </div>
                      </div>
                      <span className="text-[7px] font-mono font-bold uppercase tracking-wider mt-1 opacity-50">Date Lock</span>
                    </div>

                  </div>

                  {/* Layer 03: Calendar contextual date text string line */}
                  <p className="text-[9px] md:text-[11px] font-bold tracking-widest font-mono opacity-80 border-t border-current/10 pt-2 w-1/2 mx-auto">
                    {design.bottomText || '2026.06.20'}
                  </p>

                </div>

              </div>

            </div>

            {/* SUBMIT ACTIONS PIPELINE */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs text-center">
              <Link 
                href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`}
                className="w-full text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md text-center inline-block transition-all hover:bg-stone-900 bg-amber-600 cursor-pointer animate-fade-in"
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