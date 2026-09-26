"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// TYPES
// ==========================================

type ProductForm = {
  _id?: string;
  slug: string;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  material: string;
  priceLkr: number;
  discountPercent: number;
  featured: boolean;
  available: boolean;
  image: string;
  customizable: boolean;
  type: "ready" | "custom";
};

const CATEGORIES = [
  "Awards",
  "Clocks",
  "LED Signs",
  "Notebooks",
  "Wedding",
  "Signage",
  "Keychains",
  "Decor",
];

const emptyForm: ProductForm = {
  slug: "",
  title: "",
  category: "Awards",
  subcategory: "",
  description: "",
  material: "",
  priceLkr: 0,
  discountPercent: 0,
  featured: false,
  available: true,
  image: "",
  customizable: true,
  type: "custom",
};

// ==========================================
// MAIN PAGE
// ==========================================

export default function AdminProductsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [products, setProducts] = useState<ProductForm[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [editing, setEditing] = useState<ProductForm | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formError, setFormError] = useState("");

  // Auth check on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const token = sessionStorage.getItem("admin_token_v2");
    if (token === "lasertech2026") {
      setIsAuthenticated(true);
      loadProducts();
    }
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === "lasertech2026") {
      sessionStorage.setItem("admin_token_v2", password);
      setIsAuthenticated(true);
      loadProducts();
    } else {
      setAuthError("Incorrect password.");
      setPassword("");
    }
  };

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openNewModal = () => {
    setEditing({ ...emptyForm });
    setFormError("");
    setShowModal(true);
  };

  const openEditModal = (product: ProductForm) => {
    setEditing({ ...product });
    setFormError("");
    setShowModal(true);
  };

  const closeModal = () => {
    if (saving) return;
    setShowModal(false);
    setEditing(null);
    setFormError("");
  };

  const handleFieldChange = (field: keyof ProductForm, value: any) => {
    if (!editing) return;
    setEditing({ ...editing, [field]: value });
    setFormError("");
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      handleFieldChange("image", data.path);
    } catch (err: any) {
      setFormError(err.message || "Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!editing) return;

    // Validation
    if (!editing.title.trim()) return setFormError("Title is required.");
    if (!editing.category.trim()) return setFormError("Category is required.");
    if (!editing.image.trim()) return setFormError("Please upload an image.");

    // Auto-slug
    const slug =
      editing.slug ||
      editing.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    setSaving(true);
    setFormError("");

    try {
      const payload = { ...editing, slug };
      const isUpdate = !!editing._id;
      const res = await fetch("/api/admin/products", {
        method: isUpdate ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Save failed");

      await loadProducts();
      setShowModal(false);
      setEditing(null);
    } catch (err: any) {
      setFormError(err.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (product: ProductForm) => {
    if (!product._id) return;
    if (
      !confirm(
        `Delete "${product.title}"? This cannot be undone.\n\nThe image file will remain in the folder but the product will be removed.`
      )
    )
      return;

    try {
      const res = await fetch(`/api/admin/products?id=${product._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      await loadProducts();
    } catch (err) {
      alert("Failed to delete. Please try again.");
    }
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
            <h1 className="font-heading text-3xl font-semibold text-walnut">
              Admin Products
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
                className="w-full px-4 py-3.5 rounded-lg border border-wood-border bg-ivory text-charcoal text-center tracking-widest font-mono focus:border-copper focus:outline-none"
              />
              {authError && (
                <div className="text-xs font-bold text-error bg-error-bg py-2.5 px-3 rounded-lg border border-error/30">
                  ⚠ {authError}
                </div>
              )}
              <button type="submit" className="btn-primary w-full">
                Unlock
              </button>
            </form>
            <Link
              href="/admin"
              className="text-xs text-taupe hover:text-copper"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // MAIN VIEW
  // ==========================================

  const filtered = products.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <div className="bg-walnut text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-oak">
              Admin
            </p>
            <h1 className="font-heading text-2xl font-semibold">
              Products ({products.length})
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
              onClick={openNewModal}
              className="px-5 py-2.5 rounded-lg bg-copper text-white text-xs font-bold uppercase tracking-wider hover:bg-copper-dark transition"
            >
              + Add Product
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
        {/* Search + Filter */}
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[200px] px-4 py-2.5 rounded-lg border border-wood-border bg-surface text-sm focus:border-copper focus:outline-none"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2.5 rounded-lg border border-wood-border bg-surface text-sm focus:border-copper focus:outline-none"
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Product List */}
        {loading ? (
          <div className="card-soft p-12 text-center text-taupe">
            Loading products…
          </div>
        ) : filtered.length === 0 ? (
          <div className="card-soft p-12 text-center space-y-3">
            <p className="font-heading text-xl text-walnut">
              {search || categoryFilter !== "All"
                ? "No products match your filters"
                : "No products yet"}
            </p>
            <p className="text-sm text-taupe">
              Click "+ Add Product" to create your first product.
            </p>
          </div>
        ) : (
          <div className="card-soft overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-sand border-b border-wood-border">
                  <tr>
                    <th className="p-3 text-xs font-bold uppercase text-walnut">
                      Image
                    </th>
                    <th className="p-3 text-xs font-bold uppercase text-walnut">
                      Product
                    </th>
                    <th className="p-3 text-xs font-bold uppercase text-walnut">
                      Category
                    </th>
                    <th className="p-3 text-xs font-bold uppercase text-walnut text-right">
                      Price
                    </th>
                    <th className="p-3 text-xs font-bold uppercase text-walnut">
                      Type
                    </th>
                    <th className="p-3 text-xs font-bold uppercase text-walnut text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-wood-border">
                  {filtered.map((p) => (
                    <tr
                      key={p._id || p.slug}
                      className="hover:bg-sand/40 transition-colors"
                    >
                      <td className="p-3">
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-sand border border-wood-border">
                          {p.image && (
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                      </td>
                      <td className="p-3">
                        <p className="font-bold text-walnut text-sm">
                          {p.title}
                        </p>
                        <p className="text-xs text-taupe font-mono">
                          {p.slug}
                        </p>
                      </td>
                      <td className="p-3">
                        <span className="text-xs text-taupe">
                          {p.category}
                          {p.subcategory ? ` / ${p.subcategory}` : ""}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <p className="font-bold text-walnut text-sm">
                          {p.priceLkr > 0
                            ? `LKR ${p.priceLkr.toLocaleString()}`
                            : "Quote"}
                        </p>
                        {p.discountPercent > 0 && (
                          <p className="text-xs text-copper">
                            {p.discountPercent}% off
                          </p>
                        )}
                      </td>
                      <td className="p-3">
                        {p.type === "ready" ? (
                          <span className="status-success text-[10px]">
                            Ready
                          </span>
                        ) : (
                          <span className="status-pending text-[10px]">
                            Custom
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-right space-x-2 whitespace-nowrap">
                        <button
                          onClick={() => openEditModal(p)}
                          className="px-3 py-1.5 rounded-lg bg-walnut text-white text-xs font-bold hover:bg-espresso transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(p)}
                          className="px-3 py-1.5 rounded-lg border border-error text-error text-xs font-bold hover:bg-error-bg transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showModal && editing && (
        <div className="fixed inset-0 bg-charcoal/60 z-50 overflow-y-auto p-4">
          <div className="max-w-2xl mx-auto my-8 bg-surface rounded-2xl shadow-2xl">
            <form onSubmit={handleSave}>
              {/* Modal Header */}
              <div className="bg-walnut text-white px-6 py-4 flex items-center justify-between rounded-t-2xl">
                <h2 className="font-heading text-xl font-semibold">
                  {editing._id ? "Edit Product" : "New Product"}
                </h2>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-sand hover:text-white text-2xl leading-none"
                  disabled={saving}
                >
                  ×
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                {/* Image Upload */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                    Product Image *
                  </label>
                  <div className="flex gap-4 items-start">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-sand border border-wood-border flex-shrink-0">
                      {editing.image ? (
                        <Image
                          src={editing.image}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-2xl text-taupe">
                          📷
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(file);
                        }}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="inline-block px-4 py-2 rounded-lg bg-copper text-white text-xs font-bold uppercase tracking-wider hover:bg-copper-dark transition cursor-pointer"
                      >
                        {uploading ? "Uploading…" : "Upload Image"}
                      </label>
                      <input
                        type="text"
                        placeholder="or type path: /products/name.jpg"
                        value={editing.image}
                        onChange={(e) =>
                          handleFieldChange("image", e.target.value)
                        }
                        className="w-full px-3 py-2 rounded-lg border border-wood-border bg-ivory text-xs font-mono focus:border-copper focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                    Product Title *
                  </label>
                  <input
                    type="text"
                    value={editing.title}
                    onChange={(e) => handleFieldChange("title", e.target.value)}
                    required
                    placeholder="e.g. Teacher Thank You Awards"
                    className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                  />
                </div>

                {/* Category + Subcategory */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                      Category *
                    </label>
                    <select
                      value={editing.category}
                      onChange={(e) =>
                        handleFieldChange("category", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                      Subcategory
                    </label>
                    <input
                      type="text"
                      value={editing.subcategory}
                      onChange={(e) =>
                        handleFieldChange("subcategory", e.target.value)
                      }
                      placeholder="e.g. Teacher Awards"
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                    Description
                  </label>
                  <textarea
                    value={editing.description}
                    onChange={(e) =>
                      handleFieldChange("description", e.target.value)
                    }
                    rows={3}
                    placeholder="Short description shown to customers"
                    className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none resize-none"
                  />
                </div>

                {/* Material */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                    Material
                  </label>
                  <input
                    type="text"
                    value={editing.material}
                    onChange={(e) =>
                      handleFieldChange("material", e.target.value)
                    }
                    placeholder="e.g. Mahogany wood"
                    className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                  />
                </div>

                {/* Price + Discount + Type */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                      Price (LKR)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={editing.priceLkr}
                      onChange={(e) =>
                        handleFieldChange(
                          "priceLkr",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                    />
                    <p className="text-[10px] text-taupe mt-1">
                      0 = "Request a Quote"
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                      Discount %
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={editing.discountPercent}
                      onChange={(e) =>
                        handleFieldChange(
                          "discountPercent",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-walnut mb-2">
                      Type
                    </label>
                    <select
                      value={editing.type}
                      onChange={(e) =>
                        handleFieldChange("type", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg border border-wood-border bg-ivory text-charcoal focus:border-copper focus:outline-none"
                    >
                      <option value="custom">Made to Order</option>
                      <option value="ready">Ready to Ship</option>
                    </select>
                  </div>
                </div>

                {/* Toggles */}
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editing.available}
                      onChange={(e) =>
                        handleFieldChange("available", e.target.checked)
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-bold text-walnut">
                      Available
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editing.featured}
                      onChange={(e) =>
                        handleFieldChange("featured", e.target.checked)
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-bold text-walnut">
                      Featured
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editing.customizable}
                      onChange={(e) =>
                        handleFieldChange("customizable", e.target.checked)
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-bold text-walnut">
                      Customizable
                    </span>
                  </label>
                </div>

                {/* Error */}
                {formError && (
                  <div className="bg-error-bg border border-error/30 rounded-lg p-3 text-xs text-error font-bold">
                    ⚠ {formError}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-wood-border flex gap-3 justify-end rounded-b-2xl">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="px-5 py-2.5 rounded-lg border border-wood-border text-walnut text-xs font-bold uppercase hover:bg-sand transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || uploading}
                  className="px-5 py-2.5 rounded-lg bg-copper text-white text-xs font-bold uppercase hover:bg-copper-dark transition disabled:opacity-50"
                >
                  {saving
                    ? "Saving…"
                    : editing._id
                    ? "Save Changes"
                    : "Create Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}