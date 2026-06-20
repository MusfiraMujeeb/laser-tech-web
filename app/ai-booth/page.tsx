'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UltimateLaserStudio() {
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

  // 📸 THE SECRET SAUCE: Customer Viewport Toggle (true = Realistic Preview, false = CAD Laser Grid)
  const [realisticView, setRealisticView] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDesign({ ...design, [e.target.name]: e.target.value });
  };

  const generatedBlueprintText = `[LASER TECH CONFIGURATION MATRIX]\n• Archetype: ${design.itemType.toUpperCase()}\n• Shape: ${design.shape.toUpperCase()}\n• Material: ${design.material}\n• Operation: ${design.processType.toUpperCase()}\n• Border Accent: ${design.graphicAccent.toUpperCase()}\n• Core Symbol: ${design.symbolAsset.toUpperCase()}\n• Font Profile: ${design.fontStyle.toUpperCase()}\n• Top Node: "${design.topText}"\n• Center Node: "${design.middleText}"\n• Bottom Node: "${design.bottomText}"`;

  // Dynamic Styles matching the physical material base properties
  const isWood = design.material.includes('Mahogany') || design.material.includes('MDF');
  const isAcrylic = design.material.includes('Acrylic');

  return (
    <div className="min-h-screen py-10 px-4 md:px-8" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Interactive Visual Customizer</h1>
            <p className="text-xs text-slate-500 mt-1">Design your custom piece visually using our pre-calibrated workshop styles.</p>
          </div>

          {/* VIEWPORT DUAL SWITCH */}
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
              📸 Realistic Preview
            </button>
          </div>
        </div>

        {/* MAIN STUDIO GRID CONFIGURATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTROL CONSOLE */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* PANEL 1: OBJECTIVE / MATRIX SELECTIONS */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">📦 1. Production Settings</h3>
              
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
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Material Base</label>
                  <select name="material" value={design.material} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option>Natural Mahogany Core (Premium Wood)</option>
                    <option>Wood / MDF (Classic Matte Finish)</option>
                    <option>Acrylic (Glass-like Glossy Perspex)</option>
                    <option>Two-Tone Metallic Acrylic Layer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Laser Operation Style</label>
                  <select name="processType" value={design.processType} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="combined">Engraved Text + Cutout Borders</option>
                    <option value="engraved">Surface Etching Only</option>
                    <option value="cutting">Hollow Cut-Out Stencil</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Outer Geometry Shape</label>
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

            {/* PANEL 2: CORE DESIGN ACCENTS */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">🎨 2. Embellishments & Fonts</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Border Accent</label>
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

            {/* PANEL 3: SPATIAL INPUT ELEMENTS */}
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

          {/* RIGHT COLUMN: HIGH-TRANSFORMATION DUAL VIEWPORT CANVAS */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block px-1">
              🖥️ Viewport Monitor Workspace
            </span>
            
            {/* CANVAS WRAPPER BOX WITH SYSTEM SWITCHES */}
            <div 
              className={`rounded-3xl border p-8 flex flex-col items-center justify-center min-h-[460px] relative overflow-hidden transition-all duration-500 shadow-inner ${
                realisticView 
                  ? isWood 
                    ? 'bg-amber-950/20 bg-[url("https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80")] bg-cover bg-center border-amber-900/40 shadow-stone-900/60'
                    : 'bg-slate-300/40 backdrop-blur-md border-white/60 shadow-slate-400/40' // Acrylic transparent vibe
                  : 'bg-slate-950 border-slate-800' // CAD Mode default
              }`}
            >
              {/* CAD Grid Overlays only active in CAD configuration view */}
              {!realisticView && (
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00ff66 1px, transparent 1px), linear-gradient(90deg, #00ff66 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              )}

              {/* Dynamic Coordinate Calculations Colors matching view settings */}
              <div className={`absolute top-4 left-4 font-mono text-[9px] ${realisticView ? 'text-slate-800 font-bold opacity-60' : 'text-emerald-500/50'}`}>
                {realisticView ? '📸 PHYSICAL SURFACE MAP' : '📐 RADIAL PATH NODES LOADING'}
              </div>

              {/* HIGH FIDELITY CORE CANVAS MODEL */}
              <svg 
                width="280" 
                height="280" 
                className={`relative z-10 transition-all duration-300 ${
                  realisticView 
                    ? isWood 
                      ? 'drop-shadow-[2px_4px_8px_rgba(0,0,0,0.55)]' 
                      : 'drop-shadow-[4px_8px_16px_rgba(15,23,42,0.15)]'
                    : 'drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                }`}
              >
                {/* 1. Base Boundary Shapes paths */}
                {design.shape === 'circular' && (
                  <circle cx="140" cy="140" r="115" 
                    fill={realisticView ? isWood ? 'rgba(120, 53, 4, 0.15)' : 'rgba(255,255,255,0.25)' : 'none'} 
                    stroke={realisticView ? isWood ? '#451a03' : '#ffffff' : '#10b981'} 
                    strokeWidth={realisticView ? isWood ? '4' : '3'} 
                  />
                )}
                {design.shape === 'rectangular' && (
                  <rect x="15" y="25" width="250" height="230" rx="14" 
                    fill={realisticView ? isWood ? 'rgba(120, 53, 4, 0.15)' : 'rgba(255,255,255,0.25)' : 'none'} 
                    stroke={realisticView ? isWood ? '#451a03' : '#ffffff' : '#10b981'} 
                    strokeWidth={realisticView ? isWood ? '4' : '3'} 
                  />
                )}
                {design.shape === 'arched' && (
                  <path d="M 30 245 L 30 120 A 110 110 0 0 1 250 120 L 250 245 Z" 
                    fill={realisticView ? isWood ? 'rgba(120, 53, 4, 0.15)' : 'rgba(255,255,255,0.25)' : 'none'} 
                    stroke={realisticView ? isWood ? '#451a03' : '#ffffff' : '#10b981'} 
                    strokeWidth={realisticView ? isWood ? '4' : '3'} 
                  />
                )}
                {design.shape === 'hexagon' && (
                  <polygon points="140,15 255,75 255,205 140,265 25,205 25,75" 
                    fill={realisticView ? isWood ? 'rgba(120, 53, 4, 0.15)' : 'rgba(255,255,255,0.25)' : 'none'} 
                    stroke={realisticView ? isWood ? '#451a03' : '#ffffff' : '#10b981'} 
                    strokeWidth={realisticView ? isWood ? '4' : '3'} 
                  />
                )}
                {design.shape === 'oval' && (
                  <ellipse cx="140" cy="140" rx="125" ry="90" 
                    fill={realisticView ? isWood ? 'rgba(120, 53, 4, 0.15)' : 'rgba(255,255,255,0.25)' : 'none'} 
                    stroke={realisticView ? isWood ? '#451a03' : '#ffffff' : '#10b981'} 
                    strokeWidth={realisticView ? isWood ? '4' : '3'} 
                  />
                )}

                {/* 2. Graphical Border Lines Accents */}
                {design.graphicAccent === 'solid-border' && (
                  design.shape === 'circular' ? <circle cx="140" cy="140" r="102" fill="none" stroke={realisticView ? isWood ? '#7c2d12' : '#f1f5f9' : '#059669'} strokeWidth="1" /> :
                  design.shape === 'rectangular' ? <rect x="27" y="37" width="226" height="206" rx="8" fill="none" stroke={realisticView ? isWood ? '#7c2d12' : '#f1f5f9' : '#059669'} strokeWidth="1" /> :
                  design.shape === 'hexagon' ? <polygon points="140,28 243,82 243,198 140,252 37,198 37,82" fill="none" stroke={realisticView ? isWood ? '#7c2d12' : '#f1f5f9' : '#059669'} strokeWidth="1" /> :
                  design.shape === 'oval' ? <ellipse cx="140" cy="140" rx="113" ry="78" fill="none" stroke={realisticView ? isWood ? '#7c2d12' : '#f1f5f9' : '#059669'} strokeWidth="1" /> :
                  <path d="M 42 233 L 42 126 A 98 98 0 0 1 238 126 L 238 233 Z" fill="none" stroke={realisticView ? isWood ? '#7c2d12' : '#f1f5f9' : '#059669'} strokeWidth="1" />
                )}

                {/* Beautiful Botanical Frame Overlay Lines */}
                {design.graphicAccent === 'floral-frame' && (
                  <g stroke={realisticView ? isWood ? '#7c2d12' : '#ffffff' : '#f59e0b'} fill="none" strokeWidth="1.2" opacity={realisticView ? 0.75 : 0.85}>
                    <path d="M 90 55 Q 140 40 190 55" />
                    <path d="M 120 46 Q 115 38 122 36 Q 128 40 125 46 Z M 160 46 Q 165 38 158 36 Q 152 40 155 46 Z" fill={realisticView ? isWood ? '#7c2d12' : '#ffffff' : '#f59e0b'} fillOpacity="0.2" />
                    <path d="M 90 225 Q 140 240 190 225" />
                    <path d="M 115 231 Q 110 238 118 241 Q 123 236 120 231 Z M 165 231 Q 170 238 162 241 Q 157 236 160 231 Z" fill={realisticView ? isWood ? '#7c2d12' : '#ffffff' : '#f59e0b'} fillOpacity="0.2" />
                  </g>
                )}

                {/* Corner Accents Layer Paths */}
                {design.graphicAccent === 'corner-accents' && (
                  <path d="M 22 47 L 22 37 L 32 37 M 258 47 L 258 37 L 248 37 M 22 213 L 22 223 L 32 223 M 258 213 L 258 223 L 248 223" fill="none" stroke={realisticView ? isWood ? '#7c2d12' : '#ffffff' : '#38bdf8'} strokeWidth="1.5" />
                )}

                {/* 3. Core Vetted Vector Symbol Center Overlay */}
                {design.symbolAsset === 'rings' && (
                  <g stroke={realisticView ? isWood ? '#451a03' : '#ffffff' : '#e2e8f0'} fill="none" strokeWidth="1.5" opacity={realisticView ? 0.45 : 0.4} transform="translate(112, 92)">
                    <circle cx="20" cy="20" r="16" />
                    <circle cx="36" cy="20" r="16" />
                  </g>
                )}
                {design.symbolAsset === 'grad-cap' && (
                  <path d="M 140 92 L 168 102 L 140 112 L 112 102 Z M 122 106 L 122 116 C 122 122, 158 122, 158 116 L 158 106 M 160 103 L 160 120" stroke={realisticView ? isWood ? '#451a03' : '#ffffff' : '#e2e8f0'} fill="none" strokeWidth="1.5" opacity={realisticView ? 0.45 : 0.4} />
                )}
                {design.symbolAsset === 'heart' && (
                  <path d="M 140 114 C 140 114, 115 97, 115 85 C 115 75, 125 68, 133 73 C 140 77, 140 82, 140 82 C 140 82, 140 77, 147 73 C 155 68, 165 75, 165 85 C 165 97, 140 114, 140 114 Z" stroke={realisticView ? isWood ? '#451a03' : '#ffffff' : '#e2e8f0'} fill="none" strokeWidth="1.5" opacity={realisticView ? 0.45 : 0.35} transform="translate(0, 12)" />
                )}

                {/* 4. Spatial Typography Rendering Layers */}
                {/* TOP STRING NODE */}
                <text
                  x="140"
                  y={design.shape === 'arched' ? '112' : '82'}
                  textAnchor="middle"
                  fill={realisticView ? isWood ? '#7c2d12' : '#475569' : '#94a3b8'}
                  fontSize="8.5"
                  letterSpacing="2"
                  fontWeight="bold"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.topText}
                </text>

                {/* CENTER CORE NODE */}
                <text
                  x="140"
                  y={design.shape === 'arched' ? '156' : '146'}
                  textAnchor="middle"
                  fill={realisticView ? isWood ? '#451a03' : '#0f172a' : '#f8fafc'}
                  fontSize="12.5"
                  letterSpacing="0.5"
                  fontWeight="900"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Playfair Display, Georgia, serif'}
                  style={{ fontFamily: design.fontStyle === 'script' ? 'Brush Script MT, cursive, sans-serif' : '' }}
                >
                  {design.middleText}
                </text>

                {/* BOTTOM STRING NODE */}
                <text
                  x="140"
                  y={design.shape === 'arched' ? '192' : '204'}
                  textAnchor="middle"
                  fill={realisticView ? isWood ? '#7c2d12' : '#334155' : '#a7f3d0'}
                  fontSize="9.5"
                  letterSpacing="2.5"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.bottomText}
                </text>

              </svg>
            </div>

            {/* SEND SYSTEM MANIFEST BLOCK */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs text-center" style={{ borderColor: 'var(--studio-border)' }}>
              <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                Review your layout configurations. Clicking the button encodes all current properties, line placements, and reference indicators directly down into the official quote dashboard manifest automatically.
              </p>
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