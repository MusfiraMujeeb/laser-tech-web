import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "Completed Projects", value: "300+" },
  { label: "Years Experience", value: "5+" },
  { label: "Custom Product Types", value: "30+" },
];

const highlights = [
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
          <span className="px-3 py-1 text-[10px] font-black uppercase bg-[#26322E] text-white rounded-md tracking-widest">
            Mawanella, Sri Lanka
          </span>

          <h1 className="text-5xl md:text-6xl font-black leading-[1.1]">
            Precision Laser & CNC <br />
            <span className="text-[#C7923B]">for Businesses & Gifts</span>
          </h1>

          <p className="text-[#66706C] text-lg leading-relaxed max-w-lg">
            From premium signage to personalized products, we build high-quality
            custom fabrication with industrial precision.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/products"
              className="px-8 py-4 rounded-xl bg-[#26322E] text-white font-black text-xs uppercase tracking-wider hover:bg-[#33423D]"
            >
              View Products
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-xl bg-[#C7923B] text-white font-black text-xs uppercase tracking-wider hover:bg-[#B9822D]"
            >
              View Completed Work
            </Link>
          </div>
        </div>

        <div className="bg-white border border-[#E4D7C4] rounded-3xl overflow-hidden shadow-sm">
          <div className="relative aspect-[16/10]">
            <Image
              src="/products/planet-fitness-board.jpg"
              alt="Laser Tech shop / completed signboard"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-black uppercase tracking-widest text-[#7C5A28]">
              Shop Preview
            </p>
            <h3 className="text-xl font-black mt-2">Laser Tech, Mawanella</h3>
            <p className="text-sm text-[#66706C] mt-2">
              Custom signage, trophies, gifts, and fabrication orders handled here.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {highlights.map((service) => (
            <div
              key={service}
              className="bg-white border border-[#E4D7C4] rounded-xl px-4 py-3 text-sm font-semibold"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-[#E4D7C4] rounded-2xl p-6">
            <p className="text-3xl font-black text-[#26322E]">{s.value}</p>
            <p className="text-sm text-[#66706C] mt-1">{s.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}