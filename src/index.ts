import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { weatherAgent } from "./mastra/agents";
import { deepResearch } from "./lib/practice/deep-research";
import { generateText } from "./lib/practice/tutorial/basic-agent";

const app = new Hono();

const runMastra = async function () {
  const response = await weatherAgent.generate([
    {
      role: "user",
      content: "What is the weather in bangalore",
    },
  ]);

  return response.text;
};

app.get("/", async (c) => {
  const result = await generateText();
  return c.json("Hello Mastra:" + result.text);
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
