import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: Access API Key from process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBlogContent = async (title: string, category: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      Write a comprehensive, professional, yet easy-to-understand blog post in Hindi (using Hinglish for technical terms) for the title: "${title}".
      The target audience is Indian students and beginners in ${category}.
      
      Structure:
      1. Introduction (Use simple greeting like "Namaste Dosto")
      2. What is the topic? (Kya hai?)
      3. Key Benefits or Features (Bullet points)
      4. Step-by-Step Guide or Explanation (How-to)
      5. Conclusion (Nishkarsh)
      
      Format the output in clean Markdown. Use ## for main headings and ### for subheadings. 
      Do not use complex Hindi words; keep it conversational like a friendly guide.
      Make sure to bold important keywords.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Maaf kijiye, content generate karne mein koi samasya aayi. Kripya thodi der baad prayas karein.";
  } catch (error) {
    console.error("Error generating blog content:", error);
    return `
      ## Maaf Kijiye (Error)
      
      Abhi server busy hai ya API key set nahi hai. 
      
      Agar aap developer hain, to kripya check karein ki **API Key** sahi se configure ki gayi hai ya nahi.
    `;
  }
};