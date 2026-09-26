"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import {
  Quotation,
  loadQuotations,
  calcTotal,
  formatLKR,
  formatDate,
  getStatusColor,
} from "@/lib/quotationUtils";

// ==========================================
// ⚙️ ADMIN PASSWORD
// Change this before going live.
// ==========================================
const ADMIN_PASSWORD = "lasertech2026";

// ==========================================
// TYPES
// ==========================================

type Order = {
  orderId: string;
  createdAt: string;
  productTitle: string;
  customerName: string;
  customerPhone: string;
  shippingAddress: string;
  totalAmount: number;
  status: string;
};

const ORDER_STATUSES = [
  "Pending Production",
  "Laser Cutting",
  "Shipped",
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "quotes" | "orders">(
    "overview"
  );

  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  // Check session on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const token = sessionStorage.getItem("admin_token_v2");
    if (token === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    setQuotations(loadQuotations());
    try {
      const storedOrders = JSON.parse(
        localStorage.getItem("laser_tech_orders") || "[]"
      );
      setOrders(storedOrders);
    } catch {
      setOrders([]);
    }
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setAuthError("");
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_token_v2", password);
      setIsAuthenticated(true);
      loadData();
    } else {
      setAuthError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const handleLock = () => {
    sessionStorage.removeItem("admin_token_v2");
    setIsAuthenticated(false);
    setPassword("");
  };

  // ==========================================
  // LOGIN SCREEN
  // ==========================================

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="card-soft p-8 md:p-10 text-center space-y-6">
            <div className="text-5xl">🔐</div>

            <div className="space-y-2">
              <h1 className="font-heading text-3xl font-semibold text-walnut">
                Laser Tech Admin
              </h1>
              <p className="text-xs font-bold uppercase tracking-widest text-copper">
                Authorized Staff Only
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setAuthError("");
                }}
                required
                autoFocus
                placeholder="Enter admin password"
                className="w-full px-4 py-3.5 rounded-lg border border-wood-border bg-ivory text-charcoal text-center tracking-widest font-mono focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20 transition"
              />

              {authError && (
                <div className="text-xs font-bold text-error bg-error-bg py-2.5 px-3 rounded-lg border border-error/30">
                  ⚠ {authError}
                </div>
              )}

              <button type="submit" className="btn-primary w-full">
                Unlock Dashboard
              </button>
            </form>

            <p className="text-xs text-taupe pt-2">
              <Link href="/" className="hover:text-copper transition">
                ← Return to website
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // DASHBOARD
  // ==========================================

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const quotesThisMonth = quotations.filter(
    (q) => new Date(q.createdAt) >= monthStart
  );

  const totalQuoteValue = quotations.reduce((sum, q) => {
    const totals = calcTotal(
      q.items,
      q.discountType,
      q.discountValue,
      q.deliveryFee
    );
    return sum + totals.total;
  }, 0);

  const ordersThisMonth = orders.filter(
    (o) => new Date(o.createdAt) >= monthStart
  );

  const totalOrderValue = orders.reduce(
    (sum, o) => sum + o.totalAmount,
    0
  );

  const pendingQuotes = quotations.filter(
    (q) => q.status === "Draft" || q.status === "Sent" || q.status === "Awaiting Reply"
  ).length;

  const inProduction = orders.filter(
    (o) => o.status === "Laser Cutting" || o.status === "Pending Production"
  ).length;

  return (
    <div className="min-h-screen bg-beige">
      {/* ============================================
          ADMIN HEADER
      ============================================ */}
      <header className="bg-walnut text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-oak">
                Laser Tech
              </p>
              <h1 className="font-heading text-2xl font-semibold">
                Admin Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-wider text-sand hover:text-white transition"
            >
              View Website
            </Link>
            <button
              onClick={handleLock}
              className="px-4 py-2 rounded-lg bg-copper text-white text-xs font-bold uppercase tracking-wider hover:bg-copper-dark transition"
            >
              Lock 🔒
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 -mb-px">
            {[
              { key: "overview", label: "Overview" },
              { key: "quotes", label: "Quotations" },
              { key: "orders", label: "Orders" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-t-lg transition ${
                  activeTab === tab.key
                    ? "bg-beige text-walnut"
                    : "text-sand/70 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ============================================
          MAIN CONTENT
      ============================================ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* ============================================
            OVERVIEW TAB
        ============================================ */}
        {activeTab === "overview" && (
          <>
            {/* Stat cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                label="Total Quotations"
                value={quotations.length.toString()}
                sub={`${quotesThisMonth.length} this month`}
                accent="copper"
              />
              <StatCard
                label="Pending Quotes"
                value={pendingQuotes.toString()}
                sub="Awaiting action"
                accent="walnut"
              />
              <StatCard
                label="Total Orders"
                value={orders.length.toString()}
                sub={`${ordersThisMonth.length} this month`}
                accent="oak"
              />
              <StatCard
                label="In Production"
                value={inProduction.toString()}
                sub="Active jobs"
                accent="copper"
              />
            </section>

            {/* Value cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card-soft p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-taupe">
                  Total Quote Value
                </p>
                <p className="font-heading text-3xl font-semibold text-walnut mt-2">
                  {formatLKR(totalQuoteValue)}
                </p>
                <p className="text-xs text-taupe mt-1">
                  Across {quotations.length} quotation
                  {quotations.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="card-soft p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-taupe">
                  Total Order Value
                </p>
                <p className="font-heading text-3xl font-semibold text-walnut mt-2">
                  {formatLKR(totalOrderValue)}
                </p>
                <p className="text-xs text-taupe mt-1">
                  Across {orders.length} order
                  {orders.length !== 1 ? "s" : ""}
                </p>
              </div>
            </section>

            {/* Quick actions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/admin/quotations"
                className="card-soft p-6 block group"
              >
                <p className="text-xs font-black uppercase tracking-widest text-copper mb-2">
                  Quotation Builder
                </p>
                <h3 className="font-heading text-2xl font-semibold text-walnut mb-2">
                  Create a new quote →
                </h3>
                <p className="text-sm text-taupe">
                  Build professional quotations with line items, discounts, and
                  delivery fees. Send via WhatsApp or print.
                </p>
              </Link>

              <Link
                href="/admin/quotations"
                className="card-soft p-6 block group"
              >
                <p className="text-xs font-black uppercase tracking-widest text-oak mb-2">
                  Pending Inquiries
                </p>
                <h3 className="font-heading text-2xl font-semibold text-walnut mb-2">
                  Review customer requests →
                </h3>
                <p className="text-sm text-taupe">
                  See all incoming quote requests submitted through the website
                  and convert them into quotations.
                </p>
              </Link>
              <Link
  href="/admin/products"
  className="card-soft p-6 block group"
>
  <p className="text-xs font-black uppercase tracking-widest text-walnut mb-2">
    Product Manager
  </p>
  <h3 className="font-heading text-2xl font-semibold text-walnut mb-2">
    Manage products →
  </h3>
  <p className="text-sm text-taupe">
    Add new products, edit prices, upload images, and manage discounts.
  </p>
</Link>
            </section>
          </>
        )}

        {/* ============================================
            QUOTES TAB
        ============================================ */}
        {activeTab === "quotes" && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold text-walnut">
                Recent Quotations
              </h2>
              <Link href="/admin/quotations" className="btn-primary">
                Manage Quotations
              </Link>
            </div>

            {quotations.length === 0 ? (
              <div className="card-soft p-12 text-center space-y-3">
                <p className="text-lg font-semibold text-walnut">
                  No quotations yet
                </p>
                <p className="text-sm text-taupe">
                  Create your first quotation to get started.
                </p>
                <Link
                  href="/admin/quotations"
                  className="btn-primary inline-flex mt-4"
                >
                  Go to Quotation Builder
                </Link>
              </div>
            ) : (
              <div className="card-soft overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-sand border-b border-wood-border">
                      <tr>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut">
                          Quote #
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut">
                          Date
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut">
                          Customer
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut text-right">
                          Total
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-wood-border">
                      {quotations.slice(0, 10).map((q) => {
                        const totals = calcTotal(
                          q.items,
                          q.discountType,
                          q.discountValue,
                          q.deliveryFee
                        );
                        return (
                          <tr
                            key={q.id}
                            className="hover:bg-sand/50 transition-colors"
                          >
                            <td className="p-4 font-mono text-xs font-bold text-copper">
                              {q.id}
                            </td>
                            <td className="p-4 text-sm text-taupe">
                              {formatDate(q.createdAt)}
                            </td>
                            <td className="p-4">
                              <p className="font-bold text-walnut">
                                {q.customerName || "—"}
                              </p>
                              <p className="text-xs text-taupe">
                                {q.customerPhone}
                              </p>
                            </td>
                            <td className="p-4 text-right font-bold text-walnut">
                              {formatLKR(totals.total)}
                            </td>
                            <td className="p-4">
                              <span className={getStatusColor(q.status)}>
                                {q.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ============================================
            ORDERS TAB
        ============================================ */}
        {activeTab === "orders" && (
          <section className="space-y-6">
            <h2 className="font-heading text-2xl font-semibold text-walnut">
              Store Orders
            </h2>

            {orders.length === 0 ? (
              <div className="card-soft p-12 text-center space-y-3">
                <p className="text-lg font-semibold text-walnut">
                  No orders yet
                </p>
                <p className="text-sm text-taupe">
                  Direct product orders will appear here once customers start
                  checking out.
                </p>
              </div>
            ) : (
              <div className="card-soft overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-sand border-b border-wood-border">
                      <tr>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut">
                          Order ID
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut">
                          Product
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut">
                          Customer
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut text-right">
                          Amount
                        </th>
                        <th className="p-4 text-xs font-bold uppercase tracking-wider text-walnut">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-wood-border">
                      {orders.map((o) => (
                        <tr
                          key={o.orderId}
                          className="hover:bg-sand/50 transition-colors"
                        >
                          <td className="p-4 font-mono text-xs font-bold text-copper">
                            {o.orderId}
                          </td>
                          <td className="p-4 text-sm font-bold text-walnut">
                            {o.productTitle}
                          </td>
                          <td className="p-4">
                            <p className="font-bold text-walnut">
                              {o.customerName}
                            </p>
                            <p className="text-xs text-taupe">
                              {o.customerPhone}
                            </p>
                          </td>
                          <td className="p-4 text-right font-bold text-walnut">
                            {formatLKR(o.totalAmount)}
                          </td>
                          <td className="p-4">
                            <select
                              value={o.status}
                              onChange={(e) => {
                                const updated = orders.map((order) =>
                                  order.orderId === o.orderId
                                    ? { ...order, status: e.target.value }
                                    : order
                                );
                                setOrders(updated);
                                localStorage.setItem(
                                  "laser_tech_orders",
                                  JSON.stringify(updated)
                                );
                              }}
                              className="px-3 py-1.5 rounded-lg border border-wood-border bg-ivory text-xs font-bold focus:border-copper focus:outline-none"
                            >
                              {ORDER_STATUSES.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

// ==========================================
// STAT CARD COMPONENT
// ==========================================

function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub: string;
  accent: "copper" | "walnut" | "oak";
}) {
  const accentColor =
    accent === "copper"
      ? "bg-copper"
      : accent === "walnut"
      ? "bg-walnut"
      : "bg-oak";

  return (
    <div className="card-soft p-6">
      <div className={`w-10 h-1 rounded-full mb-4 ${accentColor}`} />
      <p className="text-xs font-bold uppercase tracking-widest text-taupe">
        {label}
      </p>
      <p className="font-heading text-3xl font-semibold text-walnut mt-2">
        {value}
      </p>
      <p className="text-xs text-taupe mt-1">{sub}</p>
    </div>
  );
}