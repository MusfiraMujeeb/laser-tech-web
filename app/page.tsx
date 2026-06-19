import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--studio-bg)' }}>
      
      {/* 1. HERO BANNER */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--studio-hero) 0%, #fffaf5 42%, #efe3d2 100%)', borderBottom: '1px solid var(--studio-border)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block font-bold px-4 py-1.5 rounded-lg text-xs tracking-wider uppercase mb-6 shadow-sm" style={{ backgroundColor: 'var(--studio-surface-dark)', color: '#f5efe6', border: '1px solid rgba(255,255,255,0.12)' }}>
              Where Custom Meets Creativity 👌💯
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight" style={{ color: 'var(--studio-moss)' }}>
              Crafting Vision <br />
              Into Solid <span style={{ color: 'var(--studio-gold)' }}>Reality.</span>
            </h1>
            <p className="text-base mb-10 max-w-xl leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
              Premium Laser Cutting, Custom Engraving, and Branding services in Mawanella. Advanced machine engineering execution blended with clean design studio artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="text-white font-extrabold px-8 py-4 rounded-xl text-center shadow-md transition-all text-sm tracking-wide hover:-translate-y-0.5 hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #31433c 0%, #2a3631 100%)' }}>
                Upload Design & Get Quote
              </Link>
              <Link href="#services" className="font-bold px-8 py-4 rounded-xl text-center transition-all text-sm shadow-sm hover:-translate-y-0.5 hover:shadow-md" style={{ backgroundColor: 'var(--studio-surface-light)', color: 'var(--studio-moss)', border: '1px solid var(--studio-border)' }}>
                Explore Services
              </Link>
              <Link href="/portfolio" className="font-bold px-8 py-4 rounded-xl text-center transition-all text-sm shadow-sm hover:-translate-y-0.5 hover:shadow-md" style={{ backgroundColor: 'var(--studio-surface-dark)', color: '#fffaf6', border: '1px solid rgba(255,255,255,0.12)' }}>
                See Our Work
              </Link>
            </div>
          </div>

          {/* Interactive Workshop Card & Live Map Embedded Panel */}
          <div className="p-6 md:p-8 rounded-3xl shadow-[0_18px_40px_rgba(49,67,60,0.18)] flex flex-col gap-6" style={{ background: 'linear-gradient(180deg, var(--studio-card) 0%, #efe5d8 100%)', border: '1px solid var(--studio-border)' }}>
            <div>
              <span className="text-3xl mb-3 block">📍</span>
              <h3 className="text-xl font-black mb-1" style={{ color: 'var(--studio-moss)' }}>Our Studio Workshop</h3>
              <p className="text-sm" style={{ color: 'var(--studio-muted)' }}>33/1 Kandy - Colombo Rd, Mawanella</p>
            </div>
            
            {/* Live Interactive Map Frame Container */}
            <div className="w-full h-56 rounded-2xl overflow-hidden border shadow-inner border-slate-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.888111637817!2d80.44777549999999!3d7.253573400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae315006ed4ab7d%3A0x4902102f60dc78df!2sLaser%20Tech!5e0!3m2!1sen!2slk!4v1781879984552!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs" style={{ borderTop: '1px solid var(--studio-bg)' }}>
              <div>
                <p className="font-medium uppercase tracking-wider mb-1" style={{ color: 'var(--studio-muted)' }}>Workshop Status</p>
                <p className="text-emerald-700 font-bold text-sm">Open • Closes 6 PM</p>
              </div>
              <div>
                <p className="font-medium uppercase tracking-wider mb-1" style={{ color: 'var(--studio-muted)' }}>Google Rating</p>
                <p className="font-bold text-sm" style={{ color: 'var(--studio-moss)' }}>5.0 ⭐⭐⭐⭐⭐ (2 Reviews)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight" style={{ color: 'var(--studio-moss)' }}>Our Core Services</h2>
          <div className="w-12 h-1 mx-auto mb-4 rounded-full" style={{ backgroundColor: 'var(--studio-gold)' }}></div>
          <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: 'var(--studio-muted)' }}>Precision fabrication paths meeting crisp artistic design. Quality manufacturing with trusted island-wide logistics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Service Card 1: Laser Crafts */}
          <div className="p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full" style={{ background: 'linear-gradient(180deg, var(--studio-surface-light) 0%, var(--studio-card) 100%)', border: '1px solid var(--studio-border)' }}>
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6" style={{ backgroundColor: 'var(--studio-hero)', color: 'var(--studio-gold)' }}>🪵</div>
              <h3 className="text-xl font-black mb-3" style={{ color: 'var(--studio-moss)' }}>Laser Crafts & Decor</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
                High-tech precision cutting and intricate surface engraving on premium woods, MDF, and custom acrylic panels.
                <span className="block mt-2 font-bold" style={{ color: 'var(--studio-moss)' }}>3D Layered signs, custom clocks, cake toppers, luggage tags, layered wood wall art, and holiday ornaments.</span>
              </p>
            </div>
            <div className="pt-4 border-t border-dashed mt-auto" style={{ borderColor: 'var(--studio-border)' }}>
              <Link href="/quote?type=laser" className="font-bold text-xs uppercase tracking-wider hover:underline inline-block" style={{ color: 'var(--studio-gold)' }}>
                Request Craft Quote →
              </Link>
            </div>
          </div>

          {/* Service Card 2: Corporate Identity */}
          <div className="p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full" style={{ background: 'linear-gradient(180deg, #fcfaf7 0%, var(--studio-card) 100%)', border: '1px solid var(--studio-border)' }}>
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6" style={{ backgroundColor: 'var(--studio-bg)', color: 'var(--studio-moss)' }}>📐</div>
              <h3 className="text-xl font-black mb-3" style={{ color: 'var(--studio-moss)' }}>Corporate Identity</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
                Establish a professional, clean commercial market presence with sharp vector company layout setups and branded hardware.
                <span className="block mt-2 font-bold" style={{ color: 'var(--studio-moss)' }}>Custom graphic logo designs, employee ID cards, premium business cards, company plaques, and desktop displays.</span>
              </p>
            </div>
            <div className="pt-4 border-t border-dashed mt-auto" style={{ borderColor: 'var(--studio-border)' }}>
              <Link href="/quote?type=branding" className="font-bold text-xs uppercase tracking-wider hover:underline inline-block" style={{ color: 'var(--studio-moss)' }}>
                Consult Setup →
              </Link>
            </div>
          </div>

          {/* Service Card 3: Print & Apparel */}
          <div className="p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full" style={{ background: 'linear-gradient(180deg, #fffaf4 0%, var(--studio-card) 100%)', border: '1px solid var(--studio-border)' }}>
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6" style={{ backgroundColor: '#ffedd5', color: '#ea580c' }}>👕</div>
              <h3 className="text-xl font-black mb-3" style={{ color: 'var(--studio-moss)' }}>Print & Apparel</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
                High-visibility commercial layout items and customized promotional apparel built to amplify operational events.
                <span className="block mt-2 font-bold" style={{ color: 'var(--studio-moss)' }}>Custom T-shirt printing, advertising posters (matangazo), promotional marketing flyers, and custom engraved coasters.</span>
              </p>
            </div>
            <div className="pt-4 border-t border-dashed mt-auto" style={{ borderColor: 'var(--studio-border)' }}>
              <Link href="/quote?type=print" className="font-bold text-xs uppercase tracking-wider hover:underline inline-block" style={{ color: 'var(--studio-moss)' }}>
                Place Print Order →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. VALUE BANNER */}
      <section className="py-16 text-center px-4" style={{ backgroundColor: 'var(--studio-hero)', borderTop: '1px solid var(--studio-border)', borderBottom: '1px solid var(--studio-border)' }}>
        <h3 className="text-xl md:text-2xl font-black mb-2" style={{ color: 'var(--studio-moss)' }}>Quality at a Reasonable Price 👌💯</h3>
        <p className="text-sm max-w-sm mx-auto mb-6" style={{ color: 'var(--studio-muted)' }}>Delivering verified fabrication safely to all geographical locations across Sri Lanka.</p>
        <span className="inline-block font-mono text-xs px-5 py-2.5 rounded-xl shadow-xs font-bold" style={{ backgroundColor: 'var(--studio-card)', color: 'var(--studio-moss)', border: '1px solid var(--studio-border)' }}>
          🚚 Island-Wide Delivery 🇱🇰
        </span>
      </section>

    </div>
  );
}