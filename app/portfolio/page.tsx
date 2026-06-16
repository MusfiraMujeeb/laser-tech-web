import Link from 'next/link';

const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/';

const showcaseCards = [
  {
    title: 'Laser-Cut Wood Signs',
    badge: 'Popular Work',
    summary: 'Wood signage, layered decor pieces, and custom display items made for homes, shops, and events.',
    image: 'https://www.thegrain.co.uk/wp-content/uploads/2014/02/laser-cut-sign-the-grain-display-sign-simple-is-good.jpg',
    cta: 'View examples',
  },
  {
    title: 'Acrylic & Engraving',
    badge: 'Premium Finish',
    summary: 'Engraved acrylic boards, nameplates, and clean branding pieces with a polished studio finish.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    cta: 'See finished pieces',
  },
  {
    title: 'Branding & Print Work',
    badge: 'Creative Projects',
    summary: 'Merchandise, stickers, display material, and print-ready branding work prepared for businesses.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    cta: 'Explore our gallery',
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <section className="px-6 py-16 md:px-12" style={{ background: 'linear-gradient(135deg, var(--studio-hero) 0%, #fffaf6 45%, #efe5d7 100%)', borderBottom: '1px solid var(--studio-border)' }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em]" style={{ color: 'var(--studio-gold)' }}>Our Work</p>
            <h1 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: 'var(--studio-moss)' }}>
              Browse our finished work and recent project styles.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
              This section gives visitors a clear preview of the work we have completed, so they can see our craftsmanship even without Instagram.
            </p>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-black text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #31433c 0%, #2a3631 100%)' }}
          >
            Open Instagram Updates →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight" style={{ color: 'var(--studio-moss)' }}>Our Gallery Preview</h2>
            <p className="text-sm" style={{ color: 'var(--studio-muted)' }}>A simple portfolio-style section where visitors can view examples of our recent work and project types.</p>
          </div>
          <span className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.25em]" style={{ backgroundColor: 'var(--studio-card)', color: 'var(--studio-moss)', border: '1px solid var(--studio-border)' }}>
            Social + Portfolio Ready
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showcaseCards.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl border shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'linear-gradient(180deg, #fffaf6 0%, var(--studio-card) 100%)', borderColor: 'var(--studio-border)' }}
            >
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
                  <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: 'var(--studio-gold)' }}>Portfolio</span>
                </div>
                <h3 className="text-xl font-black" style={{ color: 'var(--studio-moss)' }}>{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>{item.summary}</p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-[0.25em] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: 'var(--studio-moss)' }}
                >
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-12">
        <div className="rounded-3xl border p-8 shadow-sm" style={{ background: 'linear-gradient(180deg, var(--studio-card) 0%, #efe5d8 100%)', borderColor: 'var(--studio-border)' }}>
          <h2 className="text-2xl font-black" style={{ color: 'var(--studio-moss)' }}>Why this page helps</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
            <li>• It gives customers a clearer idea of the work you have done so far.</li>
            <li>• It gives your site a more professional “portfolio” feel instead of only text.</li>
            <li>• It is easy to connect later to real Instagram posts, before-and-after shots, or customer projects.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quote" className="rounded-xl px-5 py-3 text-sm font-black text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg" style={{ backgroundColor: 'var(--studio-moss)' }}>
              Request a Similar Project
            </Link>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="rounded-xl border px-5 py-3 text-sm font-black transition-all hover:-translate-y-0.5" style={{ color: 'var(--studio-moss)', borderColor: 'var(--studio-border)', backgroundColor: 'var(--studio-surface-light)' }}>
              Open Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
