import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productItems } from "../../data/products";

export function generateStaticParams() {
  return productItems.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = productItems.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productItems
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#26322E] px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <Link href="/products" className="text-sm font-bold text-[#7C5A28] hover:text-[#C7923B]">
          ← Back to catalog
        </Link>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-square bg-white rounded-3xl border border-[#E4D7C4] overflow-hidden shadow-sm">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C7923B]">
                {product.category} / {product.subcategory}
              </p>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                {product.title}
              </h1>
            </div>

            <p className="text-base leading-relaxed text-[#66706C]">
              {product.description}
            </p>

            <div className="bg-white border border-[#E4D7C4] rounded-2xl p-4 space-y-2">
              <p className="text-sm">
                <span className="font-bold">Material:</span> {product.material}
              </p>
              <p className="text-sm">
                <span className="font-bold">Price:</span>{" "}
                <span className="text-[#C7923B] font-bold">{product.price ?? "On request"}</span>
              </p>
              <p className="text-sm">
                <span className="font-bold">Availability:</span>{" "}
                <span className={product.available ? "text-emerald-600 font-bold" : "text-red-600 font-bold"}>
                  {product.available ? "Available" : "Unavailable"}
                </span>
              </p>
              {product.discountPercent && product.discountPercent > 0 && (
                <p className="text-sm">
                  <span className="font-bold">Discount:</span>{" "}
                  <span className="text-[#C7923B] font-bold">{product.discountPercent}%</span>
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#F1ECE4] text-xs font-bold uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap pt-3">
              <Link
                href={`/quote?product=${product.slug}`}
                className="px-6 py-4 rounded-xl bg-[#26322E] text-white text-xs font-black uppercase tracking-wider hover:bg-[#33423D] transition-colors"
              >
                Request Quote
              </Link>
              <a
                href="https://wa.me/94776632244"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-xl bg-[#C7923B] text-white text-xs font-black uppercase tracking-wider hover:bg-[#B9822D] transition-colors"
              >
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
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="bg-white border border-[#E4D7C4] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
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