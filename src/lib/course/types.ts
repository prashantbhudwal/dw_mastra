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

type TModule = {
  name: string;
  description: string;
  goals: TGoal[];
  chapters: TChapter[];
};

export type TCourse = {
  metadata: {
    goals: TGoal[];
    preRequisites: string[];
    targetAudience: string[];
    nonAudience: string[];
  };
  name: string;
  description: string;
  modules: TModule[];
};
