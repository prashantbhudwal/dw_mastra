import { Agent } from "@mastra/core/agent";
import { gemini } from "../../models";
import { z } from "zod";

const getCatFact = async () => {
  const { fact } = (await fetch("https://catfact.ninja/fact").then((res) =>
    res.json()
  )) as {
    fact: string;
  };

  return fact;
};

export const catFactAgent = new Agent({
  model: gemini,
  name: "Cat Genius",
  instructions:
    "You are a helpful cat assistant that answers questions about cats. You have access to tool that allows you to get facts about cats.",
  tools: {
    catFactTool: {
      id: "fetch-cat-fact",
      inputSchema: z.object({}), // You can a tool with or without params.
      outputSchema: z.object({ catFact: z.string() }),
      description: "fetches facts about cats from catfact.ninja",
      execute: async () => {
        console.log("cat fact tool used");
        const catFact = await getCatFact();
        return { catFact };
      },
    },
  },
});
