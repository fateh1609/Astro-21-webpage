
import { GoogleGenAI } from "@google/genai";

/**
 * Astro21 Sacred Geometry & Cosmic Alignment Engine
 * Connects to the Akashic records via Spiritual Intelligence.
 */
export async function getSacredInsight(birthDate: string): Promise<string> {
  // Use environment variable for secure connection
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a sacred Vedic birth chart alignment for ${birthDate}. 
      Provide a brief, high-energy cosmic blessing and a specific life path focus. 
      Avoid all technical or artificial terminology. Max 50 words.`,
      config: {
        systemInstruction: "You are the Astro21 Cosmic Oracle, channeling ancient wisdom through sacred geometry and spiritual alignment.",
      },
    });

    return response.text || "The cosmic channels are currently aligning. Please try again soon.";
  } catch (error) {
    console.error("Cosmic Alignment Error:", error);
    return "Your destiny is unfolding. Please enter our main sanctuary for a deeper reading.";
  }
}
