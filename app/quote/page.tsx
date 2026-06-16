'use client';

import { useState } from 'react';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Laser Cutting',
    material: 'Wood / MDF',
    dimensions: '',
    description: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('phone', formData.phone);
      payload.append('email', formData.email);
      payload.append('service', formData.service);
      payload.append('material', formData.material);
      payload.append('dimensions', formData.dimensions);
      payload.append('description', formData.description);
      if (file) {
        payload.append('file', file);
      }

      // Explicit transmission targeted to the nested API route
      const response = await fetch('/quote/api', {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Submission Failed: ${errorData.error || 'Server error.'}`);
      }
    } catch (err) {
      console.error('Form Transmission Error:', err);
      alert('Network failure. Please verify connection metrics.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
        <div className="p-8 md:p-12 rounded-3xl shadow-xl max-w-md w-full text-center" style={{ backgroundColor: 'var(--studio-card)', border: '1px solid var(--studio-border)' }}>
          <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
          <h2 className="text-2xl font-black mb-3" style={{ color: 'var(--studio-moss)' }}>Request Sent!</h2>
          <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--studio-muted)' }}>
            Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Laser Tech will analyze your vector graphic designs and contact you on <span className="font-mono font-bold text-slate-900">{formData.phone}</span> via WhatsApp with your quote estimation.
          </p>
          <button onClick={() => setSubmitted(false)} className="w-full text-white font-bold py-3.5 rounded-xl transition-all shadow-sm cursor-pointer" style={{ backgroundColor: 'var(--studio-moss)' }}>
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: 'var(--studio-moss)' }}>Request a Custom Build</h1>
          <p className="max-w-md mx-auto text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>Upload your vector design blueprints, define your project specs, and our workshop will process your production layout quote.</p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl shadow-xl" style={{ backgroundColor: 'var(--studio-card)', border: '1px solid var(--studio-border)' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-lg font-black border-b pb-2 mb-4" style={{ color: 'var(--studio-moss)', borderColor: 'var(--studio-border)' }}>1. Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }} placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>WhatsApp Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm font-mono" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }} placeholder="+94 7X XXX XXXX" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Email Address *</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }} placeholder="yourname@example.com" />
            </div>

            <h3 className="text-lg font-black border-b pb-2 mt-10 mb-4" style={{ color: 'var(--studio-moss)', borderColor: 'var(--studio-border)' }}>2. Job Profile Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Required Track</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}>
                  <option>Laser Cutting</option>
                  <option>Laser Engraving</option>
                  <option>Corporate Branding / Identity</option>
                  <option>Custom Merchandise Print</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Material Base</label>
                <select name="material" value={formData.material} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}>
                  <option>Wood / MDF</option>
                  <option>Acrylic (Perspex)</option>
                  <option>Apparel Fabric / Leather</option>
                  <option>Paper / Card Stock</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Target Dimensions (e.g., 12x18 inches)</label>
              <input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }} placeholder="Specify dimensional requirements" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Project Scope & Custom Wording *</label>
              <textarea name="description" required rows={4} value={formData.description} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm resize-none" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }} placeholder="Describe what you want us to create..." />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Upload Reference Image or Design Vector</label>
              <div className="relative border-2 border-dashed rounded-2xl p-8 text-center hover:bg-opacity-50 transition-all cursor-pointer" style={{ borderColor: 'var(--studio-border)', backgroundColor: 'var(--studio-bg)' }}>
                <input type="file" onChange={handleFileChange} accept=".svg,.dxf,.ai,.pdf,.png,.jpg,.jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="space-y-2">
                  <span className="text-3xl block">📤</span>
                  <p className="text-sm font-bold" style={{ color: 'var(--studio-moss)' }}>{file ? file.name : "Select or drag design artwork file"}</p>
                  <p className="text-xs" style={{ color: 'var(--studio-muted)' }}>Supports DXF, SVG, PDF, AI, PNG, or JPG up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" disabled={submitting} className="w-full text-white font-black text-base py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50" style={{ backgroundColor: 'var(--studio-moss)' }}>
                {submitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Submit Quote Metrics ⚡"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}