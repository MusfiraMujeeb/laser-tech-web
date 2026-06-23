'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-[#F8F6F2] min-h-screen text-[#26322E]">
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex gap-2">
            <span className="px-3 py-1 text-[10px] font-black uppercase bg-[#26322E] text-[#E8D4A2] rounded-md tracking-widest">Est. 2019</span>
            <span className="px-3 py-1 text-[10px] font-black uppercase bg-[#F3E8D6] text-[#7C5A28] rounded-md tracking-widest">Mawanella Pioneer</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] text-[#26322E]">
            Precision Manufacturing <br/>
            <span className="text-[#C08A3E]">For Enterprise.</span>
          </h1>
          <p className="text-[#26322E]/70 text-lg leading-relaxed max-w-lg">
            High-capacity CNC routing, fiber laser marking, and premium bespoke design solutions. Built for industrial scale, finished with artisan care.
          </p>
          <div className="flex gap-4">
            <Link href="/portfolio" className="px-8 py-4 bg-[#26322E] text-white font-black text-xs uppercase rounded-xl hover:bg-[#33423D]">Explore Work</Link>
            <Link href="/ai-booth" className="px-8 py-4 bg-[#C08A3E] text-white font-black text-xs uppercase rounded-xl hover:bg-[#B17C33]">Launch Studio</Link>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-[#F1ECE4] shadow-sm space-y-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-stone-400">⚙️ Facility Specs</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-stone-100 pb-4"><span className="font-bold">CNC Router:</span> <span className="font-mono font-bold text-[#26322E]">8ft x 4ft</span></div>
            <div className="flex justify-between border-b border-stone-100 pb-4"><span className="font-bold">CO2 Laser:</span> <span className="font-mono font-bold text-[#26322E]">8ft x 4ft</span></div>
            <div className="flex justify-between"><span className="font-bold">Fiber Marker:</span> <span className="font-mono font-bold text-[#26322E]">2ft x 2ft</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
