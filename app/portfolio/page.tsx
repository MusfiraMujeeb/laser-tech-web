import Link from 'next/link';

// Updated to target the owner's verified WhatsApp business catalog showcase link
const whatsappCatalogUrl = 'https://wa.me/c/175613159698553';

const showcaseCards = [
  {
    title: 'Laser-Cut Wood Signs',
    badge: 'Popular Work',
    summary: 'Wood signage, layered decor pieces, and custom display items made for homes, shops, and events.',
    image: 'https://www.thegrain.co.uk/wp-content/uploads/2014/02/laser-cut-sign-the-grain-display-sign-simple-is-good.jpg',
    cta: 'View Live Catalog Items',
  },
  {
    title: 'Acrylic & Engraving',
    badge: 'Premium Finish',
    summary: 'Engraved acrylic boards, nameplates, and clean branding pieces with a polished studio finish.',
    image: '/acrylic-engraving.jpg', 
    cta: 'See Finished Pieces',
  },
  {
    title: 'Branding & Print Work',
    badge: 'Creative Projects',
    summary: 'Merchandise, stickers, display material, and print-ready branding work prepared for businesses.',
    image: '/branding-print.jpg', 
    cta: 'Explore Our Gallery',
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
            href={whatsappCatalogUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-black text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #31433c 0%, #2a3631 100%)' }}
          >
            Open Live Shop Updates →
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
            Digital Catalog Sync
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
                  href={whatsappCatalogUrl}
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

      {/* 3. HIGH-VISIBILITY WHATSAPP BUSINESS CATALOG PANEL */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-12">
        <div className="rounded-3xl border p-8 shadow-md text-center flex flex-col items-center gap-4" style={{ background: 'linear-gradient(180deg, var(--studio-card) 0%, #efe5d8 100%)', borderColor: 'var(--studio-border)' }}>
          <span className="text-4xl block animate-bounce">🛍️</span>
          <h2 className="text-2xl font-black tracking-tight" style={{ color: 'var(--studio-moss)' }}>Browse Our Complete Product Catalog</h2>
          <p className="text-sm max-w-md leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
            Want to explore pricing matrices and live design variations directly? Tap the official business store link below to browse options right inside WhatsApp.
          </p>
          
          <div className="mt-4 flex flex-wrap justify-center gap-4 w-full">
            <a 
              href={whatsappCatalogUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="rounded-xl px-6 py-3.5 text-sm font-black text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2"
              style={{ backgroundColor: '#25D366' }}
            >
              💬 Open WhatsApp Catalog Store
            </a>
            <Link 
              href="/quote" 
              className="rounded-xl border px-6 py-3.5 text-sm font-black transition-all hover:-translate-y-0.5 bg-white shadow-sm" 
              style={{ color: 'var(--studio-moss)', borderColor: 'var(--studio-border)' }}
            >
              Request Custom Quote Instead
            </Link>
          </div>
        </div>
      </section>
    </main>
  ); 
}