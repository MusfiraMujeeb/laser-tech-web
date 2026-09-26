"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Offer = {
  _id: string;
  name: string;
  code: string;
  type: "percentage" | "fixed" | "free-delivery";
  value: number;
  scope: string;
  targetCategory: string;
  minOrderValue: number;
};

export default function OfferTicker() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    fetch("/api/offers/active")
      .then((res) => res.json())
      .then((data) => setOffers(data.offers || []))
      .catch(() => setOffers([]));
  }, []);

  if (dismissed || offers.length === 0) return null;

  const buildMessage = (offer: Offer) => {
    let msg = `🎉 ${offer.name} — `;
    if (offer.type === "percentage") msg += `Save ${offer.value}%`;
    if (offer.type === "fixed") msg += `Save LKR ${offer.value.toLocaleString()}`;
    if (offer.type === "free-delivery") msg += `Free Delivery`;
    if (offer.scope === "category" && offer.targetCategory) {
      msg += ` on ${offer.targetCategory}`;
    }
    if (offer.code) msg += ` · Code: ${offer.code}`;
    return msg;
  };

  // Duplicate the list so the marquee is seamless
  const messages = [...offers, ...offers, ...offers, ...offers];

  return (
    <div className="relative bg-espresso text-sand overflow-hidden border-b border-walnut">
      {/* Marquee */}
      <div className="flex animate-marquee whitespace-nowrap py-2.5">
        {messages.map((offer, idx) => (
          <Link
            key={`${offer._id}-${idx}`}
            href="/products"
            className="inline-flex items-center gap-3 px-8 text-xs font-bold uppercase tracking-widest hover:text-oak transition"
          >
            <span className="text-oak">✦</span>
            <span>{buildMessage(offer)}</span>
            <span className="text-copper">→</span>
          </Link>
        ))}
      </div>

      {/* Dismiss */}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss offers"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-sand/60 hover:text-white text-lg"
      >
        ×
      </button>
    </div>
  );
}