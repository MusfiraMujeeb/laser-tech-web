'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HumanCenteredLaserStudio() {
  const [design, setDesign] = useState({
    itemType: 'nikah-frame',  
    shape: 'circular',       
    material: 'Natural Mahogany Core',  
    processType: 'combined', 
    fontStyle: 'script',     
    graphicAccent: 'floral-frame',  
    symbolAsset: 'rings',    // none | rings | grad-cap | heart
    topText: 'OUR WEDDING DAY',
    middleText: 'AMRAN & FATHIMA',
    bottomText: '2026.06.20'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDesign({ ...design, [e.target.name]: e.target.value });
  };

  // Human-readable smart recommendations engine based on active settings
  const getSmartTip = () => {
    if (design.processType === 'engraved') {
      return "💡 Best for crisp, highly detailed lettering and complex dates. Text will be etched elegantly into the surface.";
    }
    if (design.processType === 'cutting') {
      return "💡 Best for stencils and modern signage. The laser cuts completely through the material to create a bold, floating stencil look.";
    }
    return "💡 Premium standard choice. Outer borders are perfectly sliced out, while internal text arrays are sharply etched for depth.";
  };

  const generatedBlueprintText = `[LASER TECH MASTER ORDER MANIFEST]
• Product Archetype: ${design.itemType.toUpperCase()}
• Shape Geometry: ${design.shape.toUpperCase()}
• Selected Base Material: ${design.material}
• Machine Calibration Mode: ${design.processType.toUpperCase()}
• Decorative Framing Style: ${design.graphicAccent.toUpperCase()}
• Vector Symbol Core: ${design.symbolAsset.toUpperCase()}
• Font Profile Chosen: ${design.fontStyle.toUpperCase()}
• Line 1 (Top Inscription): "${design.topText}"
• Line 2 (Center Inscription): "${design.middleText}"
• Line 3 (Bottom Inscription): "${design.bottomText}"`;

  return (
    <div className="min-h-screen py-10 px-4 md:px-8" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Interactive Visual Customizer</h1>
          <p className="text-xs text-slate-500 mt-1">Design your custom piece visually using our pre-calibrated workshop styles. No technical laser knowledge required.</p>
        </div>

        {/* WORKSPACE MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CUSTOMER CONTROL PANELS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* LAYER 1: BASE ITEM SPECIFICATIONS */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2 flex items-center gap-2">
                📦 1. Choose Product & Material Vibe
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">What are we making?</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-slate-400">
                    <option value="nikah-frame">Wedding / Nikah Certificate Frame</option>
                    <option value="signboard">Custom Home Wall Signboard</option>
                    <option value="token">Standing Shield / Achievement Trophy</option>
                    <option value="clock">Layered Circular Wall Clock</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Select Base Wood/Acrylic</label>
                  <select name="material" value={design.material} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-slate-400">
                    <option>Natural Mahogany Core (Premium Wood)</option>
                    <option>Wood / MDF (Classic Matte Finish)</option>
                    <option>Acrylic (Glass-like Glossy Perspex)</option>
                    <option>Two-Tone Metallic Acrylic Layer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Laser Production Style</label>
                  <select name="processType" value={design.processType} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-slate-400">
                    <option value="combined">Engraved Text + Cutout Borders (Best of Both)</option>
                    <option value="engraved">Surface Etching Only (Solid Dark Text Look)</option>
                    <option value="cutting">Hollow Cut-Out Stencil (See-Through Text)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Outer Plate Frame Shape</label>
                  <select name="shape" value={design.shape} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-slate-400">
                    <option value="circular">Circular / Round Frame</option>
                    <option value="rectangular">Classic Rectangular Board</option>
                    <option value="arched">Arched Dome Profile</option>
                    <option value="hexagon">Modern Hexagon Geometry</option>
                    <option value="oval">Soft Ellipse / Oval Plate</option>
                  </select>
                </div>
              </div>

              {/* 🟢 CUSTOMER RECOMMENDATION TOOLTIP INJECTION */}
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-medium text-slate-600 transition-all">
                {getSmartTip()}
              </div>
            </div>

            {/* LAYER 2: ARTWORK ACCENTS & EMBELLISHMENTS */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2 flex items-center gap-2">
                🎨 2. Add Borders & Center Artwork
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Frame Frame Style</label>
                  <select name="graphicAccent" value={design.graphicAccent} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-slate-400">
                    <option value="none">No Border Frame</option>
                    <option value="solid-border">Clean Single Inset Line</option>
                    <option value="floral-frame">Ornate Botanical Vines</option>
                    <option value="corner-accents">Geometric Art Deco Corners</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Center Symbol Image</label>
                  <select name="symbolAsset" value={design.symbolAsset} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-slate-400">
                    <option value="none">Text Content Only</option>
                    <option value="rings">Intersecting Wedding Rings</option>
                    <option value="grad-cap">Academic Graduation Cap</option>
                    <option value="heart">Traditional Devotional Heart</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Typography Font Vibe</label>
                  <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none focus:border-slate-400">
                    <option value="script">Elegant Calligraphy Script</option>
                    <option value="serif">Classic Premium Serif</option>
                    <option value="sans">Modern Clean Sans-Serif</option>
                  </select>
                </div>
              </div>
            </div>

            {/* LAYER 3: THREE CONCURRENT TEXT NODES */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2 flex items-center gap-2">
                ✍️ 3. Input Custom Wording Lines (All active together)
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Top Line (Ex: Occasion Heading / Header Quotes)</label>
                  <input type="text" name="topText" maxLength={30} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Middle Line (Ex: Main Subject Names / Titles)</label>
                  <input type="text" name="middleText" maxLength={30} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Bottom Line (Ex: Important Event Dates / Locations)</label>
                  <input type="text" name="bottomText" maxLength={30} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono focus:outline-none" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-PRECISION REALISTIC INTERACTIVE CANVAS GRAPHIC */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block px-1">🖥️ Interactive Production Preview Blueprint</span>
            
            <div className="bg-slate-950 rounded-3xl border p-8 flex flex-col items-center justify-center min-h-[460px] relative overflow-hidden shadow-inner">
              {/* Technical Blueprint Vector Alignment Grid */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00ff66 1px, transparent 1px), linear-gradient(90deg, #00ff66 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="absolute top-4 left-4 font-mono text-[9px] text-emerald-500/50">LASER WORKSPACE MAP V2 // MODE: {design.processType.toUpperCase()}</div>

              {/* LIVE DRAWING CANVAS */}
              <svg width="280" height="280" className="relative z-10 transition-all duration-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
                
                {/* Frame Geometries */}
                {design.shape === 'circular' && <circle cx="140" cy="140" r="115" fill="none" stroke="#10b981" strokeWidth="2.5" />}
                {design.shape === 'rectangular' && <rect x="15" y="25" width="250" height="230" rx="14" fill="none" stroke="#10b981" strokeWidth="2.5" />}
                {design.shape === 'arched' && <path d="M 30 245 L 30 120 A 110 110 0 0 1 250 120 L 250 245 Z" fill="none" stroke="#10b981" strokeWidth="2.5" />}
                {design.shape === 'hexagon' && <polygon points="140,15 255,75 255,205 140,265 25,205 25,75" fill="none" stroke="#10b981" strokeWidth="2.5" />}
                {design.shape === 'oval' && <ellipse cx="140" cy="140" rx="125" ry="90" fill="none" stroke="#10b981" strokeWidth="2.5" />}

                {/* Single Inset Line Frame Accent */}
                {design.graphicAccent === 'solid-border' && (
                  design.shape === 'circular' ? <circle cx="140" cy="140" r="102" fill="none" stroke="#059669" strokeWidth="1" /> :
                  design.shape === 'rectangular' ? <rect x="27" y="37" width="226" height="206" rx="8" fill="none" stroke="#059669" strokeWidth="1" /> :
                  design.shape === 'hexagon' ? <polygon points="140,28 243,82 243,198 140,252 37,198 37,82" fill="none" stroke="#059669" strokeWidth="1" /> :
                  design.shape === 'oval' ? <ellipse cx="140" cy="140" rx="113" ry="78" fill="none" stroke="#059669" strokeWidth="1" /> :
                  <path d="M 42 233 L 42 126 A 98 98 0 0 1 238 126 L 238 233 Z" fill="none" stroke="#059669" strokeWidth="1" />
                )}

                {/* 🟢 FIXED: TRUE ORNAMENTAL BOTANICAL PATHS INSTEAD OF DOTS */}
                {design.graphicAccent === 'floral-frame' && (
                  <g stroke="#f59e0b" fill="none" strokeWidth="1.2" strokeLinecap="round" opacity="0.85">
                    {/* Top Leaf Vines Flourish */}
                    <path d="M 90 55 Q 140 40 190 55" />
                    <path d="M 120 46 Q 115 38 122 36 Q 128 40 125 46 Z M 160 46 Q 165 38 158 36 Q 152 40 155 46 Z" fill="#f59e0b" fillOpacity="0.3" />
                    {/* Bottom Leaf Vines Flourish */}
                    <path d="M 90 225 Q 140 240 190 225" />
                    <path d="M 115 231 Q 110 238 118 241 Q 123 236 120 231 Z M 165 231 Q 170 238 162 241 Q 157 236 160 231 Z" fill="#f59e0b" fillOpacity="0.3" />
                  </g>
                )}

                {/* Corner Art-Deco Angular Marks Accent */}
                {design.graphicAccent === 'corner-accents' && (
                  <path d="M 22 47 L 22 37 L 32 37 M 258 47 L 258 37 L 248 37 M 22 213 L 22 223 L 32 223 M 258 213 L 258 223 L 248 223" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                )}

                {/* 🟢 PRE-VETTED INTERACTIVE VECTOR GRAPHIC ASSETS CHOSEN BY USER */}
                {design.symbolAsset === 'rings' && (
                  <g stroke="#e2e8f0" fill="none" strokeWidth="1.5" opacity="0.4" transform="translate(112, 92)">
                    <circle cx="20" cy="20" r="16" />
                    <circle cx="36" cy="20" r="16" />
                  </g>
                )}
                {design.symbolAsset === 'grad-cap' && (
                  <path d="M 140 92 L 168 102 L 140 112 L 112 102 Z M 122 106 L 122 116 C 122 122, 158 122, 158 116 L 158 106 M 160 103 L 160 120" stroke="#e2e8f0" fill="none" strokeWidth="1.5" opacity="0.4" strokeLinejoin="round" />
                )}
                {design.symbolAsset === 'heart' && (
                  <path d="M 140 114 C 140 114, 115 97, 115 85 C 115 75, 125 68, 133 73 C 140 77, 140 82, 140 82 C 140 82, 140 77, 147 73 C 155 68, 165 75, 165 85 C 165 97, 140 114, 140 114 Z" stroke="#e2e8f0" fill="none" strokeWidth="1.5" opacity="0.35" transform="translate(0, 12)" />
                )}

                {/* Top Text Render Placement Pass */}
                <text
                  x="140"
                  y={design.shape === 'arched' ? '112' : '82'}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="8.5"
                  letterSpacing="2"
                  fontWeight="bold"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.topText}
                </text>

                {/* Center Core Text Render Placement Pass */}
                <text
                  x="140"
                  y={design.shape === 'arched' ? '156' : '146'}
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="12.5"
                  letterSpacing="0.5"
                  fontWeight="900"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Playfair Display, Georgia, serif'}
                  style={{ fontFamily: design.fontStyle === 'script' ? 'Brush Script MT, cursive, sans-serif' : '' }}
                >
                  {design.middleText}
                </text>

                {/* Bottom Text Render Placement Pass */}
                <text
                  x="140"
                  y={design.shape === 'arched' ? '192' : '204'}
                  textAnchor="middle"
                  fill="#a7f3d0"
                  fontSize="9.5"
                  letterSpacing="2.5"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.bottomText}
                </text>

              </svg>
            </div>

            {/* CONFIRM DESIGNS SUBMIT BLOCK */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs text-center" style={{ borderColor: 'var(--studio-border)' }}>
              <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                Confirm your layout attributes. Your finalized dimension arrays and wording vector elements will be compiled straight into your quotation form data manifest seamlessly.
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