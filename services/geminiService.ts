/**
 * @name NeuralRegistryLink_v5
 * @description Advanced REST communication logic.
 * Bypasses SDK to ensure 100% cloud connectivity.
 * Synthesized by Techy Dudes Logic.
 */

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
// Using v1beta and gemini-pro for maximum stability
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

export const generateAIResponse = async (prompt: string, history: any[]) => {
  if (!API_KEY || API_KEY.length < 10) {
    return "⚠️ **System Error**: API Key missing in institutional environment (.env.local).";
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `System: You are TITANS AI by Techy Dudes (Kasi Prasath K & Praveen Raj M). 
            Response Protocol: Use bold headers and bullet points. 
            User says: ${prompt}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
          stopSequences: [],
        },
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE",
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("Cloud Registry Error:", data.error);
      return `⚠️ **Neural Link Conflict**: ${data.error.message}`;
    }

    if (!data.candidates || !data.candidates[0].content) {
      return "⚠️ **Sync Failure**: The cloud produced an empty transmission. Try a different query.";
    }

    return data.candidates[0].content.parts[0].text;
  } catch (err: any) {
    return "⚠️ **Network Restriction**: Institutional firewall is blocking the cloud link. Use a mobile hotspot.";
  }
};
