'use client';

import { useState } from 'react';
import Link from 'next/link';
import { portfolioItems } from '../data/portfolio';

export default function CompleteCleanPortfolio() {
  const [activeTab, setActiveTab] = useState<'All' | 'Industrial' | 'Signage' | 'Creative' | 'CNC Routing'>('All');

  const filteredItems = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-stone-50 text-stone-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* DIRECTORY SECTION HEADER BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b pb-4 border-stone-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">Production Log Catalog</span>
            <h1 className="text-3xl font-black text-stone-900 mt-0.5">Crafted Portfolio Vault</h1>
          </div>
          
          {/* Portfolio Tab Array Controls */}
          <div className="flex flex-wrap gap-1">
            {(['All', 'Industrial', 'Signage', 'Creative', 'CNC Routing'] as const).map(tab => (
              <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${activeTab === tab ? 'bg-stone-900 text-white shadow-xs' : 'bg-white text-stone-500 border'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* HIGH CONTRAST PORTFOLIO PRODUCT DISPLAY CODES MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((card) => (
            <div key={card.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col justify-between p-5 hover:shadow-md transition-all group shadow-2xs">
              <div className="space-y-3">
                <div className="w-full aspect-video bg-stone-100 rounded-xl overflow-hidden relative border border-stone-200/40">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                  <span className="absolute top-2 left-2 text-[8px] font-mono font-black bg-stone-900 text-amber-400 px-2 py-0.5 rounded shadow-sm border border-stone-800">{card.badge}</span>
                </div>
                <h3 className="text-base font-black text-stone-900 tracking-tight leading-snug pt-1">{card.title}</h3>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">{card.desc}</p>
                <p className="text-[10px] font-mono font-bold text-stone-400 pt-1">Material Base Profile: {card.material}</p>
              </div>
              
              {/* FIXED LINK REDIRECT LINK LAYER ROUTING STRINGS */}
              <Link href={`/ai-booth?item=${card.id}`} className="mt-5 w-full text-center py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-2xs block transition-colors">
                Configure Interactive Layout Specification ➔
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}