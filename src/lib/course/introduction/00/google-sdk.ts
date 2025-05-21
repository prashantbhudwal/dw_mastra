import { GoogleGenAI } from "@google/genai";

const google = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

async function generateWithGoogleSdk() {
  const response = await google.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: "Write a 50 word story about Katy the cat from Connecticut.",
          },
        ],
      },
    ],
  });
  console.log("😺", response.text);
}

generateWithGoogleSdk();
