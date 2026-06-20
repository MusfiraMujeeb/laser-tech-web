'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdvancedLaserStudio() {
  // Enhanced Multi-Layer Design State
  const [design, setDesign] = useState({
    itemType: 'signboard',   // signboard | token | keepsake | nikah-frame | clock
    shape: 'rectangular',    // rectangular | circular | arched | hexagon | oval
    material: 'Wood / MDF',   // Wood / MDF | Acrylic (Perspex) | Two-Tone Abs
    processType: 'combined', // cutting | engraving | combined
    fontStyle: 'serif',      // serif | sans | script
    graphicAccent: 'none',   // none | solid-border | floral-frame | corner-accents
    
    // Independent spatial text fields running concurrently
    topText: 'OUR WEDDING DAY',
    middleText: 'AMRAN & FATHIMA',
    bottomText: '2026.06.20'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDesign({ ...design, [e.target.name]: e.target.value });
  };

  // Compose a highly professional system parameters breakdown text to pass down the route pipeline
  const generatedBlueprintText = `[LASER WORKSHOP CONFIGURATION MATRIX]
• Product Archetype: ${design.itemType.toUpperCase()}
• Shape Boundary: ${design.shape.toUpperCase()}
• Material Selection: ${design.material}
• Machine Target Track: ${design.processType.toUpperCase()}
• Graphic Accent Overlay: ${design.graphicAccent.toUpperCase()}
• Typography Profile: ${design.fontStyle.toUpperCase()}
• Layer 01 (Top Vector Node): "${design.topText || 'NONE'}"
• Layer 02 (Center Vector Node): "${design.middleText || 'NONE'}"
• Layer 03 (Bottom Vector Node): "${design.bottomText || 'NONE'}"`;

  return (
    <div className="min-h-screen py-10 px-4 md:px-8" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* APP DASHBOARD HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">CAD Parameter Design Center</h1>
          <p className="text-xs text-slate-500 mt-1">Configure multi-layer vector arrays, coordinate paths, and layout positions for live manufacturing job tracking.</p>
        </div>

        {/* INTERFACE SPLIT WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONSOLE: CONTROL SLIDERS & CHOICES */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* LAYER 1: STRUCTURAL BASE SELECTORS */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2 flex items-center gap-2">
                📁 1. Structural Layer Base
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Product Archetype</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="signboard">Wall Signboard / Plaque</option>
                    <option value="token">Standing Shield / Trophy</option>
                    <option value="keepsake">Engraved Remembrance Box</option>
                    <option value="nikah-frame">Traditional Nikah / Marriage Frame</option>
                    <option value="clock">Layered Wall Clock Assembly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Material Base compound</label>
                  <select name="material" value={design.material} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option>Wood / MDF</option>
                    <option>Acrylic (Perspex)</option>
                    <option>Two-Tone Acrylic Layer</option>
                    <option>Natural Mahogany Core</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Machine Operation Mode</label>
                  <select name="processType" value={design.processType} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="combined">Combined (Cut Perimeter + Etch Surface)</option>
                    <option value="engraved">Surface Laser Etching Only (Raster)</option>
                    <option value="cutting">Through Vector Profile Cutting Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Geometric Bounds Shape</label>
                  <select name="shape" value={design.shape} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="rectangular">Rectangular Border</option>
                    <option value="circular">Circular Perimeter</option>
                    <option value="arched">Arched Dome Profile</option>
                    <option value="hexagon">Geometric Hexagon</option>
                    <option value="oval">Classic Ellipse / Oval</option>
                  </select>
                </div>
              </div>
            </div>

            {/* LAYER 2: GRAPHICS & TYPOGRAPHY STYLE CONFIG */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2 flex items-center gap-2">
                🎨 2. Aesthetic Graphic Details
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Vector Graphic Accents</label>
                  <select name="graphicAccent" value={design.graphicAccent} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="none">Clear Setup (No Accents)</option>
                    <option value="solid-border">Solid Vector Inset Line</option>
                    <option value="floral-frame">Traditional Floral Motif Inlay</option>
                    <option value="corner-accents">Precision Geometrical Corner Nodes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Engraving Font Engine</label>
                  <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="serif">Premium Editorial Serif</option>
                    <option value="sans">Clean Architectural Sans</option>
                    <option value="script">Elegant Calligraphy Script Style</option>
                  </select>
                </div>
              </div>
            </div>

            {/* LAYER 3: CONCURRENT SPATIAL TEXT INPUT NODES */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2 flex items-center gap-2">
                📝 3. Concurrent Typography Layers
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Top Alignment Node Inscription</label>
                  <input type="text" name="topText" maxLength={32} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono tracking-wide focus:outline-none focus:border-slate-400" placeholder="LEAVE BLANK IF NOT APPLICABLE" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Center Core Node Inscription</label>
                  <input type="text" name="middleText" maxLength={32} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono tracking-wide focus:outline-none focus:border-slate-400" placeholder="MAIN CUSTOM TEXT HEADER" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Bottom Alignment Node Inscription</label>
                  <input type="text" name="bottomText" maxLength={32} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono tracking-wide focus:outline-none focus:border-slate-400" placeholder="LEAVE BLANK IF NOT APPLICABLE" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT VIEWPORT PANEL: INTERACTIVE CAD WIDESCREEN SIMULATOR */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-slate-950 rounded-3xl border p-8 flex flex-col items-center justify-center min-h-[460px] relative overflow-hidden shadow-inner">
              {/* Technical Blueprint Grid Pattern Background Overlay */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00ff66 1px, transparent 1px), linear-gradient(90deg, #00ff66 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              {/* Overlay Metadata Identifiers */}
              <div className="absolute top-4 left-4 font-mono text-[9px] text-emerald-500/60">SIMULATION OPERATIONAL // OPERATION: {design.processType.toUpperCase()}</div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-emerald-500/60 text-right">TARGET SYSTEM COMPUTE MODULE<br/>BASE_MATERIAL: {design.material.toUpperCase()}</div>

              {/* DYNAMIC SCALABLE SVG CORE LAYER CANVAS */}
              <svg width="280" height="280" className="relative z-10 transition-all duration-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                
                {/* 1. Base Perimeter Geometry Vector Path Cut Rendering */}
                {design.shape === 'circular' && <circle cx="140" cy="140" r="110" fill="none" stroke="#10b981" strokeWidth="2" />}
                {design.shape === 'rectangular' && <rect x="20" y="30" width="240" height="220" rx="14" fill="none" stroke="#10b981" strokeWidth="2" />}
                {design.shape === 'arched' && <path d="M 35 240 L 35 120 A 105 105 0 0 1 245 120 L 245 240 Z" fill="none" stroke="#10b981" strokeWidth="2" />}
                {design.shape === 'hexagon' && <polygon points="140,20 245,80 245,200 140,260 35,200 35,80" fill="none" stroke="#10b981" strokeWidth="2" />}
                {design.shape === 'oval' && <ellipse cx="140" cy="140" rx="120" ry="85" fill="none" stroke="#10b981" strokeWidth="2" />}

                {/* 2. Graphical Inset Border Accent Passes */}
                {design.graphicAccent === 'solid-border' && (
                  design.shape === 'circular' ? <circle cx="140" cy="140" r="98" fill="none" stroke="#059669" strokeWidth="1" /> :
                  design.shape === 'rectangular' ? <rect x="30" y="40" width="220" height="200" rx="8" fill="none" stroke="#059669" strokeWidth="1" /> :
                  design.shape === 'hexagon' ? <polygon points="140,32 233,86 233,194 140,248 47,194 47,86" fill="none" stroke="#059669" strokeWidth="1" /> :
                  design.shape === 'oval' ? <ellipse cx="140" cy="140" rx="108" ry="74" fill="none" stroke="#059669" strokeWidth="1" /> :
                  <path d="M 45 230 L 45 125 A 95 95 0 0 1 235 125 L 235 230 Z" fill="none" stroke="#059669" strokeWidth="1" />
                )}

                {/* Floral Symbol Path Simulator Nodes */}
                {design.graphicAccent === 'floral-frame' && (
                  <>
                    <path d="M 40 50 Q 50 40 60 50 M 220 50 Q 230 40 240 50 M 40 230 Q 50 240 60 230 M 220 230 Q 230 240 240 230" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
                    <circle cx="140" cy="45" r="3" fill="#f59e0b" />
                    <circle cx="140" cy="235" r="3" fill="#f59e0b" />
                  </>
                )}

                {/* Corner Geometric Target Box Markers */}
                {design.graphicAccent === 'corner-accents' && (
                  <path d="M 25 45 L 25 35 L 35 35 M 255 45 L 255 35 L 245 35 M 25 215 L 25 225 L 35 225 M 255 215 L 255 225 L 245 225" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                )}

                {/* 3. Three Independent Spatial Typography Rendering Pass Blocks */}
                {/* TOP TYPOGRAPHY LAYER LINE */}
                <text
                  x="140"
                  y={design.shape === 'arched' ? '115' : '75'}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="9"
                  letterSpacing="1.5"
                  fontWeight="bold"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.topText}
                </text>

                {/* CORE CENTER TYPOGRAPHY LAYER LINE */}
                <text
                  x="140"
                  y={design.shape === 'arched' ? '150' : '142'}
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="13"
                  letterSpacing="0.5"
                  fontWeight="black"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.middleText}
                </text>

                {/* BOTTOM TYPOGRAPHY LAYER LINE */}
                <text
                  x="140"
                  y={design.shape === 'arched' ? '185' : '205'}
                  textAnchor="middle"
                  fill="#a7f3d0"
                  fontSize="10"
                  letterSpacing="2"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.bottomText}
                </text>

              </svg>
            </div>

            {/* ORDER FORWARD ACTION BLOCK (No pricing blocks to ensure maximum client comfort) */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs text-center" style={{ borderColor: 'var(--studio-border)' }}>
              <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                Clicking forward encodes your dimensional coordinate nodes and selected structural values straight into our master request file manifest seamlessly.
              </p>
              <Link 
                href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`}
                className="w-full text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md text-center inline-block transition-all hover:bg-slate-900 bg-slate-800"
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