import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 px-6" style={{ background: 'linear-gradient(180deg, var(--studio-footer) 0%, #26312d 100%)', borderTop: '1px solid var(--studio-border)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        <div>
          <h3 className="text-lg font-black tracking-wider mb-4" style={{ color: 'var(--studio-surface-light)' }}>
            LASER <span style={{ color: 'var(--studio-gold)' }}>TECH</span>
          </h3>
          <p className="text-xs leading-relaxed mb-4" style={{ color: '#e5e2d9' }}>
            Where Custom Meets Creativity. Fabricating precision custom laser crafts, professional engravings, and clean corporate identity configurations.
          </p>
          <span className="text-[11px] px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--studio-surface-light)', border: '1px solid rgba(255,255,255,0.12)' }}>
            👌💯 Quality at a Reasonable Price
          </span>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-xs tracking-wider uppercase" style={{ color: 'var(--studio-surface-light)' }}>Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/portfolio" className="transition-colors" style={{ color: '#e2ddd2' }}>Our Work & Instagram</Link></li>
            <li><Link href="/quote" className="transition-colors" style={{ color: '#e2ddd2' }}>Get a Quote</Link></li>
            <li><Link href="#services" className="transition-colors" style={{ color: '#e2ddd2' }}>3D Wood Signs & Decor</Link></li>
            <li><Link href="#services" className="transition-colors" style={{ color: '#e2ddd2' }}>Engraved Acrylic Accents</Link></li>
            <li><Link href="#services" className="transition-colors" style={{ color: '#e2ddd2' }}>Corporate Material Layouts</Link></li>
            <li><Link href="#services" className="transition-colors" style={{ color: '#e2ddd2' }}>Custom Shirt Merchandise</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-xs tracking-wider uppercase" style={{ color: 'var(--studio-surface-light)' }}>Studio Hours</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex justify-between"><span style={{ color: '#e2ddd2' }}>Monday - Saturday:</span> <span className="font-bold" style={{ color: 'var(--studio-surface-light)' }}>9 AM - 6 PM</span></li>
            <li className="flex justify-between"><span style={{ color: '#e2ddd2' }}>Sunday:</span> <span className="text-rose-200 font-medium">Closed</span></li>
            <li className="pt-2 text-[11px]" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', color: '#e2ddd2' }}>
              📍 33/1 Kandy - Colombo Rd, Mawanella
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-xs tracking-wider uppercase" style={{ color: 'var(--studio-surface-light)' }}>Direct Inquiries</h4>
          <p className="text-xs mb-4" style={{ color: '#e2ddd2' }}>DM or call for operational setup and district dispatch handling:</p>
          <a 
            href="tel:+94757991141" 
            className="block text-center font-mono font-bold py-3 rounded-xl transition-all text-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--studio-surface-light)', border: '1px solid rgba(255,255,255,0.14)' }}
          >
            📞 +94 75 799 1141
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 text-center text-[11px] flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', color: '#d8d2c7' }}>
        <p>© {currentYear} Laser Tech Mawanella. All Rights Reserved.</p>
        <p className="tracking-wide">Built with Precision ⚡ Next.js App</p>
      </div>
    </footer>
  );
}