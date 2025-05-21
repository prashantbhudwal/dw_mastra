import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";

async function generate({ model }: { model: "openai" | "gemini" }) {
  const response = await generateText({
    model:
      model === "openai" ? openai("gpt-4o-mini") : google("gemini-2.0-flash"),
    messages: [
      {
        role: "user",
        content: "Write a 50 word story about Katy the cat from Connecticut.",
      },
    ],
  });
  console.log("😺", response.text);
}

generate({ model: "openai" });
