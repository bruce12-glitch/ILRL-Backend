import type { PeopleGroup } from "../types";

const scholarSearch = (name: string) =>
  `https://scholar.google.com/citations?view_op=search_authors&mauthors=${encodeURIComponent(`"${name}"`)}`;

export const PEOPLE: PeopleGroup = {
  faculty: [],
  team: [
    {
      name: "Inbasekaran S",
      role: "Founder & Researcher",
      focus: "LLM Inference and ML systems",
      github: "https://github.com/bruce12-glitch",
      scholar: scholarSearch("Inbasekaran S"),
      linkedin: "https://www.linkedin.com/in/inbasekaran-s-106a90383",
      tint: "navy",
    },
  ],
  alumni: [],
};
