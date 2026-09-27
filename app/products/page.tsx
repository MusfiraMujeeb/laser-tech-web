import Link from "next/link";
import Image from "next/image";
import { connectMongo } from "@/lib/mongodb";
import { Product, IProduct } from "@/models/Product";
import { Offer } from "@/models/Offer";

export const dynamic = "force-dynamic";

const categories = [
  "All",
  "Awards",
  "Clocks",
  "LED Signs",
  "Notebooks",
  "Wedding",
  "Signage",
  "Keychains",
  "Decor",
] as const;

type Category = (typeof categories)[number];

function discountedPrice(price: number, discount: number) {
  if (!discount) return price;
  return Math.round(price - (price * discount) / 100);
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = (params.category as Category) || "All";

  await connectMongo();

  const [allProducts, allOffers] = await Promise.all([
    Product.find({}).sort({ createdAt: -1 }).lean() as Promise<IProduct[]>,
    Offer.find({ active: true, endDate: { $gte: new Date() } }).lean(),
  ]);

  // Filter to only offers that have started
  const activeOffers = allOffers.filter(
    (o: any) => new Date(o.startDate) <= new Date()
  );

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((item) => item.category === selectedCategory);

  // Helper: find best matching offer for a product
  const getOfferForProduct = (product: IProduct) => {
    return activeOffers.find((o: any) => {
      if (o.scope === "all") return true;
      if (o.scope === "category") return o.targetCategory === product.category;
      if (o.scope === "product") return o.targetSlug === product.slug;
      return false;
    });
  };

  // Compute total discount for a product (product discount + active offer)
  const getCombinedDiscount = (product: IProduct) => {
    let total = product.discountPercent || 0;
    const offer = getOfferForProduct(product);
    if (offer && offer.type === "percentage") {
      total += offer.value;
    }
    return Math.min(total, 90); // cap at 90%
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-bold text-taupe">
          <Link href="/" className="hover:text-copper transition">
            Home
          </Link>
          <span className="text-wood-border">/</span>
          <span className="text-walnut">Products</span>
        </nav>

        {/* Page Header */}
        <section className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-copper">
            Product Catalog
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight text-walnut">
            Our Products
          </h1>
          <p className="max-w-2xl text-base text-taupe leading-relaxed">
            Explore our collection of precision-crafted products. From custom
            signage to personalized gifts, every piece is made with care at our
            Mawanella workshop.
          </p>
        </section>

        

        {/* Category Filters */}
        <section className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = selectedCategory === category;
            const href =
              category === "All"
                ? "/products"
                : `/products?category=${encodeURIComponent(category)}`;
            return (
              <Link
                key={category}
                href={href}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                  active
                    ? "bg-walnut text-white border-walnut"
                    : "bg-surface text-walnut border-wood-border hover:border-copper hover:text-copper"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </section>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-surface border border-wood-border rounded-2xl">
            <p className="text-lg font-semibold text-walnut mb-2">
              No products found in this category
            </p>
            <p className="text-sm text-taupe mb-6">
              Try a different category or browse all products.
            </p>
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        )}

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const totalDiscount = getCombinedDiscount(product);
            const sale = discountedPrice(product.priceLkr, totalDiscount);
            const hasPrice = product.priceLkr > 0;
            const hasOffer = totalDiscount > (product.discountPercent || 0);

            return (
              <article
                key={product.slug}
                className="card-soft flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-sand">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  {product.featured && (
                    <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-black uppercase bg-walnut text-white">
                      Featured
                    </span>
                  )}
                  {totalDiscount > 0 && (
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-black uppercase bg-copper text-white">
                      {totalDiscount}% Off
                    </span>
                  )}
                  {product.type === "ready" && (
                    <span className="absolute bottom-3 left-3 px-2 py-1 rounded-md text-[10px] font-black uppercase bg-success text-whatsapp-dark border border-whatsapp/25">
                      Ready to Ship
                    </span>
                  )}
                  {product.type === "custom" && (
                    <span className="absolute bottom-3 left-3 px-2 py-1 rounded-md text-[10px] font-black uppercase bg-sand text-walnut border border-wood-border">
                      Made to Order
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <p className="text-[10px] uppercase tracking-widest text-oak font-bold">
                    {product.category} / {product.subcategory}
                  </p>
                  <h2 className="font-heading text-xl font-semibold text-walnut leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-sm text-taupe leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {hasOffer && (
                    <p className="text-[10px] font-bold uppercase tracking-wider text-copper">
                      🎉 Offer Applied
                    </p>
                  )}

                  <div className="text-sm font-bold">
                    {hasPrice ? (
                      totalDiscount > 0 ? (
                        <div className="flex items-center gap-2">
                          <span className="text-copper text-base">
                            LKR {sale.toLocaleString()}
                          </span>
                          <span className="line-through text-taupe text-xs">
                            LKR {product.priceLkr.toLocaleString()}
                          </span>
                        </div>
                      ) : (
                        <span className="text-copper text-base">
                          LKR {product.priceLkr.toLocaleString()}
                        </span>
                      )
                    ) : (
                      <span className="text-copper text-sm">
                        Request a Quote
                      </span>
                    )}
                  </div>

                  <span
                    className={`inline-block px-2 py-1 rounded-full text-[10px] font-bold border w-fit ${
                      product.available
                        ? "bg-success text-whatsapp-dark border-whatsapp/25"
                        : "bg-error-bg text-error border-error/25"
                    }`}
                  >
                    {product.available ? "Available" : "Unavailable"}
                  </span>

                  <div className="mt-auto pt-3 flex gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 text-center px-4 py-3 rounded-xl bg-walnut text-white text-xs font-black uppercase tracking-wider transition hover:bg-espresso"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/quote?product=${product.slug}`}
                      className="flex-1 text-center px-4 py-3 rounded-xl bg-copper text-white text-xs font-black uppercase tracking-wider transition hover:bg-copper-dark"
                    >
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