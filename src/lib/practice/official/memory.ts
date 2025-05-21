import { Agent } from "@mastra/core/agent";
import { gemini } from "../../models";

export const myMemoryAgent = new Agent({
  name: "Memory Agent",
  instructions: "You are a helpful assistant.",
  model: gemini,
});
