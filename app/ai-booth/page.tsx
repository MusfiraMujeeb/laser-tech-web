'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AIBoothPage() {
  const [rawThought, setRawThought] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState('');

  // ⚠️ FREE FRONTEND GEMINI TRICK: You can use a public key or client wrapper here later.
  // For your live demo, this mock system simulates the exact output layout structure 
  // without needing complex paywalls or slow processing delays.
  const handleEnhanceIdea = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawThought.trim()) return;

    setLoading(true);
    setAiSuggestions([]);

    // Simulating instant smart design parameter analysis
    setTimeout(() => {
      const mockResponses = [
        `📐 Concept A: Elegant Layered Geometric Clock\n• Material: Mahogany wood base with a clear acrylic overlay.\n• Design Details: Intricate cutouts highlighting their interest with custom script lettering reading: "Time spent together is the greatest gift."`,
        `🪵 Concept B: Backlit LED Monogram Wall Art\n• Material: Thick MDF frame floating off the wall.\n• Design Details: A gorgeous stylized crown monogram of their initial, completely backlit with warm hidden LED strips for a ambient room glow.`,
        `📐 Concept C: Acrylic Engraved Memory Plaque\n• Material: Arched transparent mirror-gold Perspex on a solid base.\n• Design Details: Crisp line-art etching representing their favorite memory, paired with deep laser engraving of names and dates.`
      ];
      setAiSuggestions(mockResponses);
      setLoading(false);
    }, 1500);
  };

  const handleSelectConcept = (concept: string) => {
    setSelectedConcept(concept);
    // Pre-fill standard description parameters and send to the quote section
    alert("Concept captured! Redirecting you to complete your order options details.");
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
                      className="inline-block text-[11px] font-black uppercase tracking-wider text-white px-4 py-2 rounded-lg"
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