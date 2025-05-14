import type { TChapter, TChapterMeta } from "../types";

const metadata: TChapterMeta = {
  viewing: "required",
  contentType: "code-video",
  goals: ["llm mental model", "using a model", "system prompt"],
  flow: {
    1: "chatgpt",
    2: "Rest API",
    3: "Switch to whiteboard",
    4: "Openai SDK",
    5: "AI SDK",
  },
};

// src/lib/models.ts

const setup = `
import { google } from "@ai-sdk/google";

export const gemini = google("gemini-2.0-flash");
`;

export const mastraFirstPrinciples: TChapter = {
  id: "first-principles",
  title: "Setting up the workspace",
  description: "Use mastra agent to generate text.",
  code: [setup],
  metadata,
};
