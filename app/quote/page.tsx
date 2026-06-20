'use client';

import { useState } from 'react';

export default function QuotePage() {
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
  const [whatsappUrl, setWhatsappUrl] = useState(''); // Tracks the template link
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ Verfied: Live registered workshop mobile route
  const WORKSHOP_WHATSAPP = "94757991141"; 

  // Shipping rate matrix configuration
  const deliveryRates: Record<string, number> = {
    'Store Pickup (Mawanella Workshop)': 0,
    'Kegalle (Local District)': 350,
    'Colombo / Gampaha / Kalutara': 500,
    'Kandy / Matale / Nuwara Eliya': 450,
    'Other Provinces (Island-wide)': 650,
  };

  const currentShippingCost = deliveryRates[deliveryDistrict];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const maxLimit = 4.5 * 1024 * 1024; // 4.5 Megabytes restriction limit

    if (selectedFile.size > maxLimit) {
      setFile(null);
      
      const parsedSize = formData.sizeOption === 'Custom Dimensions (Specify Below)' 
        ? `${formData.customWidth}x${formData.customHeight} inches` 
        : formData.sizeOption;

      // 📝 Instructive message detailing the manual attachment rule
      const textTemplate = encodeURIComponent(
        `Hello Laser Tech! I am requesting a quote for a custom project.\n\n` +
        `• Name: ${formData.name || 'Customer'}\n` +
        `• Track: ${formData.service}\n` +
        `• Material: ${formData.material}\n` +
        `• Size: ${parsedSize}\n` +
        `• Delivery: ${deliveryDistrict} (Est: Rs. ${currentShippingCost})\n` +
        `• File Name: ${selectedFile.name}\n\n` +
        `⚠️ NOTE: I am attaching my project file below manually using the WhatsApp attachment button (📎/+) right now!`
      );

      // Save the generated URL link to state and prompt the user to click the button explicitly
      setWhatsappUrl(`https://wa.me/${WORKSHOP_WHATSAPP}?text=${textTemplate}`);
      setErrorMessage(`This design file is too heavy for the browser! Click the green button below to open WhatsApp, then use the (+) or (📎) button in WhatsApp to attach "${selectedFile.name}".`);
      
      e.target.value = ""; // Clear file selector input element value
    } else {
      setErrorMessage('');
      setWhatsappUrl('');
      setFile(selectedFile); // Verified path asset small size
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Block standard network transmission if a large file flow is currently ongoing
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
      if (file) {
        payload.append('file', file);
      }

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
            Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Laser Tech will analyze your project specs and contact you on <span className="font-mono font-bold text-slate-900">{formData.phone}</span> via WhatsApp with your detailed operational quote.
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
          <p className="max-w-md mx-auto text-sm leading-relaxed" style={{ color: 'var(--studio-muted)' }}>Define your layout metrics, check real-time delivery estimations, and upload your design workspace layout blueprints.</p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl shadow-xl" style={{ backgroundColor: 'var(--studio-card)', border: '1px solid var(--studio-border)' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* SECTION 1: CONTACT DETAILS */}
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

            {/* SECTION 2: JOB PROFILE SPECIFICATIONS */}
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

            {/* DYNAMIC DROP-DOWN SMART SIZE SELECTOR */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Project Dimensions *</label>
              <select name="sizeOption" value={formData.sizeOption} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none mb-3" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}>
                <option>Standard A4 Layout (8.3 x 11.7 in)</option>
                <option>Standard A3 Layout (11.7 x 16.5 in)</option>
                <option>Square Board Small (12 x 12 in)</option>
                <option>Square Board Large (24 x 24 in)</option>
                <option>Custom Dimensions (Specify Below)</option>
              </select>

              {formData.sizeOption === 'Custom Dimensions (Specify Below)' && (
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl border border-dashed transition-all" style={{ borderColor: 'var(--studio-border)', backgroundColor: 'var(--studio-bg)' }}>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--studio-muted)' }}>Width (inches)</label>
                    <input type="number" name="customWidth" value={formData.customWidth} onChange={handleChange} placeholder="e.g. 15" className="w-full px-3 py-2 rounded-lg border text-sm bg-white" style={{ borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--studio-muted)' }}>Height (inches)</label>
                    <input type="number" name="customHeight" value={formData.customHeight} onChange={handleChange} placeholder="e.g. 20" className="w-full px-3 py-2 rounded-lg border text-sm bg-white" style={{ borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }} />
                  </div>
                </div>
              )}
              <p className="text-[11px] mt-1.5" style={{ color: 'var(--studio-muted)' }}>
                💡 Tip: Standard A4 is normal document paper size. A3 is double the footprint area of an A4 sheet.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Project Scope & Custom Wording *</label>
              <textarea name="description" required rows={4} value={formData.description} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border focus:outline-none text-sm resize-none" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }} placeholder="Describe what you want us to create..." />
            </div>

            {/* SECTION 3: FULFILLMENT & DELIVERY CHARGE SELECTOR */}
            <h3 className="text-lg font-black border-b pb-2 mt-10 mb-4" style={{ color: 'var(--studio-moss)', borderColor: 'var(--studio-border)' }}>3. Fulfillment & Delivery</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Select Delivery Destination</label>
                <select value={deliveryDistrict} onChange={(e) => setDeliveryDistrict(e.target.value)} className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none" style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}>
                  <option>Store Pickup (Mawanella Workshop)</option>
                  <option>Kegalle (Local District)</option>
                  <option>Colombo / Gampaha / Kalutara</option>
                  <option>Kandy / Matale / Nuwara Eliya</option>
                  <option>Other Provinces (Island-wide)</option>
                </select>
              </div>

              <div className="p-4 rounded-2xl border flex justify-between items-center transition-all" style={{ backgroundColor: 'var(--studio-hero)', borderColor: 'var(--studio-border)' }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--studio-moss)' }}>Estimated Shipping Cost</p>
                  <p className="text-[10px]" style={{ color: 'var(--studio-muted)' }}>* Base processing cost calculated and sent manually via WhatsApp</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black" style={{ color: 'var(--studio-moss)' }}>
                    {currentShippingCost === 0 ? "FREE" : `Rs. ${currentShippingCost}.00`}
                  </span>
                </div>
              </div>
            </div>

            {/* FILE SUBMISSION MANAGEMENT COMPONENT LINK */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--studio-muted)' }}>Upload Reference Image or Design Vector</label>
              <div className="relative border-2 border-dashed rounded-2xl p-8 text-center hover:bg-opacity-50 transition-all cursor-pointer" style={{ borderColor: 'var(--studio-border)', backgroundColor: 'var(--studio-bg)' }}>
                <input type="file" onChange={handleFileChange} accept=".svg,.dxf,.ai,.pdf,.png,.jpg,.jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="space-y-2">
                  <span className="text-3xl block">📤</span>
                  <p className="text-sm font-bold" style={{ color: 'var(--studio-moss)' }}>{file ? file.name : "Select or drag design artwork file"}</p>
                  <p className="text-xs" style={{ color: 'var(--studio-muted)' }}>Supports DXF, SVG, AI, PDF, PNG up to 4.5MB</p>
                </div>
              </div>
              
              {/* DYNAMIC WHATSAPP REDIRECT BUTTON BUNDLE */}
              {errorMessage && (
                <div className="mt-4 p-5 rounded-2xl border border-amber-200 bg-amber-50 flex flex-col gap-3">
                  <p className="text-xs text-amber-900 font-bold flex items-center gap-2">
                    <span>⚠️</span> {errorMessage}
                  </p>
                  {whatsappUrl && (
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center justify-center text-center text-white text-xs font-black uppercase tracking-wider px-4 py-3 rounded-xl shadow-md transition-all hover:scale-[1.01]"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      💬 Send Heavy File via WhatsApp Now
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4">
              <button type="submit" disabled={submitting || !!whatsappUrl} className="w-full text-white font-black text-base py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50" style={{ backgroundColor: 'var(--studio-moss)' }}>
                {submitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Submit Quote Metrics ⚡"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}