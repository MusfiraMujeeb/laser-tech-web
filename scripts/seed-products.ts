import { config } from "dotenv";
config({ path: ".env.local" });

import mongoose from "mongoose";
import { Product } from "../models/Product";
import { productItems } from "../app/data/products";

async function seed() {
  const MONGODB_URI = process.env.MONGODB_URI;
  const MONGODB_DB = process.env.MONGODB_DB || "laser-tech";

  if (!MONGODB_URI) {
    console.error("MONGODB_URI not set in .env.local");
    process.exit(1);
  }

  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB });
  console.log(`Connected to database: ${MONGODB_DB}`);

  const existing = await Product.countDocuments();
  if (existing > 0) {
    console.log(`Deleting ${existing} existing products...`);
    await Product.deleteMany({});
  }

  const productsToInsert = productItems.map((p) => ({
    ...p,
    type: p.priceLkr > 0 ? "ready" : "custom",
  }));

  console.log(`Inserting ${productsToInsert.length} products...`);
  const inserted = await Product.insertMany(productsToInsert);

  console.log(`Successfully inserted ${inserted.length} products.`);
  console.log("");
  console.log("Sample products:");
  inserted.slice(0, 3).forEach((p) => {
    console.log(
      `  - ${p.title} (${p.category}) — ${
        p.priceLkr > 0 ? `LKR ${p.priceLkr}` : "Quote"
      }`
    );
  });

  await mongoose.disconnect();
  console.log("");
  console.log("Seeding complete! Database disconnected.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});