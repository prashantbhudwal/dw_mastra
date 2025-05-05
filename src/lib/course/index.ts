import { chapterZero } from "./00_setup";
import { chapterOne } from "./01_generate_text";

type TGoal = string;

export type TChapterMeta = {
  contentType: "code-video" | "explanation-video";
  viewing: "required" | "optional";
  flow: Record<number, string>;
  goals: TGoal[];
};

export type TChapter = {
  id: string;
  title: string;
  description: string;
  code?: Array<any>;
  metadata: TChapterMeta;
};

type TCourse = {
  metadata: {
    goals: TGoal[];
    preRequisites: string[];
    targetAudience: string[];
    nonAudience: string[];
  };
  name: string;
  description: string;
  chapters: TChapter[];
};

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
  chapters: [chapterZero, chapterOne],
};
