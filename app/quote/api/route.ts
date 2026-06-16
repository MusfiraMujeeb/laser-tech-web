export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';
import Quote from '../../../models/Quote';

const fallbackQuotes = ((globalThis as any).__laserTechFallbackQuotes ??= []);

function isMongoConfigured() {
  const uri = process.env.MONGODB_URI || '';

  return Boolean(
    uri &&
      !uri.includes('<username>') &&
      !uri.includes('<password>') &&
      !uri.includes('cluster0.xxxxx')
  );
}

// 1. GET HANDLER: Verifies credentials before returning logs to the Admin view
export async function GET(request: Request) {
  try {
    // Read the authorization parameter passed by the frontend headers
    const { searchParams } = new URL(request.url);
    const passwordAttempt = searchParams.get('auth');

    // Compare with your secure system environment variable
    if (!passwordAttempt || passwordAttempt !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Unauthorized system access credentials.' },
        { status: 401 }
      );
    }

    if (!isMongoConfigured()) {
      return NextResponse.json(fallbackQuotes.slice(0, 25), { status: 200 });
    }

    await connectToDatabase();
    const quotes = await Quote.find({}).sort({ createdAt: -1 });

    return NextResponse.json(quotes, { status: 200 });
  } catch (error: any) {
    console.error('❌ Cloud Database Fetch Error:', error);
    return NextResponse.json(
      { error: 'Failed to aggregate orders from server clusters.' },
      { status: 500 }
    );
  }
}

// 2. POST HANDLER: Captures multi-part payloads from clients (No password needed to submit quotes)
export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const service = formData.get('service');
    const material = formData.get('material');
    const dimensions = formData.get('dimensions');
    const description = formData.get('description');

    if (!name || !phone || !email || !description) {
      return NextResponse.json(
        { error: 'Required specification fields are missing.' },
        { status: 400 }
      );
    }

    if (!isMongoConfigured()) {
      const fallbackRecord = {
        _id: `local-${Date.now()}`,
        name: String(name),
        phone: String(phone),
        email: String(email),
        service: service ? String(service) : 'Not specified',
        material: material ? String(material) : 'Not specified',
        dimensions: dimensions ? String(dimensions) : 'Not specified',
        description: String(description),
        createdAt: new Date().toISOString(),
      };

      fallbackQuotes.unshift(fallbackRecord);
      console.warn('⚠️ MongoDB is not configured; quote request was recorded in memory only.');

      return NextResponse.json(
        {
          message: 'Your request was received. Database storage is currently unavailable, so this quote was saved locally for this session only.',
          id: fallbackRecord._id,
          storedLocally: true,
        },
        { status: 200 }
      );
    }

    await connectToDatabase();
    const newQuote = await Quote.create({
      name,
      phone,
      email,
      service,
      material,
      dimensions: dimensions || 'Not specified',
      description,
    });

    console.log(`💾 Success: New Quote logged directly into MongoDB under ID: ${newQuote._id}`);

    return NextResponse.json(
      { message: 'Your specifications have been saved successfully!', id: newQuote._id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Cloud Database Submission Error:', error);
    return NextResponse.json(
      { error: 'Database transaction failed.' },
      { status: 500 }
    );
  }
}