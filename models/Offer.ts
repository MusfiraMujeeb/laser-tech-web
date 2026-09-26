import mongoose, { Schema, models, model } from "mongoose";

export type OfferType = "percentage" | "fixed" | "free-delivery";
export type OfferScope = "all" | "category" | "product";

export interface IOffer {
  name: string;
  code: string;
  type: OfferType;
  value: number;
  scope: OfferScope;
  targetCategory: string;
  targetSlug: string;
  minOrderValue: number;
  startDate: Date;
  endDate: Date;
  active: boolean;
  usageLimit: number;
  usedCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const OfferSchema = new Schema<IOffer>(
  {
    name: { type: String, required: true },
    code: { type: String, default: "", index: true },
    type: {
      type: String,
      enum: ["percentage", "fixed", "free-delivery"],
      default: "percentage",
    },
    value: { type: Number, default: 0 },
    scope: {
      type: String,
      enum: ["all", "category", "product"],
      default: "all",
    },
    targetCategory: { type: String, default: "" },
    targetSlug: { type: String, default: "" },
    minOrderValue: { type: Number, default: 0 },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) },
    active: { type: Boolean, default: true },
    usageLimit: { type: Number, default: 0 },
    usedCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Offer = models.Offer || model<IOffer>("Offer", OfferSchema);