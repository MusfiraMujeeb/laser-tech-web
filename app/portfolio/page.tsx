import Link from 'next/link';

// Main business fallback link
const whatsappMainUrl = 'https://wa.me/94757991141';

const showcaseCards = [
  {
    title: 'Laser-Cut Wood Signs & Decor',
    badge: 'Popular Work',
    summary: 'Custom wood signage, layered home decor, wall art, and custom display items crafted with clean studio artistry.',
    image: 'https://www.thegrain.co.uk/wp-content/uploads/2014/02/laser-cut-sign-the-grain-display-sign-simple-is-good.jpg',
    // ✅ Maps directly to your live wood craft product link
    productUrl: 'https://wa.me/p/30556117950703282/175613159698553', 
    cta: 'View Wood Crafts in Catalog',
  },
  {
    title: 'Acrylic Fabrication & Engraving',
    badge: 'Premium Finish',
    summary: 'Polished acrylic boards, transparent corporate nameplates, desktop plaques, and high-visibility business displays.',
    image: '/acrylic-engraving.jpg', 
    // ✅ Maps directly to your live acrylic product link
    productUrl: 'https://wa.me/p/24974557465502010/175613159698553', 
    cta: 'View Acrylic Work in Catalog',
  },
  {
    title: 'Corporate Identity & Print Packages',
    badge: 'Creative Projects',
    summary: 'Premium custom printed T-shirts, branded employee identity cards, high-quality flyers, and advertising layouts.',
    image: '/branding-print.jpg', 
    // ✅ Maps directly to your live printing identity product link
    productUrl: 'https://wa.me/p/8776536555706403/175613159698553', 
    cta: 'Explore Print Catalog Items',
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--studio-bg)' }}>
      
      {/* 1. HERO HEADER SECTION */}
      <section className="px-6 py-16 md:px-12" style={{ background: 'linear-gradient(135deg, var(--studio-hero) 0%, #fffaf6 45%, #efe5d7 100%)', borderBottom: '1px solid var(--studio-border)' }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em]" style={{ color: 'var(--studio-gold)' }}>Our Work</p>
            <h1 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: 'var(--studio-moss)' }}>
              Browse our finished work and recent project styles.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
              This section gives visitors a clear preview of the work we have completed, linked directly with our real-time stock availability.
            </p>
          </div>

          <a
            href={whatsappMainUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-black text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #31433c 0%, #2a3631 100%)' }}
          >
            Chat with Workshop Manager →
          </a>
        </div>
      </section>

      {/* 2. DYNAMIC PORTFOLIO GALLERY GRID */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight" style={{ color: 'var(--studio-moss)' }}>Our Gallery Preview</h2>
            <p className="text-sm" style={{ color: 'var(--studio-muted)' }}>A custom portfolio-style section where visitors can view examples of our recent work and project types.</p>
          </div>
          <span className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.25em]" style={{ backgroundColor: 'var(--studio-card)', color: 'var(--studio-moss)', border: '1px solid var(--studio-border)' }}>
            Direct Product Links Ready
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showcaseCards.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl border shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              style={{ background: 'linear-gradient(180deg, #fffaf6 0%, var(--studio-card) 100%)', borderColor: 'var(--studio-border)' }}
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]" style={{ backgroundColor: 'var(--studio-bg)', color: 'var(--studio-moss)', border: '1px solid var(--studio-border)' }}>
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: 'var(--studio-gold)' }}>Showcase</span>
                  </div>
                  <h3 className="text-xl font-black" style={{ color: 'var(--studio-moss)' }}>{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>{item.summary}</p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <a
                  href={item.productUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-[0.25em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: 'var(--studio-moss)' }}
                >
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. HIGH-VISIBILITY CATALOG HIGHLIGHT PANEL */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-12">
        <div className="rounded-3xl border p-8 shadow-md text-center flex flex-col items-center gap-4" style={{ background: 'linear-gradient(180deg, var(--studio-card) 0%, #efe5d8 100%)', borderColor: 'var(--studio-border)' }}>
          <span className="text-4xl block animate-bounce">🛍️</span>
          <h2 className="text-2xl font-black tracking-tight" style={{ color: 'var(--studio-moss)' }}>Explore Featured Items Live</h2>
          <p className="text-sm max-w-md leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
            Each catalog item above features high-resolution details and standard material configuration options handled right inside WhatsApp.
          </p>
          
          <div className="mt-4 flex flex-wrap justify-center gap-4 w-full">
            {/* Additional item link 4 from your set */}
            <a 
              href="https://wa.me/p/26251056467842114/175613159698553" 
              target="_blank" 
              rel="noreferrer" 
              className="rounded-xl px-6 py-3.5 text-sm font-black text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: '#25D366' }}
            >
              💬 View More Custom Layout Options
            </a>
            <Link 
              href="/quote" 
              className="rounded-xl border px-6 py-3.5 text-sm font-black transition-all hover:-translate-y-0.5 bg-white shadow-sm" 
              style={{ color: 'var(--studio-moss)', borderColor: 'var(--studio-border)' }}
            >
              Request Custom Build Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  ); 
}