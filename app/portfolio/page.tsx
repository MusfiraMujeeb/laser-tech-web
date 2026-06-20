'use client';

import { useState } from 'react';
import Link from 'next/link';

// Base business chat link line
const BASE_WHATSAPP = "94757991141";

const catalogProducts = [
  {
    id: 'wood-monogram',
    title: 'Illuminated Birthday Monogram',
    category: 'Wooden Crafts',
    badge: 'Best Seller 🔥',
    summary: 'Custom premium wooden initial lettering frames featuring built-in warm LED backlighting and birthday engravings.',
    features: ['Crown Monogram Customization', 'Changeable LED Colors', 'Optional Integrated Clock'],
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80', // Replace with your image_a3ab43 path
    productUrl: 'https://wa.me/94757991141?product=8180533508677249',
  },
  {
    title: 'Mahogany Nikah Calendar Clock',
    category: 'Wooden Crafts',
    badge: 'Premium Craft',
    summary: 'Elegant dark-stained wooden calendar plaques with custom Arabic calligraphy overlays and functional clock modules.',
    features: ['Engraved Anniversary Markings', 'Laser-Cut Script', 'Mahogany Wood Base'],
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80', // Replace with your image_a3ab97 path
    productUrl: 'https://wa.me/94757991141?product=8776536555706403',
  },
  {
    title: 'Golden Mirror Acrylic Sign',
    category: 'Acrylic Boards',
    badge: 'Wedding Special ✨',
    summary: 'Stunning arched clear acrylic boards with reflective gold mirror borders and premium vinyl typography layouts.',
    features: ['Arched Polished Acrylic', 'Mirror Gold Foil Lettering', 'Sturdy Marble Base Stand'],
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80', // Replace with your image_a3abbe path
    productUrl: 'https://wa.me/94757991141?product=7691964980914240',
  },
  {
    title: 'Custom Laser-Engraved Clocks',
    category: 'Wooden Crafts',
    badge: 'Custom Gift',
    summary: 'Solid natural wood plaques engraved with personalized quotes, custom names, and modern clock hands.',
    features: ['Deep Wood Grain Finish', 'Custom Verse Engraving', 'Premium Silent Movement'],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', // Replace with your image_a3ae84 path
    productUrl: 'https://wa.me/94757991141?product=30556117950703282',
  },
  {
    title: 'Artisan Layered Notebooks',
    category: 'Custom Gifts',
    badge: 'New Design',
    summary: 'A5 spiral notebooks featuring custom laser-cut wooden covers with colorful underlying leaf patterns.',
    features: ['100 Premium Pages', 'Intricate Cutout Patterns', 'Personalized Name Script'],
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80', // Replace with your image_a3aebf path
    productUrl: 'https://wa.me/94757991141?product=24974557465502010',
  },
  {
    title: 'Custom Wooden Trophies',
    category: 'Custom Gifts',
    badge: 'Corporate',
    summary: 'Layered corporate appreciation shields and teacher thank-you awards standing on secure block footprints.',
    features: ['Bulk Batch Production', 'Multi-Layer Wood Specs', 'Crisp Vector Crest Prints'],
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80', // Replace with your image_a3aedf path
    productUrl: 'https://wa.me/94757991141?product=26251056467842114',
  }
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Wooden Crafts', 'Acrylic Boards', 'Custom Gifts'];

  const filteredProducts = activeTab === 'All' 
    ? catalogProducts 
    : catalogProducts.filter(p => p.category === activeTab);

  const getCustomWhatsAppLink = (productTitle: string, directUrl: string) => {
    const text = encodeURIComponent(`Hello Laser Tech! I was viewing your website gallery and I am highly interested in ordering a customized "${productTitle}". Can you share the pricing matrix for this?`);
    return `${directUrl}&text=${text}`;
  };

  return (
    <main className="min-h-screen py-16 px-6 md:px-12" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* HERO TITLE SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--studio-gold)' }}>Studio Showcase</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: 'var(--studio-moss)' }}>
            Crafted Masterpieces
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
            Explore genuine real-world execution layouts built directly inside our Mawanella workshop workspace. Click any item to explore ordering customization pathways inside WhatsApp.
          </p>
        </div>

        {/* DYNAMIC CATEGORY FILTER TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs border ${
                activeTab === cat
                  ? 'bg-slate-800 text-white border-slate-800'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* INTERACTIVE PRODUCT GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-3xl border bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
              style={{ borderColor: 'var(--studio-border)' }}
            >
              <div>
                {/* Image Container Panel */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm bg-slate-900/80 backdrop-blur-xs">
                    {product.badge}
                  </span>
                </div>

                {/* Content Details Block */}
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-1" style={{ color: 'var(--studio-gold)' }}>
                    {product.category}
                  </span>
                  <h3 className="text-xl font-black mb-2.5 text-slate-800 transition-colors group-hover:text-emerald-800">
                    {product.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4 text-slate-500">
                    {product.summary}
                  </p>

                  {/* Bullet Spec Checklist */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {product.features.map((feat) => (
                      <span key={feat} className="text-[10px] bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md font-medium border border-slate-100">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Row */}
              <div className="p-6 pt-0">
                <a
                  href={getCustomWhatsAppLink(product.title, product.productUrl)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider text-white shadow-xs transition-all hover:opacity-95"
                  style={{ backgroundColor: 'var(--studio-moss)' }}
                >
                  <span>💬 Check Options & Quote</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM REDIRECT SHOWROOM BOX */}
        <div className="mt-16 text-center bg-white border rounded-3xl p-8 max-w-3xl mx-auto shadow-xs" style={{ borderColor: 'var(--studio-border)' }}>
          <h3 className="text-lg font-black text-slate-800 mb-2">Have a Custom Project Layout Idea?</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
            If you want something unique that isn't featured in the catalog grid above, use our blueprint workspace to configure custom parameters.
          </p>
          <Link href="/quote" className="inline-block text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all bg-slate-800 hover:bg-slate-900">
            Open Blueprint Quote Builder ⚡
          </Link>
        </div>

      </div>
    </main>
  );
}