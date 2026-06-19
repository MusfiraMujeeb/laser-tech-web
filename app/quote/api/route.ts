export const runtime = 'nodejs';
export const dynamic = 'force-dynamic'; // Prevents Vercel from caching your database requests statically

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
    console.error('❌ Admin Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch logs from database.' }, { status: 500 });
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
    const file = formData.get('file') as File | null;

    if (!name || !phone || !email || !description) {
      return NextResponse.json({ error: 'Required specification fields are missing.' }, { status: 400 });
    }

    let uploadedBlobUrl = '';

    // Stream the file attachment to Vercel Blob Storage if it exists
    if (file && file.size > 0 && file.name !== 'undefined') {
      try {
        const blob = await put(`blueprints/${Date.now()}-${file.name}`, file, {
          access: 'public',
        });
        uploadedBlobUrl = blob.url;
        console.log(`☁️ Cloud Storage Upload Success: ${uploadedBlobUrl}`);
      } catch (blobErr) {
        console.error('⚠️ Vercel Blob upload failed:', blobErr);
        // We throw an explicit error here so the pipeline stops if a file upload fails
        return NextResponse.json({ error: 'Cloud asset storage upload failed.' }, { status: 500 });
      }
    }

    // Save the document row to your live MongoDB Atlas Cluster
    const newQuote = await Quote.create({
      name: String(name),
      phone: String(phone),
      email: String(email),
      service: String(service),
      material: String(material),
      dimensions: dimensions ? String(dimensions) : 'Not specified',
      description: String(description),
      fileUrl: uploadedBlobUrl,
    });

    return NextResponse.json({ message: 'Specifications saved!', id: newQuote._id }, { status: 200 });
  } catch (error: any) {
    console.error('❌ Database Ingestion Failure:', error);
    // CRITICAL FIX: Return a 500 server error status so the front-end knows the save failed!
    return NextResponse.json({ error: 'Database pipeline rejected submission.' }, { status: 500 });
  }
}