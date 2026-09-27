import Link from "next/link";
import Image from "next/image";
import { connectMongo } from "@/lib/mongodb";
import { Offer } from "@/models/Offer";
import { Product } from "@/models/Product";

export const dynamic = "force-dynamic";

async function getActiveOffers() {
  try {
    await connectMongo();
    const now = new Date();
    const offers = await Offer.find({
      active: true,
      endDate: { $gte: now },
      startDate: { $lte: now },
    })
      .sort({ createdAt: -1 })
      .lean();
    return offers;
  } catch {
    return [];
  }
}

async function getFeaturedProducts() {
  try {
    await connectMongo();
    const products = await Product.find({ available: true })
      .sort({ featured: -1, createdAt: -1 })
      .limit(8)
      .lean();
    return products;
  } catch {
    return [];
  }
}

const services = [
  {
    label: "Laser Cutting",
    description: "Precision cutting for acrylic, MDF, plywood, and wood.",
  },
  {
    label: "Laser Engraving",
    description: "Detailed engraving on wood, leather, acrylic, and gifts.",
  },
  {
    label: "CNC Routing",
    description: "Custom carving, shaping, and machining for large formats.",
  },
  {
    label: "Fiber Laser Marking",
    description: "Permanent marking on metals — logos, serials, QR codes.",
  },
  {
    label: "Signage",
    description: "Illuminated and non-illuminated signage for businesses.",
  },
  {
    label: "Custom Production",
    description: "Bespoke manufacturing for individuals, events, corporates.",
  },
];

export default async function Home() {
  const [activeOffers, featuredProducts] = await Promise.all([
    getActiveOffers(),
    getFeaturedProducts(),
  ]);

  const whatsappNumber = "94757991141";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Laser Tech, I'd like to know more about your services."
  )}`;

  const primaryOffer = activeOffers[0] as any;

  return (
    <div className="bg-ivory">
      {/* ============================================
          OFFER ANNOUNCEMENT
      ============================================ */}
      {primaryOffer && (
        <div className="border-b border-wood-border/60 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-3 text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse-dot" />
            <p className="text-xs sm:text-sm text-taupe tracking-wide">
              <span className="font-semibold text-walnut">
                {primaryOffer.type === "percentage" &&
                  `${primaryOffer.value}% off`}
                {primaryOffer.type === "fixed" &&
                  `LKR ${primaryOffer.value.toLocaleString()} off`}
                {primaryOffer.type === "free-delivery" && `Free delivery`}
              </span>
              {primaryOffer.code && (
                <>
                  {" — use code "}
                  <span className="font-mono font-semibold text-copper">
                    {primaryOffer.code}
                  </span>
                </>
              )}
              {" · "}
              <Link
                href="/products"
                className="underline underline-offset-4 decoration-copper/40 hover:decoration-copper text-walnut"
              >
                Shop now
              </Link>
            </p>
          </div>
        </div>
      )}

      {/* ============================================
          HERO — SHOWROOM BACKGROUND
      ============================================ */}
      <section className="relative min-h-[85vh] lg:min-h-screen w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/products/lasertech-showroom.png"
            alt="Laser Tech showroom in Mawanella"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Dark gradient — darker on left, subtle on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26, 16, 12, 0.90) 0%, rgba(26, 16, 12, 0.85) 25%, rgba(26, 16, 12, 0.80) 50%, rgba(26, 16, 12, 0.62) 75%, rgba(26, 16, 12, 0.55) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 min-h-[85vh] lg:min-h-screen max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-oak">
              Mawanella · Sri Lanka · Since 2019
            </p>

           <h1 className="font-heading text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] leading-[0.95] tracking-tight font-medium">
  <span className="text-[#9DA960]">The Art of</span>
  <br />
  <span className="italic text-oak">Engraving.</span>
</h1>

            <p className="text-base lg:text-lg text-sand/85 max-w-lg leading-relaxed pt-4">
              Laser cutting, engraving, CNC routing, and custom production for
              individuals, businesses, and industrial clients across Sri Lanka.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 bg-oak text-walnut px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-surface transition-colors"
              >
                Explore Products
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 border border-sand/40 text-surface px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-surface hover:text-walnut transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white hover:bg-whatsapp-dark transition-all hover:scale-105"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED PRODUCTS
      ============================================ */}
      {featuredProducts.length > 0 && (
        <section className="py-24 lg:py-32 bg-ivory">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <div className="space-y-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-copper">
                  Our Craft
                </p>
                <h2 className="font-heading text-5xl lg:text-6xl font-medium text-walnut leading-[1.05] tracking-tight">
                  Made by hand.
                  <br />
                  <span className="italic text-copper">Built to last.</span>
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-walnut hover:text-copper transition-colors shrink-0"
              >
                View All Products
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {featuredProducts.slice(0, 8).map((product: any) => (
                <Link
                  key={product._id.toString()}
                  href={`/products/${product.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-sand">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.discountPercent > 0 && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase bg-copper text-white">
                        {product.discountPercent}% Off
                      </span>
                    )}
                  </div>
                  <div className="mt-4 space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-oak font-bold">
                      {product.category}
                    </p>
                    <h3 className="font-heading text-lg font-medium text-walnut leading-tight group-hover:text-copper transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm font-bold text-copper">
                      {product.priceLkr > 0
                        ? `LKR ${product.priceLkr.toLocaleString()}`
                        : "Request a Quote"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          SERVICES
      ============================================ */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-5 mb-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-copper">
              What We Do
            </p>
            <h2 className="font-heading text-5xl lg:text-6xl font-medium text-walnut leading-[1.05] tracking-tight">
              Six disciplines.
              <br />
              One workshop.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {services.map((service, idx) => (
              <div key={service.label} className="space-y-3 border-t border-walnut/15 pt-6">
                <span className="font-heading text-xl text-copper">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-2xl font-medium text-walnut">
                  {service.label}
                </h3>
                <p className="text-sm text-taupe leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          THREE WAYS — DARK SECTION
      ============================================ */}
      <section className="py-24 lg:py-32 bg-walnut text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-5 mb-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-oak">
              How We Work
            </p>
            <h2 className="font-heading text-5xl lg:text-6xl font-medium text-surface leading-[1.05] tracking-tight">
              Three ways to{" "}
              <span className="italic text-oak">work with us.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              {
                num: "01",
                title: "Shop Ready-Made",
                desc: "Browse our collection of awards, keychains, notebooks, and gifts — ready to ship.",
                cta: "Browse Products",
                href: "/products",
              },
              {
                num: "02",
                title: "Custom Orders",
                desc: "Send us your design, text, or reference. We review every request before production.",
                cta: "Start a Custom Order",
                href: "/quote",
              },
              {
                num: "03",
                title: "Bulk & Corporate",
                desc: "Corporate gifts, event products, signage, and industrial work — priced by specification.",
                cta: "Request a Bulk Quote",
                href: "/quote",
              },
            ].map((card) => (
              <div key={card.num} className="border-t border-sand/25 pt-8 space-y-5">
                <span className="font-heading text-4xl text-oak">
                  {card.num}
                </span>
                <h3 className="font-heading text-3xl font-medium text-surface">
                  {card.title}
                </h3>
                <p className="text-base text-sand/70 leading-relaxed">
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-oak hover:text-copper transition pt-2"
                >
                  {card.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT
      ============================================ */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-sand">
            <Image
              src="/products/lasertech-workshop.png"
              alt="Laser Tech showroom interior"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-copper">
              About Laser Tech
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-medium text-walnut leading-[1.1] tracking-tight">
              A Sri Lankan workshop built on precision, care, and craft.
            </h2>
            <p className="text-base lg:text-lg text-taupe leading-relaxed">
              Founded in 2019 in Mawanella, Laser Tech has grown into a
              full-service precision manufacturing company serving individuals,
              businesses, and industrial clients across Sri Lanka.
            </p>
            <p className="text-base lg:text-lg text-taupe leading-relaxed">
              From personalized gifts to elegant signage, CNC routing, and
              fiber laser services — we combine modern technology with careful
              craftsmanship.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {["Precision", "Quality", "Innovation", "Reliability"].map(
                (value) => (
                  <span
                    key={value}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-sand border border-wood-border text-walnut tracking-wide"
                  >
                    {value}
                  </span>
                )
              )}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 border border-walnut text-walnut px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-walnut hover:text-surface transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
      ============================================ */}
      <section className="border-t border-wood-border/60 bg-sand">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-28 lg:py-36 text-center space-y-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-copper">
            Ready to begin?
          </p>
          <h2 className="font-heading text-5xl lg:text-6xl font-medium text-walnut leading-[1.05] tracking-tight">
            Have an idea?
            <span className="block italic text-copper">
              Let&rsquo;s make it real.
            </span>
          </h2>
          <p className="text-base lg:text-lg text-taupe max-w-xl mx-auto leading-relaxed">
            Every custom request is reviewed by our team before production.
            Send us your concept — we&rsquo;ll respond with a quotation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-3 bg-copper text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-copper-dark transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-walnut text-walnut px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-walnut hover:text-surface transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-xs text-taupe pt-6 tracking-wide">
            33/1 Kandy - Colombo Rd, Mawanella · +94 75 799 1141
          </p>
        </div>
      </section>
    </div>
  );
}