
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getSpiritualGuidance(prompt: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "Você é um mentor espiritual da rede de catedrais de luxo 'Mar Vermelho'. Sua linguagem é erudita, acolhedora e sofisticada. Ofereça reflexões profundas baseadas em valores universais e teológicos, sempre mantendo a elegância e o mistério que envolvem as grandes catedrais.",
          temperature: 0.8,
          maxOutputTokens: 500,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Erro ao obter orientação espiritual:", error);
      return "Neste momento de silêncio, permita que sua alma encontre o seu próprio caminho. Nossas portas estão sempre abertas para sua reflexão.";
    }
  }
}

export const geminiService = new GeminiService();
