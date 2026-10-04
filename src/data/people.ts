import type { PeopleGroup } from "../types";

const scholarSearch = (name: string) =>
  `https://scholar.google.com/citations?view_op=search_authors&mauthors=${encodeURIComponent(`"${name}"`)}`;

export const PEOPLE: PeopleGroup = {
  faculty: [
    {
      name: "Vinoth Nandakumar",
      role: "Research Mentor",
      focus: "PhD in Mathematics, MIT",
      scholar: "https://scholar.google.com/citations?user=SKq_-mgAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/vinoth-nandakumar-07456b149/",
      tint: "gold",
    },
  ],
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
