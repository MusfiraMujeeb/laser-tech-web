import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-4 shadow-sm backdrop-blur-md border-b border-[#F1ECE4]" style={{ backgroundColor: 'rgba(248, 246, 242, 0.92)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Entity */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="w-12 h-12 shadow-md flex items-center justify-center rounded-xl bg-white border border-[#D5BC8D] overflow-hidden">
                <Image
                  src="/brand/logo.png"
                  alt="Laser Tech Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-wider uppercase text-[#26322E] leading-tight">LASER TECH</span>
                <span className="text-[10px] font-mono font-black tracking-widest uppercase text-[#C08A3E]">Mawanella</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-black text-xs uppercase tracking-wider">
            <Link href="/" className="transition-colors hover:text-[#C08A3E] text-[#26322E]">Home</Link>
            <Link href="/portfolio" className="transition-colors hover:text-[#C08A3E] text-[#26322E]">Our Work</Link>
            <Link href="/about" className="transition-colors hover:text-[#C08A3E] text-[#26322E]">About Us</Link>
          </div>

          {/* Actions CTA Wrapper */}
          <div className="flex items-center gap-3">
            <Link 
              href="/ai-booth" 
              className="font-black text-[10px] tracking-wider uppercase text-[#7C5A28] bg-[#F3E8D6] px-4 py-2.5 rounded-xl border border-[#D5BC8D] transition-all hover:bg-[#EBDCC5] hidden sm:inline-block shadow-2xs"
            >
              ✨ Design Studio
            </Link>

            <Link 
              href="/portfolio" 
              className="text-white px-5 py-2.5 rounded-xl font-black text-[10px] tracking-wider uppercase transition-all shadow-md bg-[#26322E] hover:bg-[#33423D]"
            >
              Get a Quote
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}