'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdvancedDesignStudio() {
  const [design, setDesign] = useState({
    itemType: 'signboard', // signboard | token | keepsake
    shape: 'rectangular',  // circular | rectangular | arched | hexagon
    material: 'Wood / MDF',
    style: 'engraved',     // engraved | layered-led
    fontStyle: 'serif',
    textAlignment: 'middle', // top | middle | bottom
    customText: 'AMRAN & FATHIMA',
    size: 'A4'             // A4 | A3
  });

  // Dynamic Itemized Pricing Calculator Engine
  const getPricingDetails = () => {
    const baseMaterialCost = design.material === 'Wood / MDF' ? 1200 : 2200;
    const sizeMultiplier = design.size === 'A3' ? 1.5 : 1.0;
    
    const materialTotal = baseMaterialCost * sizeMultiplier;
    const laserProcessingCost = design.style === 'layered-led' ? 1800 : 850;
    const alignmentFineTuning = design.textAlignment !== 'middle' ? 250 : 0;
    
    const subtotal = materialTotal + laserProcessingCost + alignmentFineTuning;

    return {
      materialCost: materialTotal,
      laserCost: laserProcessingCost,
      setupCost: alignmentFineTuning,
      total: subtotal
    };
  };

  const pricing = getPricingDetails();

  const generatedBlueprintText = `Product Profile: ${design.itemType.toUpperCase()}\nGeometry Configuration: ${design.shape.toUpperCase()}\nMaterial Layer: ${design.material} (${design.size})\nProduction Process: ${design.style.toUpperCase()}\nText Configuration: Align-${design.textAlignment.toUpperCase()} / Font-${design.fontStyle.toUpperCase()}\nInscription String: "${design.customText}"\nAudited Price Manifest: Rs. ${pricing.total}`;

  // Helper mapping for dynamic text positioning inside the SVG canvas
  const getTextYPosition = () => {
    if (design.shape === 'arched') {
      if (design.textAlignment === 'top') return '105';
      if (design.textAlignment === 'bottom') return '185';
      return '145'; // middle
    }
    // Standard Bounds (Circular / Rectangular)
    if (design.textAlignment === 'top') return '75';
    if (design.textAlignment === 'bottom') return '185';
    return '125'; // middle
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-8" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">CAD Parameter Design Center</h1>
          <p className="text-xs text-slate-500 mt-1">Configure layout variants and typography placement arrays while monitoring an itemized cost calculation schema live.</p>
        </div>

        {/* WORKSPACE MAIN INTERFACE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SECTION: ENHANCED PARAMETER SELECTION PANELS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* PANEL A: BASE MATERIAL & ITEM OBJECTIVE */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">1. Structural Base Specs</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Product Archetype</label>
                  <select value={design.itemType} onChange={(e) => setDesign({ ...design, itemType: e.target.value })} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="signboard">Wall Signboard</option>
                    <option value="token">Standing Token / Trophy</option>
                    <option value="keepsake">Memory Keepsake Box</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Dimension Matrix</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['A4', 'A3'].map((sz) => (
                      <button key={sz} type="button" onClick={() => setDesign({ ...design, size: sz })} className={`px-2 py-1.5 text-xs rounded-lg border font-bold transition-all ${design.size === sz ? 'bg-slate-800 text-white border-slate-800' : 'bg-slate-50 text-slate-700'}`}>
                        {sz} Spec
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Material Base</label>
                  <select value={design.material} onChange={(e) => setDesign({ ...design, material: e.target.value })} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option>Wood / MDF</option>
                    <option>Acrylic (Perspex)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Laser Machine Track</label>
                  <select value={design.style} onChange={(e) => setDesign({ ...design, style: e.target.value })} className="w-full px-3 py-2 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none">
                    <option value="engraved">Surface Etching (Raster)</option>
                    <option value="layered-led">Backlit LED Layering (Vector)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* PANEL B: SHAPES & GEOMETRIES MATRIX */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-3" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">2. Vector Geometries</h3>
              <div className="grid grid-cols-4 gap-2">
                {['rectangular', 'circular', 'arched', 'hexagon'].map((sh) => (
                  <button key={sh} type="button" onClick={() => setDesign({ ...design, shape: sh })} className={`py-2 px-1 text-[11px] rounded-xl border font-black capitalize truncate ${design.shape === sh ? 'bg-slate-800 text-white border-slate-800' : 'bg-slate-50 text-slate-600'}`}>
                    {sh}
                  </button>
                ))}
              </div>
            </div>

            {/* PANEL C: TYPOGRAPHY DESIGNS & ALIGNMENTS */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h3 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">3. Laser Typography Alignments</h3>
              
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Aesthetic Font Node</label>
                <div className="grid grid-cols-3 gap-2">
                  {['serif', 'sans', 'script'].map((fn) => (
                    <button key={fn} type="button" onClick={() => setDesign({ ...design, fontStyle: fn })} className={`py-1.5 text-xs rounded-lg border font-bold capitalize ${design.fontStyle === fn ? 'bg-slate-800 text-white border-slate-800' : 'bg-slate-50 text-slate-600'}`}>
                      {fn} Style
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Wording Plane Alignment</label>
                <div className="grid grid-cols-3 gap-2">
                  {['top', 'middle', 'bottom'].map((al) => (
                    <button key={al} type="button" onClick={() => setDesign({ ...design, textAlignment: al })} className={`py-1.5 text-xs rounded-lg border font-bold capitalize ${design.textAlignment === al ? 'bg-slate-800 text-white border-slate-800' : 'bg-slate-50 text-slate-600'}`}>
                      {al} Line
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Custom Inscription Input String</label>
                <input type="text" maxLength={45} value={design.customText} onChange={(e) => setDesign({ ...design, customText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border text-xs bg-slate-50 text-slate-800 font-mono tracking-wide focus:outline-none" placeholder="TYPE ENGRAVING STRING HERE..." />
              </div>
            </div>

          </div>

          {/* RIGHT SECTION: CAD VIEWPORTS & TRANSPARENT BOM INVOICE */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* SPACIOUS WIDESCREEN CAD SIMULATOR VIEWPORT */}
            <div className="bg-slate-950 rounded-2xl border p-8 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00ff66 1px, transparent 1px), linear-gradient(90deg, #00ff66 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="absolute top-4 left-4 font-mono text-[9px] text-emerald-500/60">NODE MAP: {design.shape.toUpperCase()} // PLACEMENT: {design.textAlignment.toUpperCase()}</div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-emerald-500/60 text-right">WORKSPACE: {design.size} OVERLAY<br/>BASE_MAT: {design.material.split(' ')[0]}</div>

              {/* DYNAMIC SVG CANVAS */}
              <svg width="260" height="260" className="relative z-10 transition-all duration-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                {design.shape === 'circular' && <circle cx="130" cy="130" r="100" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray={design.style === 'layered-led' ? "5,4" : "0"} />}
                {design.shape === 'rectangular' && <rect x="20" y="30" width="220" height="200" rx="12" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray={design.style === 'layered-led' ? "5,4" : "0"} />}
                {design.shape === 'arched' && <path d="M 30 220 L 30 110 A 100 100 0 0 1 230 110 L 230 220 Z" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray={design.style === 'layered-led' ? "5,4" : "0"} />}
                {design.shape === 'hexagon' && <polygon points="130,25 220,75 220,185 130,235 40,185 40,75" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray={design.style === 'layered-led' ? "5,4" : "0"} />}

                {/* Sub-Layer LED Track Indicator Lines */}
                {design.style === 'layered-led' && (
                  design.shape === 'circular' ? <circle cx="130" cy="130" r="108" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" /> :
                  design.shape === 'rectangular' ? <rect x="14" y="24" width="232" height="212" rx="16" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" /> :
                  design.shape === 'hexagon' ? <polygon points="130,17 228,71 228,189 130,243 32,189 32,71" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" /> :
                  <path d="M 24 226 L 24 110 A 106 106 0 0 1 236 110 L 236 226 Z" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" />
                )}

                {/* TEXT INJECTION WITH VARIABLE PLANE COORDINATES */}
                <text
                  x="130"
                  y={getTextYPosition()}
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="12"
                  fontWeight="bold"
                  letterSpacing="1"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.customText.substring(0, 22) || 'TEXT INSCRIPTION'}
                </text>
                
                {design.customText.length > 22 && (
                  <text
                    x="130"
                    y={parseInt(getTextYPosition()) + 18}
                    textAnchor="middle"
                    fill="#cbd5e1"
                    fontSize="11"
                    fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                  >
                    {design.customText.substring(22, 45)}
                  </text>
                )}
              </svg>
            </div>

            {/* ITEMIZED BILL OF MATERIALS (BOM) DISCLOSURE PANEL (Removes Hesitancy) */}
            <div className="bg-white border p-6 rounded-2xl shadow-xs space-y-4" style={{ borderColor: 'var(--studio-border)' }}>
              <h4 className="font-black text-xs uppercase tracking-wider text-slate-400 border-b pb-2">📊 Transparent Production Cost Estimation</h4>
              
              <div className="text-xs space-y-2.5 text-slate-600 font-medium">
                <div className="flex justify-between">
                  <span>Base Material Compound Allocation ({design.material} - {design.size}):</span>
                  <span className="font-mono font-bold text-slate-800">Rs. {pricing.materialCost.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Laser Pathing Runtime Setup ({design.style === 'layered-led' ? 'LED Dual Pass' : 'Single Pass Raster'}):</span>
                  <span className="font-mono font-bold text-slate-800">Rs. {pricing.laserCost.toLocaleString()}.00</span>
                </div>
                {pricing.setupCost > 0 && (
                  <div className="flex justify-between">
                    <span>Typography Off-Axis Calibration Layout Cost:</span>
                    <span className="font-mono font-bold text-slate-800">Rs. {pricing.setupCost.toLocaleString()}.00</span>
                  </div>
                )}
                <div className="border-t pt-3 flex justify-between items-center text-sm">
                  <span className="font-black text-slate-800">Total Calculated Cost Basis:</span>
                  <span className="font-mono font-black text-lg text-slate-900">Rs. {pricing.total.toLocaleString()}.00</span>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`}
                  className="w-full text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md text-center inline-block transition-transform hover:scale-[1.01]"
                  style={{ backgroundColor: 'var(--studio-gold)' }}
                >
                  Forward Design Parameters to Order →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}