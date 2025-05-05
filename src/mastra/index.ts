import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { rapAgent } from "../lib/course/01_generate_text";
import { catFactAgent } from "../lib/practice/official/cat-facts";

export const mastra = new Mastra({
  agents: { catFactAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
