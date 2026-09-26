import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import { Offer } from "@/models/Offer";

export async function GET() {
  try {
    await connectMongo();
    const offers = await Offer.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ offers });
  } catch (error) {
    console.error("GET offers failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch offers" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();
    const offer = await Offer.create(body);
    return NextResponse.json({ offer }, { status: 201 });
  } catch (error) {
    console.error("POST offer failed:", error);
    return NextResponse.json(
      { error: "Failed to create offer" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();
    const { _id, ...updates } = body;
    if (!_id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }
    const offer = await Offer.findByIdAndUpdate(_id, updates, { new: true });
    return NextResponse.json({ offer });
  } catch (error) {
    console.error("PUT offer failed:", error);
    return NextResponse.json(
      { error: "Failed to update offer" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectMongo();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }
    await Offer.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE offer failed:", error);
    return NextResponse.json(
      { error: "Failed to delete offer" },
      { status: 500 }
    );
  }
}