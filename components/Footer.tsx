import Link from 'next/link';
import { contactInfo, services } from '@/app/data/site';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#F1ECE4] bg-white">
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-widest px-4 py-3 rounded-xl shadow-2xl transition-colors"
        >
          <span>💬</span>
          Chat on WhatsApp
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4 space-y-4">
          <div className="text-xl font-black tracking-[0.22em] text-[#26322E] uppercase">
            Laser <span className="text-[#C08A3E]">Tech</span>
          </div>
          <p className="text-sm leading-relaxed text-stone-600">
            Precision laser cutting, CNC routing, marking, and custom production for Sri Lankan businesses and private customers.
          </p>
          <div className="space-y-1 text-sm text-stone-500">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
          </div>
        </div>

        <div className="md:col-span-3 space-y-3">
          <h4 className="text-[11px] font-black uppercase tracking-[0.28em] text-stone-400">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-stone-600 hover:text-[#C08A3E] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 space-y-3">
          <h4 className="text-[11px] font-black uppercase tracking-[0.28em] text-stone-400">Services</h4>
          <ul className="space-y-2 text-sm text-stone-600">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 space-y-3">
          <h4 className="text-[11px] font-black uppercase tracking-[0.28em] text-stone-400">Hours</h4>
          <ul className="space-y-2 text-sm text-stone-600">
            {contactInfo.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#F1ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Laser Tech. All rights reserved.</p>
          <p>Built for signage, gifts, industrial marking, and precision manufacturing.</p>
        </div>
      </div>
    </footer>
  );
}
