'use client';

import { useEffect, useState } from 'react';

interface QuoteItem {
  _id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  material: string;
  dimensions: string;
  description: string;
  fileUrl?: string;
  createdAt: string;
}

interface OrderItem {
  orderId: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  shippingAddress: string;
  productTitle: string;
  totalAmount: number;
  status: string;
}

export default function AdminDashboard() {
  const [quotes, setQuotes] = useState<QuoteItem[]>([]);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  
  // Terminal view controls: 'quotes' | 'orders'
  const [activeTab, setActiveTab] = useState<'quotes' | 'orders'>('quotes');
  const [quoteFilter, setQuoteFilter] = useState('All');
  const [orderFilter, setOrderFilter] = useState('All');

  // Load static direct marketplace orders from local storage context
  const loadLocalStorageOrders = () => {
    const stored = JSON.parse(localStorage.getItem('laser_tech_orders') || '[]');
    setOrders(stored);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError('');

    try {
      const res = await fetch(`/quote/api?auth=${encodeURIComponent(password)}`);
      if (res.ok) {
        const data = await res.json();
        setQuotes(data);
        loadLocalStorageOrders();
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_token', password);
      } else {
        setAuthError('Invalid administrative gate credentials. Access Denied.');
      }
    } catch (err) {
      console.error('Auth Pipeline Failure:', err);
      setAuthError('System authorization failure.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedToken = sessionStorage.getItem('admin_token');
    if (savedToken) {
      const autoFetch = async () => {
        try {
          const res = await fetch(`/quote/api?auth=${encodeURIComponent(savedToken)}`);
          if (res.ok) {
            const data = await res.json();
            setQuotes(data);
            loadLocalStorageOrders();
            setIsAuthenticated(true);
          }
        } catch (e) {
          sessionStorage.removeItem('admin_token');
        }
      };
      autoFetch();
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    setPassword('');
    setQuotes([]);
    setOrders([]);
  };

  // Mutate order state lines and save to local storage
  const updateOrderStatus = (orderId: string, newStatus: string) => {
    const updated = orders.map(order => {
      if (order.orderId === orderId) return { ...order, status: newStatus };
      return order;
    });
    setOrders(updated);
    localStorage.setItem('laser_tech_orders', JSON.stringify(updated));
  };

  const clearOrderLogs = () => {
    if (confirm('Wipe complete catalog product order history logs permanent?')) {
      localStorage.removeItem('laser_tech_orders');
      setOrders([]);
    }
  };

  const filteredQuotes = quoteFilter === 'All' 
    ? quotes 
    : quotes.filter(q => q.service === quoteFilter);

  const filteredOrders = orderFilter === 'All'
    ? orders
    : orders.filter(o => o.status === orderFilter);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
        <div className="p-8 md:p-10 rounded-3xl shadow-xl max-w-sm w-full text-center" style={{ backgroundColor: 'var(--studio-card)', border: '1px solid var(--studio-border)' }}>
          <span className="text-4xl block mb-4">🔐</span>
          <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--studio-moss)' }}>Workshop Terminal Login</h2>
          <p className="text-xs font-semibold uppercase tracking-wider mb-8" style={{ color: 'var(--studio-gold)' }}>Authorized Operational Staff Only</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Terminal Password"
              className="w-full px-4 py-3.5 rounded-xl border focus:outline-none text-center text-sm tracking-widest font-mono"
              style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}
            />
            {authError && <p className="text-xs font-bold text-rose-600 bg-rose-50 py-2.5 px-3 rounded-xl border border-rose-200">{authError}</p>}
            <button type="submit" disabled={loading} className="w-full text-white font-black py-3.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center" style={{ backgroundColor: 'var(--studio-moss)' }}>
              {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Unlock Orders Core 🔓"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* OPERATIONAL HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b" style={{ borderColor: 'var(--studio-border)' }}>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black tracking-tight" style={{ color: 'var(--studio-moss)' }}>Workshop Control Center</h1>
              <button onClick={handleLogout} className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border cursor-pointer text-rose-700 bg-rose-50 border-rose-200">
                Lock Terminal 🔒
              </button>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: 'var(--studio-gold)' }}>Laser Tech Operational Log Dashboard</p>
          </div>

          {/* MAIN SWITCH BETWEEN QUOTES VS ORDERS */}
          <div className="bg-stone-200/60 p-1 rounded-xl inline-flex gap-1 border border-stone-300/40">
            <button 
              onClick={() => setActiveTab('quotes')}
              className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${activeTab === 'quotes' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-600'}`}
            >
              📁 Custom Build Quotes ({quotes.length})
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${activeTab === 'orders' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-600'}`}
            >
              🛒 Direct Store Orders ({orders.length})
            </button>
          </div>
        </div>

        {/* --- LEDGER TRACK A: CUSTOM BLUEPRINT QUOTES LAYER --- */}
        {activeTab === 'quotes' && (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 pb-4 border-b border-dashed" style={{ borderColor: 'var(--studio-border)' }}>
              {['All', 'Laser Cutting', 'Laser Engraving', 'Corporate Branding / Identity', 'Custom Merchandise Print'].map((category) => (
                <button
                  key={category}
                  onClick={() => setQuoteFilter(category)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border shadow-xs"
                  style={{
                    backgroundColor: quoteFilter === category ? 'var(--studio-moss)' : 'var(--studio-card)',
                    color: quoteFilter === category ? '#ffffff' : 'var(--studio-moss)',
                    borderColor: 'var(--studio-border)'
                  }}
                >
                  {category === 'Corporate Branding / Identity' ? 'Corporate' : category === 'Custom Merchandise Print' ? 'Print & Merch' : category}
                </button>
              ))}
            </div>

            {filteredQuotes.length === 0 ? (
              <div className="text-center py-20 p-8 rounded-3xl border border-dashed" style={{ backgroundColor: 'var(--studio-card)', borderColor: 'var(--studio-border)' }}>
                <span className="text-4xl block mb-2">📁</span>
                <p className="font-bold text-sm" style={{ color: 'var(--studio-moss)' }}>No custom build entries filed under this filter category.</p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-3xl border shadow-md" style={{ backgroundColor: 'var(--studio-card)', borderColor: 'var(--studio-border)' }}>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs uppercase tracking-wider border-b" style={{ backgroundColor: 'var(--studio-hero)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}>
                      <th className="p-4 font-black">Date</th>
                      <th className="p-4 font-black">Client Info</th>
                      <th className="p-4 font-black">Service & Material</th>
                      <th className="p-4 font-black">Dimensions</th>
                      <th className="p-4 font-black">Job Blueprint Specifications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-solid text-sm" style={{ borderColor: 'var(--studio-bg)', color: 'var(--studio-moss)' }}>
                    {filteredQuotes.map((quote) => (
                      <tr key={quote._id} className="hover:bg-amber-50/30 transition-colors">
                        <td className="p-4 align-top whitespace-nowrap text-xs font-mono font-bold text-stone-400">
                          {new Date(quote.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="p-4 align-top max-w-[220px]">
                          <p className="font-black text-slate-900">{quote.name}</p>
                          <p className="text-xs font-semibold text-stone-400">{quote.email}</p>
                          <div className="flex flex-col gap-1.5 mt-2">
                            <a href={`https://wa.me/${quote.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-700">💬 WhatsApp</a>
                            {quote.fileUrl && <a href={quote.fileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-800 bg-amber-100 border border-amber-200">📐 View Blueprint File</a>}
                          </div>
                        </td>
                        <td className="p-4 align-top">
                          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-black tracking-wide uppercase mb-1.5 border" style={{ backgroundColor: 'var(--studio-hero)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}>{quote.service}</span>
                          <p className="text-xs font-medium text-stone-500">Material: <span className="font-bold text-slate-800">{quote.material}</span></p>
                        </td>
                        <td className="p-4 align-top font-mono text-xs font-bold">{quote.dimensions || 'Standard'}</td>
                        <td className="p-4 align-top">
                          <p className="text-xs leading-relaxed text-slate-700 bg-slate-50 p-3 rounded-xl border border-dotted font-medium whitespace-pre-line" style={{ borderColor: 'var(--studio-border)' }}>{quote.description}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* --- LEDGER TRACK B: DIRECT MARKETPLACE ORDERS LAYER --- */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4 pb-4 border-b border-dashed" style={{ borderColor: 'var(--studio-border)' }}>
              <div className="flex gap-1 bg-stone-100 p-1 rounded-xl border">
                {['All', 'Pending Production', 'Laser Cutting', 'Shipped'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setOrderFilter(status)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${orderFilter === status ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-200'}`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <button onClick={clearOrderLogs} className="px-3 py-1.5 rounded-xl text-xs font-bold bg-red-50 border border-red-200 text-red-700 hover:bg-red-100">
                ⚠️ Wipe Order Database Cache
              </button>
            </div>

            {filteredOrders.length === 0 ? (
              <div className="text-center py-20 p-8 rounded-3xl border border-dashed" style={{ backgroundColor: 'var(--studio-card)', borderColor: 'var(--studio-border)' }}>
                <span className="text-4xl block mb-2">🛒</span>
                <p className="font-bold text-sm" style={{ color: 'var(--studio-moss)' }}>No automated store catalog transactions matched the active filters.</p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-3xl border shadow-md" style={{ backgroundColor: 'var(--studio-card)', borderColor: 'var(--studio-border)' }}>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs uppercase tracking-wider border-b" style={{ backgroundColor: 'var(--studio-hero)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}>
                      <th className="p-4 font-black">ID</th>
                      <th className="p-4 font-black">Timestamp</th>
                      <th className="p-4 font-black">Product Target</th>
                      <th className="p-4 font-black">Customer Details & Address</th>
                      <th className="p-4 font-black">Price Matched</th>
                      <th className="p-4 font-black text-right">Fulfillment Tracking Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-solid text-sm font-medium" style={{ borderColor: 'var(--studio-bg)', color: 'var(--studio-moss)' }}>
                    {filteredOrders.map((order) => (
                      <tr key={order.orderId} className="hover:bg-amber-50/30 transition-colors">
                        <td className="p-4 font-mono font-bold text-stone-900">{order.orderId}</td>
                        <td className="p-4 text-xs font-mono text-stone-400">
                          {new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="p-4 font-bold text-stone-800">{order.productTitle}</td>
                        <td className="p-4 space-y-0.5 max-w-xs">
                          <p className="font-bold text-slate-900">{order.customerName}</p>
                          <p className="text-stone-400 font-mono text-xs">{order.customerPhone}</p>
                          <p className="text-stone-500 text-[11px] leading-relaxed bg-stone-50 p-2 rounded-lg border mt-1 italic">{order.shippingAddress}</p>
                        </td>
                        <td className="p-4 font-mono font-bold text-amber-700">LKR {order.totalAmount.toLocaleString()}</td>
                        <td className="p-4 text-right">
                          <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.orderId, e.target.value)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-bold bg-white focus:outline-none ${
                              order.status === 'Shipped' ? 'text-emerald-700 border-emerald-300 bg-emerald-50/50' :
                              order.status === 'Laser Cutting' ? 'text-sky-700 border-sky-300 bg-sky-50/50' :
                              'text-amber-700 border-amber-300 bg-amber-50/50'
                            }`}
                          >
                            <option value="Pending Production">⏳ Pending Production</option>
                            <option value="Laser Cutting">⚡ Laser Cutting</option>
                            <option value="Shipped">🚚 Shipped via Delivery</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}