/**
 * 1. Create an agent.
 * 2. Add a tool to this agent.
 * 3. Pass this agent to mastra.
 * 4. Use mastra playground to use this agent.
 */

import { Agent } from "@mastra/core/agent";
import { models } from "../official/models-all";
import { weatherTool } from "../../../mastra/tools";

export const weatherAgent = new Agent({
  name: "Weather Agent",
  instructions: "You allow the user to check the weather.",
  model: models.withTools.free["gemini-2.0-flash"],
  tools: { weatherTool },
});

export const generateText = async function () {
  const result = await weatherAgent.generate("What is the weather right now?");
  return result;
};
