import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const google = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

async function generateWithOpenAISdk({
  text,
}: {
  text: string;
}): Promise<string> {
  const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: text,
      },
    ],
    // Options
  });

  return response.output_text || "";
}
async function generateWithGoogleSdk({
  text,
}: {
  text: string;
}): Promise<string> {
  const response = await google.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: text,
          },
        ],
      },
    ],
    config: {
      // Options
    },
  });
  return response.text || "";
}

export const generate: generateFunction = async ({ model, text }) => {
  const response =
    model === "openai"
      ? await generateWithOpenAISdk({
          text,
        })
      : await generateWithGoogleSdk({
          text,
        });

  return response;
};

generate({
  model: "openai",
  text: "Write a 50 word story about Katy the cat from Connecticut.",
}).then((result) => console.log("😺", result));
