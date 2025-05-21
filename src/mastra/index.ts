import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { toxicCatAgent } from "../lib/course/introduction/00/mastra-adv";

export const mastra = new Mastra({
  agents: { toxicCatAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
