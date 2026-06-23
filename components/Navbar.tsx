'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#F1ECE4] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-[#D5BC8D] shadow-sm">
             <Image src="/brand/logo.png" alt="Logo" width={32} height={32} className="object-contain" priority />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-[#26322E] tracking-wider uppercase">LASER TECH</span>
            <span className="text-[10px] font-black text-[#C08A3E] tracking-widest uppercase">Mawanella</span>
          </div>
        </Link>
        <div className="flex items-center gap-6 text-xs font-black uppercase tracking-widest text-[#26322E]">
          <Link href="/" className="hover:text-[#C08A3E]">Home</Link>
          <Link href="/portfolio" className="hover:text-[#C08A3E]">Work</Link>
          <Link href="/ai-booth" className="hidden sm:block px-4 py-2 bg-[#F3E8D6] text-[#7C5A28] rounded-lg border border-[#D5BC8D] hover:bg-[#EBDCC5]">Studio</Link>
        </div>
      </div>
    </nav>
  );
}
