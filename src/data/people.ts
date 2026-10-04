import type { PeopleGroup } from "../types";

const gh = (slug: string) => `https://github.com/${slug}`;
const scholarSearch = (name: string) =>
  `https://scholar.google.com/citations?view_op=search_authors&mauthors=${encodeURIComponent(`"${name}"`)}`;

export const PEOPLE: PeopleGroup = {
  faculty: [
    {
      name: "Dr. Ananya Iyer",
      role: "Faculty Advisor",
      focus: "LLM systems, sparse attention, ML–systems co-design",
      github: gh("ananya-iyer-sys"),
      scholar: scholarSearch("Ananya Iyer"),
      tint: "navy",
    },
    {
      name: "Dr. Marcus Feld",
      role: "Research Mentor",
      focus: "Serving systems, scheduling, performance modelling",
      github: gh("marcus-feld"),
      scholar: scholarSearch("Marcus Feld"),
      tint: "gold",
    },
  ],
  team: [
    {
      name: "Bruce Raman",
      role: "Founding Researcher · PhD track",
      focus: "Prefill & attention kernels — leads EntroPrefill",
      github: gh("bruce12-glitch"),
      scholar: scholarSearch("Bruce Raman"),
      tint: "navy",
    },
    {
      name: "Priya Nair",
      role: "Researcher",
      focus: "KV-cache compression, quantization kernels",
      github: gh("priya-nair-kv"),
      scholar: scholarSearch("Priya Nair"),
      tint: "cream",
    },
    {
      name: "Leo Zhang",
      role: "Researcher",
      focus: "Continuous batching, scheduling — leads RecLoop",
      github: gh("leo-zhang-serving"),
      scholar: scholarSearch("Leo Zhang"),
      tint: "gold",
    },
    {
      name: "Sara Okonkwo",
      role: "Researcher",
      focus: "Memory orchestration, cold-tier offload",
      github: gh("sara-okonkwo"),
      scholar: scholarSearch("Sara Okonkwo"),
      tint: "cream",
    },
    {
      name: "Aditi Verma",
      role: "Researcher",
      focus: "Cache reuse, dialogue workloads, calibration",
      github: gh("aditi-verma-ml"),
      scholar: scholarSearch("Aditi Verma"),
      tint: "navy",
    },
  ],
  alumni: [
    {
      name: "Tom Reyes",
      role: "Undergraduate researcher",
      focus: "Kernel benchmarking",
      now: "Systems engineer, inference infrastructure",
      years: "2025",
      github: gh("tom-reyes"),
      scholar: scholarSearch("Tom Reyes"),
      tint: "cream",
    },
    {
      name: "Hana Suzuki",
      role: "Visiting researcher",
      focus: "Serving traces & workloads",
      now: "PhD student, computer systems",
      years: "2025",
      github: gh("hana-suzuki"),
      scholar: scholarSearch("Hana Suzuki"),
      tint: "cream",
    },
    {
      name: "Diego Martínez",
      role: "Software engineer",
      focus: "Runtime tooling",
      now: "ML engineer, applied AI team",
      years: "2025",
      github: gh("diego-mtz"),
      scholar: scholarSearch("Diego Martínez"),
      tint: "cream",
    },
  ],
};
