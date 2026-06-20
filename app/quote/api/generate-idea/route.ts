import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const { thought } = await request.json();

    if (!thought) {
      return NextResponse.json({ error: 'Thought parameter is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini environment variable key missing' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const systematicPrompt = `
      You are an expert AI designer working for "Laser Tech", a premium workshop specializing in custom laser cutting, structural wood assembly, engraving, and acrylic fabrication.
      
      The user has provided this raw, unstructured gift context: "${thought}"
      
      Generate exactly 3 separate, highly detailed design concepts tailored specifically to this request.
      Each concept must strictly follow this text structure down to the character, separated by a unique line delimiter sequence "---SPLIT---" between them. Do not include markdown code wrappers or bold asterisk characters.
      
      Format exact blueprint output rule template:
      Concept X: [Descriptive Catchy Title]
      • Material: [Must be exactly one of these: "Wood / MDF" OR "Acrylic (Perspex)" OR "Paper / Card Stock"]
      • Design Details: [A detailed 2-sentence description of the design, typography elements, layout specs, visual cuts, and structural parameters like hidden LED light tracking frameworks.]
    `;

    const result = await model.generateContent(systematicPrompt);
    const textOutput = result.response.text();

    // Clean up response layout and separate suggestions array fields
    const suggestions = textOutput
      .split('---SPLIT---')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    return NextResponse.json({ suggestions });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}