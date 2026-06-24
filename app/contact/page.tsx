'use client';

import { useState } from 'react';
import { contactInfo } from '@/app/data/site';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}?text=Hello, I am ${name}. ${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-studio-ivory">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-[#F1ECE4]">
        <h1 className="text-2xl font-black text-studio-forest mb-6">Contact Laser Tech</h1>
        
        <form onSubmit={handleWhatsAppClick} className="space-y-4">
          <input
            className="w-full p-3 border rounded-lg"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full p-3 border rounded-lg h-32"
            placeholder="Your Project Details..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-studio-brass text-white font-bold rounded-lg hover:opacity-90"
          >
            Send Inquiry via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}