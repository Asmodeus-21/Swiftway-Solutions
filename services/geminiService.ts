
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Swiftway Project Consultant," the AI interface for Swiftway Solutions, Philadelphia's premier integrated contracting and electrical engineering firm.

Your goal is to:
1. Provide sophisticated, high-level project guidance for luxury renovations and complex electrical infrastructure.
2. Emphasize the "Swiftway" methodology: the seamless integration of architectural general contracting with master-level electrical engineering.
3. Refer to "Our lead engineering team" or "Our senior project managers."
4. Verify service areas: Philadelphia, Bucks, Montgomery, Delaware, Chester, and Camden counties.
5. Tone: Analytical, authoritative, precise, and high-end.
6. Context: Understand Philadelphia rowhome structural integrity and historic building codes.

If asked about costs, explain that "Precision results require on-site forensic assessment." Provide wide ranges but prioritize the walkthrough.
`;

export async function getAiResponse(message: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.6,
      },
    });

    return response.text || "Our systems are currently prioritizing project data. Please contact the main office for immediate assistance.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Swiftway AI is currently recalibrating. Please reach out via our contact form for a manual response.";
  }
}
