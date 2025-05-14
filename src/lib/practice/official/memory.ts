import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { openai } from "@ai-sdk/openai";
import { gemini } from "../../models";
import { LibSQLStore, LibSQLVector } from "@mastra/libsql";

export const myMemoryAgent = new Agent({
  name: "Memory Agent",
  instructions: "You are a helpful assistant.",
  model: gemini,
  memory: new Memory({
    storage: new LibSQLStore({ url: "file:../../../../memory.db" }),
    options: {
      lastMessages: 100,
      semanticRecall: false,
      threads: {
        generateTitle: true,
      },
      workingMemory: {
        enabled: true,
        use: "tool-call",
      },
    },
  }),
});
