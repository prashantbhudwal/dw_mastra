import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { openai } from "@ai-sdk/openai";
import { gemini } from "../../models";

export const myMemoryAgent = new Agent({
  name: "Memory Agent",
  instructions: "You are a helpful assistant.",
  model: gemini,
  memory: new Memory({}),
});
