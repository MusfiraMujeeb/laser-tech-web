import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { topicType, topicReference, productInfo, offerInfo } =
      await req.json();

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "AI service not configured. Please contact support." },
        { status: 500 }
      );
    }

    // Build the prompt
    let topic = "";
    if (topicType === "product" && productInfo) {
      topic = `Product: ${productInfo.title}. Category: ${productInfo.category}. Description: ${productInfo.description}. Price: ${productInfo.priceLkr > 0 ? `LKR ${productInfo.priceLkr}` : "Available on request"}. Material: ${productInfo.material || "custom"}`;
    } else if (topicType === "offer" && offerInfo) {
      topic = `Special Offer: ${offerInfo.name}. Type: ${
        offerInfo.type === "percentage"
          ? `${offerInfo.value}% discount`
          : offerInfo.type === "fixed"
          ? `LKR ${offerInfo.value} off`
          : "Free delivery"
      }. Coupon code: ${offerInfo.code || "none"}.`;
    } else {
      topic = topicReference || "Laser Tech laser cutting and engraving services";
    }

    const prompt = `You are a social media copywriter for "Laser Tech", a premium laser cutting and engraving studio in Mawanella, Sri Lanka. The company motto is "The Art of Engraving, Uniquely Yours."

Your task: Write social media content about the following topic.

TOPIC:
${topic}

Generate the following in EXACTLY this JSON format (no markdown, just raw JSON):

{
  "instagramCaption": "A warm, engaging Instagram caption (2-3 short paragraphs, use line breaks, 3-5 relevant emojis). Feel premium and handcrafted. End with a call-to-action mentioning WhatsApp +94 75 799 1141.",
  "facebookCaption": "A slightly more professional Facebook caption (2-3 paragraphs). Include the address '33/1 Kandy - Colombo Road, Mawanella' and phone '+94 75 799 1141'.",
  "hashtags": "20-25 hashtags separated by spaces. Mix of: #LaserTechSriLanka #LaserEngraving #SriLanka #CustomGifts #Mawanella #PersonalizedGifts #WoodEngraving and other relevant ones.",
  "sinhalaVersion": "A short 2-3 sentence version in Sinhala (native script). Keep it warm and inviting."
}

Keep the tone warm, premium, and inviting. Do not use overly salesy language.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 2048,
          },
        }),
      }
    );

    if (!response.ok) {
  const err = await response.text();
  console.error("Gemini API error:", err);
  return NextResponse.json(
    { error: `AI failed: ${response.status} — ${err.slice(0, 200)}` },
    { status: 500 }
  );
}

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Extract JSON from response (in case there's markdown wrapping)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { error: "AI returned invalid format. Please try again." },
        { status: 500 }
      );
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return NextResponse.json({
      instagramCaption: parsed.instagramCaption || "",
      facebookCaption: parsed.facebookCaption || "",
      hashtags: parsed.hashtags || "",
      sinhalaVersion: parsed.sinhalaVersion || "",
    });
  } catch (error) {
    console.error("Generate caption error:", error);
    return NextResponse.json(
      { error: "Failed to generate caption" },
      { status: 500 }
    );
  }
}