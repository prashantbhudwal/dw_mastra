import { createOpenAI } from "@ai-sdk/openai";
import { Agent, createTool } from "@mastra/core";
import { Memory } from "@mastra/memory";
import * as dotenv from "dotenv";
import { z } from "zod";
dotenv.config();

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const memory = new Memory({});

const writerAgent = new Agent({
  name: "Copywriter",
  instructions: "You are a copywriter agent that writes blog post copy.",
  model: openai("gpt-4.1-mini"),
  memory: memory,
});

const writerFreshTool = createTool({
  id: "writer-fresh-tool",
  description: "You are a writer tool that creates fresh blog post copy.",
  inputSchema: z.object({
    topic: z.string().describe("Topic of the blog post"),
  }),
  outputSchema: z.object({
    content: z.string(),
  }),
  execute: async ({ context }) => {
    const content = await writerAgent.generate(
      "Create a blogpost on the   topic: " + context.topic
    );
    return { content: content.text };
  },
});

const writerUpdateTool = createTool({
  id: "writer-update-tool",
  description:
    "You are a writer tool that updates existing blog post copy based on suggestions.",
  inputSchema: z.object({
    existingContent: z.string().describe("The current blog post content"),
    suggestions: z.string().describe("Editor suggestions for updates"),
  }),
  outputSchema: z.object({
    content: z.string(),
  }),
  execute: async ({ context }) => {
    const content = await writerAgent.generate(
      `Update the following blog post copy:\n${context.existingContent}\n\nApply these suggestions:\n${context.suggestions}`
    );
    return { content: content.text };
  },
});

const editorAgent = new Agent({
  name: "Editor",
  instructions:
    "You are an editing agent that suggests changes and improvements for the writer to update a blog post copy.",
  model: openai("gpt-4.1-mini"),
  memory: memory,
});

const editorTool = createTool({
  id: "editor-tool",
  description: "You are an editor that provides accurate editing information.",
  inputSchema: z.object({
    content: z.string().describe("Content of the blog post"),
  }),
  outputSchema: z.object({
    content: z.string(),
  }),
  execute: async ({ context }) => {
    const content = await editorAgent.generate(
      "Edit the following blog post copy: " + context.content
    );
    return { content: content.text };
  },
});

export const postGeneratorAgent = new Agent({
  name: "Post Generator",
  instructions: `
    You are a post generator agent. 
    1. If no existing copy is provided, call the 'writer-fresh-tool' with the topic to generate fresh content.
    2. Take the generated content and call the 'editor-tool' to get suggestions.
    3. Call the 'writer-update-tool' with the existing content and the editor's suggestions to produce an updated draft.
    4. Repeat steps 2–3 until the editor has no further suggestions.
    5. Return the final blog post copy.
  `,
  model: openai("gpt-4.1-mini"),
  tools: { writerFreshTool, writerUpdateTool, editorTool },
  memory: memory,
  defaultGenerateOptions: {
    maxSteps: 5,
  },
  //   defaultGenerateOptions: {
  //     maxSteps: 5,
  //   },
});
