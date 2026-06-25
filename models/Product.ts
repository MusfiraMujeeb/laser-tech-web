import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    description: { type: String, required: true },
    material: { type: String, required: true },
    image: { type: String, required: true },

    priceLkr: { type: Number, default: 0 },
    discountPercent: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    available: { type: Boolean, default: true },

    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);
export default Product;