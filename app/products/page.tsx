'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Real-world catalog data from Laser Tech workshop management settings
const LASER_TECH_PRODUCTS = [
  {
    id: 'nikah-frame',
    title: '3D Luxury Royal Nikah Frame',
    category: 'Wedding',
    description: 'Double-layered premium mahogany base with a floating clear acrylic panel, built-in analog clock, crown monogram, and custom calendar date grid.',
    originalPrice: 7500,
    discountPercent: 12,
    isDiscountActive: true, // Owner control flag
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80',
    tag: 'Best Seller'
  },
  {
    id: 'shop-signboard',
    title: 'Commercial Business Signboard',
    category: 'Commercial',
    description: 'High-impact outdoor/indoor shop display plate with heavy wood composite backing and 3D mirror gold acrylic lettering. Includes wall standoff spacers.',
    originalPrice: 14500,
    discountPercent: 15,
    isDiscountActive: true, // Owner control flag
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=500&q=80',
    tag: 'Trending'
  },
  {
    id: 'notebook',
    title: 'A5 Premium Engraved Notebook',
    category: 'Stationery',
    description: '100 high-grade lined pages bound securely between a lightweight 3mm raw mahogany wooden cover, laser-etched with intricate detailing.',
    originalPrice: 2800,
    discountPercent: 10,
    isDiscountActive: false, // Regular price item
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=500&q=80',
    tag: 'Gift Favorite'
  },
  {
    id: 'table-lamp',
    title: 'Glowing LED Acrylic Status Trophy',
    category: 'Gifts',
    description: 'Polished transparent acrylic display sheet slotted into a solid wooden base block embedded with multi-color switchable LED strip lights.',
    originalPrice: 5200,
    discountPercent: 10,
    isDiscountActive: true, // Owner control flag
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80',
    tag: 'New Arrival'
  }
];

const CATEGORIES = ['All Products', 'Wedding', 'Commercial', 'Stationery', 'Gifts'];

export default function PerfectedMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [activeCheckoutItem, setActiveCheckoutItem] = useState<any>(null);
  
  // Checkout form inputs state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // Dynamic Pop-up trigger checking if the owner has *any* active discount running
  useEffect(() => {
    const hasActivePromotions = LASER_TECH_PRODUCTS.some(p => p.isDiscountActive && p.discountPercent > 0);
    if (hasActivePromotions) {
      // Small psychological delay for smooth UX loading entry
      const timer = setTimeout(() => setShowPromoPopup(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const filteredProducts = selectedCategory === 'All Products'
    ? LASER_TECH_PRODUCTS
    : LASER_TECH_PRODUCTS.filter(p => p.category === selectedCategory);

  const calculateDisplayPrice = (original: number, discount: number, isActive: boolean) => {
    if (!isActive || discount <= 0) return original;
    return Math.round(original * (1 - discount / 100));
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !shippingAddress) return;
    
    // Simulating transactional completion matrix state
    setCheckoutComplete(true);
    setTimeout(() => {
      setActiveCheckoutItem(null);
      setCheckoutComplete(false);
      setCustomerName('');
      setCustomerPhone('');
      setShippingAddress('');
    }, 3500);
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-stone-50 text-stone-800 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* BANNER INTRO HEADER */}
        <div className="mb-12 border-b border-stone-200 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-widest font-bold block">Laser Tech Marketplace</span>
            <h1 className="text-4xl font-black tracking-tight text-stone-900 mt-1">Our Product Catalog</h1>
            <p className="text-sm text-stone-500 mt-2 max-w-2xl">
              Explore our selection of laser-crafted pieces. Choose to directly purchase an authentic baseline model, or open it inside our customization booth studio.
            </p>
          </div>
        </div>

        {/* CATEGORY SELECTOR CONTROLS */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* E-COMMERCE PRODUCTS CATALOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const displaySale = product.isDiscountActive && product.discountPercent > 0;
            const finalPrice = calculateDisplayPrice(product.originalPrice, product.discountPercent, product.isDiscountActive);

            return (
              <div key={product.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative aspect-video w-full bg-stone-100 overflow-hidden border-b border-stone-100">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                  
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="bg-stone-900/90 text-white text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md">{product.tag}</span>
                    {displaySale && (
                      <span className="bg-red-600 text-white text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-xs font-bold animate-pulse">
                        🔥 Save {product.discountPercent}%
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest block">{product.category}</span>
                    <h3 className="text-lg font-black tracking-tight text-stone-900 group-hover:text-amber-600 transition-colors">{product.title}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">{product.description}</p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-stone-900 font-mono">LKR {finalPrice.toLocaleString()}</span>
                      {displaySale && <span className="text-xs font-mono font-medium text-stone-400 line-through">LKR {product.originalPrice.toLocaleString()}</span>}
                    </div>
                    
                    {/* TWO TIER ACTION CHANNELS */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setActiveCheckoutItem(product)}
                        className="py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs tracking-wide text-center transition-all cursor-pointer shadow-xs"
                      >
                        🛍️ Instant Buy
                      </button>
                      <Link 
                        href={`/ai-booth?item=${product.id}`}
                        className="py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/40 font-bold text-xs tracking-wide text-center transition-all"
                      >
                        🎨 Customize
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 📢 MODULE A: THE "DON'T MISS OUT!" WELCOME PROMOTIONAL POP-UP MODAL */}
        {showPromoPopup && (
          <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white max-w-md w-full rounded-2xl border border-stone-200 shadow-2xl p-6 text-center space-y-4 relative transform scale-100 transition-transform">
              <button 
                type="button" 
                onClick={() => setShowPromoPopup(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 text-lg font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-2xl">🔥</div>
              <div className="space-y-1">
                <h2 className="text-xl font-black text-stone-900 tracking-tight">Limited Promotional Offer Active!</h2>
                <p className="text-xs text-stone-500 leading-relaxed px-2">
                  Special price drops are currently active across our handcrafted catalog modules. Complete your booking today and unlock automatic savings!
                </p>
              </div>
              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => { setShowPromoPopup(false); setSelectedCategory('All Products'); }}
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer transition-all"
                >
                  Explore Discounted Items ➔
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 🛍️ MODULE B: THE LIVE CUSTOMER CHECKOUT SIDE-SHEET PANEL */}
        {activeCheckoutItem && (
          <div className="fixed inset-0 bg-stone-900/30 backdrop-blur-xs flex justify-end z-50 animate-fade-in">
            <div className="bg-white w-full max-w-md h-full shadow-2xl border-l border-stone-200 p-6 flex flex-col justify-between overflow-y-auto relative animate-slide-left">
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <h2 className="text-lg font-black tracking-tight text-stone-900">Secure Order Verification</h2>
                  <button type="button" onClick={() => setActiveCheckoutItem(null)} className="text-stone-400 hover:text-stone-700 text-sm font-bold cursor-pointer">✕ Close</button>
                </div>

                {checkoutComplete ? (
                  /* Success Screen Overlay */
                  <div className="py-12 text-center space-y-3 animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full text-emerald-600 flex items-center justify-center text-3xl mx-auto">✓</div>
                    <h3 className="text-base font-black text-stone-900">Order Dispatched Successfully!</h3>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Our manufacturing queue has logged your order code. Laser Tech workshop operators will contact your phone shortly to verify custom logistics.
                    </p>
                  </div>
                ) : (
                  /* Standard Input Fields Form */
                  <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                    {/* Tiny Summary Product Card */}
                    <div className="p-3 bg-stone-50 border rounded-xl flex items-center gap-3">
                      <img src={activeCheckoutItem.image} className="w-12 h-12 object-cover rounded-lg" alt="" />
                      <div>
                        <h4 className="text-xs font-black text-stone-900">{activeCheckoutItem.title}</h4>
                        <p className="text-[11px] font-mono font-bold text-amber-700 mt-0.5">
                          LKR {calculateDisplayPrice(activeCheckoutItem.originalPrice, activeCheckoutItem.discountPercent, activeCheckoutItem.isDiscountActive).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1 tracking-wider font-mono">Recipient Full Name</label>
                        <input type="text" required placeholder="Ex: Muhammad Mujeeb" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:outline-none focus:border-amber-600 font-medium" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1 tracking-wider font-mono">Contact Phone Number</label>
                        <input type="tel" required placeholder="Ex: +94 77 123 4567" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:outline-none focus:border-amber-600 font-medium font-mono" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1 tracking-wider font-mono">Delivery Shipping Address</label>
                        <textarea required rows={3} placeholder="Provide your full house number, street address, and city location code precisely" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:outline-none focus:border-amber-600 font-medium resize-none leading-relaxed" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer transition-all mt-2"
                    >
                      Confirm and Place Cash-on-Delivery Order ➔
                    </button>
                  </form>
                )}
              </div>

              <div className="text-[10px] text-stone-400 font-mono text-center border-t pt-4 mt-4">
                🔒 Secured Verification Pipeline // Laser Tech LK
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}