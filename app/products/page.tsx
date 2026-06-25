import Link from "next/link";
import Image from "next/image";
import { productItems } from "../data/products";

const categories = [
  "All",
  "Signage",
  "Illuminated Signs",
  "Decorative Panels",
  "Awards",
  "Personalized Gifts",
  "Keychains",
  "Name Plates",
  "Brand Display",
] as const;

type Category = (typeof categories)[number];

function discountedPrice(price: number, discount: number) {
  if (!discount) return price;
  return Math.round(price - (price * discount) / 100);
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = (searchParams?.category as Category) || "All";
  const filteredProducts =
    selectedCategory === "All"
      ? productItems
      : productItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#26322E] px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-10">
        <section className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7923B]">
            Product Catalog
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Our Products</h1>
        </section>

        <section className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = selectedCategory === category;
            const href = category === "All" ? "/products" : `/products?category=${encodeURIComponent(category)}`;
            return (
              <Link
                key={category}
                href={href}
                className={`px-4 py-2 rounded-full text-xs font-bold border ${
                  active
                    ? "bg-[#26322E] text-white border-[#26322E]"
                    : "bg-white text-[#26322E] border-[#E4D7C4]"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const sale = discountedPrice(product.priceLkr, product.discountPercent);

            return (
              <article key={product.id} className="bg-white border border-[#E4D7C4] rounded-2xl overflow-hidden shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] bg-[#F1ECE4]">
                  <Image src={product.image} alt={product.title} fill className="object-cover" />
                  {product.featured && (
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-black uppercase bg-[#26322E] text-white">
                      Featured
                    </span>
                  )}
                  {product.discountPercent > 0 && (
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-black uppercase bg-[#C7923B] text-white">
                      {product.discountPercent}% Off
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <p className="text-[10px] uppercase tracking-widest text-[#7C5A28] font-bold">
                    {product.category} / {product.subcategory}
                  </p>
                  <h2 className="text-lg font-black">{product.title}</h2>
                  <p className="text-sm text-[#66706C]">{product.description}</p>

                  <div className="text-sm font-bold">
                    {product.discountPercent > 0 ? (
                      <div className="flex items-center gap-2">
                        <span className="text-[#26322E]">LKR {sale.toLocaleString()}</span>
                        <span className="line-through text-[#999] text-xs">
                          LKR {product.priceLkr.toLocaleString()}
                        </span>
                      </div>
                    ) : (
                      <span>LKR {product.priceLkr.toLocaleString()}</span>
                    )}
                  </div>

                  <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-bold border w-fit ${
                    product.available
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-rose-50 text-rose-700 border-rose-200"
                  }`}>
                    {product.available ? "Available" : "Unavailable"}
                  </span>

                  <div className="mt-auto pt-3 flex gap-3">
                    <Link href={`/products/${product.slug}`} className="flex-1 text-center px-4 py-3 rounded-xl bg-[#26322E] text-white text-xs font-black uppercase">
                      View Details
                    </Link>
                    <Link href={`/quote?product=${product.slug}`} className="flex-1 text-center px-4 py-3 rounded-xl bg-[#C7923B] text-white text-xs font-black uppercase">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}