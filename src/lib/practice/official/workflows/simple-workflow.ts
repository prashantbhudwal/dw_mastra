import { Step, Workflow } from "@mastra/core/workflows";
import { z } from "zod";

export const simpleWorkflow = new Workflow({
  name: "My Workflow",
  triggerSchema: z.object({
    input: z.number(),
  }),
});

const stepOne = new Step({
  id: "step-one",
  inputSchema: z.object({
    value: z.number(),
  }),
  outputSchema: z.object({
    doubledValue: z.number(),
  }),
  execute: async function ({ context }) {
    const doubledValue = context.triggerData.input * 2;
    return { doubledValue };
  },
});

simpleWorkflow.step(stepOne).commit();

const { runId, start } = simpleWorkflow.createRun();
