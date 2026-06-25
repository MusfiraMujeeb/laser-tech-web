import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productItems } from "../../data/products";

function discountedPrice(price: number, discount: number) {
  if (!discount) return price;
  return Math.round(price - (price * discount) / 100);
}

export function generateStaticParams() {
  return productItems.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productItems.find((item) => item.slug === params.slug);
  if (!product) notFound();

  const relatedProducts = productItems
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  const sale = discountedPrice(product.priceLkr, product.discountPercent);

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#26322E] px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <Link href="/products" className="text-sm font-bold text-[#7C5A28] hover:text-[#C7923B]">
          ← Back to catalog
        </Link>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-square bg-white rounded-3xl border border-[#E4D7C4] overflow-hidden shadow-sm">
            <Image src={product.image} alt={product.title} fill className="object-cover" priority />
          </div>

          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C7923B]">
              {product.category} / {product.subcategory}
            </p>
            <h1 className="text-3xl md:text-5xl font-black">{product.title}</h1>
            <p className="text-base leading-relaxed text-[#66706C]">{product.description}</p>

            <div className="bg-white border border-[#E4D7C4] rounded-2xl p-4 space-y-2">
              <p className="text-sm"><span className="font-bold">Material:</span> {product.material}</p>
              <p className="text-sm">
                <span className="font-bold">Price:</span>{" "}
                {product.discountPercent > 0 ? (
                  <>
                    <span className="font-bold text-[#26322E]">LKR {sale.toLocaleString()}</span>{" "}
                    <span className="line-through text-[#999] text-xs ml-2">
                      LKR {product.priceLkr.toLocaleString()}
                    </span>
                  </>
                ) : (
                  <span className="font-bold text-[#C7923B]">LKR {product.priceLkr.toLocaleString()}</span>
                )}
              </p>
              <p className="text-sm">
                <span className="font-bold">Availability:</span>{" "}
                <span className={product.available ? "text-emerald-700 font-bold" : "text-rose-700 font-bold"}>
                  {product.available ? "Available" : "Unavailable"}
                </span>
              </p>
            </div>

            <div className="flex gap-4 flex-wrap pt-3">
              <Link href={`/quote?product=${product.slug}`} className="px-6 py-4 rounded-xl bg-[#26322E] text-white text-xs font-black uppercase">
                Request Quote
              </Link>
              <a href="https://wa.me/94776632244" target="_blank" rel="noreferrer" className="px-6 py-4 rounded-xl bg-[#C7923B] text-white text-xs font-black uppercase">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-black">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedProducts.map((item) => (
                <Link key={item.id} href={`/products/${item.slug}`} className="bg-white border border-[#E4D7C4] rounded-2xl p-4 shadow-sm">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <h3 className="font-black">{item.title}</h3>
                  <p className="text-sm text-[#66706C]">{item.subcategory}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}