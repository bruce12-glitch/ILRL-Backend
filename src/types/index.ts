/* ── Shared types used across routes and data ────────────────────────── */

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  tag: string;
  name: string;
  area: string;
  headline: string;
  status: "Active" | "Completed" | "Archived";
  blurb: string;
  detail: string;
  contributions: string[];
  metrics: Metric[];
  arxiv: string;
  arxivLabel: string;
  code: string;
  diagram: "prefill" | "kv" | "loop";
  paperId: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  area: "Prefill" | "KV-Cache" | "Serving" | "Systems" | "Survey";
  date: string;
  year: number;
  arxiv: string;
  arxivLabel: string;
  code?: string;
  abstract: string;
  selected?: boolean;
}

export interface Person {
  name: string;
  role: string;
  focus: string;
  github: string;
  scholar: string;
  linkedin?: string;
  tint: "navy" | "gold" | "cream";
  now?: string;
  years?: string;
}

export interface PeopleGroup {
  faculty: Person[];
  team: Person[];
  alumni: Person[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  detail?: string;
  link?: string;
  linkLabel?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  type: "join" | "collab" | "general";
  message: string;
}

export interface ApiResponse<T> {
  status: number;
  data: T;
  meta?: Record<string, unknown>;
}
