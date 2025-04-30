import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { weatherAgent } from "./mastra/agents";

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
  
  return c.text("hello mastra");
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
