'use client';

import { useState } from 'react';
import Link from 'next/link';

const PRODUCT_TEMPLATES = [
  {
    id: 'mahogany',
    name: 'Premium Mahogany Board',
    themeClass: 'bg-gradient-to-br from-amber-900 via-amber-950 to-stone-950 border-amber-800 text-stone-900',
    textStyle: 'mix-blend-multiply opacity-85 drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)]',
    engraveColor: '#1c0a00',
    borderStyle: 'border-amber-900/40',
    material: 'Natural Mahogany Solid Core'
  },
  {
    id: 'mdf',
    name: 'Classic Oak MDF Finish',
    themeClass: 'bg-gradient-to-br from-yellow-700 via-yellow-800 to-amber-900 border-yellow-600 text-amber-950',
    textStyle: 'mix-blend-multiply opacity-80 drop-shadow-[0_1px_1px_rgba(255,255,255,0.1)]',
    engraveColor: '#2d1100',
    borderStyle: 'border-yellow-900/30',
    material: 'Premium Pressed Oak MDF'
  },
  {
    id: 'acrylic',
    name: 'Satin Frosted Acrylic Plaque',
    themeClass: 'bg-gradient-to-br from-white/20 via-slate-100/10 to-white/5 backdrop-blur-xl border-white/40 text-slate-900 shadow-[inset_0_1px_20px_rgba(255,255,255,0.2)]',
    textStyle: 'opacity-75 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]',
    engraveColor: '#334155',
    borderStyle: 'border-white/30',
    material: 'Polished Frosted Acrylic Perspex'
  }
];

export default function PremiumDesignStudio() {
  const [activeTemplate, setActiveTemplate] = useState(PRODUCT_TEMPLATES[0]);
  const [shape, setShape] = useState('circular'); // circular | rectangular | arched | hexagon
  const [fontStyle, setFontStyle] = useState('script');
  const [accent, setAccent] = useState('floral'); // none | floral | frame
  
  const [topText, setTopText] = useState('OUR WEDDING DAY');
  const [middleText, setMiddleText] = useState('AMRAN & FATHIMA');
  const [bottomText, setBottomText] = useState('2026.06.20');

  const generatedBlueprintText = `[LASER TECH MASTER ORDER MANIFEST]\n• Base Product: ${activeTemplate.name.toUpperCase()}\n• Outer Geometry Shape: ${shape.toUpperCase()}\n• Material Base: ${activeTemplate.material}\n• Decorative Framing: ${accent.toUpperCase()}\n• Typography Style: ${fontStyle.toUpperCase()}\n• Line 1 (Header): "${topText}"\n• Line 2 (Subject Names): "${middleText}"\n• Line 3 (Footer Date): "${bottomText}"`;

  return (
    <div className="min-h-screen py-10 px-4 md:px-8 bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* STUDIO MONITOR CONTROL HEADER */}
        <div className="mb-10 border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-amber-500 font-mono text-[10px] uppercase tracking-widest font-bold">Workspace Terminal v3.2</span>
            <h1 className="text-3xl font-black tracking-tight text-white mt-1">Interactive Mockup Studio</h1>
          </div>
          <div className="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            Status: Ready // Canvas: Active
          </div>
        </div>

        {/* INTERFACE SPLIT GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONSOLE: INTERACTIVE SYSTEM BUILD CONTROLS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* STAGE 1: MATERIAL BASE CONFIGURATION */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-500 flex items-center gap-2 font-mono">
                <span>01 //</span> Select Material Core Base
              </h3>
              <div className="space-y-2">
                {PRODUCT_TEMPLATES.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    type="button"
                    onClick={() => setActiveTemplate(tmpl)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex justify-between items-center ${activeTemplate.id === tmpl.id ? 'border-amber-500 bg-slate-800/80 font-bold shadow-md shadow-amber-500/5' : 'border-slate-800 hover:border-slate-700 bg-slate-950/40'}`}
                  >
                    <div>
                      <h4 className="text-xs font-black text-white">{tmpl.name}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium">{tmpl.material}</p>
                    </div>
                    <span className={`w-3 h-3 rounded-full border-2 ${activeTemplate.id === tmpl.id ? 'bg-amber-500 border-amber-500' : 'border-slate-600'}`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* STAGE 2: FRAME GEOMETRIES & ACCENTS */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-500 flex items-center gap-2 font-mono">
                <span>02 //</span> Shape & Design Accents
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 font-mono">Outer Geometry</label>
                  <select value={shape} onChange={(e) => setShape(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 focus:outline-none focus:border-amber-500">
                    <option value="circular">Circular / Round Frame</option>
                    <option value="rectangular">Classic Rectangular Board</option>
                    <option value="arched">Arched Dome Profile</option>
                    <option value="hexagon">Modern Hexagon Geometry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 font-mono">Border Accent look</label>
                  <select value={accent} onChange={(e) => setAccent(e.target.value)} className="w-full px-3 py-2 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 focus:outline-none focus:border-amber-500">
                    <option value="none">Clean Edge (No Accent)</option>
                    <option value="frame">Solid Vector Inset Frame</option>
                    <option value="floral">Ornate Botanical Vines</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5 font-mono">Typography Font Engine</label>
                <div className="grid grid-cols-3 gap-2">
                  {['script', 'serif', 'sans'].map((f) => (
                    <button key={f} type="button" onClick={() => setFontStyle(f)} className={`py-2 text-xs rounded-xl border font-bold capitalize transition-all ${fontStyle === f ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/10' : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'}`}>
                      {f === 'script' ? 'Calligraphy' : f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* STAGE 3: CONCURRENT WORDING INPUT BLOCKS */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-500 flex items-center gap-2 font-mono">
                <span>03 //</span> Input Custom Inscriptions
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Top Line Header</label>
                  <input type="text" maxLength={28} value={topText} onChange={(e) => setTopText(e.target.value.toUpperCase())} className="w-full px-4 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 font-mono focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Center Core Names</label>
                  <input type="text" maxLength={28} value={middleText} onChange={(e) => setMiddleText(e.target.value.toUpperCase())} className="w-full px-4 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 font-mono focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Bottom Line Date</label>
                  <input type="text" maxLength={28} value={bottomText} onChange={(e) => setBottomText(e.target.value.toUpperCase())} className="w-full px-4 py-2.5 rounded-xl border border-slate-800 text-xs bg-slate-950 text-slate-200 font-mono focus:outline-none" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REVOLUTIONARY HIGH-FIDELITY LUXURY PREVIEW CONTAINER */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block px-1 font-mono">
              ⚡ LIVE STUDIO RENDERING DISPLAY CONSOLE
            </span>
            
            {/* DARK OBSIDIAN INDUSTRIAL WORKSPACE GRID STAGE */}
            <div className="w-full aspect-square bg-slate-950 border border-slate-800 rounded-3xl flex flex-col items-center justify-center p-8 relative overflow-hidden bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] shadow-2xl">
              
              {/* Core Lighting Highlight Flare Overlay */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

              {/* 🏆 DYNAMIC GRAPHIC DESIGN CARD CONTAINER */}
              <div 
                className={`w-72 h-72 border-2 relative transition-all duration-500 p-6 flex flex-col items-center justify-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ${activeTemplate.themeClass} ${
                  shape === 'circular' ? 'rounded-full' :
                  shape === 'rectangular' ? 'rounded-2xl' :
                  shape === 'hexagon' ? 'clip-path-hex' :
                  'rounded-b-xl rounded-t-[140px]' // Arched dome custom curves look
                }`}
                style={{
                  clipPath: shape === 'hexagon' ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : ''
                }}
              >
                
                {/* 🎨 Inner Engraved Accent Border Overlays */}
                {accent === 'frame' && (
                  <div className={`absolute inset-4 border border-dashed pointer-events-none opacity-40 ${activeTemplate.borderStyle} ${shape === 'circular' ? 'rounded-full' : shape === 'rectangular' ? 'rounded-xl' : shape === 'hexagon' ? 'clip-path-hex-inner' : 'rounded-b-lg rounded-t-[120px]'}`} />
                )}

                {accent === 'floral' && (
                  <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none opacity-40 select-none">
                    <div className="text-center text-xs tracking-widest font-serif leading-none">🍃 ━━━━━ 🍃</div>
                    <div className="text-center text-xs tracking-widest font-serif leading-none">🍃 ━━━━━ 🍃</div>
                  </div>
                )}

                {/* ✍️ Core Spatial Typographical Layers */}
                <div className={`w-full text-center space-y-4 relative z-10 ${activeTemplate.textStyle}`} style={{ color: activeTemplate.engraveColor }}>
                  
                  {/* Top Line Str element */}
                  <p className="text-[9px] font-bold tracking-[0.25em] font-mono uppercase opacity-70">
                    {topText || 'HEADER SPEC'}
                  </p>
                  
                  {/* Center Line Str element */}
                  <h2 
                    className="text-base md:text-xl font-black tracking-wide leading-tight px-2"
                    style={{ 
                      fontFamily: fontStyle === 'serif' ? 'Georgia, serif' : fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif',
                      textTransform: fontStyle === 'script' ? 'none' : 'uppercase'
                    }}
                  >
                    {fontStyle === 'script' ? middleText.toLowerCase() : middleText || 'MAIN TITLE'}
                  </h2>
                  
                  {/* Bottom Line Str element */}
                  <p className="text-[10px] font-bold tracking-widest font-mono opacity-80">
                    {bottomText || 'DATE SPEC'}
                  </p>

                </div>

              </div>

              {/* Lower Technical Spec Label overlay tag */}
              <div className="absolute bottom-4 left-4 bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 rounded-md text-[9px] font-mono uppercase tracking-wider">
                Target Compound: {activeTemplate.name}
              </div>

            </div>

            {/* SYNC DISPATCH ACTION BUTTON PIPELINE */}
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