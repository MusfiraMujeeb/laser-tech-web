'use client';

import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#F1ECE4] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-[#D5BC8D] shadow-sm">
            <Image src="/brand/logo.png" alt="Laser Tech logo" width={32} height={32} className="object-contain" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-black text-[#26322E] tracking-[0.24em] uppercase">Laser Tech</span>
            <span className="text-[10px] font-black text-[#C08A3E] tracking-[0.28em] uppercase mt-1">Mawanella</span>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#26322E]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#C08A3E] transition-colors">
              {item.label}
            </Link>
          ))}
          <Link
            href="/ai-booth"
            className="px-4 py-2 bg-[#F3E8D6] text-[#7C5A28] rounded-lg border border-[#D5BC8D] hover:bg-[#EBDCC5] transition-colors"
          >
            Studio
          </Link>
        </div>
      </div>
    </nav>
  );
}
