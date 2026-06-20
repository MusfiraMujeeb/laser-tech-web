'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AIDesignStudioPage() {
  const [formData, setFormData] = useState({
    recipient: '',
    occasion: '',
    vibes: ''
  });
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateBlueprints = async (e: React.FormEvent) => {
    e.preventDefault();
    const compositeThought = `Gift for ${formData.recipient} for a ${formData.occasion} occasion. Interests and aesthetic style: ${formData.vibes}.`;

    setLoading(true);
    setErrorMessage('');
    setAiSuggestions([]);

    try {
      const response = await fetch('/quote/api/generate-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ thought: compositeThought }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to initialize engine.');
      setAiSuggestions(data.suggestions || []);
    } catch (err: any) {
      console.error(err);
      setErrorMessage('Running local fallback simulation workspace.');
      
      // Smart fallbacks dynamically incorporating their inputs
      setAiSuggestions([
        `📐 Concept Alpha: Structural Layered Accent Art\n• Material: Wood / MDF\n• Design Details: Multi-layered relief cuts mapping custom vector elements tailored around a specialized ${formData.occasion || 'celebration'} motif. Includes hidden rear routes for soft 12V LED backlighting panels.`,
        `🪵 Concept Beta: Commemorative Calligraphy Desk Plaque\n• Material: Wood / MDF\n• Design Details: Dark mahogany grain foundation with deep precision vector laser engraving. Features custom cursive script tracking names and dates specialized for a unique ${formData.recipient || 'recipient'} gift asset.`,
        `✨ Concept Gamma: Minimalist Geometric Acrylic Panel\n• Material: Acrylic (Perspex)\n• Design Details: Frameless crystal-clear acrylic pane featuring laser-etched linework mapping their interest in ${formData.vibes || 'minimalist styles'}. Mounted on an illuminated slotted timber base footprint.`
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* UPPER DASHBOARD HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 mb-4">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
            AI Generative Studio v2.0
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-slate-800">
            Smart Blueprint Engine
          </h1>
          <p className="text-xs leading-relaxed text-slate-500">
            Input core destination parameters. Our neural layout processor will automatically map unstructured context variables into production-ready physical workshop templates.
          </p>
        </div>

        {/* WORKSPACE INTERFACE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: CRITERIA SELECTOR FORM PANEL */}
          <div className="lg:col-span-5 bg-white border p-6 md:p-8 rounded-3xl shadow-sm" style={{ borderColor: 'var(--studio-border)' }}>
            <h3 className="font-black text-sm uppercase tracking-wider text-slate-700 mb-6 flex items-center gap-2">
              ⚙️ Parameter Injection Configuration
            </h3>
            
            <form onSubmit={handleGenerateBlueprints} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Who is the Gift For? *</label>
                <input type="text" name="recipient" required value={formData.recipient} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-xl border text-xs bg-slate-50" placeholder="Ex: My project supervisor, close friend, sister" />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">What is the Occasion? *</label>
                <input type="text" name="occasion" required value={formData.occasion} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-xl border text-xs bg-slate-50" placeholder="Ex: Graduation, Wedding anniversary, Birthday" />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Aesthetics / Interests Vibe *</label>
                <input type="text" name="vibes" required value={formData.vibes} onChange={handleInputChange} className="w-full px-4 py-2.5 rounded-xl border text-xs bg-slate-50" placeholder="Ex: Loves gaming, minimal desk setups, traditional typography" />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 bg-slate-800 hover:bg-slate-900 mt-6"
              >
                {loading ? "Synthesizing Blueprint Logic..." : "🚀 Initialize Vector Compilation"}
              </button>
            </form>
          </div>

          {/* RIGHT: LIVE LAB SIMULATOR RENDERING SPACE */}
          <div className="lg:col-span-7 space-y-6">
            {aiSuggestions.length === 0 ? (
              // Empty Simulation State Placeholder Box
              <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center flex flex-col items-center justify-center min-h-[420px] bg-white/50">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 border flex items-center justify-center text-xl text-slate-400 mb-4 animate-pulse">🛠️</div>
                <h4 className="font-bold text-sm text-slate-700 mb-1">Laboratory Idle</h4>
                <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed">
                  Await parameter injection inputs. Fill out the configuration console layout to map physical vector structural assets live.
                </p>
              </div>
            ) : (
              // Active Render Output Container
              <div className="space-y-4 animate-fadeIn">
                <div className="flex justify-between items-center px-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">🤖 Generated Laboratory Options Matrix:</span>
                  {errorMessage && <span className="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md font-bold">Simulation Mode Active</span>}
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {aiSuggestions.map((suggestion, idx) => (
                    <div key={idx} className="p-6 rounded-2xl border bg-white shadow-xs flex flex-col md:flex-row gap-6 items-start md:items-center justify-between transition-all hover:shadow-md" style={{ borderColor: 'var(--studio-border)' }}>
                      
                      {/* Technical Blueprint Vector Schematic Component */}
                      <div className="w-full md:w-32 h-24 bg-slate-950 rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-2 text-center border shadow-inner shrink-0 select-none">
                        {/* CSS Matrix Grid Mapping */}
                        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(#00ff66 1px, transparent 1px), linear-gradient(90deg, #00ff66 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                        <span className="text-xl relative z-10 animate-pulse">📐</span>
                        <span className="font-mono text-[8px] text-emerald-400 mt-1 uppercase tracking-widest font-bold">Path Node #{idx + 1}</span>
                      </div>

                      {/* Schematic Text Context Area */}
                      <div className="flex-1 min-w-0">
                        <pre className="text-xs font-sans whitespace-pre-wrap text-slate-700 leading-relaxed">
                          {suggestion}
                        </pre>
                      </div>

                      {/* Use Action Redirect Button Link */}
                      <div className="w-full md:w-auto text-right self-end md:self-center">
                        <Link 
                          href={`/quote?desc=${encodeURIComponent(suggestion)}`}
                          className="w-full md:w-auto inline-block text-[11px] font-black uppercase tracking-wider text-white px-4 py-2.5 rounded-xl transition-all hover:scale-[1.02]"
                          style={{ backgroundColor: 'var(--studio-gold)' }}
                        >
                          Select Layout →
                        </Link>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}