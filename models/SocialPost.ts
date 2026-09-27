import mongoose, { Schema, models, model } from "mongoose";

export interface ISocialPost {
  topicType: "product" | "offer" | "custom";
  topicReference: string;
  instagramCaption: string;
  facebookCaption: string;
  hashtags: string;
  sinhalaVersion: string;
  status: "draft" | "posted";
  postedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const SocialPostSchema = new Schema<ISocialPost>(
  {
    topicType: {
      type: String,
      enum: ["product", "offer", "custom"],
      default: "custom",
    },
    topicReference: { type: String, default: "" },
    instagramCaption: { type: String, default: "" },
    facebookCaption: { type: String, default: "" },
    hashtags: { type: String, default: "" },
    sinhalaVersion: { type: String, default: "" },
    status: {
      type: String,
      enum: ["draft", "posted"],
      default: "draft",
    },
    postedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const SocialPost =
  models.SocialPost || model<ISocialPost>("SocialPost", SocialPostSchema);