import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { google } from "@ai-sdk/google";
import { Memory } from "@mastra/memory";
import { ToxicityMetric } from "@mastra/evals/llm";

export const toxicCatAgent = new Agent({
  name: "Toxic Cat Agent",
  model: openai("gpt-4o-mini"),
  instructions: "Respond like a toxic cat.",
  memory: new Memory({}),
  evals: {
    toxicityMetric: new ToxicityMetric(google("gemini-2.0-flash")),
  },
});

async function generate() {
  const response = await toxicCatAgent.generate(
    "Write a 50 word story about Katy the cat from Connecticut."
  );
  console.log("😺", response.text);
}
