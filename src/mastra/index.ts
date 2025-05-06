import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { rapAgent } from "../lib/course/01_generate_text";
import { catFactAgent } from "../lib/practice/official/cat-facts";
import { simpleWorkflow } from "../lib/practice/official/workflows/simple-workflow";
import { myMemoryAgent } from "../lib/practice/official/memory";

export const mastra = new Mastra({
  agents: { catFactAgent, myMemoryAgent },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
  workflows: { simpleWorkflow },
});
