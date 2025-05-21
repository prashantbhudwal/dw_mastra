import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

export const storyAgent = new Agent({
  name: "Story Agent",
  model: openai("gpt-4o-mini"),
  instructions: "You are a helpful assistant.",
});

async function generate() {
  const response = await storyAgent.generate(
    "Write a 50 word story about Katy the cat from Connecticut."
  );
  console.log("😺", response.text);
}

generate();
