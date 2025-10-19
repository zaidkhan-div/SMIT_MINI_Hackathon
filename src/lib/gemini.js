import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function generatePitch(idea, description,) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    You are an expert startup pitch consultant and web developer. Create a complete startup pitch package.
    
    Startup Idea: ${idea}
    Description: ${description}
    Industry: ${industry}
    
    Generate:
    1. Creative startup name
    2. Catchy tagline (under 8 words)
    3. Elevator pitch (2-3 sentences)
    4. Problem statement
    5. Solution statement
    6. Target audience description
    7. Complete responsive HTML landing page CODE with inline CSS/Tailwind (hero section, features, CTA - ready to copy)
    8. Color palette (3-4 hex codes)
    9. Logo concept description
    
    Return ONLY valid JSON (no markdown):
    {
      "name": "startup name",
      "tagline": "catchy tagline",
      "pitch": "elevator pitch",
      "problem": "problem statement",
      "solution": "solution statement",
      "targetAudience": "target audience",
      "landingPageCode": "<!DOCTYPE html><html lang='en'>...COMPLETE HTML CODE...</html>",
      "colorPalette": ["#hex1", "#hex2", "#hex3"],
      "logoConcept": "logo idea"
    }
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response.text();

        const cleanResponse = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        return JSON.parse(cleanResponse);
    } catch (error) {
        console.error("Gemini Error:", error);
        throw new Error("Failed to generate pitch");
    }
}