"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { productItems } from "../data/products";

type QuoteFormState = {
  name: string;
  phone: string;
  email: string;
  product: string;
  material: string;
  dimensions: string;
  description: string;
};

const initialState: QuoteFormState = {
  name: "",
  phone: "",
  email: "",
  product: "",
  material: "Wood / MDF",
  dimensions: "",
  description: "",
};

export default function QuoteClient() {
  const searchParams = useSearchParams();
  const selectedProductSlug = searchParams.get("product");

  const selectedProduct = useMemo(() => {
    if (!selectedProductSlug) return null;
    return productItems.find((item) => item.slug === selectedProductSlug) || null;
  }, [selectedProductSlug]);

  const [form, setForm] = useState<QuoteFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setForm((prev) => ({
        ...prev,
        product: selectedProduct.title,
        material: selectedProduct.material,
        description: selectedProduct.description,
      }));
    }
  }, [selectedProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.description.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    const phoneRegex = /^(?:\+94|0)?7[01245678]\d{7}$/;
    if (!phoneRegex.test(form.phone.trim())) {
      setError("Please enter a valid Sri Lankan mobile number.");
      return;
    }

    console.log("Quote submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8F6F2] px-4 py-16 flex items-center justify-center">
        <div className="max-w-md w-full bg-white border border-[#E4D7C4] rounded-3xl p-8 text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-black">
            ✓
          </div>
          <h1 className="text-2xl font-black mt-5">Request Sent</h1>
          <p className="text-sm text-[#66706C] mt-3 leading-relaxed">
            Thank you. We&apos;ll review your request and contact you soon.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/products"
              className="flex-1 px-4 py-3 rounded-xl bg-[#26322E] text-white text-xs font-black uppercase tracking-wider"
            >
              Back to Products
            </Link>
            <Link
              href="/"
              className="flex-1 px-4 py-3 rounded-xl bg-[#F3EDE3] text-[#26322E] border border-[#E4D7C4] text-xs font-black uppercase tracking-wider"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#26322E] px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <section className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7923B]">
            Request a Quote
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Let&apos;s Build Your Project
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-[#66706C] leading-relaxed">
            Send your details and we&apos;ll prepare a quote for your custom signage,
            gifts, trophies, or laser work.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white border border-[#E4D7C4] rounded-3xl p-6 md:p-8 shadow-sm">
            {selectedProduct && (
              <div className="mb-6 p-4 rounded-2xl bg-[#F8F6F2] border border-[#E4D7C4]">
                <p className="text-[10px] uppercase tracking-widest text-[#7C5A28] font-bold">
                  Selected Product
                </p>
                <p className="font-black mt-1">{selectedProduct.title}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#66706C]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-[#E4D7C4] bg-[#F8F6F2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#66706C]">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0771234567"
                    className="w-full px-4 py-3 rounded-xl border border-[#E4D7C4] bg-[#F8F6F2]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#66706C]">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#E4D7C4] bg-[#F8F6F2]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#66706C]">
                    Product / Service
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    placeholder="e.g. Business Signboard"
                    className="w-full px-4 py-3 rounded-xl border border-[#E4D7C4] bg-[#F8F6F2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#66706C]">
                    Material
                  </label>
                  <select
                    name="material"
                    value={form.material}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E4D7C4] bg-[#F8F6F2]"
                  >
                    <option>Wood / MDF</option>
                    <option>Acrylic (Perspex)</option>
                    <option>Paper / Card Stock</option>
                    <option>Metal</option>
                    <option>LED / Neon Acrylic</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#66706C]">
                  Dimensions / Size
                </label>
                <input
                  type="text"
                  name="dimensions"
                  value={form.dimensions}
                  onChange={handleChange}
                  placeholder="e.g. 2ft x 3ft"
                  className="w-full px-4 py-3 rounded-xl border border-[#E4D7C4] bg-[#F8F6F2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#66706C]">
                  Project Details *
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us what you need..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E4D7C4] bg-[#F8F6F2]"
                />
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="flex gap-3 flex-wrap pt-2">
                <button
                  type="submit"
                  className="px-6 py-4 rounded-xl bg-[#26322E] text-white text-xs font-black uppercase tracking-wider hover:bg-[#33423D] transition-colors"
                >
                  Submit Quote
                </button>

                <a
                  href="https://wa.me/94776632244"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 rounded-xl bg-[#C7923B] text-white text-xs font-black uppercase tracking-wider hover:bg-[#B9822D] transition-colors"
                >
                  WhatsApp Now
                </a>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border border-[#E4D7C4] rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-black">Why request a quote?</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#66706C] leading-relaxed list-disc pl-5">
                <li>Get pricing based on your actual size and material</li>
                <li>Confirm production details before we begin</li>
                <li>Get guidance on the best option for your project</li>
                <li>Use WhatsApp if you want a faster response</li>
              </ul>
            </div>

            <div className="bg-[#F3EDE3] border border-[#E4D7C4] rounded-3xl p-6">
              <h2 className="text-lg font-black">Need help choosing?</h2>
              <p className="mt-3 text-sm text-[#66706C] leading-relaxed">
                Browse the catalog first, pick a product, then come back here to request a quote.
              </p>
              <Link
                href="/products"
                className="inline-block mt-5 px-5 py-3 rounded-xl bg-[#26322E] text-white text-xs font-black uppercase tracking-wider"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}