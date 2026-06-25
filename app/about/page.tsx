export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#26322E] px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7923B]">
            About Laser Tech
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">Who We Are</h1>
          <p className="text-[#66706C] max-w-3xl leading-relaxed">
            Laser Tech is a custom fabrication and engraving studio in Mawanella, Sri Lanka,
            delivering signage, branding displays, awards, personalized gifts, and industrial marking solutions.
          </p>
        </section>

        <section className="bg-white border border-[#E4D7C4] rounded-3xl p-6 md:p-8">
          <h2 className="text-2xl font-black mb-5">Facility Specs</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-stone-100 pb-3">
              <span className="font-bold">CNC Router</span>
              <span className="font-mono font-bold">8ft x 4ft</span>
            </div>
            <div className="flex justify-between border-b border-stone-100 pb-3">
              <span className="font-bold">CO2 Laser</span>
              <span className="font-mono font-bold">8ft x 4ft</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Fiber Marker</span>
              <span className="font-mono font-bold">2ft x 2ft</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}