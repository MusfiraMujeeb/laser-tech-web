'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AIBoothPage() {
  const [rawThought, setRawThought] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEnhanceIdea = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawThought.trim()) return;

    setLoading(true);
    setErrorMessage('');
    setAiSuggestions([]);

    try {
      const response = await fetch('/api/generate-idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ thought: rawThought }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate blueprints.');
      }

      setAiSuggestions(data.suggestions || []);
    } catch (err: any) {
      console.error('AI Processing Error:', err);
      setErrorMessage(err.message || 'Network error communicating with the AI Engine.');
      
      // 🟢 Fallback safe metrics if the API key is unconfigured during initial presentation run
      setAiSuggestions([
        `📐 Concept A: Elegant Layered Geometric Clock\n• Material: Wood / MDF\n• Design Details: Intricate cutouts highlighting interests based on text inputs: "${rawThought.substring(0, 30)}..."`,
        `🪵 Concept B: Backlit LED Monogram Wall Art\n• Material: Wood / MDF\n• Design Details: A stylized initial plate completely backlit with ambient LED structures.`,
        `📐 Concept C: Acrylic Engraved Memory Plaque\n• Material: Acrylic (Perspex)\n• Design Details: Crisp line-art layout paired with structural base framing.`
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <span className="text-2xl mb-2 block animate-pulse">✨🤖✨</span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: 'var(--studio-moss)' }}>
            AI Gift Idea Booth
          </h1>
          <p className="max-w-md mx-auto text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
            Stuck trying to design a unique gift for a loved one? Share your raw thoughts below, and our workshop AI will upgrade it into blueprint concepts.
          </p>
        </div>

        {/* INPUT FORM PANEL */}
        <div className="p-8 md:p-12 rounded-3xl shadow-xl bg-white border mb-8" style={{ borderColor: 'var(--studio-border)' }}>
          <form onSubmit={handleEnhanceIdea} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-700">
                Describe the Person or Occasion *
              </label>
              <textarea
                required
                rows={3}
                value={rawThought}
                onChange={(e) => setRawThought(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm resize-none bg-slate-50 text-slate-800"
                placeholder="Ex: My sister is graduating as a doctor. She loves minimalistic things and warm colors. I want a meaningful room decor piece..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white font-black text-sm py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              style={{ backgroundColor: 'var(--studio-moss)' }}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "🪄 Upgrade Thought Into AI Concepts"
              )}
            </button>
          </form>
        </div>

        {/* ERROR BOX */}
        {errorMessage && (
          <p className="text-center text-xs font-bold text-amber-600 mb-4 bg-amber-50 py-2 rounded-lg border border-amber-200">
            ⚠️ {errorMessage} (Running Fallback Mock System)
          </p>
        )}

        {/* AI OUTPUT SHOWCASE RESULTS */}
        {aiSuggestions.length > 0 && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 mb-2">
              🤖 Generated Blueprint Recommendations:
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {aiSuggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl border bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4"
                  style={{ borderColor: 'var(--studio-border)' }}
                >
                  <pre className="text-xs font-sans whitespace-pre-wrap text-slate-700 leading-relaxed">
                    {suggestion}
                  </pre>
                  
                  <div className="text-right">
                    <Link 
                      href={`/quote?desc=${encodeURIComponent(suggestion)}`}
                      className="inline-block text-[11px] font-black uppercase tracking-wider text-white px-4 py-2 rounded-lg transition-transform hover:scale-[1.02]"
                      style={{ backgroundColor: 'var(--studio-gold)' }}
                    >
                      Use This Blueprint Concept →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}