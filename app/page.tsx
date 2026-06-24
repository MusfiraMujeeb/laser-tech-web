import Link from "next/link";

const services = [
  "CNC Routing",
  "Laser Cutting",
  "Laser Engraving",
  "Fiber Marking",
  "Signage",
  "Custom Gifts",
];

export default function Home() {
  return (
    <div className="bg-[#F8F6F2] min-h-screen text-[#26322E]">
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 text-[10px] font-black uppercase bg-[#26322E] text-[#E8D4A2] rounded-md tracking-widest">
              Est. 2019
            </span>
            <span className="px-3 py-1 text-[10px] font-black uppercase bg-[#F3EDE3] text-[#7C5A28] rounded-md tracking-widest border border-[#E4D7C4]">
              Mawanella Pioneer
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] text-[#26322E]">
            Precision Manufacturing <br />
            <span className="text-[#C7923B]">For Enterprise.</span>
          </h1>

          <p className="text-[#66706C] text-lg leading-relaxed max-w-lg">
            High-capacity CNC routing, fiber laser marking, and premium bespoke design
            solutions. Built for industrial scale, finished with artisan care.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/products"
              className="px-8 py-4 rounded-xl bg-[#26322E] text-white font-black text-xs uppercase tracking-wider hover:bg-[#33423D] transition-colors"
            >
              View Products
            </Link>
            <Link
              href="/quote"
              className="px-8 py-4 rounded-xl bg-[#C7923B] text-white font-black text-xs uppercase tracking-wider hover:bg-[#B9822D] transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#E4D7C4] shadow-sm space-y-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-[#A79C95]">
            Facility Specs
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-stone-100 pb-4">
              <span className="font-bold">CNC Router:</span>
              <span className="font-mono font-bold text-[#26322E]">8ft x 4ft</span>
            </div>
            <div className="flex justify-between border-b border-stone-100 pb-4">
              <span className="font-bold">CO2 Laser:</span>
              <span className="font-mono font-bold text-[#26322E]">8ft x 4ft</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Fiber Marker:</span>
              <span className="font-mono font-bold text-[#26322E]">2ft x 2ft</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white border border-[#E4D7C4] rounded-xl px-4 py-3 text-sm font-semibold"
            >
              {service}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}