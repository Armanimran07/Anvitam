import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateContentDescription = async (
  topic: string, 
  type: 'project' | 'blog'
): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment variables.");
  }

  const modelId = 'gemini-2.5-flash';
  
  let prompt = '';
  if (type === 'project') {
    prompt = `Write a sophisticated, professional architectural project description for a project named or about: "${topic}". 
    Focus on materials, light, space, and context. 
    Keep it under 100 words. 
    Tone: Minimalist, Artistic, Professional.`;
  } else {
    prompt = `Write an engaging blog post excerpt and an introductory paragraph for an architecture blog about: "${topic}". 
    Focus on design philosophy and impact. 
    Keep it under 150 words. 
    Tone: Thoughtful, Insightful.`;
  }

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });
    return response.text || "No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate content. Please try again.");
  }
};