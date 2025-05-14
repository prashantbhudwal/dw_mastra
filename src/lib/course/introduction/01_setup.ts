import type { TChapter, TChapterMeta } from "../types";

const metadata: TChapterMeta = {
  viewing: "required",
  contentType: "code-video",
  goals: ["llm mental model", "using a model", "system prompt"],
  flow: {
    1: "create a new mastra project.",
    2: "Choose a Provider.",
    3: "Get and API key.",
    4: "Setup a model.",
  },
};

// src/lib/models.ts

const setup = `
import { google } from "@ai-sdk/google";

export const gemini = google("gemini-2.0-flash");
`;

export const mastraSetup: TChapter = {
  id: "workspace-setup",
  title: "Setting up the workspace",
  description: "Use mastra agent to generate text.",
  code: [setup],
  metadata,
};
