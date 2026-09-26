import mongoose, { Schema, models, model } from "mongoose";

export type ProductType = "ready" | "custom";

export interface IProduct {
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
  type: ProductType;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true, index: true },
    subcategory: { type: String, default: "" },
    description: { type: String, default: "" },
    material: { type: String, default: "" },
    priceLkr: { type: Number, default: 0 },
    discountPercent: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    available: { type: Boolean, default: true },
    image: { type: String, default: "" },
    customizable: { type: Boolean, default: false },
    type: {
      type: String,
      enum: ["ready", "custom"],
      default: "custom",
      index: true,
    },
  },
  { timestamps: true }
);

export const Product =
  models.Product || model<IProduct>("Product", ProductSchema);