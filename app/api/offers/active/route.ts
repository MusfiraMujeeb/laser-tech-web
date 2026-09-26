import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import { Offer } from "@/models/Offer";

export async function GET() {
  try {
    await connectMongo();
    const now = new Date();
    const offers = await Offer.find({
      active: true,
      endDate: { $gte: now },
      startDate: { $lte: now },
    })
      .sort({ createdAt: -1 })
      .lean();
    return NextResponse.json({ offers });
  } catch (error) {
    return NextResponse.json({ offers: [] });
  }
}