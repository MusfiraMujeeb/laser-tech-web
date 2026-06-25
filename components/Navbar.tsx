import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Work" },
  { href: "/quote", label: "Quote" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#E4D7C4] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-[#E4D7C4] shadow-sm">
            <Image
              src="/brand/logo.png"
              alt="Laser Tech logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-[#26322E] tracking-wider uppercase">
              LASER TECH
            </span>
            <span className="text-[10px] font-black text-[#C7923B] tracking-widest uppercase">
              Mawanella
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-5 text-xs font-black uppercase tracking-widest text-[#26322E]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#C7923B]">
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="hidden sm:block px-4 py-2 rounded-xl bg-[#26322E] text-white hover:bg-[#33423D] transition-colors"
          >
            Customize
          </Link>
        </div>
      </div>
    </nav>
  );
}