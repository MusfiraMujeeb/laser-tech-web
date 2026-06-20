import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-4 shadow-sm backdrop-blur-md" style={{ backgroundColor: 'rgba(253, 250, 244, 0.92)', borderBottom: '1px solid var(--studio-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Entity */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden shadow-md flex items-center justify-center ring-1 ring-amber-200" style={{ border: '1px solid var(--studio-gold)', backgroundColor: 'var(--studio-bg)' }}>
                <img 
                  src="/brand/logo.png" 
                  alt="Laser Tech Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight leading-tight" style={{ color: 'var(--studio-moss)' }}>LASER TECH</span>
                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--studio-gold)' }}>Mawanella</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-bold text-sm tracking-wide">
            <Link href="/" className="transition-colors" style={{ color: 'var(--studio-muted)' }}>Home</Link>
            <Link href="#services" className="transition-colors" style={{ color: 'var(--studio-muted)' }}>Our Services</Link>
            <Link href="/portfolio" className="transition-colors" style={{ color: 'var(--studio-muted)' }}>Our Work</Link>
          </div>

          {/* Call to Action Actions Wrapper */}
          <div className="flex items-center gap-4">
            
            {/* 🪄 NEW: Flashing AI Idea Booth button element */}
            <Link 
              href="/ai-booth" 
              className="font-bold text-sm text-amber-700 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200 animate-pulse transition-all hover:bg-amber-100 hidden sm:inline-block"
            >
              ✨ AI Idea Booth
            </Link>

            <Link href="/quote" className="text-white px-6 py-3 rounded-xl font-extrabold text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5 hover:shadow-lg" style={{ backgroundColor: 'var(--studio-moss)' }}>
              Get a Quote
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}