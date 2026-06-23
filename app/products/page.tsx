import Link from 'next/link';
import { products } from '@/app/data/site';

export default function ProductsPage() {
  return (
    <div className="bg-[#F8F6F2] text-[#26322E]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Our Products</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">13 product lines built around signage, gifts, awards, and industrial work.</h1>
          <p className="text-lg leading-relaxed text-stone-600">
            Explore the main product categories Laser Tech produces for retail clients, wedding events, corporate customers, and manufacturing partners.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.id} className="overflow-hidden rounded-[2rem] border border-[#F1ECE4] bg-white shadow-sm flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-[#26322E] px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#E8D4A2]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="space-y-3">
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C08A3E]">{product.category}</span>
                  <h2 className="text-xl font-black">{product.title}</h2>
                  <p className="text-sm leading-relaxed text-stone-600">{product.description}</p>
                </div>

                <div className="mt-5 rounded-2xl bg-[#F8F6F2] p-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">Use case</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">{product.useCase}</p>
                </div>

                <Link
                  href={`/quote?desc=${encodeURIComponent(`${product.title} | ${product.useCase}`)}`}
                  className="mt-6 inline-flex justify-center rounded-xl bg-[#26322E] px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-white hover:bg-[#33423D] transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
