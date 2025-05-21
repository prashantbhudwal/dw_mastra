import type { TChapter, TChapterMeta } from "../../types";

const metadata: TChapterMeta = {
  viewing: "required",
  contentType: "code-video",
  goals: ["why is mastra needed", ""],
  flow: {
    1: "browser mastra/home",
    2: "app ChatGPT Screen",
    3: "browser OpenAI Developer Platform",
    4: "vsc/warp fetch",
    5: "vsc/warp openai-sdk",
    6: "vsc google-sdk",
    7: "vsc types",
    8: "vsc/warp openai-gemini",
    9: "vsc/warp ai-sdk",
    10: "vsc/warp mastra",
    11: "vsc/warp mastra-adv",
    12: "browser mastra-playground",
    13: "browser ai-sdk-mastra-image custom-encapsulation-image",
    14: "browser mastra/home",
  },
};

export const mastraFirstPrinciples: TChapter = {
  id: "first-principles",
  title: "Mastra from First Principles",
  description: "Understand the need for mastra from first principles.",
  metadata,
};
