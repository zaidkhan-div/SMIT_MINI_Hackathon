// app/api/generate-pitch/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function POST(request) {
    try {
        const { idea, description, industry } = await request.json();

        // Validate required fields
        if (!idea || !description || !industry) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Check if API key is available
        if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
            return NextResponse.json({ error: "API key not configured" }, { status: 500 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
You are a startup pitch expert. Generate a professional startup pitch based on the following:

Idea: ${idea}
Description: ${description}
Industry: ${industry}

Return ONLY a valid JSON object with this exact structure (no markdown, no extra text):
{
  "name": "Creative startup name",
  "tagline": "Catchy one-line tagline",
  "pitch": "2-3 sentence elevator pitch",
  "problem": "Problem statement",
  "solution": "Solution statement",
  "targetAudience": "Who are the ideal customers",
  "landingCopy": "Hero section copy for website"
}
        `;

        const result = await model.generateContent(prompt);
        const response = result.response.text();
        const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const data = JSON.parse(cleanResponse);

        return NextResponse.json(data);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}