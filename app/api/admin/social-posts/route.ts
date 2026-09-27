import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import { SocialPost } from "@/models/SocialPost";

export async function GET() {
  try {
    await connectMongo();
    const posts = await SocialPost.find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();
    const post = await SocialPost.create(body);
    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();
    const { _id, ...updates } = body;
    if (!_id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    const post = await SocialPost.findByIdAndUpdate(_id, updates, { new: true });
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectMongo();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    await SocialPost.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}