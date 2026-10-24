export interface Metric {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  status: string;
  arxivId: string;
  arxivUrl: string;
  code: string;
  summary: string;
  problemStatement: string;
  contributions: string[];
  metrics: Metric[];
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  arxivId: string;
  pdfUrl: string;
  codeUrl: string;
  abstract: string;
  bibtex: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  focus: string;
  email?: string;
  github?: string;
}

export interface NewsItem {
  date: string;
  tag: string;
  text: string;
  link?: string;
}