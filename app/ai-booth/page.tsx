'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function StudioContent() {
  const searchParams = useSearchParams();
  
  const [design, setDesign] = useState({
    itemType: 'nikah-clock-frame',
    businessType: 'boutique', 
    shape: 'circular',
    woodTone: 'mahogany',
    acrylicFinish: 'gold-mirror',
    mountingStyle: 'stand',
    fontStyle: 'script',
    topText: 'OUR WEDDING DAY',
    middleText: 'AMRAN & FATHIMA',
    bottomText: '2026.06.20'
  });

  const [realisticView, setRealisticView] = useState(true);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  useEffect(() => {
    const itemParam = searchParams.get('item');
    if (itemParam) {
      if (itemParam === 'notebook') setDesign(prev => ({ ...prev, itemType: 'notebook', shape: 'rectangular', mountingStyle: 'spiral-bound', topText: 'PERSONAL DIARY', middleText: 'M. MUJEEB', bottomText: 'ESTABLISHED 2026' }));
      else if (itemParam === 'shop-signboard') setDesign(prev => ({ ...prev, itemType: 'shop-signboard', shape: 'rectangular', mountingStyle: 'metal-standoffs', topText: 'THREADIFY', middleText: 'COLLECTION', bottomText: 'ESTD // 2024' }));
      else if (itemParam === 'table-lamp') setDesign(prev => ({ ...prev, itemType: 'table-lamp', shape: 'arched', mountingStyle: 'stand', topText: 'NIGHT ILLUMINATION', middleText: 'WELCOME HOME', bottomText: '💫 COZY VIBES 💫' }));
      else if (itemParam === 'nikah-frame') setDesign(prev => ({ ...prev, itemType: 'nikah-clock-frame', shape: 'circular', mountingStyle: 'stand', topText: 'OUR WEDDING DAY', middleText: 'AMRAN & FATHIMA', bottomText: '2026.06.20' }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'itemType') {
      if (value === 'notebook') setDesign(prev => ({ ...prev, itemType: value, shape: 'rectangular', mountingStyle: 'spiral-bound', topText: 'PERSONAL DIARY', middleText: 'M. MUJEEB', bottomText: 'ESTABLISHED 2026' }));
      else if (value === 'shop-signboard') setDesign(prev => ({ ...prev, itemType: value, businessType: 'boutique', shape: 'rectangular', mountingStyle: 'metal-standoffs', topText: 'THREADIFY', middleText: 'COLLECTION', bottomText: 'ESTD // 2024' }));
      else if (value === 'table-lamp') setDesign(prev => ({ ...prev, itemType: value, shape: 'arched', mountingStyle: 'stand', topText: 'NIGHT ILLUMINATION', middleText: 'WELCOME HOME', bottomText: '💫 COZY VIBES 💫' }));
      else setDesign(prev => ({ ...prev, itemType: value, shape: 'circular', mountingStyle: 'stand', topText: 'OUR WEDDING DAY', middleText: 'AMRAN & FATHIMA', bottomText: '2026.06.20' }));
    } else {
      setDesign(prev => ({ ...prev, [name]: value }));
    }
  };

  const getBasePrice = () => {
    if (design.itemType === 'nikah-clock-frame') return 6600;
    if (design.itemType === 'shop-signboard') return 12320;
    if (design.itemType === 'notebook') return 2800;
    return 4000;
  };

  const getPremiumAddonPrice = () => (design.acrylicFinish === 'gold-mirror' || design.acrylicFinish === 'rose-gold') ? 850 : 0;
  const getTotalPrice = () => getBasePrice() + getPremiumAddonPrice();

  const handleCustomOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !shippingAddress) return;

    const newOrder = {
      orderId: 'LT-' + Math.floor(1000 + Math.random() * 9000),
      createdAt: new Date().toISOString(),
      customerName,
      customerPhone,
      shippingAddress,
      productTitle: `Customized ${design.itemType.toUpperCase()}`,
      totalAmount: getTotalPrice(),
      status: 'Pending Production'
    };

    const existingOrders = JSON.parse(localStorage.getItem('laser_tech_orders') || '[]');
    existingOrders.push(newOrder);
    localStorage.setItem('laser_tech_orders', JSON.stringify(existingOrders));

    setCheckoutComplete(true);
    setTimeout(() => {
      setIsCheckoutOpen(false);
      setCheckoutComplete(false);
      setCustomerName(''); setCustomerPhone(''); setShippingAddress('');
    }, 3000);
  };

  const getLabelText = (layer: 'top' | 'mid' | 'bot') => {
    if (design.itemType === 'shop-signboard') {
      if (layer === 'top') return 'Business Type';
      if (layer === 'mid') return 'Shop Name';
      return 'Established Year';
    }
    if (layer === 'top') return 'Heading';
    if (layer === 'mid') return 'Main Text';
    return 'Date/Footer';
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-stone-50 text-stone-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black mb-8">Design Studio</h1>
        
        {/* Simple Layout for brevity - Add your full JSX structure here */}
        <div className="bg-white p-8 rounded-2xl border shadow-sm">
           <button onClick={() => setIsCheckoutOpen(true)} className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold">
             Order Custom Design (LKR {getTotalPrice().toLocaleString()})
           </button>
        </div>

        {isCheckoutOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl w-full max-w-sm">
              <form onSubmit={handleCustomOrderSubmit} className="space-y-4">
                <input required placeholder="Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full p-3 border rounded-lg" />
                <input required placeholder="Phone" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="w-full p-3 border rounded-lg" />
                <textarea required placeholder="Address" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} className="w-full p-3 border rounded-lg" />
                <button type="submit" className="w-full py-3 bg-stone-900 text-white font-bold rounded-lg">Confirm Order</button>
                <button type="button" onClick={() => setIsCheckoutOpen(false)} className="w-full py-2 text-stone-500 text-sm">Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function UltimateCustomerStudio() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StudioContent />
    </Suspense>
  );
}