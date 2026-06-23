import Link from 'next/link';
import {
  companyProfile,
  contactInfo,
  featuredProducts,
  keyStats,
  machineCapabilities,
  services,
} from '@/app/data/site';

export default function HomePage() {
  return (
    <div className="bg-[#F8F6F2] text-[#26322E]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-[0.25em]">
            <span className="px-3 py-1.5 rounded-full bg-[#26322E] text-[#E8D4A2]">Est. 2019</span>
            <span className="px-3 py-1.5 rounded-full bg-[#F3E8D6] text-[#7C5A28]">Mawanella Pioneer</span>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C08A3E]">
              {companyProfile.tagline}
            </p>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95]">
              Precision Manufacturing
              <br />
              <span className="text-[#C08A3E]">For Enterprise.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-stone-600 leading-relaxed">
              {companyProfile.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="px-6 py-3.5 rounded-xl bg-[#26322E] text-white font-black text-xs uppercase tracking-[0.24em] hover:bg-[#33423D] transition-colors"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#C08A3E] text-white font-black text-xs uppercase tracking-[0.24em] hover:bg-[#B17C33] transition-colors"
            >
              Contact Laser Tech
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {keyStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#F1ECE4] bg-white p-4 shadow-sm">
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="mt-1 text-[11px] font-black uppercase tracking-[0.24em] text-stone-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[2rem] border border-[#F1ECE4] bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(38,50,46,0.08)]">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-stone-400 mb-6">
              Facility Specs
            </p>
            <div className="space-y-5">
              {machineCapabilities.map((machine) => (
                <div key={machine.label} className="flex items-center justify-between gap-4 border-b border-stone-100 pb-4 last:border-b-0 last:pb-0">
                  <span className="font-bold text-lg">{machine.label}</span>
                  <span className="font-mono font-bold text-[#26322E]">{machine.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 lg:pb-24 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">About Company</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Built for precision, creativity, and reliable production.</h2>
          <p className="text-stone-600 leading-relaxed">{companyProfile.about}</p>
          <Link href="/about" className="inline-flex text-sm font-black text-[#26322E] hover:text-[#C08A3E] transition-colors">
            Read the full company profile →
          </Link>
        </div>

        <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-[#F1ECE4] bg-white p-6 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C08A3E]">{service.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{service.description}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-400">{service.capacity}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-[#F1ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid gap-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Featured Products</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Popular items customers ask for most.</h2>
            </div>
            <Link href="/products" className="text-sm font-black text-[#26322E] hover:text-[#C08A3E] transition-colors">
              Browse the full catalog →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-3xl border border-[#F1ECE4] bg-[#F8F6F2]">
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5 space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C08A3E]">{product.category}</span>
                  <h3 className="text-lg font-black">{product.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-[#F1ECE4] bg-[#26322E] p-8 text-white">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E8D4A2]">CEO Statement</p>
          <p className="mt-4 text-xl md:text-2xl font-semibold leading-relaxed">
            &ldquo;{companyProfile.ceo}&rdquo;
          </p>
          <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-[#C08A3E]">
            {companyProfile.ceoName} — {companyProfile.ceoTitle}
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#F1ECE4] bg-white p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Contact Strip</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Need a custom quote or product mockup?</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Send us your idea, size, material, or reference image and we will guide you to the right machine and finish.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#26322E] text-white font-black text-xs uppercase tracking-[0.24em] hover:bg-[#33423D] transition-colors"
            >
              Contact Us
            </Link>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hello Laser Tech, I would like a quote for a custom project.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#C08A3E] text-white font-black text-xs uppercase tracking-[0.24em] hover:bg-[#B17C33] transition-colors"
            >
              WhatsApp Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
