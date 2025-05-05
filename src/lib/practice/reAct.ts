import { Agent } from "@mastra/core/agent";
import { createTool } from "@mastra/core";
import { z } from "zod";
import { models } from "./official/models-all";

const model = models.withTools.free["gemini-2.0-flash"];

const thoughtAgent = new Agent({
  model,
  name: "Thought Agent",
  instructions: "Generate a thought on the current situation.",
});

const generateThoughtTOOL = createTool({
  id: "generate-thought",
  inputSchema: z.object({
    thought: z.string(),
  }),
  outputSchema: z.object({
    generatedThought: z.string(),
  }),
  description: "Generate a thought on the current stage of conversation.",
  execute: async ({ context: { thought } }) => {
    // TODO I need message history here, how do I get that.
    // I need the ability to pass memory from reactAgent to thoughtAgent
    const result = await thoughtAgent.generate("");

    return { generatedThought: "" };
  },
});

const takeActionTOOL = createTool({
  id: "take-action",
  inputSchema: z.object({
    action: z.string(),
  }),
  outputSchema: z.object({
    actionResult: z.string(),
  }),
  description: "Generate a thought on the current stage of conversation.",
  execute: async ({ context: { action } }) => {
    return { actionResult: "" };
  },
});

const noteObservationTOOL = createTool({
  id: "note-observation",
  inputSchema: z.object({
    observation: z.string(),
  }),
  outputSchema: z.object({
    observationResult: z.string(),
  }),
  description: "Generate a thought on the current stage of conversation.",
  execute: async ({ context: { observation } }) => {
    return { observationResult: "" };
  },
});

const finishTOOL = createTool({
  id: "finish",
  inputSchema: z.object({
    shouldFinish: z.boolean(),
  }),
  outputSchema: z.object({
    shouldFinish: z.boolean(),
  }),
  description: "Is it time to finish the thought?",
  execute: async ({ context: { shouldFinish } }) => {
    return { shouldFinish: false };
  },
});

export const reactAgent = new Agent({
  model,
  name: "reAct Agent",
  instructions: "run a reAct loop",
  tools: {
    generateThoughtTOOL,
    takeActionTOOL,
    noteObservationTOOL,
    finishTOOL,
  },
});
