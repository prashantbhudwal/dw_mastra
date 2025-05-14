import { Agent } from "@mastra/core/agent";
import type { TChapter, TChapterMeta } from "../types";
import { gemini } from "../../models";

const metadata: TChapterMeta = {
  viewing: "required",
  contentType: "code-video",
  goals: ["llm mental model", "using a model", "system prompt"],
  flow: {
    1: "Choose a Provider.",
    2: "Get and API key.",
    3: "Setup a model.",
  },
};

export const rapAgent = new Agent({
  name: "Rap Agent",
  instructions:
    "Help the user craft a rap song. Be concise. Use emojis. Generate a rap song if they ask.",
  model: gemini,
});

export const generateText: TChapter = {
  id: "generate-text",
  title: "Generating text.",
  description: "Use mastra agent to generate text.",
  code: [rapAgent],
  metadata,
};
