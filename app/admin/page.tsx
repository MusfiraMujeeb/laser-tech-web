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
  fileUrl?: string; // Appended property to track the uploaded cloud storage URL
  createdAt: string;
}

export default function AdminDashboard() {
  const [quotes, setQuotes] = useState<QuoteItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [filter, setFilter] = useState('All');

  // Asynchronous verification call triggered on login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthError('');

    try {
      // Send credential string safely appended as an authorization search parameter
      const res = await fetch(`/quote/api?auth=${encodeURIComponent(password)}`);
      
      if (res.ok) {
        const data = await res.json();
        setQuotes(data);
        setIsAuthenticated(true);
        // Persist session locally so page refreshes don't instantly log them out during the presentation
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

  // Auto-login helper if session token exists in active browser tab memory
  useEffect(() => {
    const savedToken = sessionStorage.getItem('admin_token');
    if (savedToken) {
      const autoFetch = async () => {
        try {
          const res = await fetch(`/quote/api?auth=${encodeURIComponent(savedToken)}`);
          if (res.ok) {
            const data = await res.json();
            setQuotes(data);
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
  };

  const filteredQuotes = filter === 'All' 
    ? quotes 
    : quotes.filter(q => q.service === filter);

  /* --- RENDERING BLOCK 1: SECURE LOGIN INTERFACE GATE --- */
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4" style={{ backgroundColor: 'var(--studio-bg)' }}>
        <div className="p-8 md:p-10 rounded-3xl shadow-xl max-w-sm w-full text-center" style={{ backgroundColor: 'var(--studio-card)', border: '1px solid var(--studio-border)' }}>
          <span className="text-4xl block mb-4">🔐</span>
          <h2 className="text-2xl font-black mb-2" style={{ color: 'var(--studio-moss)' }}>Workshop Terminal Login</h2>
          <p className="text-xs font-semibold uppercase tracking-wider mb-8" style={{ color: 'var(--studio-gold)' }}>Authorized Operational Staff Only</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Terminal Password"
                className="w-full px-4 py-3.5 rounded-xl border focus:outline-none text-center text-sm tracking-widest font-mono"
                style={{ backgroundColor: 'var(--studio-bg)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}
              />
            </div>

            {authError && (
              <p className="text-xs font-bold text-rose-600 bg-rose-50 py-2.5 px-3 rounded-xl border border-rose-200 animate-pulse">
                {authError}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white font-black py-3.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center"
              style={{ backgroundColor: 'var(--studio-moss)' }}
            >
              {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Unlock Orders Core 🔓"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* --- RENDERING BLOCK 2: SECURED MAIN ADMINISTRATION LEDGER --- */
  return (
    <div className="min-h-screen py-12 px-6" style={{ backgroundColor: 'var(--studio-bg)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Dashboard Control Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-6 border-b" style={{ borderColor: 'var(--studio-border)' }}>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black tracking-tight" style={{ color: 'var(--studio-moss)' }}>Workshop Orders Center</h1>
              <button onClick={handleLogout} className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border cursor-pointer text-rose-700 bg-rose-50 border-rose-200 hover:bg-rose-100 transition-colors">
                Lock Terminal 🔒
              </button>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: 'var(--studio-gold)' }}>Laser Tech Operational Log Dashboard</p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Laser Cutting', 'Laser Engraving', 'Corporate Branding / Identity', 'Custom Merchandise Print'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border shadow-xs"
                style={{
                  backgroundColor: filter === category ? 'var(--studio-moss)' : 'var(--studio-card)',
                  color: filter === category ? '#ffffff' : 'var(--studio-moss)',
                  borderColor: 'var(--studio-border)'
                }}
              >
                {category === 'Corporate Branding / Identity' ? 'Corporate' : category === 'Custom Merchandise Print' ? 'Print & Merch' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Matrix */}
        {filteredQuotes.length === 0 ? (
          <div className="text-center py-20 p-8 rounded-3xl border border-dashed" style={{ backgroundColor: 'var(--studio-card)', borderColor: 'var(--studio-border)' }}>
            <span className="text-4xl block mb-2">📁</span>
            <p className="font-bold text-sm" style={{ color: 'var(--studio-moss)' }}>No custom build entries filed under this filter category.</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border shadow-md" style={{ backgroundColor: 'var(--studio-card)', borderColor: 'var(--studio-border)' }}>
            <div className="overflow-x-auto">
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
                      <td className="p-4 align-top whitespace-nowrap text-xs font-mono font-bold" style={{ color: 'var(--studio-muted)' }}>
                        {new Date(quote.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </td>
                      <td className="p-4 align-top max-w-[220px]">
                        <p className="font-black text-slate-900">{quote.name}</p>
                        <p className="text-xs font-semibold" style={{ color: 'var(--studio-muted)' }}>{quote.email}</p>
                        
                        <div className="flex flex-col gap-2 mt-2">
                          <a href={`https://wa.me/${quote.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-700 shadow-xs">
                            💬 WhatsApp
                          </a>
                          
                          {/* Conditional view button execution verifying if a cloud blueprint link exists */}
                          {quote.fileUrl ? (
                            <a href={quote.fileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-800 bg-amber-100 border border-amber-200 shadow-xs hover:bg-amber-200 transition-colors">
                              📐 View Blueprint File
                            </a>
                          ) : (
                            <span className="text-[11px] text-center font-medium italic block py-1" style={{ color: 'var(--studio-muted)' }}>
                              No file attached
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4 align-top">
                        <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-black tracking-wide uppercase mb-1.5 border" style={{ backgroundColor: 'var(--studio-hero)', borderColor: 'var(--studio-border)', color: 'var(--studio-moss)' }}>{quote.service}</span>
                        <p className="text-xs font-medium" style={{ color: 'var(--studio-muted)' }}>Material: <span className="font-bold text-slate-800">{quote.material}</span></p>
                      </td>
                      <td className="p-4 align-top font-mono text-xs font-bold whitespace-nowrap">{quote.dimensions || 'Standard'}</td>
                      <td className="p-4 align-top max-w-sm">
                        <p className="text-xs leading-relaxed text-slate-700 bg-slate-50 p-3 rounded-xl border border-dotted font-medium whitespace-pre-line" style={{ borderColor: 'var(--studio-border)' }}>{quote.description}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}