'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { portfolioProjects } from '@/app/data/site';

const filters = ['All', 'Signage', 'Industrial', 'Creative', 'CNC Routing'] as const;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-[#F8F6F2] text-[#26322E]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3 max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Portfolio / Work</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">Before-and-after style project highlights.</h1>
            <p className="text-lg leading-relaxed text-stone-600">
              A gallery of signage, industrial marking, creative keepsakes, and routed work that shows the kind of transformation Laser Tech delivers.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em] border transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#26322E] border-[#26322E] text-white'
                    : 'bg-white border-[#F1ECE4] text-stone-500 hover:text-[#26322E]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-[2rem] border border-[#F1ECE4] bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C08A3E]">{project.category}</span>
                <h2 className="text-xl font-black">{project.title}</h2>
                <p className="text-sm leading-relaxed text-stone-600">{project.summary}</p>

                <div className="grid gap-3 rounded-2xl bg-[#F8F6F2] p-4 text-sm">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">Before</p>
                    <p className="mt-1 text-stone-600">{project.before}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">After</p>
                    <p className="mt-1 text-stone-600">{project.after}</p>
                  </div>
                </div>

                <Link
                  href={`/quote?desc=${encodeURIComponent(`${project.title} | ${project.after}`)}`}
                  className="inline-flex justify-center rounded-xl bg-[#26322E] px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-white hover:bg-[#33423D] transition-colors"
                >
                  Ask for Similar Work
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
