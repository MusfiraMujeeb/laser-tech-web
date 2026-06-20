'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UltimateCustomerStudio() {
  const [design, setDesign] = useState({
    itemType: 'nikah-clock-frame', // nikah-clock-frame | notebook | shop-signboard | table-lamp | keytag
    businessType: 'boutique', 
    shape: 'circular', // circular | rectangular | arched | hexagon
    woodTone: 'mahogany', // mahogany | oak-mdf | walnut | cherry
    acrylicFinish: 'gold-mirror', // frosted | gold-mirror | rose-gold | none
    mountingStyle: 'stand', 
    fontStyle: 'script',
    topText: 'OUR WEDDING DAY',
    middleText: 'AMRAN & FATHIMA',
    bottomText: '2026.06.20'
  });

  const [realisticView, setRealisticView] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'itemType') {
      if (value === 'notebook') {
        setDesign(prev => ({
          ...prev,
          itemType: value,
          shape: 'rectangular',
          mountingStyle: 'spiral-bound',
          topText: 'PERSONAL DIARY',
          middleText: 'M. MUJEEB',
          bottomText: 'ESTABLISHED 2026'
        }));
        return;
      } else if (value === 'shop-signboard') {
        setDesign(prev => ({
          ...prev,
          itemType: value,
          businessType: 'boutique',
          shape: 'rectangular',
          mountingStyle: 'metal-standoffs',
          topText: 'THREADIFY',
          middleText: 'COLLECTION',
          bottomText: 'ESTD // 2024'
        }));
        return;
      } else if (value === 'table-lamp') {
        setDesign(prev => ({
          ...prev,
          itemType: value,
          shape: 'arched',
          mountingStyle: 'stand',
          topText: 'NIGHT ILLUMINATION',
          middleText: 'WELCOME HOME',
          bottomText: '💫 COZY VIBES 💫'
        }));
        return;
      } else if (value === 'keytag') {
        setDesign(prev => ({
          ...prev,
          itemType: value,
          shape: 'hexagon',
          mountingStyle: 'ring-chain',
          topText: 'DRIVE SAFE',
          middleText: 'WP - CAD 2026',
          bottomText: 'RETURN IF FOUND'
        }));
        return;
      } else {
        setDesign(prev => ({
          ...prev,
          itemType: value,
          shape: 'circular',
          mountingStyle: 'stand',
          topText: 'OUR WEDDING DAY',
          middleText: 'AMRAN & FATHIMA',
          bottomText: '2026.06.20'
        }));
        return;
      }
    }

    if (name === 'businessType') {
      if (value === 'boutique') {
        setDesign(prev => ({ ...prev, businessType: value, topText: 'THREADIFY', middleText: 'COLLECTION', bottomText: 'ESTD // 2024' }));
      } else if (value === 'salon') {
        setDesign(prev => ({ ...prev, businessType: value, topText: 'GLAMOUR LUXE', middleText: 'SALON & SPA', bottomText: 'OPEN DAILY' }));
      } else if (value === 'cafe') {
        setDesign(prev => ({ ...prev, businessType: value, topText: 'THE COFFEE ROAST', middleText: 'CAFE & KITCHEN', bottomText: 'ESTD // 2026' }));
      } else if (value === 'corporate') {
        setDesign(prev => ({ ...prev, businessType: value, topText: 'LASER TECH', middleText: 'HQ OFFICE', bottomText: 'RECEPTION BLOCK' }));
      }
      return;
    }

    setDesign(prev => ({ ...prev, [name]: value }));
  };

  const generatedBlueprintText = `[LASER TECH MASTER PRODUCTION BLUEPRINT]
• Product Line Model: ${design.itemType.toUpperCase()}
• Shape Geometry Profile: ${design.shape.toUpperCase()}
• Base Wood Selection: ${design.woodTone.toUpperCase()}
• Acrylic Treatment Mode: ${design.acrylicFinish.toUpperCase()}
• Hardware Mounting Style: ${design.mountingStyle.toUpperCase()}
• Selected Typography Engine: ${design.fontStyle.toUpperCase()}
• Layer 01 (Header Inscription): "${design.topText}"
• Layer 02 (Core Subject Text): "${design.middleText}"
• Layer 03 (Footer Info Text): "${design.bottomText}"`;

  const getCanvasLayoutClass = () => {
    if (!realisticView) return 'bg-stone-900 border-emerald-500/40 text-emerald-400 font-mono shadow-inner';
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
    <div className="min-h-screen py-12 px-4 md:px-8 bg-stone-50 text-stone-800 selection:bg-amber-100 selection:text-amber-900">
      <div className="max-w-7xl mx-auto">
        
        {/* SIMPLIFIED HEADER CONTROLS FOR CUSTOMERS */}
        <div className="mb-10 border-b border-stone-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-widest font-bold">Step-by-Step Gift Creator</span>
            <h1 className="text-3xl font-black tracking-tight text-stone-900 mt-1">Design Your Custom Keepsake</h1>
          </div>
          
          <div className="bg-white border p-1 rounded-xl shadow-xs inline-flex items-center gap-1">
            <button 
              type="button" 
              onClick={() => setRealisticView(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${!realisticView ? 'bg-stone-800 text-white shadow-sm' : 'text-stone-600 hover:bg-stone-50'}`}
            >
              ✏️ Laser Cut Paths (Blueprint)
            </button>
            <button 
              type="button" 
              onClick={() => setRealisticView(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${realisticView ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              ✨ Finished 3D Preview
            </button>
          </div>
        </div>

        {/* WORKSPACE MAIN INTERFACE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: EASY CUSTOMER STEPS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* STEP 1: WHAT ARE YOU MAKING */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>Step 1 //</span> Choose What To Customize
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Product Selection</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-bold">
                    <option value="nikah-clock-frame">💝 Wedding Frame (with Clock & Calendar)</option>
                    <option value="shop-signboard">🏬 Business / Shop Name Display</option>
                    <option value="notebook">📔 A5 Personal Wooden Notebook</option>
                    <option value="table-lamp">💡 Glowing Acrylic LED Lamp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Business Style (If Shop Sign)</label>
                  <select name="businessType" disabled={design.itemType !== 'shop-signboard'} value={design.businessType} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-bold disabled:opacity-35">
                    <option value="boutique">👗 Clothing Boutique / Fashion</option>
                    <option value="salon">✂️ Beauty Salon & Luxury Spa</option>
                    <option value="cafe">☕ Cozy Cafe & Restaurant</option>
                    <option value="corporate">🏢 Modern Corporate Office</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 2: CHOOSE THE LOOK & MATERIALS */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>Step 2 //</span> Select Wood & Lettering Styles
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Background Wood Type</label>
                  <select name="woodTone" disabled={!realisticView} value={design.woodTone} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold disabled:opacity-50">
                    <option value="mahogany">🪵 Dark Mahogany (Luxury Deep Red)</option>
                    <option value="oak-mdf">🍂 Warm Light Oak (Clean Golden Grain)</option>
                    <option value="walnut">🪨 Exotic Dark Walnut (Rich Dark Brown)</option>
                    <option value="cherry">🍒 Auburn Cherry Wood (Rich Medium Tone)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Lettering Finish Effect</label>
                  <select name="acrylicFinish" disabled={!realisticView} value={design.acrylicFinish} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold disabled:opacity-50">
                    <option value="gold-mirror">✨ Luxury Shiny Mirror Gold</option>
                    <option value="rose-gold">🌹 Elegant Mirror Rose Gold</option>
                    <option value="frosted">❄️ Clean Frosted Engraving Look</option>
                    <option value="none">🔥 Deep Engraved Burn (Direct on Wood)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Product Shape</label>
                  <select name="shape" disabled={design.itemType === 'notebook' || design.itemType === 'shop-signboard'} value={design.shape} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold disabled:opacity-50">
                    <option value="circular">Circle Panel</option>
                    <option value="arched">Arched Dome</option>
                    <option value="rectangular">Rectangle Board</option>
                    <option value="hexagon">Hexagon Shape</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">How to Mount It</label>
                  <select name="mountingStyle" disabled={design.itemType === 'notebook' || design.itemType === 'shop-signboard'} value={design.mountingStyle} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold disabled:opacity-50">
                    <option value="stand">🪘 Tabletop Stand Base</option>
                    <option value="ribbon-holes">🎗️ Ribbon Hanging Slots</option>
                    <option value="metal-standoffs">📌 Shiny Wall Metallic Screws</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Lettering Font</label>
                  <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-bold">
                    <option value="script">🖋️ Calligraphy Script</option>
                    <option value="serif">📚 Classic Editorial Serif</option>
                    <option value="sans">👟 Clean Modern Sans</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 3: TYPE YOUR NAMES */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>Step 3 //</span> Type Your Custom Wording
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Top Line (Occasion Header / Motto)</label>
                  <input type="text" name="topText" maxLength={28} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Center Focus Line (Names / Titles)</label>
                  <input type="text" name="middleText" maxLength={28} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Bottom Line (Special Date / Subtext)</label>
                  <input type="text" name="bottomText" maxLength={28} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REFINED HIGH-END LIGHT PRESENTATION CANVAS */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block px-1 font-mono">
              🖥️ Live Product Mockup Preview
            </span>
            
            {/* CANVAS WRAPPER CONSOLE CONTAINER */}
            <div className={`w-full aspect-square border rounded-3xl flex items-center justify-center p-6 relative overflow-hidden bg-[size:24px_24px] transition-all duration-300 ${
              !realisticView 
                ? 'bg-stone-900 border-stone-800 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] shadow-inner' 
                : 'bg-stone-100 border-stone-200 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] shadow-inner'
            }`}>
              
              <div className="relative flex items-center justify-center transition-all duration-300">
                
                {/* Spiral notebook binding wires */}
                {design.itemType === 'notebook' && (
                  <div className="absolute left-[-16px] top-6 h-64 w-6 flex flex-col justify-between z-20 pointer-events-none">
                    {Array.from({ length: 13 }).map((_, i) => (
                      <div key={i} className={`w-5 h-2 rounded-full shadow-xs border-y transition-all ${!realisticView ? 'bg-transparent border-emerald-400' : 'bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 border-stone-400'}`}></div>
                    ))}
                  </div>
                )}

                {/* THE WOOD CHASSIS PANEL BACKBOARD LAYER */}
                <div 
                  className={`relative flex flex-col items-center justify-between p-6 transition-all duration-700 border-2 ${getCanvasLayoutClass()} ${
                    design.itemType === 'notebook' ? 'w-68 h-80 rounded-r-2xl rounded-l-md pl-8' :
                    design.itemType === 'shop-signboard' ? 'w-[420px] h-52 rounded-xl' :
                    /* Plaque Shapes curves mapping filters rules */
                    design.shape === 'circular' ? 'w-85 h-85 rounded-full' :
                    design.shape === 'rectangular' ? 'w-85 h-85 rounded-2xl' :
                    design.shape === 'hexagon' ? 'w-85 h-85 clip-path-hex' :
                    'w-85 h-85 rounded-b-xl rounded-t-[140px]'
                  }`}
                  style={{
                    clipPath: (design.shape === 'hexagon' && design.itemType !== 'notebook' && design.itemType !== 'shop-signboard') ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : ''
                  }}
                >
                  
                  {/* Ribbon holes rendering slots overlays */}
                  {design.mountingStyle === 'ribbon-holes' && design.itemType === 'nikah-clock-frame' && (
                    <div className="absolute top-3 inset-x-0 flex justify-between px-12 pointer-events-none">
                      <div className={`w-2.5 h-2.5 rounded-full border ${!realisticView ? 'border-emerald-400 bg-transparent' : 'bg-stone-100 border-stone-300 shadow-inner'}`}></div>
                      <div className={`w-2.5 h-2.5 rounded-full border ${!realisticView ? 'border-emerald-400 bg-transparent' : 'bg-stone-100 border-stone-300 shadow-inner'}`}></div>
                    </div>
                  )}

                  {/* FLOATING TEXT OVERLAY BLOCK */}
                  <div 
                    className={`w-full h-full flex flex-col items-center justify-center p-4 text-center transition-all duration-500 relative z-10 ${
                      !realisticView 
                        ? 'bg-transparent border border-dashed border-sky-500/20 rounded-xl' 
                        : design.acrylicFinish === 'none'
                          ? 'bg-transparent border-none'
                          : design.acrylicFinish === 'gold-mirror'
                            ? 'bg-gradient-to-tr from-amber-300/30 via-amber-100/10 to-amber-400/20 shadow-xs backdrop-blur-xs rounded-xl border border-white/30'
                            : design.acrylicFinish === 'rose-gold'
                              ? 'bg-gradient-to-tr from-rose-300/30 via-rose-100/10 to-rose-400/20 shadow-xs backdrop-blur-xs rounded-xl border border-white/30'
                              : 'bg-white/10 backdrop-blur-xs rounded-xl shadow-xs border border-white/20'
                    }`}
                  >
                    
                    {/* LAYOUT CONTEXT 01: NIKAH WEDDING FRAME */}
                    {design.itemType === 'nikah-clock-frame' && (
                      <div className="w-full flex flex-col justify-around items-center h-full space-y-1">
                        <div className={`text-base select-none ${!realisticView ? 'text-sky-400' : 'drop-shadow-md'}`}>👑</div>
                        
                        <div className="w-full flex-1 flex flex-col justify-around items-center text-center">
                          <p className={`text-[8px] font-bold tracking-[0.25em] font-mono uppercase ${!realisticView ? 'text-emerald-400' : 'opacity-65'}`}>
                            {design.topText}
                          </p>
                          
                          <div className="grid grid-cols-12 w-full items-center gap-1">
                            <div className="col-span-4 flex justify-center">
                              <div className={`w-11 h-11 rounded-full border flex items-center justify-center relative bg-black/5 ${!realisticView ? 'border-sky-400/60' : 'border-dashed border-current/40 shadow-inner'}`}>
                                <div className={`w-1 h-1 rounded-full ${!realisticView ? 'bg-sky-400' : 'bg-current'}`}></div>
                                <div className={`absolute top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-0.5 origin-bottom rotate-45 ${!realisticView ? 'bg-sky-400' : 'bg-current'}`}></div>
                                <span className="absolute top-0.5 text-[5px] font-mono font-bold">XII</span>
                              </div>
                            </div>
                            <div className="col-span-4">
                              <h2 className={`text-xs font-black tracking-widest leading-none ${getEngravingStyleClass()}`} style={{ fontFamily: design.fontStyle === 'script' ? 'Brush Script MT, cursive, sans-serif' : design.fontStyle === 'serif' ? 'Georgia, serif' : 'Arial, sans-serif' }}>
                                {design.middleText}
                              </h2>
                            </div>
                            <div className="col-span-4 flex justify-center">
                              <div className={`w-11 h-11 border rounded-md p-1 flex flex-col justify-between bg-black/5 text-[4px] font-mono font-bold text-center ${!realisticView ? 'border-sky-400/60 text-sky-400' : 'border-current/30'}`}>
                                <div className="border-b border-current/10 pb-0.5 uppercase tracking-wide">Date</div>
                                <div className="grid grid-cols-4 gap-0.5 opacity-60"><div>•</div><div className={`${!realisticView ? 'bg-sky-400' : 'bg-amber-500'} font-bold rounded-xs px-0.5`}>●</div></div>
                              </div>
                            </div>
                          </div>

                          <p className={`text-[8px] font-bold tracking-widest font-mono border-t pt-2 w-2/3 mx-auto ${!realisticView ? 'border-emerald-500/20 text-emerald-400' : 'border-current/10 opacity-75'}`}>{design.bottomText}</p>
                        </div>
                      </div>
                    )}

                    {/* LAYOUT CONTEXT 02: SHOP BRAND SIGNBOARD */}
                    {design.itemType === 'shop-signboard' && (
                      <div className="w-full h-full flex flex-col justify-center items-center text-center p-3 border border-dashed border-current/10 rounded-lg">
                        <div className="space-y-4 w-full">
                          <p className={`text-[8px] font-mono tracking-[0.35em] uppercase font-bold ${!realisticView ? 'text-emerald-400' : 'text-amber-500/90'}`}>
                            {design.topText}
                          </p>
                          <h2 
                            className={`text-xl md:text-2xl font-black tracking-[0.15em] border-y border-current/10 py-2.5 uppercase select-none ${getEngravingStyleClass()}`}
                            style={{ fontFamily: design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif' }}
                          >
                            {design.middleText}
                          </h2>
                          <p className={`text-[9px] tracking-[0.2em] font-medium font-mono uppercase ${!realisticView ? 'text-sky-400' : 'opacity-85'}`}>
                            {design.bottomText}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* LAYOUT CONTEXT 03: OTHER ITEMS (Notebook / Lamp) */}
                    {design.itemType !== 'nikah-clock-frame' && design.itemType !== 'shop-signboard' && (
                      <div className={`space-y-4 w-full ${getEngravingStyleClass()}`}>
                        <p className={`text-[8px] font-bold tracking-[0.3em] font-mono uppercase ${!realisticView ? 'text-emerald-400' : 'opacity-65'}`}>{design.topText}</p>
                        <h2 
                          className="text-sm md:text-base font-black border-y border-current/10 py-2.5 leading-tight uppercase tracking-wider"
                          style={{ fontFamily: design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif' }}
                        >
                          {design.middleText}
                        </h2>
                        <p className={`text-[8px] font-medium tracking-widest font-mono ${!realisticView ? 'text-sky-400' : 'opacity-75'}`}>{design.bottomText}</p>
                      </div>
                    )}

                  </div>

                  {/* Table Lamp slotted base piece block */}
                  {design.itemType === 'table-lamp' && realisticView && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-44 h-5 bg-gradient-to-r from-stone-900 to-stone-800 border-t border-stone-700 rounded-md shadow-md z-20"></div>
                  )}
                  {/* Desktop support stand base blocks */}
                  {design.mountingStyle === 'stand' && design.itemType === 'nikah-clock-frame' && realisticView && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-3.5 bg-stone-900/90 rounded-md border-t border-stone-700 shadow-md z-20"></div>
                  )}

                </div>

              </div>

              {/* Lower absolute label tags */}
              <div className="absolute bottom-4 left-4 bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 rounded-md text-[9px] font-mono uppercase tracking-wider">
                Preview Screen: {realisticView ? 'Finished 3D View' : 'Laser Paths'}
              </div>
            </div>

            {/* MANIFEST SYSTEM ACTION PIPELINE FORWARD LINK */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs text-center">
              <Link 
                href={`/quote?desc=${encodeURIComponent(generatedBlueprintText)}`}
                className="w-full text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-md text-center inline-block transition-all hover:bg-stone-900 bg-amber-600 cursor-pointer"
              >
                Forward Custom Blueprint Specification Manifest →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}