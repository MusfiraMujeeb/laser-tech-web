'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PerfectLaserStudio() {
  const [design, setDesign] = useState({
    itemType: 'nikah-frame',  
    shape: 'circular',       
    material: 'Natural Mahogany Core',  
    processType: 'combined', 
    fontStyle: 'script',     
    graphicAccent: 'floral-frame',  
    symbolAsset: 'rings',    
    topText: 'OUR WEDDING DAY',
    middleText: 'AMRAN & FATHIMA',
    bottomText: '2026.06.20'
  });

  const [realisticView, setRealisticView] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDesign({ ...design, [e.target.name]: e.target.value });
  };

  const generatedBlueprintText = `[LASER TECH CONFIGURATION MATRIX]\n• Archetype: ${design.itemType.toUpperCase()}\n• Shape: ${design.shape.toUpperCase()}\n• Material: ${design.material}\n• Operation: ${design.processType.toUpperCase()}\n• Border Accent: ${design.graphicAccent.toUpperCase()}\n• Core Symbol: ${design.symbolAsset.toUpperCase()}\n• Font Profile: ${design.fontStyle.toUpperCase()}\n• Top Node: "${design.topText}"\n• Center Node: "${design.middleText}"\n• Bottom Node: "${design.bottomText}"`;

  const isWood = design.material.includes('Mahogany') || design.material.includes('MDF');

  // Helper functions to safely handle condition extraction for the compiler
  const getShapeFill = () => {
    if (!realisticView) return 'none';
    return isWood ? 'url(#mahoganyWood)' : 'url(#acrylicGlass)';
  };

  const getShapeStroke = () => {
    if (!realisticView) return '#10b981';
    return isWood ? '#1c0a00' : 'rgba(255, 255, 255, 0.7)';
  };

  const getAccentStroke = () => {
    if (!realisticView) return '#059669';
    return isWood ? '#260e01' : 'rgba(255, 255, 255, 0.5)';
  };

  const getDecorativeStroke = (defaultColor: string) => {
    if (!realisticView) return defaultColor;
    return isWood ? '#1c0a00' : 'rgba(255, 255, 255, 0.6)';
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-8" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* MONITOR HEADER CONTROL */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6" style={{ borderColor: 'var(--studio-border)' }}>
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">CAD Parameter Design Center</h1>
            <p className="text-xs text-slate-500 mt-1">Configure multi-layer vector arrays and real-time physical texture clipping coordinates.</p>
          </div>

          <div className="bg-white border p-1 rounded-xl shadow-xs inline-flex items-center gap-1">
            <button 
              type="button" 
              onClick={() => setRealisticView(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${!realisticView ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              📐 CAD Wireframe
            </button>
            <button 
              type="button" 
              onClick={() => setRealisticView(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${realisticView ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              📸 Realistic Material View
            </button>
          </div>
        </div>

        {/* WORKSPACE MAIN INTERFACE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTROL CONSOLE */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* LAYER 1: BASE STRUCTURAL SPECS */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">📦 1. Structural Layer Specs</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Product Archetype</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="nikah-frame">Wedding / Nikah Certificate Frame</option>
                    <option value="signboard">Custom Home Wall Signboard</option>
                    <option value="token">Standing Shield / Achievement Trophy</option>
                    <option value="clock">Layered Circular Wall Clock</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Material Base Compound</label>
                  <select name="material" value={design.material} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none" onChange={handleInputChange}>
                    <option value="Natural Mahogany Core">Natural Mahogany Core (Premium Wood)</option>
                    <option value="Wood / MDF">Wood / MDF (Classic Matte Finish)</option>
                    <option value="Acrylic">Acrylic (Glass-like Glossy Perspex)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Laser Operation Look</label>
                  <select name="processType" value={design.processType} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="combined">Engraved Text + Cutout Borders</option>
                    <option value="engraved">Surface Etching Only</option>
                    <option value="cutting">Hollow Cut-Out Stencil</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Outer Bounds Shape</label>
                  <select name="shape" value={design.shape} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="circular">Circular / Round Frame</option>
                    <option value="rectangular">Classic Rectangular Board</option>
                    <option value="arched">Arched Dome Profile</option>
                    <option value="hexagon">Modern Hexagon Geometry</option>
                    <option value="oval">Soft Ellipse / Oval Plate</option>
                  </select>
                </div>
              </div>
            </div>

            {/* LAYER 2: EMBELLISHMENTS & DECORATIVE ACCENTS */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">🎨 2. Embellishments & Fonts</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Border Line</label>
                  <select name="graphicAccent" value={design.graphicAccent} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="none">No Border</option>
                    <option value="solid-border">Single Inset Line</option>
                    <option value="floral-frame">Botanical Vines</option>
                    <option value="corner-accents">Art Deco Corners</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Center Symbol</label>
                  <select name="symbolAsset" value={design.symbolAsset} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="none">Text Only</option>
                    <option value="rings">Wedding Rings</option>
                    <option value="grad-cap">Graduation Cap</option>
                    <option value="heart">Heart Shape</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Typography Font</label>
                  <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="script">Calligraphy Script</option>
                    <option value="serif">Premium Serif</option>
                    <option value="sans">Clean Sans-Serif</option>
                  </select>
                </div>
              </div>
            </div>

            {/* LAYER 3: LAYOUT CUSTOM WORDING */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">✍️ 3. Layout Custom Wording</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Top Line Inscription</label>
                  <input type="text" name="topText" maxLength={30} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Center Subject Names</label>
                  <input type="text" name="middleText" maxLength={30} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Bottom Line Inscription</label>
                  <input type="text" name="bottomText" maxLength={30} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono focus:outline-none" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: PROFESSIONAL EMBEDDED TECHNICAL CANVAS */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block px-1">🖥️ Live CAD Viewport</span>
            
            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col items-center justify-center min-h-[480px] relative overflow-hidden bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
              
              {/* DYNAMIC PURE GRADIENT SVG ENGINE CANVAS */}
              <svg width="320" height="320" className="relative z-10 transition-all duration-300 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                
                <defs>
                  {/* Rich Warm Mahogany Core Wood Representation */}
                  <linearGradient id="mahoganyWood" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c2d12" />
                    <stop offset="50%" stopColor="#451a03" />
                    <stop offset="100%" stopColor="#290b00" />
                  </linearGradient>
                  
                  {/* Frosted Satin Translucent Acrylic Vibe */}
                  <linearGradient id="acrylicGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(241, 245, 249, 0.45)" />
                    <stop offset="100%" stopColor="rgba(203, 213, 225, 0.2)" />
                  </linearGradient>

                  {/* Soft Burn Inset Shadow Filter for Realistic Carving */}
                  <filter id="carveEffect" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* Base Core Plate Geometry Layers - ✅ FIXED CONDITIONAL BINDINGS */}
                {design.shape === 'circular' && (
                  <circle cx="160" cy="160" r="125" 
                    fill={getShapeFill()} 
                    stroke={getShapeStroke()} 
                    strokeWidth={realisticView ? '4' : '2'} 
                  />
                )}
                {design.shape === 'rectangular' && (
                  <rect x="20" y="30" width="280" height="260" rx="16" 
                    fill={getShapeFill()} 
                    stroke={getShapeStroke()} 
                    strokeWidth={realisticView ? '4' : '2'} 
                  />
                )}
                {design.shape === 'arched' && (
                  <path d="M 35 270 L 35 130 A 125 125 0 0 1 285 130 L 285 270 Z" 
                    fill={getShapeFill()} 
                    stroke={getShapeStroke()} 
                    strokeWidth={realisticView ? '4' : '2'} 
                  />
                )}
                {design.shape === 'hexagon' && (
                  <polygon points="160,20 275,85 275,235 160,300 45,235 45,85" 
                    fill={getShapeFill()} 
                    stroke={getShapeStroke()} 
                    strokeWidth={realisticView ? '4' : '2'} 
                  />
                )}
                {design.shape === 'oval' && (
                  <ellipse cx="160" cy="160" rx="135" ry="100" 
                    fill={getShapeFill()} 
                    stroke={getShapeStroke()} 
                    strokeWidth={realisticView ? '4' : '2'} 
                  />
                )}

                {/* Inner Border Outlines - ✅ FIXED CONDITIONAL BINDINGS */}
                {design.graphicAccent === 'solid-border' && (
                  design.shape === 'circular' ? <circle cx="160" cy="160" r="112" fill="none" stroke={getAccentStroke()} strokeWidth="1" /> :
                  design.shape === 'rectangular' ? <rect x="32" y="42" width="256" height="236" rx="10" fill="none" stroke={getAccentStroke()} strokeWidth="1" /> :
                  design.shape === 'hexagon' ? <polygon points="160,33 263,92 263,228 160,287 57,228 57,92" fill="none" stroke={getAccentStroke()} strokeWidth="1" /> :
                  design.shape === 'oval' ? <ellipse cx="160" cy="160" rx="122" ry="87" fill="none" stroke={getAccentStroke()} strokeWidth="1" /> :
                  <path d="M 47 258 L 47 136 A 113 113 0 0 1 273 136 L 273 258 Z" fill="none" stroke={getAccentStroke()} strokeWidth="1" />
                )}

                {/* Botanical Vines Paths - ✅ FIXED CONDITIONAL BINDINGS */}
                {design.graphicAccent === 'floral-frame' && (
                  <g stroke={getDecorativeStroke('#f59e0b')} fill="none" strokeWidth="1.2" strokeLinecap="round" filter={realisticView ? "url(#carveEffect)" : ""}>
                    <path d="M 110 60 Q 160 45 210 60" />
                    <path d="M 135 52 Q 130 44 137 42 Q 143 46 140 52 Z M 180 52 Q 185 44 178 42 Q 172 46 175 52 Z" fill={getDecorativeStroke('rgba(245, 158, 11, 0.4)')} fillOpacity="0.2" />
                    <path d="M 110 260 Q 160 275 210 260" />
                    <path d="M 135 266 Q 130 273 138 276 Q 143 271 140 266 Z M 185 266 Q 190 273 182 276 Q 177 271 180 266 Z" fill={getDecorativeStroke('rgba(245, 158, 11, 0.4)')} fillOpacity="0.2" />
                  </g>
                )}

                {/* Art Deco Angular Corners - ✅ FIXED CONDITIONAL BINDINGS */}
                {design.graphicAccent === 'corner-accents' && (
                  <path d="M 28 52 L 28 42 L 38 42 M 292 52 L 292 42 L 282 42 M 28 268 L 28 278 L 38 278 M 292 268 L 292 278 L 282 278" fill="none" stroke={getDecorativeStroke('#38bdf8')} strokeWidth="1.5" filter={realisticView ? "url(#carveEffect)" : ""} />
                )}

                {/* Core Center Icon Overlays - ✅ FIXED CONDITIONAL BINDINGS */}
                {design.symbolAsset === 'rings' && (
                  <g stroke={getDecorativeStroke('#e2e8f0')} fill="none" strokeWidth="1.5" opacity={realisticView ? 0.8 : 0.4} transform="translate(132, 102)" filter={realisticView ? "url(#carveEffect)" : ""}>
                    <circle cx="20" cy="20" r="16" />
                    <circle cx="36" cy="20" r="16" />
                  </g>
                )}
                {design.symbolAsset === 'grad-cap' && (
                  <path d="M 160 102 L 188 112 L 160 122 L 132 112 Z M 142 116 L 142 126 C 142 132, 178 132, 178 126 L 178 116 M 180 113 L 180 130" stroke={getDecorativeStroke('#e2e8f0')} fill="none" strokeWidth="1.5" opacity={realisticView ? 0.8 : 0.4} filter={realisticView ? "url(#carveEffect)" : ""} />
                )}
                {design.symbolAsset === 'heart' && (
                  <path d="M 160 124 C 160 124, 135 107, 135 95 C 135 95, 145 78, 153 83 C 160 87, 160 92, 160 92 C 160 92, 160 87, 167 83 C 175 78, 185 85, 185 95 C 185 107, 160 124, 160 124 Z" stroke={getDecorativeStroke('#e2e8f0')} fill="none" strokeWidth="1.5" opacity={realisticView ? 0.8 : 0.35} transform="translate(0, 12)" filter={realisticView ? "url(#carveEffect)" : ""} />
                )}

                {/* TOP INSCRIPTION LINE */}
                <text
                  x="160"
                  y={design.shape === 'arched' ? '125' : '95'}
                  textAnchor="middle"
                  fill={realisticView ? isWood ? '#2d1100' : 'rgba(30, 41, 59, 0.8)' : '#94a3b8'}
                  fontSize="9"
                  letterSpacing="2"
                  fontWeight="bold"
                  filter={realisticView ? "url(#carveEffect)" : ""}
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.topText}
                </text>

                {/* CENTER CORNER MAIN SUBJECT NAMES */}
                <text
                  x="160"
                  y={design.shape === 'arched' ? '172' : '162'}
                  textAnchor="middle"
                  fill={realisticView ? isWood ? '#1c0a00' : '#0f172a' : '#f8fafc'}
                  fontSize="14"
                  letterSpacing="0.5"
                  fontWeight="900"
                  filter={realisticView ? "url(#carveEffect)" : ""}
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Playfair Display, Georgia, serif'}
                  style={{ fontFamily: design.fontStyle === 'script' ? 'Brush Script MT, cursive, sans-serif' : '' }}
                >
                  {design.middleText}
                </text>

                {/* BOTTOM INSCRIPTION LINE */}
                <text
                  x="160"
                  y={design.shape === 'arched' ? '215' : '225'}
                  textAnchor="middle"
                  fill={realisticView ? isWood ? '#2d1100' : 'rgba(51, 65, 85, 0.8)' : '#a7f3d0'}
                  fontSize="10"
                  letterSpacing="2.5"
                  filter={realisticView ? "url(#carveEffect)" : ""}
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.bottomText}
                </text>

              </svg>
            </div>

            {/* SYNC DISPATCH */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs text-center" style={{ borderColor: 'var(--studio-border)' }}>
              <Link 
                href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`}
                className="w-full text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md text-center inline-block transition-all hover:bg-slate-900 bg-slate-800 cursor-pointer"
              >
                Forward Custom Blueprint Specification Manifest →
              </Link>
            </div>

          </div>

          {/* REFERENCE INFOGRAPHIC PANEL */}
          <div className="lg:col-span-12 mt-6 p-6 bg-slate-50 border rounded-2xl text-xs text-slate-600 space-y-2">
            <h4 className="font-bold text-slate-800 uppercase tracking-wide">📐 Information Systems Panel Reference Note:</h4>
            <p>This customized environment bridges abstract customer requests directly with workspace laser capabilities. Selecting design combinations creates real-time math matrices and paths natively outputting scalable SVG blueprints.</p>
          </div>

        </div>

      </div>
    </div>
  );
}