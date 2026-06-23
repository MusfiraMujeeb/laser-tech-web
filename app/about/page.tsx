import Link from 'next/link';
import { companyProfile, mission, timeline } from '@/app/data/site';

const principles = [
  'Precision craftsmanship on every project',
  'Reliable turnaround times and transparent communication',
  'Flexible production for one-off items and bulk runs',
  'Modern equipment paired with skilled finishing',
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8F6F2] text-[#26322E]">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24 space-y-10">
        <div className="space-y-4">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Company Profile</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">About Laser Tech</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-stone-600">{companyProfile.about}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <article className="lg:col-span-5 rounded-[2rem] border border-[#F1ECE4] bg-white p-8 shadow-sm">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">CEO's Statement</p>
            <h2 className="mt-3 text-2xl font-black">{companyProfile.ceoName}</h2>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.24em] text-stone-400">
              {companyProfile.ceoTitle}
            </p>
            <p className="mt-5 text-stone-600 leading-relaxed">
              {companyProfile.ceo}
            </p>
          </article>

          <article className="lg:col-span-7 rounded-[2rem] border border-[#F1ECE4] bg-[#26322E] p-8 text-white shadow-sm">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E8D4A2]">Why Laser Tech</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="font-semibold leading-relaxed">{principle}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white border-y border-[#F1ECE4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Company History</p>
            <h2 className="text-3xl font-black tracking-tight">Our journey from a local workshop to a multi-service manufacturer.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {timeline.map((item) => (
              <article key={item.year} className="rounded-3xl border border-[#F1ECE4] bg-[#F8F6F2] p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">{item.year}</p>
                <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-[#F1ECE4] bg-white p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Mission</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">{mission.mission}</p>
        </article>
        <article className="rounded-[2rem] border border-[#F1ECE4] bg-white p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Vision</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">{mission.vision}</p>
        </article>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 lg:pb-24">
        <div className="rounded-[2rem] border border-[#F1ECE4] bg-[#26322E] p-8 text-white flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E8D4A2]">Let's build something</p>
            <h2 className="text-3xl font-black tracking-tight">Need branding, awards, or industrial parts?</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/services" className="px-5 py-3 rounded-xl bg-white text-[#26322E] font-black text-xs uppercase tracking-[0.22em]">
              Services
            </Link>
            <Link href="/contact" className="px-5 py-3 rounded-xl bg-[#C08A3E] text-white font-black text-xs uppercase tracking-[0.22em]">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
