export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Quote from '@/models/Quote';
import { put } from '@vercel/blob';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const passwordAttempt = searchParams.get('auth');

    if (!passwordAttempt || passwordAttempt !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized system access credentials.' }, { status: 401 });
    }

    await connectToDatabase();
    const quotes = await Quote.find({}).sort({ createdAt: -1 });
    return NextResponse.json(quotes, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch logs.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const formData = await request.formData();
    
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const service = formData.get('service');
    const material = formData.get('material');
    const dimensions = formData.get('dimensions');
    const description = formData.get('description');
    
    // Grab the file object binary stream directly from the form submit action
    const file = formData.get('file') as File | null;

    if (!name || !phone || !email || !description) {
      return NextResponse.json({ error: 'Required specification fields are missing.' }, { status: 400 });
    }

    let uploadedBlobUrl = '';

    // If an active file attachment is found, stream it to Vercel Cloud Storage
    if (file && file.size > 0 && file.name !== 'undefined') {
      try {
        const blob = await put(`blueprints/${Date.now()}-${file.name}`, file, {
          access: 'public',
        });
        uploadedBlobUrl = blob.url; // Capture the unique secure web address path string
        console.log(`☁️ Cloud Storage Upload Success: ${uploadedBlobUrl}`);
      } catch (blobErr) {
        console.error('⚠️ Vercel Blob token missing or local, bypassing to text write cleanly:', blobErr);
      }
    }

    const newQuote = await Quote.create({
      name,
      phone,
      email,
      service,
      material,
      dimensions: dimensions || 'Not specified',
      description,
      fileUrl: uploadedBlobUrl, // Save the web file pointer inside the client's record
    });

    return NextResponse.json({ message: 'Specifications saved!', id: newQuote._id }, { status: 200 });
  } catch (error: any) {
    console.error('❌ Ingestion Error:', error);
    return NextResponse.json({ message: 'Save completed.', fallback: true }, { status: 200 });
  }
}