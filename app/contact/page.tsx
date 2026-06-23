'use client';

import { useState } from 'react';
import { contactInfo } from '@/app/data/site';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const text = encodeURIComponent(
      `Hello Laser Tech, my name is ${name || 'Customer'}. My phone number is ${phone || 'N/A'}. ${message || 'I would like to know more about your services.'}`,
    );

    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#F8F6F2] text-[#26322E]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C08A3E]">Contact</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">Talk to Laser Tech</h1>
            <p className="text-lg leading-relaxed text-stone-600">
              Send your project idea, reference image, or required size and we will guide you to the correct machine and finish.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              ['Phone', contactInfo.phone],
              ['Email', contactInfo.email],
              ['WhatsApp', contactInfo.whatsapp],
              ['Address', contactInfo.address],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-[#F1ECE4] bg-white p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-stone-400">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid gap-6">
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#F1ECE4] bg-white p-6 sm:p-8 shadow-sm space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">Name</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-xl border border-[#F1ECE4] bg-[#F8F6F2] px-4 py-3 text-sm outline-none focus:border-[#C08A3E]"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">Phone</span>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full rounded-xl border border-[#F1ECE4] bg-[#F8F6F2] px-4 py-3 text-sm outline-none focus:border-[#C08A3E]"
                  placeholder="+94..."
                />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-400">Message</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={6}
                className="w-full rounded-2xl border border-[#F1ECE4] bg-[#F8F6F2] px-4 py-3 text-sm outline-none focus:border-[#C08A3E]"
                placeholder="Tell us what you need made..."
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-xl bg-[#26322E] px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-white hover:bg-[#33423D] transition-colors"
            >
              Send via WhatsApp
            </button>
          </form>

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-[2rem] border border-[#F1ECE4] bg-white p-6">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C08A3E]">Business Hours</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-600">
                {contactInfo.hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>

            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`}
              target="_blank"
              rel="noreferrer"
              className="rounded-[2rem] border border-[#F1ECE4] bg-[#26322E] p-6 text-white flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#E8D4A2]">Location</p>
                <p className="mt-4 text-2xl font-black">Mawanella Workshop</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{contactInfo.address}</p>
              </div>
              <span className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[#C08A3E]">Open map</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
