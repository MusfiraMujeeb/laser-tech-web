"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";

type Product = {
  _id: string;
  title: string;
  category: string;
  description: string;
  priceLkr: number;
  material: string;
};

type Offer = {
  _id: string;
  name: string;
  type: "percentage" | "fixed" | "free-delivery";
  value: number;
  code: string;
};

type SocialPost = {
  _id: string;
  topicType: string;
  topicReference: string;
  instagramCaption: string;
  facebookCaption: string;
  hashtags: string;
  sinhalaVersion: string;
  status: "draft" | "posted";
  postedAt: string | null;
  createdAt: string;
};

export default function AdminSocialPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [products, setProducts] = useState<Product[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [posts, setPosts] = useState<SocialPost[]>([]);

  const [topicType, setTopicType] = useState<"product" | "offer" | "custom">(
    "product"
  );
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedOfferId, setSelectedOfferId] = useState("");
  const [customTopic, setCustomTopic] = useState("");

  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState<{
    instagramCaption: string;
    facebookCaption: string;
    hashtags: string;
    sinhalaVersion: string;
  } | null>(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("admin_token_v2") === "lasertech2026") {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === "lasertech2026") {
      sessionStorage.setItem("admin_token_v2", password);
      setIsAuthenticated(true);
      loadData();
    } else {
      setAuthError("Incorrect password.");
      setPassword("");
    }
  };

  const loadData = async () => {
    try {
      const [prodRes, offerRes, postRes] = await Promise.all([
        fetch("/api/admin/products"),
        fetch("/api/admin/offers"),
        fetch("/api/admin/social-posts"),
      ]);
      const prodData = await prodRes.json();
      const offerData = await offerRes.json();
      const postData = await postRes.json();
      setProducts(prodData.products || []);
      setOffers(offerData.offers || []);
      setPosts(postData.posts || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerate = async () => {
    setError("");
    setGenerated(null);

    let topicReference = "";
    let productInfo = null;
    let offerInfo = null;

    if (topicType === "product") {
      const p = products.find((p) => p._id === selectedProductId);
      if (!p) return setError("Please select a product.");
      productInfo = p;
      topicReference = p.title;
    } else if (topicType === "offer") {
      const o = offers.find((o) => o._id === selectedOfferId);
      if (!o) return setError("Please select an offer.");
      offerInfo = o;
      topicReference = o.name;
    } else {
      if (!customTopic.trim()) return setError("Please enter a topic.");
      topicReference = customTopic;
    }

    setGenerating(true);
    try {
      const res = await fetch("/api/admin/social-posts/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicType,
          topicReference,
          productInfo,
          offerInfo,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setGenerated({
        instagramCaption: data.instagramCaption,
        facebookCaption: data.facebookCaption,
        hashtags: data.hashtags,
        sinhalaVersion: data.sinhalaVersion,
      });
    } catch (err: any) {
      setError(err.message || "Generation failed");
    } finally {
      setGenerating(false);
    }
  };

  const handleSave = async (status: "draft" | "posted") => {
    if (!generated) return;
    setSaving(true);
    try {
      const topicReference =
        topicType === "product"
          ? products.find((p) => p._id === selectedProductId)?.title || ""
          : topicType === "offer"
          ? offers.find((o) => o._id === selectedOfferId)?.name || ""
          : customTopic;

      const res = await fetch("/api/admin/social-posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topicType,
          topicReference,
          ...generated,
          status,
          postedAt: status === "posted" ? new Date().toISOString() : null,
        }),
      });
      if (!res.ok) throw new Error("Save failed");
      await loadData();
      setGenerated(null);
      setCustomTopic("");
      setSelectedProductId("");
      setSelectedOfferId("");
    } catch (err) {
      setError("Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const handleMarkPosted = async (post: SocialPost) => {
    if (!confirm("Mark this post as published?")) return;
    await fetch("/api/admin/social-posts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: post._id,
        status: "posted",
        postedAt: new Date().toISOString(),
      }),
    });
    loadData();
  };

  const handleDelete = async (post: SocialPost) => {
    if (!confirm("Delete this draft?")) return;
    await fetch(`/api/admin/social-posts?id=${post._id}`, { method: "DELETE" });
    loadData();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
        <div className="w-full max-w-md card-soft p-10 text-center space-y-6">
          <div className="text-5xl">📱</div>
          <h1 className="font-heading text-3xl font-semibold text-walnut">
            Social Media Manager
          </h1>
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
              className="w-full px-4 py-3.5 rounded-lg border border-wood-border bg-ivory text-center tracking-widest font-mono focus:border-copper focus:outline-none"
            />
            {authError && (
              <div className="text-xs font-bold text-error bg-error-bg py-2.5 rounded-lg border border-error/30">
                ⚠ {authError}
              </div>
            )}
            <button type="submit" className="btn-primary w-full">
              Unlock
            </button>
          </form>
          <Link href="/admin" className="text-xs text-taupe hover:text-copper">
            ← Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige">
      <div className="bg-walnut text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-oak">
              Admin
            </p>
            <h1 className="font-heading text-2xl font-semibold">
              Social Media Manager
            </h1>
          </div>
          <Link
            href="/admin"
            className="text-xs font-bold uppercase tracking-wider text-sand hover:text-white"
          >
            ← Dashboard
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="card-soft p-6 space-y-5">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-walnut">
                Generate Caption
              </h2>
              <p className="text-sm text-taupe mt-1">
                AI will write Instagram and Facebook captions based on what
                you&apos;re promoting.
              </p>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-walnut">
                What are you promoting?
              </label>
              <div className="flex gap-2">
                {[
                  { key: "product", label: "Product" },
                  { key: "offer", label: "Offer" },
                  { key: "custom", label: "Custom Topic" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setTopicType(tab.key as any)}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                      topicType === tab.key
                        ? "bg-copper text-white"
                        : "bg-ivory border border-wood-border text-walnut hover:border-copper"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {topicType === "product" && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                  Select Product
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none"
                >
                  <option value="">Choose a product…</option>
                  {products.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.title} ({p.category})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {topicType === "offer" && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                  Select Offer
                </label>
                <select
                  value={selectedOfferId}
                  onChange={(e) => setSelectedOfferId(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none"
                >
                  <option value="">Choose an offer…</option>
                  {offers.map((o) => (
                    <option key={o._id} value={o._id}>
                      {o.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {topicType === "custom" && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                  What do you want to promote?
                </label>
                <textarea
                  rows={3}
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  placeholder="e.g. We just finished a large order of 50 wedding invitation frames for a Colombo customer."
                  className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none resize-none"
                />
              </div>
            )}

            {error && (
              <div className="bg-error-bg border border-error/30 rounded-lg p-3 text-xs text-error font-bold">
                ⚠ {error}
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={generating}
              className="btn-primary w-full"
            >
              {generating ? "Generating…" : "✨ Generate Caption"}
            </button>
          </div>

          {generated && (
            <div className="card-soft p-6 space-y-5">
              <h2 className="font-heading text-2xl font-semibold text-walnut">
                Generated Content
              </h2>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-copper">
                    📸 Instagram Caption
                  </label>
                  <button
                    onClick={() => copyToClipboard(generated.instagramCaption)}
                    className="text-xs font-bold text-walnut hover:text-copper"
                  >
                    Copy
                  </button>
                </div>
                <textarea
                  value={generated.instagramCaption}
                  onChange={(e) =>
                    setGenerated({
                      ...generated,
                      instagramCaption: e.target.value,
                    })
                  }
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none resize-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-copper">
                    👥 Facebook Caption
                  </label>
                  <button
                    onClick={() => copyToClipboard(generated.facebookCaption)}
                    className="text-xs font-bold text-walnut hover:text-copper"
                  >
                    Copy
                  </button>
                </div>
                <textarea
                  value={generated.facebookCaption}
                  onChange={(e) =>
                    setGenerated({
                      ...generated,
                      facebookCaption: e.target.value,
                    })
                  }
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none resize-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-copper">
                    # Hashtags
                  </label>
                  <button
                    onClick={() => copyToClipboard(generated.hashtags)}
                    className="text-xs font-bold text-walnut hover:text-copper"
                  >
                    Copy
                  </button>
                </div>
                <textarea
                  value={generated.hashtags}
                  onChange={(e) =>
                    setGenerated({ ...generated, hashtags: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none resize-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-copper">
                    🇱🇰 Sinhala Version
                  </label>
                  <button
                    onClick={() => copyToClipboard(generated.sinhalaVersion)}
                    className="text-xs font-bold text-walnut hover:text-copper"
                  >
                    Copy
                  </button>
                </div>
                <textarea
                  value={generated.sinhalaVersion}
                  onChange={(e) =>
                    setGenerated({
                      ...generated,
                      sinhalaVersion: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-sm focus:border-copper focus:outline-none resize-none"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => handleSave("draft")}
                  disabled={saving}
                  className="btn-secondary"
                >
                  {saving ? "Saving…" : "Save as Draft"}
                </button>
                <button
                  onClick={() => handleSave("posted")}
                  disabled={saving}
                  className="btn-primary"
                >
                  {saving ? "Saving…" : "Mark as Posted"}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-heading text-xl font-semibold text-walnut">
            Recent Posts ({posts.length})
          </h2>

          {posts.length === 0 ? (
            <div className="card-soft p-8 text-center text-sm text-taupe">
              No saved posts yet. Generate your first caption to get started.
            </div>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <div key={post._id} className="card-soft p-4 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={
                        post.status === "posted"
                          ? "status-success text-[10px]"
                          : "status-pending text-[10px]"
                      }
                    >
                      {post.status === "posted" ? "Posted" : "Draft"}
                    </span>
                    <span className="text-[10px] text-taupe">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-walnut">
                    {post.topicReference || "Untitled"}
                  </p>
                  <p className="text-xs text-taupe line-clamp-3">
                    {post.instagramCaption}
                  </p>
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => copyToClipboard(post.instagramCaption)}
                      className="text-[10px] font-bold text-copper hover:text-copper-dark"
                    >
                      Copy IG
                    </button>
                    <button
                      onClick={() => copyToClipboard(post.facebookCaption)}
                      className="text-[10px] font-bold text-copper hover:text-copper-dark"
                    >
                      Copy FB
                    </button>
                    {post.status === "draft" && (
                      <button
                        onClick={() => handleMarkPosted(post)}
                        className="text-[10px] font-bold text-whatsapp hover:opacity-70"
                      >
                        Mark Posted
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(post)}
                      className="text-[10px] font-bold text-error hover:opacity-70 ml-auto"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}