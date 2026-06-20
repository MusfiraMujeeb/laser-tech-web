'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function QuoteFormContent() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Laser Cutting',
    material: 'Wood / MDF',
    sizeOption: 'Standard A4 Layout (8.3 x 11.7 in)',
    customWidth: '',
    customHeight: '',
    description: '',
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [deliveryDistrict, setDeliveryDistrict] = useState('Store Pickup (Mawanella Workshop)');
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // State to hold the visualized blueprint image from the catalog
  const [visualBlueprint, setVisualBlueprint] = useState<string | null>(null);

  const WORKSHOP_WHATSAPP = "94757991141"; 

  const deliveryRates: Record<string, number> = {
    'Store Pickup (Mawanella Workshop)': 0,
    'Kegalle (Local District)': 350,
    'Colombo / Gampaha / Kalutara': 500,
    'Kandy / Matale / Nuwara Eliya': 450,
    'Other Provinces (Island-wide)': 650,
  };

  const currentShippingCost = deliveryRates[deliveryDistrict];

  // ✅ Read URL parameters to auto-fill text and match the visual catalog image
  useEffect(() => {
    const descParam = searchParams.get('desc');
    if (descParam) {
      // Decode the text string
      const decodedDesc = decodeURIComponent(descParam);
      
      // Determine configuration parameters dynamically based on the chosen concept string
      let matchedMaterial = 'Wood / MDF';
      let matchedService = 'Laser Cutting';
      let matchedImage = null;

      if (decodedDesc.includes('Concept A')) {
        matchedMaterial = 'Wood / MDF';
        matchedService = 'Laser Cutting';
        matchedImage = 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80'; // Swap with image_a3ab97 path
      } else if (decodedDesc.includes('Concept B')) {
        matchedMaterial = 'Wood / MDF';
        matchedService = 'Laser Engraving';
        matchedImage = 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80'; // Swap with image_a3ab43 path
      } else if (decodedDesc.includes('Concept C')) {
        matchedMaterial = 'Acrylic (Perspex)';
        matchedService = 'Laser Engraving';
        matchedImage = 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80'; // Swap with image_a3abbe path
      }

      setFormData(prev => ({
        ...prev,
        description: decodedDesc,
        material: matchedMaterial,
        service: matchedService
      }));
      
      if (matchedImage) {
        setVisualBlueprint(matchedImage);
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const maxLimit = 4.5 * 1024 * 1024;

    if (selectedFile.size > maxLimit) {
      setFile(null);
      const parsedSize = formData.sizeOption === 'Custom Dimensions (Specify Below)' 
        ? `${formData.customWidth}x${formData.customHeight} inches` 
        : formData.sizeOption;

      const textTemplate = encodeURIComponent(
        `Hello Laser Tech! I am requesting a quote for a custom project.\n\n` +
        `• Name: ${formData.name || 'Customer'}\n` +
        `• Track: ${formData.service}\n` +
        `• Material: ${formData.material}\n` +
        `• Size: ${parsedSize}\n` +
        `• Delivery: ${deliveryDistrict} (Est: Rs. ${currentShippingCost})\n` +
        `• Specifications: ${formData.description}\n\n` +
        `⚠️ NOTE: I am attaching my project file below manually using the WhatsApp attachment button (📎/+) right now!`
      );

      setWhatsappUrl(`https://wa.me/${WORKSHOP_WHATSAPP}?text=${textTemplate}`);
      setErrorMessage(`This design file is too heavy for the browser! Click the green button below to open WhatsApp, then use the (+) or (📎) button in WhatsApp to attach "${selectedFile.name}".`);
      e.target.value = ""; 
    } else {
      setErrorMessage('');
      setWhatsappUrl('');
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsappUrl) {
      alert("Please send your production file via the WhatsApp link button first!");
      return;
    }

    setSubmitting(true);
    const resolvedSize = formData.sizeOption === 'Custom Dimensions (Specify Below)'
      ? `Custom: ${formData.customWidth}x${formData.customHeight} inches`
      : formData.sizeOption;

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('phone', formData.phone);
      payload.append('email', formData.email);
      payload.append('service', formData.service);
      payload.append('material', formData.material);
      payload.append('dimensions', resolvedSize);
      payload.append('shippingDistrict', deliveryDistrict);
      payload.append('shippingCost', currentShippingCost.toString());
      payload.append('description', formData.description);
      if (file) payload.append('file', file);

      const response = await fetch('/quote/api', { method: 'POST', body: payload });
      if (response.ok) setSubmitted(true);
      else alert('Submission Failed');
    } catch (err) {
      console.error(err);
      alert('Network failure.');
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
            Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Laser Tech will contact you on <span className="font-mono font-bold text-slate-900">{formData.phone}</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: 'var(--studio-moss)' }}>Configure Project Blueprint</h1>
        </div>

        {/* Layout adjusts side-by-side if an AI model blueprint visualization matches */}
        <div className={`grid grid-cols-1 ${visualBlueprint ? 'lg:grid-cols-12' : ''} gap-8`}>
          
          {/* VISUAL BLUEPRINT INSIGHT CARD */}
          {visualBlueprint && (
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl shadow-lg border bg-white sticky top-28" style={{ borderColor: 'var(--studio-border)' }}>
                <span className="bg-amber-100 text-amber-800 font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md block w-fit mb-3">
                  ✨ AI Blueprint Match
                </span>
                <h4 className="font-black text-sm text-slate-800 mb-3">Estimated Production Style Preview</h4>
                <div className="rounded-2xl overflow-hidden border border-slate-100 h-64 bg-slate-50">
                  <img src={visualBlueprint} alt="AI Structural View" className="w-full h-full object-cover" />
                </div>
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                  * Visualized match loaded directly from the active Laser Tech production design catalog records.
                </p>
              </div>
            </div>
          )}

          {/* MAIN CORE INPUT FORM */}
          <div className={`${visualBlueprint ? 'lg:col-span-8' : 'max-w-3xl mx-auto w-full'}`}>
            <div className="p-8 md:p-12 rounded-3xl shadow-xl bg-white border" style={{ borderColor: 'var(--studio-border)' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <h3 className="text-lg font-black border-b pb-2 mb-4" style={{ color: 'var(--studio-moss)', borderColor: 'var(--studio-border)' }}>1. Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border text-sm bg-slate-50" placeholder="Enter name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">WhatsApp Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border text-sm font-mono bg-slate-50" placeholder="+94 7X XXX XXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border text-sm bg-slate-50" placeholder="yourname@example.com" />
                </div>

                <h3 className="text-lg font-black border-b pb-2 mt-10 mb-4" style={{ color: 'var(--studio-moss)', borderColor: 'var(--studio-border)' }}>2. Job Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Required Track</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 text-slate-800">
                      <option>Laser Cutting</option>
                      <option>Laser Engraving</option>
                      <option>Corporate Branding / Identity</option>
                      <option>Custom Merchandise Print</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Material Base</label>
                    <select name="material" value={formData.material} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 text-slate-800">
                      <option>Wood / MDF</option>
                      <option>Acrylic (Perspex)</option>
                      <option>Apparel Fabric / Leather</option>
                      <option>Paper / Card Stock</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Project Scope Wording *</label>
                  <textarea name="description" required rows={6} value={formData.description} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 text-slate-800 leading-relaxed" placeholder="Describe what you want us to create..." />
                </div>

                <h3 className="text-lg font-black border-b pb-2 mt-10 mb-4" style={{ color: 'var(--studio-moss)', borderColor: 'var(--studio-border)' }}>3. Fulfillment & Delivery</h3>
                <div className="space-y-4">
                  <select value={deliveryDistrict} onChange={(e) => setDeliveryDistrict(e.target.value)} className="w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 text-slate-800">
                    <option>Store Pickup (Mawanella Workshop)</option>
                    <option>Kegalle (Local District)</option>
                    <option>Colombo / Gampaha / Kalutara</option>
                  </select>
                  <div className="p-4 rounded-2xl border flex justify-between items-center bg-slate-50">
                    <span className="text-xs font-bold text-slate-700">Estimated Shipping Cost</span>
                    <span className="text-sm font-black text-slate-900">{currentShippingCost === 0 ? "FREE" : `Rs. ${currentShippingCost}.00`}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Upload Reference Workspace Design</label>
                  <div className="relative border-2 border-dashed rounded-2xl p-6 text-center bg-slate-50">
                    <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <span className="text-2xl block mb-1">📤</span>
                    <p className="text-xs font-bold text-slate-700">{file ? file.name : "Select reference blueprint asset"}</p>
                  </div>
                  {errorMessage && (
                    <div className="mt-4 p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-xs font-bold">
                      {errorMessage}
                      {whatsappUrl && (
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-2 block text-center text-white text-xs font-black py-2.5 rounded-lg bg-emerald-600">
                          💬 Send Heavy File via WhatsApp Now
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button type="submit" disabled={submitting || !!whatsappUrl} className="w-full text-white font-black text-sm py-4 rounded-xl shadow-lg bg-slate-800 disabled:opacity-50 cursor-pointer">
                    {submitting ? 'Processing...' : 'Submit Form Blueprint Metrics ⚡'}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Blueprint Engine...</div>}>
      <QuoteFormContent />
    </Suspense>
  );
}