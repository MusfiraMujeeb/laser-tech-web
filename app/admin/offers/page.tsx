"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";

export const dynamic = "force-dynamic";

type OfferForm = {
  _id?: string;
  name: string;
  code: string;
  type: "percentage" | "fixed" | "free-delivery";
  value: number;
  scope: "all" | "category" | "product";
  targetCategory: string;
  targetSlug: string;
  minOrderValue: number;
  startDate: string;
  endDate: string;
  active: boolean;
  usageLimit: number;
};

const CATEGORIES = ["Awards", "Clocks", "LED Signs", "Notebooks", "Wedding", "Signage", "Keychains", "Decor"];

const emptyForm: OfferForm = {
  name: "",
  code: "",
  type: "percentage",
  value: 10,
  scope: "all",
  targetCategory: "",
  targetSlug: "",
  minOrderValue: 0,
  startDate: new Date().toISOString().slice(0, 10),
  endDate: new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10),
  active: true,
  usageLimit: 0,
};

export default function AdminOffersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [offers, setOffers] = useState<OfferForm[]>([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<OfferForm | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("admin_token_v2") === "lasertech2026") {
      setIsAuthenticated(true);
      loadOffers();
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === "lasertech2026") {
      sessionStorage.setItem("admin_token_v2", password);
      setIsAuthenticated(true);
      loadOffers();
    } else {
      setAuthError("Incorrect password.");
      setPassword("");
    }
  };

  const loadOffers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/offers");
      const data = await res.json();
      setOffers(data.offers || []);
    } finally {
      setLoading(false);
    }
  };

  const openNew = () => {
    setEditing({ ...emptyForm });
    setFormError("");
    setShowModal(true);
  };

  const openEdit = (o: OfferForm) => {
    setEditing({
      ...o,
      startDate: new Date(o.startDate).toISOString().slice(0, 10),
      endDate: new Date(o.endDate).toISOString().slice(0, 10),
    });
    setFormError("");
    setShowModal(true);
  };

  const closeModal = () => {
    if (saving) return;
    setShowModal(false);
    setEditing(null);
  };

  const change = (field: keyof OfferForm, value: any) => {
    if (!editing) return;
    setEditing({ ...editing, [field]: value });
    setFormError("");
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (!editing.name.trim()) return setFormError("Offer name is required.");
    if (editing.type !== "free-delivery" && editing.value <= 0) {
      return setFormError("Discount value must be greater than 0.");
    }

    setSaving(true);
    try {
      const isUpdate = !!editing._id;
      const res = await fetch("/api/admin/offers", {
        method: isUpdate ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing),
      });
      if (!res.ok) throw new Error("Save failed");
      await loadOffers();
      closeModal();
    } catch (err: any) {
      setFormError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (offer: OfferForm) => {
    if (!offer._id) return;
    if (!confirm(`Delete "${offer.name}"?`)) return;
    await fetch(`/api/admin/offers?id=${offer._id}`, { method: "DELETE" });
    loadOffers();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
        <div className="w-full max-w-md card-soft p-10 text-center space-y-6">
          <div className="text-5xl">🎁</div>
          <h1 className="font-heading text-3xl font-semibold text-walnut">Admin Offers</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setAuthError(""); }}
              required
              autoFocus
              placeholder="Enter admin password"
              className="w-full px-4 py-3.5 rounded-lg border border-wood-border bg-ivory text-center tracking-widest font-mono focus:border-copper focus:outline-none"
            />
            {authError && (
              <div className="text-xs font-bold text-error bg-error-bg py-2.5 rounded-lg border border-error/30">⚠ {authError}</div>
            )}
            <button type="submit" className="btn-primary w-full">Unlock</button>
          </form>
          <Link href="/admin" className="text-xs text-taupe hover:text-copper">← Dashboard</Link>
        </div>
      </div>
    );
  }

  const today = new Date();
  const activeOffers = offers.filter((o) => o.active && new Date(o.endDate) >= today);

  return (
    <div className="min-h-screen bg-beige">
      <div className="bg-walnut text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-oak">Admin</p>
            <h1 className="font-heading text-2xl font-semibold">Offers & Discounts</h1>
          </div>
          <div className="flex gap-3">
            <Link href="/admin" className="text-xs font-bold uppercase tracking-wider text-sand hover:text-white">← Dashboard</Link>
            <button onClick={openNew} className="px-5 py-2.5 rounded-lg bg-copper text-white text-xs font-bold uppercase hover:bg-copper-dark transition">+ New Offer</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card-soft p-5">
            <div className="w-10 h-1 rounded-full bg-copper mb-3" />
            <p className="text-xs font-bold uppercase tracking-widest text-taupe">Total Offers</p>
            <p className="font-heading text-3xl font-semibold text-walnut mt-1">{offers.length}</p>
          </div>
          <div className="card-soft p-5">
            <div className="w-10 h-1 rounded-full bg-whatsapp mb-3" />
            <p className="text-xs font-bold uppercase tracking-widest text-taupe">Active Now</p>
            <p className="font-heading text-3xl font-semibold text-walnut mt-1">{activeOffers.length}</p>
          </div>
          <div className="card-soft p-5">
            <div className="w-10 h-1 rounded-full bg-oak mb-3" />
            <p className="text-xs font-bold uppercase tracking-widest text-taupe">Expired</p>
            <p className="font-heading text-3xl font-semibold text-walnut mt-1">{offers.length - activeOffers.length}</p>
          </div>
        </div>

        {/* List */}
        {loading ? (
          <div className="card-soft p-12 text-center text-taupe">Loading…</div>
        ) : offers.length === 0 ? (
          <div className="card-soft p-12 text-center space-y-3">
            <p className="font-heading text-xl text-walnut">No offers yet</p>
            <p className="text-sm text-taupe">Click "+ New Offer" to create a discount or promotion.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {offers.map((o) => {
              const isExpired = new Date(o.endDate) < today;
              const isActive = o.active && !isExpired;
              return (
                <div key={o._id || o.name} className="card-soft p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-4">
                    <p className="font-bold text-walnut">{o.name}</p>
                    {o.code && (
                      <p className="text-xs font-mono text-copper mt-1">Code: {o.code}</p>
                    )}
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-sm font-bold text-walnut">
                      {o.type === "percentage" && `${o.value}% off`}
                      {o.type === "fixed" && `LKR ${o.value} off`}
                      {o.type === "free-delivery" && "Free delivery"}
                    </p>
                    <p className="text-xs text-taupe">
                      {o.scope === "all" ? "All products" : o.scope === "category" ? `Category: ${o.targetCategory}` : `Product: ${o.targetSlug}`}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-taupe">Ends</p>
                    <p className="text-sm font-bold text-walnut">{new Date(o.endDate).toLocaleDateString()}</p>
                  </div>
                  <div className="md:col-span-1">
                    {isActive ? (
                      <span className="status-success text-[10px]">Active</span>
                    ) : isExpired ? (
                      <span className="status-error text-[10px]">Expired</span>
                    ) : (
                      <span className="status-pending text-[10px]">Paused</span>
                    )}
                  </div>
                  <div className="md:col-span-2 flex justify-end gap-2">
                    <button onClick={() => openEdit(o)} className="px-3 py-1.5 rounded-lg bg-walnut text-white text-xs font-bold hover:bg-espresso">Edit</button>
                    <button onClick={() => handleDelete(o)} className="px-3 py-1.5 rounded-lg border border-error text-error text-xs font-bold hover:bg-error-bg">Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && editing && (
        <div className="fixed inset-0 bg-charcoal/60 z-50 overflow-y-auto p-4">
          <div className="max-w-xl mx-auto my-8 bg-surface rounded-2xl shadow-2xl">
            <form onSubmit={handleSave}>
              <div className="bg-walnut text-white px-6 py-4 flex justify-between items-center rounded-t-2xl">
                <h2 className="font-heading text-xl font-semibold">{editing._id ? "Edit Offer" : "New Offer"}</h2>
                <button type="button" onClick={closeModal} className="text-sand hover:text-white text-2xl" disabled={saving}>×</button>
              </div>
              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <label className="block text-xs font-bold uppercase text-walnut mb-2">Offer Name *</label>
                  <input type="text" value={editing.name} onChange={(e) => change("name", e.target.value)} required placeholder="e.g. WELCOME10 — 10% off first order" className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory focus:border-copper focus:outline-none" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-walnut mb-2">Coupon Code</label>
                    <input type="text" value={editing.code} onChange={(e) => change("code", e.target.value.toUpperCase())} placeholder="WELCOME10" className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory font-mono focus:border-copper focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-walnut mb-2">Type</label>
                    <select value={editing.type} onChange={(e) => change("type", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory focus:border-copper focus:outline-none">
                      <option value="percentage">Percentage off</option>
                      <option value="fixed">Fixed LKR off</option>
                      <option value="free-delivery">Free delivery</option>
                    </select>
                  </div>
                </div>

                {editing.type !== "free-delivery" && (
                  <div>
                    <label className="block text-xs font-bold uppercase text-walnut mb-2">
                      Value {editing.type === "percentage" ? "(%)" : "(LKR)"}
                    </label>
                    <input type="number" min="0" value={editing.value} onChange={(e) => change("value", parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory focus:border-copper focus:outline-none" />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase text-walnut mb-2">Applies To</label>
                  <select value={editing.scope} onChange={(e) => change("scope", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory focus:border-copper focus:outline-none">
                    <option value="all">All products</option>
                    <option value="category">Specific category</option>
                  </select>
                </div>

                {editing.scope === "category" && (
                  <div>
                    <label className="block text-xs font-bold uppercase text-walnut mb-2">Category</label>
                    <select value={editing.targetCategory} onChange={(e) => change("targetCategory", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory focus:border-copper focus:outline-none">
                      <option value="">Select category</option>
                      {CATEGORIES.map((c) => (<option key={c} value={c}>{c}</option>))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase text-walnut mb-2">Minimum Order Value (LKR)</label>
                  <input type="number" min="0" value={editing.minOrderValue} onChange={(e) => change("minOrderValue", parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory focus:border-copper focus:outline-none" />
                  <p className="text-[10px] text-taupe mt-1">0 = no minimum</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-walnut mb-2">Start Date</label>
                    <input type="date" value={editing.startDate} onChange={(e) => change("startDate", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory focus:border-copper focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-walnut mb-2">End Date</label>
                    <input type="date" value={editing.endDate} onChange={(e) => change("endDate", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory focus:border-copper focus:outline-none" />
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={editing.active} onChange={(e) => change("active", e.target.checked)} className="w-4 h-4" />
                  <span className="text-sm font-bold text-walnut">Active</span>
                </label>

                {formError && (
                  <div className="bg-error-bg border border-error/30 rounded-lg p-3 text-xs text-error font-bold">⚠ {formError}</div>
                )}
              </div>
              <div className="px-6 py-4 border-t border-wood-border flex gap-3 justify-end rounded-b-2xl">
                <button type="button" onClick={closeModal} disabled={saving} className="px-5 py-2.5 rounded-lg border border-wood-border text-walnut text-xs font-bold uppercase hover:bg-sand">Cancel</button>
                <button type="submit" disabled={saving} className="px-5 py-2.5 rounded-lg bg-copper text-white text-xs font-bold uppercase hover:bg-copper-dark disabled:opacity-50">
                  {saving ? "Saving…" : editing._id ? "Save Changes" : "Create Offer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}