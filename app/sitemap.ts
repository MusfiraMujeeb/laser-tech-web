import type { MetadataRoute } from "next";
import { connectMongo } from "@/lib/mongodb";
import { Product } from "@/models/Product";

export const dynamic = "force-dynamic";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lasertech.lk";

  const staticPages = [
    "",
    "/products",
    "/quote",
    "/about",
    "/contact",
    "/portfolio",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  try {
    await connectMongo();
    const products = await Product.find({}).select("slug updatedAt").lean();
    const productPages = products.map((p: any) => ({
      url: `${baseUrl}/products/${p.slug}`,
      lastModified: p.updatedAt || new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
    return [...staticPages, ...productPages];
  } catch {
    return staticPages;
  }
}