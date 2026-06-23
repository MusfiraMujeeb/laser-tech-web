import Link from 'next/link';
import { machineCapabilities, services } from '@/app/data/site';

export default function ServicesPage() {
  return (
    <div className="bg-[#F8F6F2] text-[#26322E]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Laser cutting, routing, marking, and custom production.</h1>
          <p className="text-lg leading-relaxed text-stone-600">
            We support businesses, organizations, and individual customers with production-ready services built around clean finishes, strong detail, and consistent quality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-[#F1ECE4] bg-white p-6 shadow-sm flex flex-col">
              <div className="space-y-3">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C08A3E]">{service.title}</p>
                <p className="text-sm leading-relaxed text-stone-600">{service.description}</p>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Machine capacity</p>
                  <p className="mt-1 text-sm font-semibold">{service.capacity}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Materials</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">{service.materials.join(', ')}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-stone-400">Applications</p>
                  <ul className="mt-2 grid gap-1 text-sm text-stone-600">
                    {service.applications.map((application) => (
                      <li key={application}>• {application}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={service.cta}
                className="mt-6 inline-flex justify-center rounded-xl bg-[#26322E] px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-white hover:bg-[#33423D] transition-colors"
              >
                Request This Service
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-[#F1ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid gap-8">
          <div className="space-y-3 max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Machine Overview</p>
            <h2 className="text-3xl font-black tracking-tight">The right machine for the right production job.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {machineCapabilities.map((machine) => (
              <div key={machine.label} className="rounded-3xl border border-[#F1ECE4] bg-[#F8F6F2] p-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#C08A3E]">{machine.label}</p>
                <p className="mt-3 text-lg font-black">{machine.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
