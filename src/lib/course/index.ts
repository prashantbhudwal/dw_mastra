import { mastraFirstPrinciples } from "./introduction/00_first_principles";
import { mastraSetup } from "./introduction/01_setup";
import { generateText } from "./introduction/02_generate_text";
import type { TCourse } from "./types";

const courseDetails: TCourse["metadata"] = {
  goals: [],
  preRequisites: ["node", "typescript", "request-response cycle"],
  targetAudience: ["web developers new to LLMs"],
  nonAudience: [
    "people who have used langchain before",
    "people with all the basic understanding of llms",
  ],
};

export const course: TCourse = {
  name: "LLMs with Mastra",
  description: "This is beginner lever course",
  metadata: courseDetails,
  modules: [
    {
      name: "Introduction to mastra",
      description: "Introduce mastra, its architecture, and developer tools.",
      goals: [""],
      chapters: [mastraFirstPrinciples, mastraSetup, generateText],
    },
    {
      name: "Using Tools in Mastra Agents",
      description: "",
      goals: [""],
      chapters: [],
    },
  ],
};
