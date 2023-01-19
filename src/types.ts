export interface FrontMatter {
  title: string;
  date: string;
  id: string;
  wordCount: number;
  author: string;
  updated: string;
}

export type ISidebarContent = ISidebarSection[];

export interface IPage {
  title: string;
  slug: string;
  category?: string;
  tags?: string[];
}

export interface ISidebarSection {
  title?: string;
  pages: IPage[];
}

export type Emotion = "sad" | "neutral" | "happy" | "love";
