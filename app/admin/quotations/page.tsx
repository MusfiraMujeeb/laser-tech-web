"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Quotation,
  Inquiry,
  QuotationStatus,
  QuotationItem,
  loadQuotations,
  saveQuotations,
  loadInquiries,
  generateQuotationId,
  calcTotal,
  formatLKR,
  formatDate,
  buildQuotationWhatsAppMessage,
  getStatusColor,
} from "@/lib/quotationUtils";
import QuotationPrintTemplate from "@/components/QuotationPrintTemplate";

const STATUSES: QuotationStatus[] = [
  "Draft",
  "Sent",
  "Awaiting Reply",
  "Approved",
  "Rejected",
  "Expired",
  "Converted to Order",
];

export default function AdminQuotationsPage() {
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [editing, setEditing] = useState<Quotation | null>(null);
  const [showPrint, setShowPrint] = useState<Quotation | null>(null);
  const [filter, setFilter] = useState<"all" | QuotationStatus>("all");

  useEffect(() => {
    setQuotations(loadQuotations());
    setInquiries(loadInquiries());
  }, []);

  const persist = (list: Quotation[]) => {
    setQuotations(list);
    saveQuotations(list);
  };

  const createBlank = () => {
    const now = new Date();
    const validUntil = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
    const newQ: Quotation = {
      id: generateQuotationId(),
      inquiryId: null,
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      items: [{ description: "", quantity: 1, unitPrice: 0 }],
      discountType: "fixed",
      discountValue: 0,
      deliveryFee: 0,
      notes: "",
      validUntil: validUntil.toISOString().slice(0, 10),
      status: "Draft",
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    };
    setEditing(newQ);
  };

  const createFromInquiry = (inquiry: Inquiry) => {
    const now = new Date();
    const validUntil = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
    const description = [
      inquiry.serviceType,
      inquiry.material && `— ${inquiry.material}`,
      inquiry.dimensions && `(${inquiry.dimensions})`,
      inquiry.inscription && `• ${inquiry.inscription}`,
    ]
      .filter(Boolean)
      .join(" ");

    const newQ: Quotation = {
      id: generateQuotationId(),
      inquiryId: inquiry.id,
      customerName: inquiry.name,
      customerPhone: inquiry.phone,
      customerEmail: inquiry.email,
      items: [
        {
          description: description || inquiry.serviceType,
          quantity: parseInt(inquiry.quantity) || 1,
          unitPrice: 0,
        },
      ],
      discountType: "fixed",
      discountValue: 0,
      deliveryFee: 0,
      notes: inquiry.instructions || "",
      validUntil: validUntil.toISOString().slice(0, 10),
      status: "Draft",
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    };
    setEditing(newQ);
  };

  const saveEditing = () => {
    if (!editing) return;
    if (!editing.customerName.trim()) {
      alert("Please enter the customer name.");
      return;
    }
    const updated = { ...editing, updatedAt: new Date().toISOString() };
    const existingIndex = quotations.findIndex((q) => q.id === updated.id);
    if (existingIndex >= 0) {
      const next = [...quotations];
      next[existingIndex] = updated;
      persist(next);
    } else {
      persist([updated, ...quotations]);
    }
    setEditing(null);
  };

  const deleteQuotation = (id: string) => {
    if (!confirm("Delete this quotation?")) return;
    persist(quotations.filter((q) => q.id !== id));
  };

  const updateItem = (
    idx: number,
    field: keyof QuotationItem,
    value: string | number
  ) => {
    if (!editing) return;
    const items = [...editing.items];
    items[idx] = { ...items[idx], [field]: value };
    setEditing({ ...editing, items });
  };

  const addItem = () => {
    if (!editing) return;
    setEditing({
      ...editing,
      items: [
        ...editing.items,
        { description: "", quantity: 1, unitPrice: 0 },
      ],
    });
  };

  const removeItem = (idx: number) => {
    if (!editing) return;
    if (editing.items.length === 1) return;
    setEditing({
      ...editing,
      items: editing.items.filter((_, i) => i !== idx),
    });
  };

  const filtered =
    filter === "all"
      ? quotations
      : quotations.filter((q) => q.status === filter);

  // ==========================================
  // EDITING VIEW
  // ==========================================

  if (editing) {
    const totals = calcTotal(
      editing.items,
      editing.discountType,
      editing.discountValue,
      editing.deliveryFee
    );

    return (
      <div className="min-h-screen bg-beige">
        <div className="bg-walnut text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  if (!confirm("Discard unsaved changes?")) return;
                  setEditing(null);
                }}
                className="text-sand hover:text-white text-sm"
              >
                ← Back
              </button>
              <h1 className="font-heading text-xl font-semibold">
                {editing.id}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPrint(editing)}
                className="text-xs font-bold uppercase tracking-wider text-sand hover:text-white"
              >
                Preview
              </button>
              <button
                onClick={saveEditing}
                className="px-4 py-2 rounded-lg bg-copper text-white text-xs font-bold uppercase tracking-wider hover:bg-copper-dark transition"
              >
                Save Quote
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface border border-wood-border rounded-2xl p-6 space-y-4">
              <h2 className="font-heading text-xl font-semibold text-walnut">
                Customer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  value={editing.customerName}
                  onChange={(e) =>
                    setEditing({ ...editing, customerName: e.target.value })
                  }
                  className="px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={editing.customerPhone}
                  onChange={(e) =>
                    setEditing({ ...editing, customerPhone: e.target.value })
                  }
                  className="px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={editing.customerEmail}
                  onChange={(e) =>
                    setEditing({ ...editing, customerEmail: e.target.value })
                  }
                  className="px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-surface border border-wood-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-xl font-semibold text-walnut">
                  Line Items
                </h2>
                <button
                  onClick={addItem}
                  className="text-xs font-bold uppercase tracking-wider text-copper hover:text-copper-dark"
                >
                  + Add Item
                </button>
              </div>

              <div className="space-y-3">
                {editing.items.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-2 items-start">
                    <input
                      type="text"
                      placeholder="Description"
                      value={item.description}
                      onChange={(e) =>
                        updateItem(idx, "description", e.target.value)
                      }
                      className="col-span-6 px-3 py-2 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none"
                    />
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(
                          idx,
                          "quantity",
                          parseInt(e.target.value) || 1
                        )
                      }
                      className="col-span-2 px-3 py-2 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none"
                    />
                    <input
                      type="number"
                      min="0"
                      value={item.unitPrice}
                      onChange={(e) =>
                        updateItem(
                          idx,
                          "unitPrice",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="col-span-3 px-3 py-2 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none"
                    />
                    <button
                      onClick={() => removeItem(idx)}
                      disabled={editing.items.length === 1}
                      className="col-span-1 text-error hover:opacity-70 disabled:opacity-30 text-lg"
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-xs text-taupe">
                Description · Quantity · Unit Price (LKR)
              </p>
            </div>

            <div className="bg-surface border border-wood-border rounded-2xl p-6 space-y-3">
              <h2 className="font-heading text-xl font-semibold text-walnut">
                Notes
              </h2>
              <textarea
                rows={4}
                placeholder="Payment terms, delivery info, special instructions…"
                value={editing.notes}
                onChange={(e) =>
                  setEditing({ ...editing, notes: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none resize-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-wood-border rounded-2xl p-6 space-y-3">
              <h3 className="font-heading text-lg font-semibold text-walnut">
                Status
              </h3>
              <select
                value={editing.status}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    status: e.target.value as QuotationStatus,
                  })
                }
                className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                  Valid Until
                </label>
                <input
                  type="date"
                  value={editing.validUntil}
                  onChange={(e) =>
                    setEditing({ ...editing, validUntil: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-surface border border-wood-border rounded-2xl p-6 space-y-3">
              <h3 className="font-heading text-lg font-semibold text-walnut">
                Discount &amp; Delivery
              </h3>
              <div className="flex gap-2">
                <select
                  value={editing.discountType}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      discountType: e.target.value as "percentage" | "fixed",
                    })
                  }
                  className="w-1/2 px-3 py-2 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none"
                >
                  <option value="fixed">Fixed (LKR)</option>
                  <option value="percentage">Percent (%)</option>
                </select>
                <input
                  type="number"
                  min="0"
                  value={editing.discountValue}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      discountValue: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="w-1/2 px-3 py-2 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-1">
                  Delivery Fee (LKR)
                </label>
                <input
                  type="number"
                  min="0"
                  value={editing.deliveryFee}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      deliveryFee: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-walnut text-ivory rounded-2xl p-6 space-y-2">
              <h3 className="font-heading text-lg font-semibold text-oak">
                Summary
              </h3>
              <div className="flex justify-between text-sm">
                <span className="text-sand/80">Subtotal</span>
                <span>{formatLKR(totals.subtotal)}</span>
              </div>
              {totals.discount > 0 && (
                <div className="flex justify-between text-sm text-oak">
                  <span>Discount</span>
                  <span>-{formatLKR(totals.discount)}</span>
                </div>
              )}
              {totals.deliveryFee > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-sand/80">Delivery</span>
                  <span>{formatLKR(totals.deliveryFee)}</span>
                </div>
              )}
              <div className="flex justify-between border-t border-walnut/60 pt-2 text-lg">
                <span className="font-bold text-surface">Total</span>
                <span className="font-bold text-copper">
                  {formatLKR(totals.total)}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={`https://wa.me/${
                  editing.customerPhone.replace(/[^\d]/g, "") ||
                  "94757991141"
                }?text=${encodeURIComponent(
                  buildQuotationWhatsAppMessage(editing)
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full"
              >
                Send via WhatsApp
              </a>
              <button
                onClick={() => setShowPrint(editing)}
                className="btn-secondary w-full"
              >
                Preview / Print
              </button>
            </div>
          </div>
        </div>

        {showPrint && (
          <div className="fixed inset-0 bg-charcoal/60 z-50 overflow-y-auto p-4">
            <div className="max-w-4xl mx-auto my-8">
              <div className="flex justify-end gap-2 mb-3">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-lg bg-copper text-white text-xs font-bold uppercase"
                >
                  Print
                </button>
                <button
                  onClick={() => setShowPrint(null)}
                  className="px-4 py-2 rounded-lg bg-surface text-walnut text-xs font-bold uppercase border border-wood-border"
                >
                  Close
                </button>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <QuotationPrintTemplate quotation={showPrint} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // LIST VIEW
  // ==========================================

  return (
    <div className="min-h-screen bg-beige">
      <div className="bg-walnut text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-oak">
              Admin
            </p>
            <h1 className="font-heading text-2xl font-semibold">
              Quotations
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="text-xs font-bold uppercase tracking-wider text-sand hover:text-white"
            >
              ← Dashboard
            </Link>
            <button
              onClick={createBlank}
              className="px-5 py-2.5 rounded-lg bg-copper text-white text-xs font-bold uppercase tracking-wider hover:bg-copper-dark transition"
            >
              + New Quotation
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-8">
        {inquiries.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold text-walnut">
              Pending Inquiries
              <span className="ml-2 text-sm font-normal text-taupe">
                ({inquiries.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inquiries.slice(0, 6).map((inq) => (
                <div
                  key={inq.id}
                  className="bg-surface border border-wood-border rounded-2xl p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-copper font-bold">
                      {inq.id}
                    </span>
                    <span className="status-pending text-[10px]">
                      New Inquiry
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-walnut">
                      {inq.name || "Unnamed"}
                    </p>
                    <p className="text-xs text-taupe">{inq.serviceType}</p>
                    <p className="text-xs text-taupe">
                      {inq.phone} · {inq.email}
                    </p>
                  </div>
                  <button
                    onClick={() => createFromInquiry(inq)}
                    className="w-full px-3 py-2 rounded-lg bg-copper text-white text-xs font-bold uppercase tracking-wider hover:bg-copper-dark transition"
                  >
                    Create Quotation
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
              filter === "all"
                ? "bg-walnut text-white border-walnut"
                : "bg-surface text-walnut border-wood-border hover:border-copper"
            }`}
          >
            All ({quotations.length})
          </button>
          {STATUSES.map((s) => {
            const count = quotations.filter((q) => q.status === s).length;
            if (count === 0) return null;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition ${
                  filter === s
                    ? "bg-walnut text-white border-walnut"
                    : "bg-surface text-walnut border-wood-border hover:border-copper"
                }`}
              >
                {s} ({count})
              </button>
            );
          })}
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-semibold text-walnut">
            All Quotations
          </h2>

          {filtered.length === 0 ? (
            <div className="bg-surface border border-wood-border rounded-2xl p-12 text-center space-y-3">
              <p className="text-lg font-semibold text-walnut">
                No quotations yet
              </p>
              <p className="text-sm text-taupe">
                Click &ldquo;+ New Quotation&rdquo; above to create your first
                quote.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((q) => {
                const totals = calcTotal(
                  q.items,
                  q.discountType,
                  q.discountValue,
                  q.deliveryFee
                );
                return (
                  <div
                    key={q.id}
                    className="bg-surface border border-wood-border rounded-2xl p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                  >
                    <div className="md:col-span-2">
                      <p className="font-mono text-xs text-copper font-bold">
                        {q.id}
                      </p>
                      <p className="text-xs text-taupe mt-1">
                        {formatDate(q.createdAt)}
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="font-bold text-walnut">
                        {q.customerName || "Unnamed Customer"}
                      </p>
                      <p className="text-xs text-taupe">{q.customerPhone}</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-sm text-taupe">
                        {q.items.length} item{q.items.length !== 1 ? "s" : ""}
                      </p>
                      <p className="font-bold text-walnut">
                        {formatLKR(totals.total)}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <span className={getStatusColor(q.status)}>
                        {q.status}
                      </span>
                    </div>
                    <div className="md:col-span-2 flex justify-end gap-2">
                      <button
                        onClick={() => setEditing(q)}
                        className="px-3 py-2 rounded-lg bg-walnut text-white text-xs font-bold hover:bg-espresso transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteQuotation(q.id)}
                        className="px-3 py-2 rounded-lg border border-error text-error text-xs font-bold hover:bg-error-bg transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {showPrint && (
        <div className="fixed inset-0 bg-charcoal/60 z-50 overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto my-8">
            <div className="flex justify-end gap-2 mb-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-lg bg-copper text-white text-xs font-bold uppercase"
              >
                Print
              </button>
              <button
                onClick={() => setShowPrint(null)}
                className="px-4 py-2 rounded-lg bg-surface text-walnut text-xs font-bold uppercase border border-wood-border"
              >
                Close
              </button>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <QuotationPrintTemplate quotation={showPrint} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}