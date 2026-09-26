"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

// ==========================================
// FORM OPTIONS
// ==========================================

const serviceTypes = [
  "Laser Cutting",
  "Laser Engraving",
  "CNC Routing & Machining",
  "Laser Marking",
  "Fiber Laser Services",
  "Custom Signage",
  "Awards & Trophies",
  "Personalized Gifts",
  "Wedding & Event Products",
  "Bulk / Corporate Order",
  "Other",
];

const materials = [
  "Wood (Mahogany)",
  "Wood (Teak)",
  "MDF / Plywood",
  "Acrylic",
  "Metal (Stainless Steel)",
  "Metal (Aluminum)",
  "Leather",
  "Multiple Materials",
  "Not Sure — Please Advise",
];

const deliveryOptions = [
  "Pickup from Mawanella",
  "Delivery within Sri Lanka",
  "Courier (I will arrange)",
  "Not sure yet",
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [inquiryId, setInquiryId] = useState("");

  const [formData, setFormData] = useState({
    serviceType: "",
    material: "",
    dimensions: "",
    quantity: "1",
    inscription: "",
    instructions: "",
    delivery: "",
    requiredDate: "",
    name: "",
    phone: "",
    email: "",
  });

  const [referenceFile, setReferenceFile] = useState<File | null>(null);

  // ==========================================
  // HANDLERS
  // ==========================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReferenceFile(e.target.files[0]);
    }
  };

  const generateInquiryId = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `LT-${year}-${random}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.serviceType) return setError("Please select a service type.");
    if (!formData.name.trim()) return setError("Please enter your name.");
    if (!formData.phone.trim())
      return setError("Please enter your phone or WhatsApp number.");
    if (!formData.email.trim()) return setError("Please enter your email.");

    setIsSubmitting(true);

    // Simulate submission delay (will become real API call later)
    await new Promise((resolve) => setTimeout(resolve, 800));

    const newInquiryId = generateInquiryId();
    setInquiryId(newInquiryId);

    // Store in localStorage as prototype (will move to database later)
    const inquiry = {
      id: newInquiryId,
      ...formData,
      fileName: referenceFile?.name || null,
      createdAt: new Date().toISOString(),
      status: "New",
    };

    try {
      const existing = JSON.parse(
        localStorage.getItem("laserTechInquiries") || "[]"
      );
      existing.push(inquiry);
      localStorage.setItem("laserTechInquiries", JSON.stringify(existing));
    } catch {
      // localStorage may be unavailable — proceed anyway
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `*New Inquiry — ${inquiryId}*`,
      ``,
      `*Service:* ${formData.serviceType}`,
      formData.material && `*Material:* ${formData.material}`,
      formData.dimensions && `*Dimensions:* ${formData.dimensions}`,
      `*Quantity:* ${formData.quantity}`,
      formData.inscription && `*Text/Inscription:* ${formData.inscription}`,
      formData.delivery && `*Delivery:* ${formData.delivery}`,
      formData.requiredDate && `*Required By:* ${formData.requiredDate}`,
      formData.instructions && `*Notes:* ${formData.instructions}`,
      referenceFile && `*Reference File:* ${referenceFile.name}`,
      ``,
      `*Contact:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
    ].filter(Boolean);

    return encodeURIComponent(lines.join("\n"));
  };

  const whatsappLink = `https://wa.me/94757991141?text=${buildWhatsAppMessage()}`;

  // ==========================================
  // SUCCESS STATE
  // ==========================================

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-ivory px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="card-soft p-8 md:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mx-auto">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#198754"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-walnut">
              Thank you, {formData.name.split(" ")[0]}.
            </h1>

            <p className="text-taupe leading-relaxed max-w-md mx-auto">
              Your inquiry has been received and saved with reference number:
            </p>

            <p className="font-mono text-lg font-bold text-copper tracking-wider">
              {inquiryId}
            </p>

            <div className="bg-sand rounded-2xl p-5 text-left space-y-3">
              <p className="text-sm font-bold text-walnut uppercase tracking-wider">
                What happens next
              </p>
              <p className="text-sm text-taupe leading-relaxed">
                Our team reviews every custom request before production. For
                the fastest response, send us the same details on WhatsApp
                and attach any reference files.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                Continue on WhatsApp
              </a>
              <Link href="/products" className="btn-secondary">
                Browse Products
              </Link>
            </div>

            <p className="text-xs text-taupe pt-4">
              You can also track this inquiry using your reference number and
              phone number once our tracking system is live.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // FORM STATE
  // ==========================================

  return (
    <div className="min-h-screen bg-ivory">
      {/* ============================================
          PAGE HEADER
      ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-copper">
            Custom Orders
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-walnut leading-tight">
            Tell us what you&rsquo;d like to create.
          </h1>
          <p className="text-taupe text-lg leading-relaxed">
            Send us your design, text, dimensions, or reference image. Our
            team reviews every custom request before production and will
            respond with a quotation.
          </p>
        </div>
      </section>

      {/* ============================================
          FORM + SIDEBAR
      ============================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="card-soft p-6 md:p-10 space-y-8"
            >
              {/* Project Details */}
              <div className="space-y-5">
                <h2 className="font-heading text-2xl font-semibold text-walnut border-b border-wood-border pb-3">
                  Project Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                      Service Type <span className="text-error">*</span>
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
                    >
                      <option value="">Select a service…</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                      Material Preference
                    </label>
                    <select
                      name="material"
                      value={formData.material}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
                    >
                      <option value="">Select material…</option>
                      {materials.map((mat) => (
                        <option key={mat} value={mat}>
                          {mat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                      Size / Dimensions
                    </label>
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleChange}
                      placeholder="e.g. 30cm × 20cm, A4, 12 inches"
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal placeholder:text-taupe/60 focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                      Quantity <span className="text-error">*</span>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                    Text / Inscription
                  </label>
                  <textarea
                    name="inscription"
                    value={formData.inscription}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g. Names, dates, quotes, logos to be engraved"
                    className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal placeholder:text-taupe/60 focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                    Reference File / Design
                  </label>
                  <div className="border-2 border-dashed border-wood-border rounded-lg p-5 text-center bg-sand/40 hover:border-copper transition">
                    <input
                      type="file"
                      id="referenceFile"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".png,.jpg,.jpeg,.svg,.pdf,.ai,.eps,.dxf,.zip"
                    />
                    <label
                      htmlFor="referenceFile"
                      className="cursor-pointer block"
                    >
                      {referenceFile ? (
                        <p className="text-sm font-bold text-copper">
                          📎 {referenceFile.name}
                        </p>
                      ) : (
                        <>
                          <p className="text-sm font-bold text-walnut">
                            Click to upload a file
                          </p>
                          <p className="text-xs text-taupe mt-1">
                            PNG, JPG, SVG, PDF, AI, EPS, DXF, ZIP — max 20MB
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                  <p className="text-xs text-taupe">
                    You can also send this file to us on WhatsApp after
                    submitting.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                    Special Instructions
                  </label>
                  <textarea
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requirements, colors, finishes, or deadlines?"
                    className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal placeholder:text-taupe/60 focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition resize-none"
                  />
                </div>
              </div>

              {/* Delivery */}
              <div className="space-y-5">
                <h2 className="font-heading text-2xl font-semibold text-walnut border-b border-wood-border pb-3">
                  Delivery
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                      Delivery Preference
                    </label>
                    <select
                      name="delivery"
                      value={formData.delivery}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
                    >
                      <option value="">Select delivery…</option>
                      {deliveryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                      Required By
                    </label>
                    <input
                      type="date"
                      name="requiredDate"
                      value={formData.requiredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-5">
                <h2 className="font-heading text-2xl font-semibold text-walnut border-b border-wood-border pb-3">
                  Your Contact Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal placeholder:text-taupe/60 focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                      Phone / WhatsApp <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+94 7X XXX XXXX"
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal placeholder:text-taupe/60 focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-surface text-charcoal placeholder:text-taupe/60 focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-error-bg border border-error/30 rounded-lg p-4 text-sm text-error font-semibold">
                  ⚠ {error}
                </div>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto"
                >
                  {isSubmitting ? "Submitting…" : "Submit Inquiry"}
                </button>
                <p className="text-xs text-taupe mt-3">
                  <span className="text-error">*</span> Required fields. Every
                  custom request is reviewed by our team before production.
                </p>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* How It Works */}
            <div className="card-soft p-6 space-y-4">
              <h3 className="font-heading text-xl font-semibold text-walnut">
                How It Works
              </h3>
              <ol className="space-y-4 text-sm">
                {[
                  "Submit your request",
                  "We review the details",
                  "You receive a quotation",
                  "Approve and we produce",
                  "Pickup or delivery",
                ].map((step, idx) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-copper text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-taupe pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Contact Card */}
            <div className="card-soft p-6 space-y-4">
              <h3 className="font-heading text-xl font-semibold text-walnut">
                Prefer to Talk?
              </h3>
              <p className="text-sm text-taupe leading-relaxed">
                Reach us directly — we&rsquo;re happy to discuss your project.
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href="tel:+94757991141"
                  className="flex items-center gap-3 text-walnut hover:text-copper transition"
                >
                  <span className="text-copper">📞</span>
                  <span>+94 75 799 1141</span>
                </a>
                <a
                  href="mailto:lasertech0024@gmail.com"
                  className="flex items-center gap-3 text-walnut hover:text-copper transition"
                >
                  <span className="text-copper">✉</span>
                  <span>lasertech0024@gmail.com</span>
                </a>
                <p className="flex items-start gap-3 text-walnut">
                  <span className="text-copper">📍</span>
                  <span>
                    33/1 Kandy - Colombo Rd,
                    <br />
                    Mawanella, Sri Lanka
                  </span>
                </p>
              </div>

              <a
  href={`https://wa.me/94757991141?text=${encodeURIComponent(
    "Hi Laser Tech, I'd like to know more about your services."
  )}`}
  target="_blank"
  rel="noreferrer"
  className="btn-whatsapp w-full"
>
  Chat on WhatsApp
</a>
            </div>

            {/* Trust Note */}
            <div className="bg-sand rounded-2xl p-6 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-copper">
                Our Promise
              </p>
              <p className="text-sm text-walnut leading-relaxed">
                Every custom request is reviewed manually by our team. No
                automated CAD — we personally ensure your design is correct
                before production begins.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}