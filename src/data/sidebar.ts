import { IPage, ISidebarContent } from "../types";

const makePage = (
  title: string,
  category?: string,
  tags?: string[],
  slug?: string,
): IPage => ({
  title,
  tags,
  category,
  slug:
    slug ??
    `/${category != null ? category + "/" : ""}${title
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
});

export const sidebarContent: ISidebarContent = [
  // The goal is to have the docs be in a narrative structure
  {
    title: "",
    pages: [
      makePage("Introduction", undefined, ["home", "resolv", "index"], "/"),
      makePage("Getting Started", undefined, [
        "introduction",
        "tutorial",
        "getting started",
      ]),
    ],
  },
  {
    title: "Guides",
    pages: [
      makePage("Example", "guides", [
        "project",
        "dashboard",
        "canvas",
        "invite",
      ]),
    ],
  },
  {
    title: "Best Practices",
    pages: [
      makePage("Example", "best-practices", [
        "best",
        "practice",
        "invite",
      ]),
    ],
  },
  {
    title: "Legal",
    pages: [
      makePage("Terms and Conditions", "legal", [
        "terms",
        "conditions",
        "legal",
      ]),
    ],
  },
];
