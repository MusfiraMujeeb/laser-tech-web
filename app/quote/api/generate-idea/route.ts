import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const { thought } = await request.json();

    if (!thought) {
      return NextResponse.json({ error: 'Thought parameter is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key is unconfigured on the server environment.' }, { status: 500 });
    }

    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const systematicPrompt = `
      You are an expert AI designer working for "Laser Tech", a premium workshop specializing in custom laser cutting, structural wood assembly, engraving, and acrylic fabrication.
      
      The user has provided this raw, unstructured gift context: "${thought}"
      
      Generate exactly 3 separate, highly detailed design concepts tailored specifically to this request.
      Each concept must strictly follow this structure down to the character, separated by a unique line delimiter sequence "---SPLIT---" between them. Do not include markdown code wrappers or bold asterisk characters.
      
      Format exact blueprint output rule template:
      Concept X: [Descriptive Catchy Title]
      • Material: [Must be exactly one of these: "Wood / MDF" OR "Acrylic (Perspex)" OR "Paper / Card Stock"]
      • Design Details: [A detailed 2-sentence description of the design, typography elements, layout specs, visual cuts, and structural parameters like hidden LED light tracking frameworks.]
    `;

    // 🟢 Fix: Explicitly request text/plain to avoid unexpected markdown block injections
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: systematicPrompt }] }],
      generationConfig: {
        responseMimeType: 'text/plain',
      }
    });
    
    let textOutput = result.response.text();

    // 🟢 Cleanup: Clean up accidental markdown tags if the model ignores the config block rules
    textOutput = textOutput.replace(/```xml|```text|```html|```/g, '').trim();

    const suggestions = textOutput
      .split('---SPLIT---')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    return NextResponse.json({ suggestions });
  } catch (error: any) {
    console.error('API Server Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}