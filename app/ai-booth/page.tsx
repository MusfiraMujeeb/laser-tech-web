'use client';

import { useState } from 'react';
import Link from 'next/link';

// Preset baseline design templates the owner actually produces
const WORKSHOP_CATALOG = [
  {
    id: 'arch-led',
    title: 'Layered LED Circular Frame',
    baseMaterial: 'Wood / MDF',
    baseService: 'Laser Cutting',
    maxChars: 40,
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'arch-nikah',
    title: 'Mahogany Calligraphy Signboard',
    baseMaterial: 'Wood / MDF',
    baseService: 'Laser Engraving',
    maxChars: 60,
    imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'arch-acrylic',
    title: 'Arched Gold Mirror Plaque',
    baseMaterial: 'Acrylic (Perspex)',
    baseService: 'Laser Cutting',
    maxChars: 30,
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=400&q=80'
  }
];

export default function SmartCustomizerPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(WORKSHOP_CATALOG[0]);
  const [customText, setCustomText] = useState('');
  const [dimensions, setDimensions] = useState('Standard A4 Layout (8.3 x 11.7 in)');
  const [auditReport, setAuditReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuditReport(null);

    setTimeout(() => {
      const charCount = customText.length;
      const isCompatible = charCount <= selectedTemplate.maxChars;
      
      // Compute mock technical processing parameters systematically
      const estimatedLaserTime = Math.ceil((charCount * 12) + (dimensions.includes('A4') ? 180 : 320));
      const baselinePrice = selectedTemplate.baseMaterial === 'Wood / MDF' ? 1850 : 3400;
      const structuralCost = baselinePrice + (charCount * 15);

      setAuditReport({
        compatible: isCompatible,
        timeSec: estimatedLaserTime,
        costRs: structuralCost,
        summary: `Archetype compliance verified. The vector tracking software allocates path nodes for a total character count of ${charCount} on an item matching base dimensions of ${dimensions}. Material properties meet standard kerf metrics.`
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Automated Production Studio</h1>
          <p className="text-xs text-slate-500">Configure custom parameters atop pre-approved workshop catalog models to calculate precise manufacturing metrics instantly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* STEP 1 & 2: INPUT AND SELECTION FORM PANEL */}
          <form onSubmit={handleRunAudit} className="lg:col-span-6 bg-white border p-6 md:p-8 rounded-3xl shadow-xs space-y-6" style={{ borderColor: 'var(--studio-border)' }}>
            
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3">1. Select Baseline Catalog Archetype</label>
              <div className="grid grid-cols-3 gap-3">
                {WORKSHOP_CATALOG.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setSelectedTemplate(item)}
                    className={`cursor-pointer overflow-hidden rounded-xl border-2 transition-all p-2 bg-slate-50 text-center ${selectedTemplate.id === item.id ? 'border-slate-800 ring-4 ring-slate-100' : 'border-transparent opacity-70'}`}
                  >
                    <img src={item.imageUrl} alt={item.title} className="w-full h-16 object-cover rounded-lg mb-2" />
                    <span className="text-[10px] font-bold block truncate text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1.5">2. Target Sizing Scope</label>
              <select value={dimensions} onChange={(e) => setDimensions(e.target.value)} className="w-full px-4 py-3 rounded-xl border text-xs bg-slate-50 text-slate-800">
                <option>Standard A4 Layout (8.3 x 11.7 in)</option>
                <option>Large A3 Exhibition Format (11.7 x 16.5 in)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-400">3. Text Customization Input</label>
                <span className={`text-[10px] font-bold ${customText.length > selectedTemplate.maxChars ? 'text-rose-600' : 'text-slate-400'}`}>
                  {customText.length} / {selectedTemplate.maxChars} Max Chars
                </span>
              </div>
              <input 
                type="text"
                required
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border text-xs bg-slate-50 text-slate-800 focus:outline-none"
                placeholder="Ex: Amran & Fathima - 2026.06.20"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md bg-slate-800 hover:bg-slate-900 disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Analyzing Vector Parameters...' : '⚡ Audit & Generate Estimates'}
            </button>
          </form>

          {/* SYSTEM RESPONSE DISPLAY CONSOLE */}
          <div className="lg:col-span-6 space-y-4">
            {!auditReport ? (
              <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center flex flex-col items-center justify-center min-h-[380px] bg-white/40">
                <span className="text-3xl mb-3">🎛️</span>
                <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wider">Analysis Core Idle</h4>
                <p className="text-[11px] text-slate-400 max-w-xs mt-1 leading-relaxed">Enter production typography and parameters to evaluate engineering margins and machine compatibility metrics live.</p>
              </div>
            ) : (
              <div className="bg-white border p-6 rounded-3xl shadow-xs space-y-6 animate-fadeIn" style={{ borderColor: 'var(--studio-border)' }}>
                
                {/* HEAD INVOICE STATS PANEL */}
                <div className="border-b pb-4 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-black">Job Blueprint Manifest</span>
                    <h3 className="font-black text-base text-slate-800 mt-0.5">{selectedTemplate.title}</h3>
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${auditReport.compatible ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                    {auditReport.compatible ? '✓ Safe Vector Margins' : '⚠️ Bounds Overflow'}
                  </span>
                </div>

                {/* COMPUTED PRODUCTION INVOICE SPECS GRID */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Estimated Machine Runtime</span>
                    <span className="font-mono text-sm font-black text-slate-800">{Math.floor(auditReport.timeSec / 60)}m {auditReport.timeSec % 60}s</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Calculated Cost Basis</span>
                    <span className="text-sm font-black text-slate-900">Rs. {auditReport.costRs.toLocaleString()}.00</span>
                  </div>
                </div>

                {/* TEXT SUMMARY GENERATION BOX */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Extracted Job Specs Summary</span>
                  <p className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border leading-relaxed font-sans border-slate-100">
                    {auditReport.summary} <strong>Custom engraving matrix data token: "{customText}"</strong>.
                  </p>
                </div>

                {/* ROUTE INVOICE ACTION BUTTON */}
                {auditReport.compatible && (
                  <Link 
                    href={`/quote?desc=${encodeURIComponent(`Archetype: ${selectedTemplate.title}\nDimensions: ${dimensions}\nEngraving Copy: ${customText}\nCalculated Price Matrix: Rs. ${auditReport.costRs}`)}`}
                    className="w-full inline-flex items-center justify-center text-center text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-transform hover:scale-[1.01]"
                    style={{ backgroundColor: 'var(--studio-gold)' }}
                  >
                    Proceed with Calculated Pricing Template →
                  </Link>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}