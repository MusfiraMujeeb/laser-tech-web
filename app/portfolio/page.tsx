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
    <div className="min-h-screen py-12 px-4 md:px-8" style={{ backgroundColor: '#F8F6F2', color: '#26322E' }}>
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b pb-4 border-[#F1ECE4]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C08A3E] font-bold">Production Log Catalog</span>
            <h1 className="text-3xl font-black text-[#26322E] mt-0.5">Crafted Portfolio Vault</h1>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {(['All', 'Industrial', 'Signage', 'Creative', 'CNC Routing'] as const).map(tab => (
              <button 
                key={tab} 
                type="button" 
                onClick={() => setActiveTab(tab)} 
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border ${
                  activeTab === tab ? 'bg-[#26322E] text-white border-[#26322E]' : 'bg-white text-stone-500 border-[#F1ECE4]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((card) => (
            <div key={card.id} className="bg-white border border-[#F1ECE4] rounded-2xl overflow-hidden flex flex-col justify-between p-5 hover:shadow-lg transition-all group shadow-sm">
              <div className="space-y-3">
                <div className="w-full aspect-video bg-[#F8F6F2] rounded-xl overflow-hidden relative border border-[#F1ECE4]">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-2 left-2 text-[8px] font-mono font-black bg-[#26322E] text-[#E8D4A2] px-2 py-0.5 rounded shadow-sm border border-[#3C4A44]">
                    {card.badge}
                  </span>
                </div>
                
                <h3 className="text-base font-black text-[#26322E] tracking-tight leading-snug pt-1">{card.title}</h3>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">{card.desc}</p>
                <p className="text-[10px] font-mono font-bold text-[#7C5A28] bg-[#F8F6F2] px-2 py-1 rounded-md inline-block">
                  Material: {card.material}
                </p>
              </div>
              
              <Link 
                href={`/ai-booth?item=${card.id}`} 
                className="mt-5 w-full text-center py-3 bg-[#26322E] hover:bg-[#33423D] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm block transition-colors"
              >
                Configure Design Blueprint ➔
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}