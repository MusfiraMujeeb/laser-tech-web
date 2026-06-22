'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function StudioContent() {
  const searchParams = useSearchParams();
  
  const [design, setDesign] = useState({
    itemType: 'nikah-clock-frame',
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
  const [mobileTab, setMobileTab] = useState<'preview' | 'controls'>('preview');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  useEffect(() => {
    const itemParam = searchParams.get('item');
    if (itemParam === 'notebook') {
      setDesign(prev => ({ ...prev, itemType: 'notebook', shape: 'rectangular', mountingStyle: 'spiral-bound', acrylicFinish: 'none', topText: 'PERSONAL DIARY', middleText: 'M. MUJEEB', bottomText: 'ESTABLISHED 2026' }));
    } else if (itemParam === 'shop-signboard') {
      setDesign(prev => ({ ...prev, itemType: 'shop-signboard', shape: 'rectangular', mountingStyle: 'metal-standoffs', acrylicFinish: 'gold-mirror', topText: 'THREADIFY', middleText: 'COLLECTION', bottomText: 'ESTD // 2024' }));
    } else if (itemParam === 'table-lamp') {
      setDesign(prev => ({ ...prev, itemType: 'table-lamp', shape: 'arched', mountingStyle: 'stand', acrylicFinish: 'frosted', topText: 'NIGHT ILLUMINATION', middleText: 'WELCOME HOME', bottomText: '💫 COZY VIBES 💫' }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'itemType') {
      if (value === 'notebook') {
        setDesign({ itemType: value, shape: 'rectangular', woodTone: 'mahogany', acrylicFinish: 'none', mountingStyle: 'spiral-bound', fontStyle: 'serif', topText: 'PERSONAL DIARY', middleText: 'M. MUJEEB', bottomText: 'ESTABLISHED 2026' });
      } else if (value === 'shop-signboard') {
        setDesign({ itemType: value, shape: 'rectangular', woodTone: 'mahogany', acrylicFinish: 'gold-mirror', mountingStyle: 'metal-standoffs', fontStyle: 'serif', topText: 'THREADIFY', middleText: 'COLLECTION', bottomText: 'ESTD // 2024' });
      } else if (value === 'table-lamp') {
        setDesign({ itemType: value, shape: 'arched', woodTone: 'oak-mdf', acrylicFinish: 'frosted', mountingStyle: 'stand', fontStyle: 'sans', topText: 'NIGHT ILLUMINATION', middleText: 'WELCOME HOME', bottomText: '💫 COZY VIBES 💫' });
      } else {
        setDesign({ itemType: value, shape: 'circular', woodTone: 'mahogany', acrylicFinish: 'gold-mirror', mountingStyle: 'stand', fontStyle: 'script', topText: 'OUR WEDDING DAY', middleText: 'AMRAN & FATHIMA', bottomText: '2026.06.20' });
      }
      return;
    }
    setDesign(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files &amp;&amp; e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const getBasePrice = () => {
    if (design.itemType === 'nikah-clock-frame') return 6600;
    if (design.itemType === 'shop-signboard') return 12320;
    if (design.itemType === 'notebook') return 2800;
    return 4000;
  };

  const getPremiumAddonPrice = () => (design.acrylicFinish === 'gold-mirror' || design.acrylicFinish === 'rose-gold') ? 850 : 0;
  const getTotalPrice = () => getBasePrice() + getPremiumAddonPrice();

  const handleCustomOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !shippingAddress) return;

    const newOrder = {
      orderId: 'LT-' + Math.floor(1000 + Math.random() * 9000),
      createdAt: new Date().toISOString(),
      customerName,
      customerPhone,
      shippingAddress,
      productTitle: `Custom Design: ${design.itemType.toUpperCase()} (${design.woodTone}/${design.acrylicFinish})`,
      totalAmount: getTotalPrice(),
      status: 'Pending Production'
    };

    const existing = JSON.parse(localStorage.getItem('laser_tech_orders') || '[]');
    existing.push(newOrder);
    localStorage.setItem('laser_tech_orders', JSON.stringify(existing));

    setCheckoutComplete(true);
    setTimeout(() => {
      setIsCheckoutOpen(false);
      setCheckoutComplete(false);
      setCustomerName(''); setCustomerPhone(''); setShippingAddress('');
    }, 3000);
  };

  const getLabelText = (layer: 'top' | 'mid' | 'bot') => {
    if (design.itemType === 'shop-signboard') {
      if (layer === 'top') return 'Business Category Tagline (Boutique, Cafe)';
      if (layer === 'mid') return 'Main Corporate/Shop Branding Name';
      return 'Established Info / Location Context';
    }
    if (design.itemType === 'notebook') {
      if (layer === 'top') return 'Notebook Cover Top Title Text';
      if (layer === 'mid') return 'Personalized Name Wording';
      return 'Year or custom quote statement line';
    }
    if (layer === 'top') return 'Top Event Inscription Heading';
    if (layer === 'mid') return 'Center Core Monogram Wording';
    return 'Bottom Anniversary Date Block';
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
    if (design.acrylicFinish === 'none') return 'text-orange-950/70 font-bold drop-shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] bg-clip-text mix-blend-multiply opacity-80';
    return design.woodTone === 'oak-mdf' ? 'text-stone-800/90' : 'text-orange-950/40 mix-blend-multiply';
  };

  const generatedBlueprintText = `[LASER TECH MASTER PRODUCTION BLUEPRINT]\n• Item Model: ${design.itemType.toUpperCase()}\n• Guaranteed Pricing: LKR ${getTotalPrice()}`;

  return (
    <div className="min-h-screen py-6 md:py-12 px-4 md:px-8 bg-stone-50 text-stone-800 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* VIEWPORT CONTROLS BAR */}
        <div className="mb-6 border-b border-stone-200 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-widest font-bold">Option B Vector Engine Studio</span>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-stone-900 mt-1">Industrial &amp; Retail Blueprint Booth</h1>
          </div>
          
          <div className="bg-white border p-1 rounded-xl shadow-xs flex items-center gap-1 w-full sm:w-auto justify-center">
            <button type="button" onClick={() => setRealisticView(false)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all w-1/2 sm:w-auto ${!realisticView ? 'bg-stone-800 text-white' : 'text-stone-600'}`}>
              📐 Laser Paths
            </button>
            <button type="button" onClick={() => setRealisticView(true)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all w-1/2 sm:w-auto ${realisticView ? 'bg-amber-600 text-white' : 'text-slate-600'}`}>
              ✨ 3D Finished View
            </button>
          </div>
        </div>

        {/* MOBILE LAYOUT SPLIT SELECTOR ROW */}
        <div className="flex lg:hidden bg-stone-200 p-1 rounded-xl mb-6 border border-stone-300/60">
          <button type="button" onClick={() => setMobileTab('preview')} className={`w-1/2 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-center transition-all ${mobileTab === 'preview' ? 'bg-stone-900 text-white' : 'text-stone-600'}`}>👁️ View Live Preview</button>
          <button type="button" onClick={() => setMobileTab('controls')} className={`w-1/2 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-center transition-all ${mobileTab === 'controls' ? 'bg-stone-900 text-white' : 'text-stone-600'}`}>⚙️ Adjust Controls</button>
        </div>

        {/* CORE WORKSPACE SYSTEM SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* THE RENDERING MONITOR VIEWPORT PROMPT PANEL */}
          <div className={`w-full lg:col-span-7 space-y-4 lg:sticky lg:top-24 ${mobileTab === 'preview' ? 'block' : 'hidden lg:block'}`}>
            <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block px-1 font-mono">🖥️ Real-time Canvas Rendering Module</span>
            
            <div className={`w-full aspect-square border rounded-2xl flex items-center justify-center p-4 relative overflow-hidden bg-[size:20px_20px] ${
              !realisticView ? 'bg-slate-950 border-slate-800 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]' : 'bg-stone-100 border-stone-200 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] shadow-inner'
            }`}>
              
              <div className="relative flex items-center justify-center scale-90 sm:scale-100 max-w-full">
                {design.itemType === 'notebook' && (
                  <div className="absolute left-[-16px] top-6 h-64 w-6 flex flex-col justify-between z-20 pointer-events-none">
                    {Array.from({ length: 13 }).map((_, i) => (
                      <div key={i} className={`w-5 h-1.5 rounded-full border-y ${!realisticView ? 'bg-transparent border-emerald-500' : 'bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 border-stone-400'}`}></div>
                    ))}
                  </div>
                )}

                <div className={`relative flex flex-col items-center justify-between p-4 md:p-6 border-2 transition-all duration-500 ${getCanvasLayoutClass()} ${
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
                    'bg-white/10 backdrop-blur-xs rounded-xl border-white/20 shadow-xs'
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
                              <span className="absolute top-0.5 text-[4px] font-mono font-bold">XII</span>
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
                        <p className="text-[7px] font-bold font-mono border-t pt-1.5 w-2/3 mx-auto opacity-75">{design.bottomText}</p>
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

          {/* THE ADJUSTMENT FORM TUNERS BLOCK */}
          <div className={`w-full lg:col-span-5 space-y-4 ${mobileTab === 'controls' ? 'block' : 'hidden lg:block'}`}>
            
            {/* 🆕 THE OPTION B AI VECTOR FILE DROP ZONE */}
            <div className="bg-white border border-stone-200 p-4 md:p-6 rounded-2xl shadow-xs space-y-3">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono"><span>AI Tool //</span> Industrial Blueprint Dropzone</h3>
              <div className="border-2 border-dashed border-stone-200 bg-stone-50 hover:bg-stone-100/50 p-4 rounded-xl text-center relative transition-all">
                <input type="file" accept=".ai,.svg,.dxf,.pdf" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                <span className="text-xl block">📁</span>
                <p className="text-[11px] font-bold text-stone-700 mt-1">Drop Vector Structural Files Here</p>
                <p className="text-[9px] text-stone-400 font-mono mt-0.5">Supports high-precision .AI, .SVG, .DXF, or CAD .PDF formats</p>
                {uploadedFileName && <p className="text-[10px] font-mono text-emerald-700 font-black mt-2 bg-emerald-50 py-1 px-2 border rounded-md inline-block">✓ Target Loaded: {uploadedFileName}</p>}
              </div>
            </div>

            {/* BASE PROPERTY TUNER */}
            <div className="bg-white border border-stone-200 p-4 md:p-6 rounded-2xl shadow-xs space-y-3">
              <label className="block text-[10px] font-bold text-stone-500 uppercase font-mono">Select Active Shell Geometry Profile</label>
              <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-stone-800">
                <option value="nikah-clock-frame">💝 Wedding Plaque Frame (with Clock)</option>
                <option value="shop-signboard">🏬 Business / Shop Name Signboard</option>
                <option value="notebook">📔 A5 Premium Wooden Notebook</option>
                <option value="table-lamp">💡 Glowing Acrylic LED Table Lamp</option>
              </select>
            </div>

            {/* MATERIAL COMBINATIONS */}
            <div className="bg-white border border-stone-200 p-4 md:p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono"><span>Step 2 //</span> Production Finishes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1 font-mono">Background Timber Base</label>
                  <select name="woodTone" disabled={!realisticView} value={design.woodTone} onChange={handleInputChange} className="w-full px-2 py-2 border rounded-xl bg-stone-50 focus:outline-none disabled:opacity-50">
                    <option value="mahogany">🪵 Dark Mahogany Wood</option>
                    <option value="oak-mdf">🍂 Golden Light Oak Composite</option>
                    <option value="walnut">🪨 Deep Exotic Charcoal Walnut</option>
                    <option value="cherry">🍒 Auburn Cherry Panel Hue</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1 font-mono">Lettering Overlay Finish</label>
                  <select name="acrylicFinish" disabled={!realisticView || design.itemType === 'notebook'} value={design.acrylicFinish} onChange={handleInputChange} className="w-full px-2 py-2 border rounded-xl bg-stone-50 focus:outline-none disabled:opacity-50">
                    <option value="gold-mirror">✨ Luxury Glossy Mirror Gold Inlay</option>
                    <option value="rose-gold">🌹 Elegant Mirror Rose Gold Inlay</option>
                    <option value="frosted">❄️ Opaque Frosted Plexiglass Panel</option>
                    <option value="none">🔥 Direct Deep Laser Burn Inscription</option>
                  </select>
                </div>
              </div>
            </div>

            {/* DYNAMIC TEXT FIELD CONSOLES */}
            <div className="bg-white border border-stone-200 p-4 md:p-6 rounded-2xl shadow-xs space-y-3">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono"><span>Step 3 //</span> Custom Text</h3>
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1 font-mono">{getLabelText('top')}</label>
                  <input type="text" name="topText" maxLength={28} value={design.topText} onChange={(e) => setDesign(prev => ({ ...prev, topText: e.target.value.toUpperCase() }))} className="w-full px-3 py-2 border rounded-xl bg-stone-50 font-mono focus:outline-none focus:border-amber-600" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1 font-mono">{getLabelText('mid')}</label>
                  <input type="text" name="middleText" maxLength={28} value={design.middleText} onChange={(e) => setDesign(prev => ({ ...prev, middleText: e.target.value.toUpperCase() }))} className="w-full px-3 py-2 border rounded-xl bg-stone-50 font-mono font-black focus:outline-none focus:border-amber-600" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1 font-mono">{getLabelText('bot')}</label>
                  <input type="text" name="bottomText" maxLength={28} value={design.bottomText} onChange={(e) => setDesign(prev => ({ ...prev, bottomText: e.target.value.toUpperCase() }))} className="w-full px-3 py-2 border rounded-xl bg-stone-50 font-mono focus:outline-none focus:border-amber-600" />
                </div>
              </div>
            </div>

            {/* ITEMISED TRANSPARENT PRICING BLOCKS SUMMARY CARD */}
            <div className="bg-white border border-stone-200 p-4 md:p-6 rounded-2xl shadow-xs space-y-3">
              <h4 className="text-[10px] font-black tracking-wider uppercase text-stone-400 font-mono">Total Component Cost Breakdown</h4>
              <div className="text-xs space-y-2 border-b border-stone-100 pb-2 text-stone-600 font-medium">
                <div className="flex justify-between"><span>Base Material Layer Structural Plate:</span><span className="font-mono text-stone-900">LKR {getBasePrice().toLocaleString()}</span></div>
                {getPremiumAddonPrice() > 0 && <div className="flex justify-between text-amber-700"><span>✨ Premium Acrylic Accent Treatment:</span><span className="font-mono font-bold">+ LKR {getPremiumAddonPrice().toLocaleString()}</span></div>}
              </div>
              <div className="flex justify-between items-center bg-stone-900 text-white p-3 rounded-xl shadow-md">
                <span className="text-xs uppercase font-black tracking-widest text-stone-300">Guaranteed Total Cost:</span>
                <span className="text-base font-mono font-black text-amber-400">LKR {getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button type="button" onClick={() => setIsCheckoutOpen(true)} className="w-full text-white bg-amber-600 hover:bg-amber-700 font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md cursor-pointer transition-all">🛍️ Order Creation COD</button>
                <Link href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`} className="w-full text-stone-700 bg-stone-100 hover:bg-stone-200 font-bold text-xs uppercase tracking-wider py-4 rounded-xl text-center border flex items-center justify-center">Forward Specs Sheet</Link>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* CHECKOUT drawers layout models */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs flex justify-end z-50 animate-fade-in">
          <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slide-left">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-lg font-black tracking-tight text-stone-900">Secure Blueprint Checkout</h2>
                <button type="button" onClick={() => setIsCheckoutOpen(false)} className="text-stone-400 hover:text-stone-700 font-bold text-sm cursor-pointer">✕ Close</button>
              </div>

              {checkoutComplete ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full text-emerald-600 flex items-center justify-center text-3xl mx-auto">✓</div>
                  <h3 className="text-base font-black text-stone-900">Custom Order Registered!</h3>
                  <p className="text-xs text-stone-500 leading-relaxed font-medium">Workshop operators are parsing your vector specifications block. We will contact your phone lines shortly to authorize sample execution patterns.</p>
                </div>
              ) : (
                <form onSubmit={handleCustomOrderSubmit} className="space-y-4">
                  <div className="p-3 bg-amber-50/70 border border-amber-200 text-amber-900 text-xs rounded-xl font-medium leading-relaxed space-y-0.5">
                    <p className="font-bold">🚚 Island-wide Fabrication Turnaround:</p>
                    <p className="opacity-80">Custom designs undergo exact structural laser calibrations taking **3 to 5 working days** within our Mawanella workshop before direct dispatch.</p>
                  </div>

                  <div className="space-y-3 text-xs font-medium">
                    <div>
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1 font-mono">Recipient Full Name</label>
                      <input type="text" required placeholder="Ex: Muhammad Mujeeb" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full px-4 py-2.5 bg-stone-50 border rounded-xl focus:outline-none focus:border-amber-600" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1 font-mono">Contact Phone Number</label>
                      <input type="tel" required placeholder="Ex: +94 77 123 4567" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="w-full px-4 py-2.5 bg-stone-50 border rounded-xl focus:outline-none focus:border-amber-600 font-mono" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1 font-mono">Delivery Address Matrix</label>
                      <textarea required rows={3} placeholder="Provide precise house delivery coordinates text lines" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} className="w-full px-4 py-2.5 bg-stone-50 border rounded-xl focus:outline-none focus:border-amber-600 resize-none leading-relaxed" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-stone-900 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md mt-2">Confirm Custom Construction (LKR {getTotalPrice().toLocaleString()}) ➔</button>
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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xs font-mono text-stone-400">Loading Engineering Design Matrix Workspace...</div>}>
      <StudioContent />
    </Suspense>
  );
}