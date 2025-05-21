import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateWithOpenAISdk() {
  const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: [
      {
        role: "user",
        content: "Write a 50 word story about Katy the cat from Connecticut.",
      },
    ],
  });

  console.log("😺", response.output_text);
}

generateWithOpenAISdk();
