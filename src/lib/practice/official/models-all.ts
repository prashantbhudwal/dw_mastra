import { google } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";

const orModels = {
  free: {
    gemini: "google/gemini-2.5-pro-exp-03-25",
    deepseek: "deepseek/deepseek-chat-v3-0324:free",
    llama: "meta-llama/llama-4-maverick:free",
    qwen: "qwen/qwen3-235b-a22b:free",
    mistral: "mistralai/mistral-small-3.1-24b-instruct:free",
  },
};

const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

/**
 * Chat Models
 */
export const models = {
  withTools: {
    free: {
      "gemini-2.0-flash": google("gemini-2.0-flash"),
    },
  },
  withoutTools: {
    free: {
      "llama-mav": openrouter.chat("meta-llama/llama-4-maverick:free"),
    },
  },
};
