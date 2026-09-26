import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connectMongo } from "@/lib/mongodb";
import { Product, IProduct } from "@/models/Product";

function discountedPrice(price: number, discount: number) {
  if (!discount) return price;
  return Math.round(price - (price * discount) / 100);
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await connectMongo();
  const product = (await Product.findOne({ slug }).lean()) as IProduct | null;

  if (!product) notFound();

  const relatedProducts = (await Product.find({
    category: product.category,
    slug: { $ne: product.slug },
  })
    .limit(3)
    .lean()) as unknown as IProduct[];

  const sale = discountedPrice(product.priceLkr, product.discountPercent);
  const hasPrice = product.priceLkr > 0;

  const whatsappNumber = "94757991141";
  const whatsappMessage = encodeURIComponent(
    `Hi Laser Tech, I'm interested in: ${product.title}`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-ivory text-charcoal px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-taupe hover:text-copper transition"
        >
          ← Back to catalog
        </Link>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-square bg-sand rounded-3xl border border-wood-border overflow-hidden shadow-soft">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
            {product.featured && (
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded-md text-[10px] font-black uppercase bg-walnut text-white">
                Featured
              </span>
            )}
            {product.discountPercent > 0 && (
              <span className="absolute top-4 right-4 px-3 py-1.5 rounded-md text-[10px] font-black uppercase bg-copper text-white">
                {product.discountPercent}% Off
              </span>
            )}
          </div>

          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-oak">
              {product.category} / {product.subcategory}
            </p>

            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-walnut leading-tight">
              {product.title}
            </h1>

            <p className="text-base leading-relaxed text-taupe">
              {product.description}
            </p>

            <div className="bg-surface border border-wood-border rounded-2xl p-5 space-y-3">
              <p className="text-sm">
                <span className="font-bold text-walnut">Material:</span>{" "}
                <span className="text-taupe">{product.material}</span>
              </p>
              <p className="text-sm">
                <span className="font-bold text-walnut">Price:</span>{" "}
                {hasPrice ? (
                  product.discountPercent > 0 ? (
                    <>
                      <span className="font-bold text-copper text-base">
                        LKR {sale.toLocaleString()}
                      </span>{" "}
                      <span className="line-through text-taupe text-xs ml-2">
                        LKR {product.priceLkr.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="font-bold text-copper text-base">
                      LKR {product.priceLkr.toLocaleString()}
                    </span>
                  )
                ) : (
                  <span className="font-bold text-copper text-base">
                    Request a Quote
                  </span>
                )}
              </p>
              <p className="text-sm">
                <span className="font-bold text-walnut">Availability:</span>{" "}
                <span
                  className={
                    product.available
                      ? "text-whatsapp-dark font-bold"
                      : "text-error font-bold"
                  }
                >
                  {product.available ? "Available" : "Unavailable"}
                </span>
              </p>
              <p className="text-sm">
                <span className="font-bold text-walnut">Type:</span>{" "}
                <span className="text-taupe">
                  {product.type === "ready" ? "Ready to Ship" : "Made to Order"}
                </span>
              </p>
            </div>

            <div className="flex gap-4 flex-wrap pt-3">
              <Link
                href={`/quote?product=${product.slug}`}
                className="btn-primary"
              >
                Request Quote
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp Us
              </a>
            </div>

            <p className="text-xs text-taupe pt-2">
              Every custom request is reviewed by our team before production.
            </p>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-wood-border">
            <h2 className="font-heading text-3xl font-semibold text-walnut">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedProducts.map((item) => {
                const itemSale = discountedPrice(
                  item.priceLkr,
                  item.discountPercent
                );
                return (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="card-soft p-4 block"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-sand">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-walnut leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-taupe mt-1">
                      {item.subcategory}
                    </p>
                    <p className="text-sm font-bold text-copper mt-2">
                      {item.priceLkr > 0
                        ? `LKR ${itemSale.toLocaleString()}`
                        : "Request a Quote"}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}