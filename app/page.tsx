import Link from "next/link";
import Image from "next/image";

const highlights = [
  { label: "Laser Cutting", icon: "✦" },
  { label: "Laser Engraving", icon: "✦" },
  { label: "CNC Routing", icon: "✦" },
  { label: "Fiber Laser Marking", icon: "✦" },
  { label: "Signage & Name Boards", icon: "✦" },
  { label: "Custom Gifts", icon: "✦" },
];

const journeyCards = [
  {
    title: "Shop Products",
    description:
      "Browse our ready-made collection of awards, keychains, notebooks, clocks, and personalized gifts.",
    cta: "Browse Products",
    href: "/products",
    accent: "copper",
  },
  {
    title: "Request Custom Work",
    description:
      "Send us your design, text, dimensions, and material preference. We review every custom request before production.",
    cta: "Start a Custom Order",
    href: "/quote",
    accent: "walnut",
  },
  {
    title: "Bulk & Corporate Orders",
    description:
      "Corporate gifts, event products, awards, signage, and industrial components — priced by quantity and specification.",
    cta: "Request a Bulk Quote",
    href: "/quote",
    accent: "oak",
  },
];

export default function Home() {
  const whatsappNumber = "94757991141";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Laser Tech, I'd like to know more about your services."
  )}`;

  return (
    <div className="bg-ivory min-h-screen">
      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <span className="inline-block px-3 py-1.5 text-[10px] font-black uppercase bg-walnut text-white rounded-md tracking-widest">
            Mawanella, Sri Lanka
          </span>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-walnut">
            The Art of Engraving,
            <span className="block italic text-copper">
              Uniquely Yours.
            </span>
          </h1>

          <p className="text-taupe text-lg leading-relaxed max-w-lg">
            Laser cutting, engraving, CNC routing, laser marking, fiber laser
            services, and custom production for individuals, businesses,
            organizations, and industrial clients across Sri Lanka.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/products" className="btn-primary">
              Shop Products
            </Link>
            <Link href="/quote" className="btn-secondary">
              Request a Quote
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Hero Image Card */}
        <div className="card-soft overflow-hidden">
          <div className="relative aspect-[16/11] bg-sand">
            <Image
              src="/products/planet-fitness-board.jpg"
              alt="Laser Tech custom illuminated signage"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <p className="text-[10px] font-black uppercase tracking-widest text-oak">
              Featured Work
            </p>
            <h3 className="font-heading text-2xl font-semibold text-walnut mt-2">
              Custom Signage &amp; Fabrication
            </h3>
            <p className="text-sm text-taupe mt-2 leading-relaxed">
              Illuminated signs, corporate boards, and custom fabrication
              produced at our Mawanella workshop.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES HIGHLIGHT STRIP
      ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {highlights.map((service) => (
            <div
              key={service.label}
              className="bg-surface border border-wood-border rounded-xl px-4 py-4 text-center transition hover:border-copper hover:-translate-y-0.5"
            >
              <span className="block text-copper text-lg mb-1">
                {service.icon}
              </span>
              <span className="text-xs font-bold text-walnut leading-tight">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================
          CUSTOMER JOURNEY CARDS
      ============================================ */}
      <section className="bg-sand py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-copper">
              How We Work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-walnut">
              Three ways to work with us
            </h2>
            <p className="text-taupe max-w-2xl mx-auto">
              Whether you need a ready-made product, a one-off custom piece, or
              a bulk production run — we have a workflow for it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeyCards.map((card) => (
              <div
                key={card.title}
                className="card-soft p-7 flex flex-col"
              >
                <div
                  className={`w-12 h-1 rounded-full mb-5 ${
                    card.accent === "copper"
                      ? "bg-copper"
                      : card.accent === "walnut"
                      ? "bg-walnut"
                      : "bg-oak"
                  }`}
                />
                <h3 className="font-heading text-2xl font-semibold text-walnut mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-taupe leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-copper hover:text-copper-dark transition"
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
          ABOUT LASER TECH
      ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-black uppercase tracking-widest text-copper">
              About Laser Tech
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-walnut leading-tight">
              A Sri Lankan workshop built on precision, care, and craft.
            </h2>
            <p className="text-taupe leading-relaxed">
              Founded in 2019 in Mawanella, Laser Tech has grown into a
              full-service precision manufacturing company serving individuals,
              businesses, organizations, and industrial clients across Sri
              Lanka.
            </p>
            <p className="text-taupe leading-relaxed">
              From personalized gifts and elegant signage to CNC routing, laser
              marking, fiber laser services, and industrial components — we
              combine modern technology with careful craftsmanship.
            </p>

            <div className="flex flex-wrap gap-2 pt-3">
              {[
                "Precision",
                "Quality",
                "Innovation",
                "Reliability",
                "Customer Satisfaction",
              ].map((value) => (
                <span
                  key={value}
                  className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-ivory border border-wood-border text-walnut"
                >
                  {value}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-wood-border shadow-soft bg-sand">
            <Image
              src="/products/planet-fitness-board.jpg"
              alt="Laser Tech workshop in Mawanella"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
      ============================================ */}
      <section className="bg-walnut text-ivory py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-oak">
            Ready to Begin?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-surface leading-tight">
            Have an idea?
            <span className="block italic text-oak">
              Let&rsquo;s make it tangible.
            </span>
          </h2>
          <p className="text-sand/80 max-w-2xl mx-auto leading-relaxed">
            Every custom request is reviewed by our team before production.
            Send us your concept and we&rsquo;ll respond with a quotation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/quote" className="btn-primary">
              Request a Quote
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-xs text-sand/60 pt-4">
            33/1 Kandy - Colombo Rd, Mawanella, Sri Lanka &nbsp;•&nbsp;
            +94 75 799 1141
          </p>
        </div>
      </section>
    </div>
  );
}