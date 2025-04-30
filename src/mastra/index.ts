import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { weatherAgent } from "./agents";
import { postGeneratorAgent } from "./practice/post-generator";
import { weatherWorkflow } from "./practice/temp";

export const mastra = new Mastra({
  agents: { weatherAgent, postGeneratorAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
