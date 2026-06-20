'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InteractiveDesignStudio() {
  // Visual design attributes controlled dynamically by the user
  const [design, setDesign] = useState({
    shape: 'circular', // circular | rectangular | arched
    material: 'Wood / MDF', // Wood / MDF | Acrylic (Perspex)
    style: 'engraved', // engraved | layered-led
    fontStyle: 'serif', // serif | sans | script
    customText: 'YOUR CUSTOM TEXT',
    borderStyle: 'solid' // solid | dashed | floral
  });

  // Calculate pricing basis dynamically based on selection attributes
  const calculatePrice = () => {
    let base = design.material === 'Wood / MDF' ? 2000 : 3500;
    if (design.style === 'layered-led') base += 1500;
    if (design.borderStyle === 'floral') base += 500;
    return base;
  };

  const generatedBlueprintText = `Archetype: ${design.shape.toUpperCase()} ${design.style.toUpperCase()}\nMaterial Base: ${design.material}\nTypography Profile: ${design.fontStyle}\nBorder Mapping: ${design.borderStyle}\nCustom Text Overlay: "${design.customText}"\nEstimated Total: Rs. ${calculatePrice()}`;

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* DASHBOARD HEADER */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Interactive Blueprint Studio</h1>
          <p className="text-xs text-slate-500">Configure real-time physical vector parameters. Customize layout geometries, base material attributes, and typographical alignment instantly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: SYSTEM ATTRIBUTE SELECTORS */}
          <div className="lg:col-span-5 bg-white border p-6 md:p-8 rounded-3xl shadow-xs space-y-6" style={{ borderColor: 'var(--studio-border)' }}>
            <h3 className="font-black text-xs uppercase tracking-wider text-slate-400">Structural Configuration</h3>
            
            {/* 1. GEOMETRIC BASE SHAPE */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Base Shape Geometry</label>
              <div className="grid grid-cols-3 gap-2">
                {['circular', 'rectangular', 'arched'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setDesign({ ...design, shape: s })}
                    className={`px-3 py-2 text-xs rounded-xl border font-bold capitalize transition-all ${design.shape === s ? 'bg-slate-800 text-white border-slate-800 shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. BASE MATERIAL SELECTION */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Material Compound Base</label>
              <div className="grid grid-cols-2 gap-2">
                {['Wood / MDF', 'Acrylic (Perspex)'].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setDesign({ ...design, material: m })}
                    className={`px-3 py-2 text-xs rounded-xl border font-bold transition-all ${design.material === m ? 'bg-slate-800 text-white border-slate-800 shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. MACHINE FABRICATION TRACK */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Fabricating Production Style</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'engraved', label: 'Surface Etching' },
                  { id: 'layered-led', label: 'Backlit LED Layering' }
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setDesign({ ...design, style: st.id })}
                    className={`px-3 py-2 text-xs rounded-xl border font-bold transition-all ${design.style === st.id ? 'bg-slate-800 text-white border-slate-800 shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. TYPOGRAPHY SETUP */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Engraving Typography Profile</label>
              <div className="grid grid-cols-3 gap-2">
                {['serif', 'sans', 'script'].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setDesign({ ...design, fontStyle: f })}
                    className={`px-3 py-2 text-xs rounded-xl border font-bold capitalize transition-all ${design.fontStyle === f ? 'bg-slate-800 text-white border-slate-800 shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. LIVE STRING OVERLAY */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5">Custom Text Parameter Input</label>
              <input
                type="text"
                maxLength={45}
                value={design.customText}
                onChange={(e) => setDesign({ ...design, customText: e.target.value.toUpperCase() })}
                className="w-full px-4 py-3 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none tracking-wide font-mono"
                placeholder="ENTER INSCRIPTION TEXT"
              />
            </div>

          </div>

          {/* RIGHT PANEL: THE LIVE SVG BLUEPRINT CANVAS */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block px-1">🖥️ CAD Vector Simulation Workspace</span>
            
            <div className="bg-slate-950 rounded-3xl border p-8 flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden shadow-inner">
              
              {/* Engineering Grid Underlay */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00ff66 1px, transparent 1px), linear-gradient(90deg, #00ff66 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* Laser Core Alignment Bounds Crosshair */}
              <div className="absolute top-4 left-4 font-mono text-[9px] text-emerald-500/50">X: 0.00mm<br/>Y: 0.00mm</div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-emerald-500/50 text-right">KERF: 0.12mm<br/>FEED: 24mm/s</div>

              {/* DYNAMIC SVG CANVAS SCHEMATIC LAYOUT */}
              <svg width="240" height="240" className="relative z-10 transition-all duration-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                {/* Dynamic Base Outline Mapping */}
                {design.shape === 'circular' && (
                  <circle cx="120" cy="120" r="100" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray={design.style === 'layered-led' ? "6,4" : "0"} />
                )}
                {design.shape === 'rectangular' && (
                  <rect x="20" y="30" width="200" height="180" rx="12" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray={design.style === 'layered-led' ? "6,4" : "0"} />
                )}
                {design.shape === 'arched' && (
                  <path d="M 30 210 L 30 100 A 90 90 0 0 1 210 100 L 210 210 Z" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray={design.style === 'layered-led' ? "6,4" : "0"} />
                )}

                {/* Sub-Layer Path Glow Representation for LED Track */}
                {design.style === 'layered-led' && (
                  design.shape === 'circular' ? (
                    <circle cx="120" cy="120" r="108" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.6" />
                  ) : design.shape === 'rectangular' ? (
                    <rect x="14" y="24" width="212" height="192" rx="16" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.6" />
                  ) : (
                    <path d="M 24 216 L 24 100 A 96 96 0 0 1 216 100 L 216 216 Z" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.6" />
                  )
                )}

                {/* Typography Render Engine Simulation */}
                <text
                  x="120"
                  y={design.shape === 'arched' ? "145" : "125"}
                  textAnchor="middle"
                  fill="#e2e8f0"
                  fontSize="11"
                  fontWeight="bold"
                  letterSpacing="1"
                  fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                >
                  {design.customText.substring(0, 22) || 'TEXT'}
                </text>
                
                {design.customText.length > 22 && (
                  <text
                    x="120"
                    y={design.shape === 'arched' ? "165" : "145"}
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                    fontWeight="bold"
                    letterSpacing="1"
                    fontFamily={design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Courier New, monospace'}
                  >
                    {design.customText.substring(22, 45)}
                  </text>
                )}
              </svg>

            </div>

            {/* TOTAL COST & DIRECT REDIRECT PIPELINE */}
            <div className="bg-white border p-5 rounded-2xl shadow-xs flex justify-between items-center" style={{ borderColor: 'var(--studio-border)' }}>
              <div>
                <span className="text-[10px] font-bold text-slate-400 block uppercase">Estimated Matrix Value</span>
                <span className="text-base font-black text-slate-800">Rs. {calculatePrice().toLocaleString()}.00</span>
              </div>
              
              <Link 
                href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`}
                className="text-white font-black text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all hover:scale-[1.01]"
                style={{ backgroundColor: 'var(--studio-gold)' }}
              >
                Forward Specs Matrix →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}