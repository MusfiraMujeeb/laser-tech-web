'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function StudioContent() {
  const searchParams = useSearchParams();
  
  const [design, setDesign] = useState({
    itemType: 'nikah-clock-frame', 
    businessType: 'boutique', 
    shape: 'circular', 
    woodTone: 'mahogany', 
    acrylicFinish: 'gold-mirror', 
    mountingStyle: 'stand', 
    fontStyle: 'script',
    topText: 'OUR WEDDING DAY',
    middleText: 'AMRAN & FATHIMA',
    bottomText: '2026.06.20'
  });

  const [realisticView, setRealisticView] = useState(true);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  useEffect(() => {
    const itemParam = searchParams.get('item');
    if (itemParam) {
      if (itemParam === 'notebook') {
        setDesign(prev => ({ ...prev, itemType: 'notebook', shape: 'rectangular', mountingStyle: 'spiral-bound', topText: 'PERSONAL DIARY', middleText: 'M. MUJEEB', bottomText: 'ESTABLISHED 2026' }));
      } else if (itemParam === 'shop-signboard') {
        setDesign(prev => ({ ...prev, itemType: 'shop-signboard', shape: 'rectangular', mountingStyle: 'metal-standoffs', topText: 'THREADIFY', middleText: 'COLLECTION', bottomText: 'ESTD // 2024' }));
      } else if (itemParam === 'table-lamp') {
        setDesign(prev => ({ ...prev, itemType: 'table-lamp', shape: 'arched', mountingStyle: 'stand', topText: 'NIGHT ILLUMINATION', middleText: 'WELCOME HOME', bottomText: '💫 COZY VIBES 💫' }));
      } else if (itemParam === 'nikah-frame') {
        setDesign(prev => ({ ...prev, itemType: 'nikah-clock-frame', shape: 'circular', mountingStyle: 'stand', topText: 'OUR WEDDING DAY', middleText: 'AMRAN & FATHIMA', bottomText: '2026.06.20' }));
      }
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'itemType') {
      if (value === 'notebook') {
        setDesign(prev => ({ ...prev, itemType: value, shape: 'rectangular', mountingStyle: 'spiral-bound', topText: 'PERSONAL DIARY', middleText: 'M. MUJEEB', bottomText: 'ESTABLISHED 2026' }));
        return;
      } else if (value === 'shop-signboard') {
        setDesign(prev => ({ ...prev, itemType: value, businessType: 'boutique', shape: 'rectangular', mountingStyle: 'metal-standoffs', topText: 'THREADIFY', middleText: 'COLLECTION', bottomText: 'ESTD // 2024' }));
        return;
      } else if (value === 'table-lamp') {
        setDesign(prev => ({ ...prev, itemType: value, shape: 'arched', mountingStyle: 'stand', topText: 'NIGHT ILLUMINATION', middleText: 'WELCOME HOME', bottomText: '💫 COZY VIBES 💫' }));
        return;
      } else {
        setDesign(prev => ({ ...prev, itemType: value, shape: 'circular', mountingStyle: 'stand', topText: 'OUR WEDDING DAY', middleText: 'AMRAN & FATHIMA', bottomText: '2026.06.20' }));
        return;
      }
    }

    setDesign(prev => ({ ...prev, [name]: value }));
  };

  // Explicit calculation breakdown variables
  const getBasePrice = () => {
    if (design.itemType === 'nikah-clock-frame') return 6600;
    if (design.itemType === 'shop-signboard') return 12320;
    if (design.itemType === 'notebook') return 2800;
    return 4000;
  };

  const getPremiumAddonPrice = () => {
    if (design.acrylicFinish === 'gold-mirror' || design.acrylicFinish === 'rose-gold') return 850;
    return 0;
  };

  const getTotalPrice = () => getBasePrice() + getPremiumAddonPrice();

  const getLabelText = (layer: 'top' | 'mid' | 'bot') => {
    if (design.itemType === 'shop-signboard') {
      if (layer === 'top') return 'Business Type (e.g., Boutique, Cafe)';
      if (layer === 'mid') return 'Main Business/Shop Name';
      return 'Established / Location Text';
    }
    if (design.itemType === 'notebook') {
      if (layer === 'top') return 'Notebook Cover Title';
      if (layer === 'mid') return 'Owner Wording / Initials';
      return 'Year or Quote Subtext';
    }
    if (layer === 'top') return 'Top Event Inscription Heading';
    if (layer === 'mid') return 'Center Core Monogram Names';
    return 'Bottom Anniversary Date Box';
  };

  const getCanvasLayoutClass = () => {
    if (!realisticView) return 'bg-slate-950 border-emerald-500/40 text-emerald-400 font-mono shadow-inner';
    if (design.woodTone === 'mahogany') return 'from-orange-950 via-red-950 to-amber-950 border-orange-900 text-amber-100/90 shadow-xl';
    if (design.woodTone === 'walnut') return 'from-stone-800 to-stone-900 border-stone-700 text-stone-100/90 shadow-xl';
    if (design.woodTone === 'cherry') return 'from-amber-800 via-orange-900 to-stone-900 border-amber-900 text-amber-50/90 shadow-xl';
    return 'from-amber-100 via-amber-200 to-yellow-200 border-amber-400 text-amber-950 shadow-lg';
  };

  const getEngravingStyleClass = () => {
    if (!realisticView) return 'text-sky-400 font-mono tracking-wide drop-shadow-[0_0_3px_rgba(56,189,248,0.5)]';
    if (design.acrylicFinish === 'gold-mirror') return 'text-amber-300 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]';
    if (design.acrylicFinish === 'rose-gold') return 'text-rose-300 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]';
    return design.woodTone === 'oak-mdf' ? 'text-stone-800/90' : 'text-orange-950/40 mix-blend-multiply';
  };

  return (
    <div className="min-h-screen py-6 md:py-12 px-4 md:px-8 bg-stone-50 text-stone-800 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* VIEWPORT HEADER */}
        <div className="mb-6 md:mb-10 border-b border-stone-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-widest font-bold">Step-by-Step Gift Creator</span>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-stone-900 mt-1">Design Your Custom Keepsake</h1>
          </div>
          
          <div className="bg-white border p-1 rounded-xl shadow-xs inline-flex items-center gap-1 w-full sm:w-auto justify-center">
            <button type="button" onClick={() => setRealisticView(false)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all w-1/2 sm:w-auto ${!realisticView ? 'bg-stone-800 text-white' : 'text-stone-600'}`}>
              📐 Laser Paths
            </button>
            <button type="button" onClick={() => setRealisticView(true)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all w-1/2 sm:w-auto ${realisticView ? 'bg-amber-600 text-white' : 'text-slate-600'}`}>
              ✨ Finished 3D View
            </button>
          </div>
        </div>

        {/* ✅ MOBILE RESPONSIVE GRID OVERHAUL: RENDERS TOP IN MOBILE, LEFT IN DESKTOP */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* 🖥️ DYNAMIC PREVIEW VIEWPORT: SITS AT TOP ON MOBILE TO SHOW REAL-TIME INPUT CHANGES */}
          <div className="w-full lg:col-span-7 space-y-4 order-1 lg:order-2 lg:sticky lg:top-24">
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block px-1 font-mono">🖥️ Live Product Mockup Preview</span>
            
            <div className={`w-full aspect-square border rounded-2xl flex items-center justify-center p-4 md:p-6 relative overflow-hidden bg-[size:20px_20px] transition-all ${
              !realisticView ? 'bg-slate-950 border-slate-800' : 'bg-stone-100 border-stone-200 shadow-inner'
            }`}>
              
              <div className="relative flex items-center justify-center scale-90 sm:scale-100 max-w-full transition-transform">
                {design.itemType === 'notebook' && (
                  <div className="absolute left-[-16px] top-6 h-64 w-6 flex flex-col justify-between z-20 pointer-events-none">
                    {Array.from({ length: 13 }).map((_, i) => (
                      <div key={i} className={`w-5 h-1.5 rounded-full border-y transition-all ${!realisticView ? 'bg-transparent border-emerald-500' : 'bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 border-stone-400'}`}></div>
                    ))}
                  </div>
                )}
                {(design.itemType === 'shop-signboard' || design.mountingStyle === 'metal-standoffs') && (
                  <>
                    <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full z-20 flex items-center justify-center border bg-stone-100"><div className="w-1 h-1 rounded-full bg-stone-500"></div></div>
                    <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full z-20 flex items-center justify-center border bg-stone-100"><div className="w-1 h-1 rounded-full bg-stone-500"></div></div>
                    <div className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full z-20 flex items-center justify-center border bg-stone-100"><div className="w-1 h-1 rounded-full bg-stone-500"></div></div>
                    <div className="absolute bottom-3 right-3 w-2.5 h-2.5 rounded-full z-20 flex items-center justify-center border bg-stone-100"><div className="w-1 h-1 rounded-full bg-stone-500"></div></div>
                  </>
                )}

                <div className={`relative flex flex-col items-center justify-between p-4 md:p-6 transition-all duration-700 border-2 ${getCanvasLayoutClass()} ${
                  design.itemType === 'notebook' ? 'w-64 h-76 rounded-r-xl rounded-l-xs pl-6' :
                  design.itemType === 'shop-signboard' ? 'w-[360px] sm:w-[420px] h-48 rounded-xl' :
                  design.shape === 'circular' ? 'w-76 h-76 rounded-full' :
                  design.shape === 'rectangular' ? 'w-76 h-76 rounded-xl' :
                  'w-76 h-76 rounded-b-xl rounded-t-[120px]'
                }`}>
                  
                  <div className={`w-full h-full flex flex-col items-center justify-center p-3 text-center border transition-all ${
                    !realisticView ? 'bg-transparent border-dashed border-sky-500/10 rounded-xl' : 
                    design.acrylicFinish === 'none' ? 'bg-transparent border-none' :
                    design.acrylicFinish === 'gold-mirror' ? 'bg-gradient-to-tr from-amber-300/20 via-amber-100/5 to-amber-400/20 rounded-xl border-white/20' :
                    design.acrylicFinish === 'rose-gold' ? 'bg-gradient-to-tr from-rose-300/20 via-rose-100/5 to-rose-400/20 rounded-xl border-white/20' :
                    'bg-white/10 backdrop-blur-xs rounded-xl border-white/20'
                  }`}>
                    
                    {design.itemType === 'nikah-clock-frame' ? (
                      <div className="w-full flex flex-col justify-around items-center h-full space-y-1">
                        <div className="text-sm select-none">👑</div>
                        <p className={`text-[7px] font-bold tracking-widest font-mono uppercase ${!realisticView ? 'text-emerald-400' : 'opacity-65'}`}>{design.topText}</p>
                        
                        <div className="grid grid-cols-12 w-full items-center gap-1">
                          <div className="col-span-4 flex justify-center">
                            <div className="w-9 h-9 rounded-full border border-dashed border-current/30 flex items-center justify-center relative bg-black/5">
                              <div className="w-0.5 h-0.5 bg-current rounded-full"></div>
                              <div className="absolute top-1 left-1/2 -translate-x-1/2 h-3 w-0.5 origin-bottom rotate-45 bg-current"></div>
                            </div>
                          </div>
                          <div className="col-span-4">
                            <h2 className={`text-[11px] font-black tracking-wider leading-none ${getEngravingStyleClass()}`} style={{ fontFamily: design.fontStyle === 'script' ? 'Brush Script MT, cursive, sans-serif' : design.fontStyle === 'serif' ? 'Georgia, serif' : 'Arial, sans-serif' }}>{design.middleText}</h2>
                          </div>
                          <div className="col-span-4 flex justify-center">
                            <div className="w-9 h-9 border border-current/30 rounded-md p-0.5 flex flex-col justify-between bg-black/5 text-[4px] font-mono text-center opacity-60">
                              <div className="border-b border-current/10 uppercase tracking-wide">Date</div>
                              <div>●</div>
                            </div>
                          </div>
                        </div>
                        <p className={`text-[8px] font-bold font-mono border-t pt-1.5 w-2/3 mx-auto opacity-75`}>{design.bottomText}</p>
                      </div>
                    ) : (
                      <div className={`space-y-3 w-full ${getEngravingStyleClass()}`}>
                        <p className="text-[8px] font-bold tracking-wider font-mono uppercase opacity-65">{design.topText}</p>
                        <h2 className="text-xs sm:text-sm font-black border-y border-current/10 py-2 uppercase tracking-wide" style={{ fontFamily: design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif' }}>{design.middleText}</h2>
                        <p className="text-[8px] font-medium font-mono opacity-75">{design.bottomText}</p>
                      </div>
                    )}
                  </div>

                  {design.itemType === 'table-lamp' && realisticView && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-4 bg-stone-900 border-t border-stone-700 rounded-md z-20"></div>}
                  {design.mountingStyle === 'stand' && design.itemType === 'nikah-clock-frame' && realisticView && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-44 h-3 bg-stone-900 rounded-md z-20"></div>}
                </div>
              </div>
            </div>
          </div>

          {/* 🕹️ CONSOLE CONTROLS ADJUSTMENT: RENDERS BENEATH PREVIEW IN MOBILE */}
          <div className="w-full lg:col-span-5 space-y-4 order-2 lg:order-1">
            
            {/* STEP 1 */}
            <div className="bg-white border border-stone-200 p-4 md:p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono"><span>Step 1 //</span> Base Options</h3>
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1 font-mono">Product Template</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-bold">
                    <option value="nikah-clock-frame">💝 Wedding Plaque Frame (with Clock)</option>
                    <option value="shop-signboard">🏬 Business / Shop Name Signboard</option>
                    <option value="notebook">📔 A5 Premium Wooden Notebook</option>
                    <option value="table-lamp">💡 Glowing Acrylic LED Table Lamp</option>
                  </select>
                </div>
                {design.itemType === 'shop-signboard' && (
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1 font-mono">Business Category</label>
                    <select name="businessType" value={design.businessType} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-bold">
                      <option value="boutique">👗 Clothing Boutique / Fashion</option>
                      <option value="salon">✂️ Beauty Salon & Luxury Spa</option>
                      <option value="cafe">☕ Cozy Cafe & Restaurant</option>
                      <option value="corporate">🏢 Modern Corporate Office</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-white border border-stone-200 p-4 md:p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono"><span>Step 2 //</span> Wood & Material Finish</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1 font-mono">Background Wood Type</label>
                  <select name="woodTone" disabled={!realisticView} value={design.woodTone} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:outline-none disabled:opacity-50">
                    <option value="mahogany">🪵 Dark Mahogany (Luxury Deep Red)</option>
                    <option value="oak-mdf">🍂 Warm Light Oak (Golden Grain)</option>
                    <option value="walnut">🪨 Exotic Dark Walnut (Deep Brown)</option>
                    <option value="cherry">🍒 Auburn Cherry Wood (Medium Hue)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1 font-mono">Lettering Finish Effect</label>
                  <select name="acrylicFinish" disabled={!realisticView} value={design.acrylicFinish} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:outline-none disabled:opacity-50">
                    <option value="gold-mirror">✨ Luxury Shiny Mirror Gold Inlay</option>
                    <option value="rose-gold">🌹 Elegant Mirror Rose Gold Inlay</option>
                    <option value="frosted">❄️ Frosted Acrylic Panel Overlay</option>
                    <option value="none">🔥 Deep Engraved Burn (Direct on Wood)</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div>
                  <label className="block text-[9px] font-bold text-stone-500 uppercase mb-1 font-mono">Shape</label>
                  <select name="shape" disabled={design.itemType === 'notebook' || design.itemType === 'shop-signboard'} value={design.shape} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-[11px] bg-stone-50 disabled:opacity-50">
                    <option value="circular">Circle</option>
                    <option value="arched">Arched</option>
                    <option value="rectangular">Rectangle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-stone-500 uppercase mb-1 font-mono">Mounting</label>
                  <select name="mountingStyle" disabled={design.itemType === 'notebook' || design.itemType === 'shop-signboard'} value={design.mountingStyle} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-[11px] bg-stone-50 disabled:opacity-50">
                    <option value="stand">Stand Base</option>
                    <option value="ribbon-holes">Hanger Slots</option>
                    <option value="metal-standoffs">Standoff Pins</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-stone-500 uppercase mb-1 font-mono">Font style</label>
                  <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-[11px] bg-stone-50 font-bold">
                    <option value="script">Calligraphy</option>
                    <option value="serif">Serif</option>
                    <option value="sans">Sans</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-white border border-stone-200 p-4 md:p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono"><span>Step 3 //</span> Inscription Lettering</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">{getLabelText('top')}</label>
                  <input type="text" name="topText" maxLength={28} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">{getLabelText('mid')}</label>
                  <input type="text" name="middleText" maxLength={28} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none font-bold" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">{getLabelText('bot')}</label>
                  <input type="text" name="bottomText" maxLength={28} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none" />
                </div>
              </div>
            </div>

            {/* ✅ POV FIX 1 & 2: REFINED EXPLICIT ITEMIZED PRICING SUMMARY CARD (Removes customer fear) */}
            <div className="bg-white border border-stone-200 p-4 md:p-6 rounded-2xl shadow-xs space-y-3">
              <h4 className="text-[10px] font-black tracking-wider uppercase text-stone-400 font-mono">Crafting Cost Breakdown</h4>
              <div className="text-xs space-y-2 font-medium border-b border-stone-100 pb-2.5 text-stone-600">
                <div className="flex justify-between">
                  <span>Base Wood Framework:</span>
                  <span className="font-mono text-stone-900">LKR {getBasePrice().toLocaleString()}</span>
                </div>
                {getPremiumAddonPrice() > 0 && (
                  <div className="flex justify-between text-amber-700">
                    <span>✨ Premium Mirror Acrylic Accent Layer:</span>
                    <span className="font-mono font-bold">+ LKR {getPremiumAddonPrice().toLocaleString()}</span>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-center bg-stone-900 text-white p-3 rounded-xl shadow-xs">
                <span className="text-xs uppercase font-black tracking-wider opacity-80">Guaranteed Total Price:</span>
                <span className="text-base font-mono font-black text-amber-300">LKR {getTotalPrice().toLocaleString()}</span>
              </div>
              
              <button
                type="button"
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full text-white bg-amber-600 hover:bg-amber-700 font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md transition-all cursor-pointer"
              >
                🛍️ Secure Checkout This Custom Order ➔
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* SECURE SIDE SHEET OVERLAY MODAL */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs flex justify-end z-50 animate-fade-in">
          <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slide-left">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-lg font-black tracking-tight text-stone-900">Checkout Custom Design</h2>
                <button type="button" onClick={() => setIsCheckoutOpen(false)} className="text-stone-400 hover:text-stone-700 font-bold text-sm cursor-pointer">✕ Close</button>
              </div>

              {checkoutComplete ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full text-emerald-600 flex items-center justify-center text-3xl mx-auto">✓</div>
                  <h3 className="text-base font-black text-stone-900">Order Locked Successfully!</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Our workshop queue has registered your bespoke parameters. Operators will contact your phone lines shortly to confirm delivery details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCustomOrderSubmit} className="space-y-5">
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
                      <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1 tracking-wider font-mono">Delivery Address</label>
                      <textarea required rows={3} placeholder="Provide full location address text precisely" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 focus:outline-none focus:border-amber-600 font-medium resize-none leading-relaxed" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md mt-2 cursor-pointer">
                    Confirm Order (LKR {getTotalPrice().toLocaleString()}) ➔
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function UltimateCustomerStudio() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xs font-mono text-stone-400">Loading Configuration Canvas Core...</div>}>
      <StudioContent />
    </Suspense>
  );
}