'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UltimateLaserStudio() {
  const [design, setDesign] = useState({
    itemType: 'nikah-clock-frame', // nikah-clock-frame | notebook | shop-signboard | table-lamp | keytag
    businessType: 'boutique', // boutique | salon | cafe | corporate
    shape: 'circular', // circular | rectangular | arched | hexagon
    woodTone: 'mahogany', // mahogany | oak-mdf | walnut | cherry
    acrylicFinish: 'gold-mirror', // frosted | gold-mirror | rose-gold | none
    mountingStyle: 'stand', // stand | ribbon-holes | metal-standoffs | spiral-bound | ring-chain
    fontStyle: 'script',
    topText: 'OUR WEDDING DAY',
    middleText: 'AMRAN & FATHIMA',
    bottomText: '2026.06.20'
  });

  const [realisticView, setRealisticView] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Smart automatic context override switches when changing product lines
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

    // Secondary sub-switch hook if user modifies the shop signboard niche type directly
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
• Project Category Model: ${design.itemType.toUpperCase()}
• Business Sub-Archetype: ${design.itemType === 'shop-signboard' ? design.businessType.toUpperCase() : 'N/A'}
• Shape Geometry Profile: ${design.shape.toUpperCase()}
• Base Wood Selection: ${design.woodTone.toUpperCase()}
• Acrylic Treatment Mode: ${design.acrylicFinish.toUpperCase()}
• Hardware Mounting Style: ${design.mountingStyle.toUpperCase()}
• Selected Typography Engine: ${design.fontStyle.toUpperCase()}
• Layer 01 (Header Inscription): "${design.topText}"
• Layer 02 (Core Subject Text): "${design.middleText}"
• Layer 03 (Footer Info Text): "${design.bottomText}"`;

  const getWoodClass = () => {
    if (design.woodTone === 'mahogany') return 'from-orange-950 via-red-950 to-amber-950 border-orange-900 text-amber-100/90';
    if (design.woodTone === 'walnut') return 'from-stone-800 to-stone-900 border-stone-700 text-stone-100/90';
    if (design.woodTone === 'cherry') return 'from-amber-800 via-orange-900 to-stone-900 border-amber-900 text-amber-50/90';
    return 'from-amber-100 via-amber-200 to-yellow-200 border-amber-400 text-amber-950'; // Oak MDF
  };

  const getEngravingColor = () => {
    if (design.acrylicFinish === 'gold-mirror') return 'text-amber-300 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]';
    if (design.acrylicFinish === 'rose-gold') return 'text-rose-300 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]';
    return design.woodTone === 'oak-mdf' ? 'text-stone-800/90' : 'text-orange-950/40 mix-blend-multiply';
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-stone-50 text-stone-800 selection:bg-amber-100 selection:text-amber-900">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP HEADER */}
        <div className="mb-10 border-b border-stone-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-amber-600 font-mono text-[10px] uppercase tracking-widest font-bold">Studio Suite v6.0 // Commercial Shopboards & Frames</span>
            <h1 className="text-3xl font-black tracking-tight text-stone-900 mt-1">Bespoke Customization Center</h1>
          </div>
          
          <div className="bg-white border p-1 rounded-xl shadow-xs inline-flex items-center gap-1">
            <button 
              type="button" 
              onClick={() => setRealisticView(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${!realisticView ? 'bg-stone-800 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              📐 CAD Wireframe
            </button>
            <button 
              type="button" 
              onClick={() => setRealisticView(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${realisticView ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              📸 Realistic Material View
            </button>
          </div>
        </div>

        {/* WORKSPACE LAYOUT SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: CONTROL CONSOLE */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* STAGE 1: EXPANDED MODEL CHOOSE LIST */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>01 //</span> Select Catalog Product Line
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Product Line Archetype</label>
                  <select name="itemType" value={design.itemType} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-bold">
                    <option value="nikah-clock-frame">3D Premium Nikah Clock & Calendar Frame</option>
                    <option value="shop-signboard">Commercial Shop Name Signboard / Display</option>
                    <option value="notebook">A5 Premium Mahogany Cover Notebook</option>
                    <option value="table-lamp">LED Backlit Glowing Acrylic Table Trophy/Lamp</option>
                  </select>
                </div>

                {/* Conditional Sub-Dropdown fields: Displays only if Commercial Shop Signboard line is active */}
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Business Category</label>
                  <select name="businessType" disabled={design.itemType !== 'shop-signboard'} value={design.businessType} onChange={handleInputChange} className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-bold disabled:opacity-45">
                    <option value="boutique">Clothing Boutique / Brand</option>
                    <option value="salon">Beauty Salon & Luxury Spa</option>
                    <option value="cafe">Cafe / Restaurant / Kitchen</option>
                    <option value="corporate">Corporate Office / Board Sign</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STAGE 2: EXTENDED MATERIALS LAYER MATRIX */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>02 //</span> Core Wood & Acrylic Settings
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Core Wood Component</label>
                  <select name="woodTone" value={design.woodTone} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="mahogany">Natural Mahogany Core (Thin Laminate Cover)</option>
                    <option value="oak-mdf">Oak-Veneered MDF (Golden Finish)</option>
                    <option value="walnut">Exotic Dark Walnut Core</option>
                    <option value="cherry">Rich Warm Cherry Wood Base</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Acrylic Overlay Finish</label>
                  <select name="acrylicFinish" value={design.acrylicFinish} onChange={handleInputChange} className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold">
                    <option value="gold-mirror">Luxury Gold Mirror Acrylic Inlay</option>
                    <option value="rose-gold">Premium Rose Gold Mirror Acrylic</option>
                    <option value="frosted">Frosted Laser Etch (Matte Satin)</option>
                    <option value="none">No Acrylic (Direct Clean Wood Burn)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Shape Bounds</label>
                  <select name="shape" disabled={design.itemType === 'notebook' || design.itemType === 'shop-signboard'} value={design.shape} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold disabled:opacity-50">
                    <option value="circular">Circular Disc</option>
                    <option value="arched">Arched Dome</option>
                    <option value="rectangular">Rectangular</option>
                    <option value="hexagon">Hexagon</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Fixing Fixture</label>
                  <select name="mountingStyle" disabled={design.itemType === 'notebook' || design.itemType === 'keytag' || design.itemType === 'shop-signboard'} value={design.mountingStyle} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-semibold disabled:opacity-50">
                    <option value="stand">Desktop Stand Base</option>
                    <option value="ribbon-holes">Ribbon Hanging Slots</option>
                    <option value="metal-standoffs">Wall Standoff Pins</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1.5 font-mono">Lettering Font</label>
                  <select name="fontStyle" value={design.fontStyle} onChange={handleInputChange} className="w-full px-2 py-2 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 focus:outline-none focus:border-amber-600 font-bold">
                    <option value="script">Calligraphy Style</option>
                    <option value="serif">Premium Serif</option>
                    <option value="sans">Clean Modern Sans</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STAGE 3: CONCURRENT WORDING LAYERS */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs space-y-4">
              <h3 className="font-black text-xs uppercase tracking-wider text-amber-700 flex items-center gap-2 font-mono">
                <span>03 //</span> Input Custom Inscription Wording
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Layer 01: Top Line (Brand Header / Hook Text)</label>
                  <input type="text" name="topText" maxLength={28} value={design.topText} onChange={(e) => setDesign({ ...design, topText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Layer 02: Center Focus (Business Name / Main Subjects)</label>
                  <input type="text" name="middleText" maxLength={28} value={design.middleText} onChange={(e) => setDesign({ ...design, middleText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Layer 03: Bottom Subtext (Motto / Dates Line)</label>
                  <input type="text" name="bottomText" maxLength={28} value={design.bottomText} onChange={(e) => setDesign({ ...design, bottomText: e.target.value.toUpperCase() })} className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50 text-stone-800 font-mono focus:outline-none focus:border-amber-600 font-medium" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REVOLUTIONARY DYNAMIC MULTIPLEXING CANVAS */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 block px-1 font-mono">
              🖥️ Live Viewport Studio Monitor Canvas
            </span>
            
            {/* GRID STAGE WRAPPER */}
            <div className="w-full aspect-square bg-stone-100 border border-stone-200 rounded-3xl flex items-center justify-center p-6 relative overflow-hidden bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] shadow-inner">
              
              <div className="relative flex items-center justify-center transition-all duration-300">
                
                {/* 📔 CONDITION A: Notebook Left Spiral Binder Coil Wire Loops */}
                {design.itemType === 'notebook' && (
                  <div className="absolute left-[-16px] top-6 h-64 w-6 flex flex-col justify-between z-20 pointer-events-none">
                    {Array.from({ length: 13 }).map((_, i) => (
                      <div key={i} className="w-5 h-2 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 rounded-full border-y border-stone-400 shadow-xs"></div>
                    ))}
                  </div>
                )}

                {/* 🏢 CONDITION B: Commercial Shop Board Corner Stud fixing anchors */}
                {(design.itemType === 'shop-signboard' || design.mountingStyle === 'metal-standoffs') && (
                  <>
                    <div className="absolute top-3 left-3 w-3 h-3 bg-gradient-to-r from-stone-300 to-stone-100 border border-stone-400 rounded-full z-20 shadow-xs flex items-center justify-center"><div className="w-1 h-1 bg-stone-500 rounded-full"></div></div>
                    <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-r from-stone-300 to-stone-100 border border-stone-400 rounded-full z-20 shadow-xs flex items-center justify-center"><div className="w-1 h-1 bg-stone-500 rounded-full"></div></div>
                    <div className="absolute bottom-3 left-3 w-3 h-3 bg-gradient-to-r from-stone-300 to-stone-100 border border-stone-400 rounded-full z-20 shadow-xs flex items-center justify-center"><div className="w-1 h-1 bg-stone-500 rounded-full"></div></div>
                    <div className="absolute bottom-3 right-3 w-3 h-3 bg-gradient-to-r from-stone-300 to-stone-100 border border-stone-400 rounded-full z-20 shadow-xs flex items-center justify-center"><div className="w-1 h-1 bg-stone-500 rounded-full"></div></div>
                  </>
                )}

                {/* 🪵 MAIN ASSEMBLY BOARD CHASSIS CONTAINER */}
                <div 
                  className={`relative flex flex-col items-center justify-between p-6 transition-all duration-700 bg-gradient-to-br shadow-[0_25px_50px_rgba(44,41,38,0.14)] border-2 ${getWoodClass()} ${
                    design.itemType === 'notebook' ? 'w-68 h-80 rounded-r-2xl rounded-l-md pl-8' :
                    design.itemType === 'shop-signboard' ? 'w-[420px] h-52 rounded-xl border-stone-900 shadow-2xl' : // Elite elongated proportions for shop displays
                    /* Wedding Plaque Frames structural sizing mapping options */
                    design.shape === 'circular' ? 'w-85 h-85 rounded-full' :
                    design.shape === 'rectangular' ? 'w-85 h-85 rounded-2xl' :
                    'w-85 h-85 rounded-b-xl rounded-t-[140px]' // Arched Dome profile curves lines
                  }`}
                >
                  
                  {/* DISPLAY LAYER A: NIKAH CLOCK FRAMES MODULE */}
                  {design.itemType === 'nikah-clock-frame' && (
                    <div className="w-full h-full flex flex-col justify-between items-center flex-1 space-y-1">
                      <div className="text-xl drop-shadow-md mt-0.5">👑</div>
                      
                      <div className="w-full flex-1 flex flex-col justify-around items-center text-center">
                        <p className="text-[8px] font-bold tracking-[0.25em] font-mono uppercase opacity-65">{design.topText}</p>
                        
                        <div className="grid grid-cols-12 w-full items-center gap-1">
                          <div className="col-span-4 flex justify-center">
                            <div className="w-12 h-12 rounded-full border border-dashed border-current/40 flex items-center justify-center relative bg-black/5">
                              <div className="w-1 h-1 bg-current rounded-full"></div>
                              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-0.5 bg-current origin-bottom rotate-45"></div>
                              <span className="absolute top-0.5 text-[5px] font-mono font-bold">XII</span>
                            </div>
                          </div>
                          <div className="col-span-4">
                            <h2 className={`text-xs md:text-sm font-black tracking-widest leading-none ${getEngravingColor()}`} style={{ fontFamily: design.fontStyle === 'script' ? 'Brush Script MT, cursive, sans-serif' : design.fontStyle === 'serif' ? 'Georgia, serif' : 'Arial, sans-serif' }}>
                              {design.middleText}
                            </h2>
                          </div>
                          <div className="col-span-4 flex justify-center">
                            <div className="w-12 h-12 border border-current/30 rounded-md p-1 flex flex-col justify-between bg-black/5 text-[4px] font-mono font-bold text-center">
                              <div className="border-b border-current/10 pb-0.5 uppercase tracking-wide">Date</div>
                              <div className="grid grid-cols-4 gap-0.5 opacity-60">
                                <div>•</div><div>•</div><div className="bg-amber-500 text-stone-950 font-bold rounded-xs px-0.5">●</div><div>•</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-[8px] font-bold tracking-widest font-mono opacity-70 border-t border-current/10 pt-2 w-2/3 mx-auto">{design.bottomText}</p>
                      </div>
                    </div>
                  )}

                  {/* DISPLAY LAYER B: COMMERCIAL SHOP ARCHITECTURE LAYOUT SIGNBOARDS */}
                  {design.itemType === 'shop-signboard' && (
                    <div className="w-full h-full flex flex-col justify-center items-center text-center p-3 border border-dashed border-current/20 rounded-lg bg-black/5">
                      <div className="space-y-3.5 w-full">
                        
                        {/* Elite mini business-category subhead text node styling layout */}
                        <p className="text-[8px] font-mono tracking-[0.35em] uppercase font-bold text-amber-500/90">
                          {design.topText || 'BRAND CATEGORY'}
                        </p>
                        
                        {/* Big bold structural commercial typography overlay header line */}
                        <h2 
                          className={`text-2xl md:text-3xl font-black tracking-[0.15em] border-y border-current/10 py-2.5 uppercase select-none ${getEngravingColor()}`}
                          style={{ fontFamily: design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif' }}
                        >
                          {design.middleText || 'COMPANY NAME'}
                        </h2>
                        
                        <p className="text-[9px] tracking-[0.2em] font-medium opacity-85 font-mono uppercase">
                          {design.bottomText || 'BUSINESS SUBTEXT'}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* DISPLAY LAYER C: NOTEBOOKS OR ACCESSORIES OTHER LINES */}
                  {design.itemType !== 'nikah-clock-frame' && design.itemType !== 'shop-signboard' && (
                    <div className="w-full h-full flex flex-col justify-between items-center text-center p-4">
                      <div className="w-full border-l-2 border-current/10 h-full pl-4 flex flex-col justify-center space-y-6 bg-black/5 rounded-r-xl">
                        <p className="text-[8px] font-bold tracking-[0.3em] font-mono uppercase opacity-65">{design.topText}</p>
                        <h2 className={`text-base md:text-xl font-black border-y border-current/10 py-3 leading-tight ${getEngravingColor()}`} style={{ fontFamily: design.fontStyle === 'serif' ? 'Georgia, serif' : design.fontStyle === 'sans' ? 'Arial, sans-serif' : 'Brush Script MT, cursive, sans-serif' }}>
                          {design.middleText}
                        </h2>
                        <p className="text-[9px] font-medium tracking-widest font-mono opacity-75">{design.bottomText}</p>
                      </div>
                    </div>
                  )}

                  {/* Desktop support base block if table-lamp line is active */}
                  {design.itemType === 'table-lamp' && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-44 h-5 bg-gradient-to-r from-stone-900 to-stone-800 border-t border-stone-700 rounded-md z-20"></div>
                  )}

                </div>

              </div>

              {/* Lower info block identifier label tag overlay */}
              <div className="absolute bottom-4 left-4 bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 rounded-md text-[9px] font-mono uppercase tracking-wider">
                Active Catalog Model: {design.itemType.toUpperCase()}
              </div>
            </div>

            {/* MANIFEST WORKFLOW FORWARD LINK BUTTON */}
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