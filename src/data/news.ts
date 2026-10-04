import type { NewsItem } from "../types";

export const NEWS: NewsItem[] = [
  {
    id: "page-entrokv-release",
    date: "Mar 2026",
    title: "Page-EntroKV preprint posted and open-sourced",
    detail:
      "Entropy-tiered paged KV-cache compression: −68% cache memory, 2.4× decode throughput at long context.",
    link: "https://arxiv.org/abs/2603.01421",
    linkLabel: "arXiv:2603.01421",
  },
  {
    id: "entroprefill-ttft",
    date: "Feb 2026",
    title: "EntroPrefill reaches 3.1× faster TTFT at 256K context",
    detail:
      "New block-sparse kernel keeps prefill near-linear on H100 systems; code and calibration harness are public.",
    link: "https://github.com/bruce12-glitch/ILRL",
    linkLabel: "Code on GitHub",
  },
  {
    id: "recloop-v03",
    date: "Jan 2026",
    title: "RecLoop v0.3 released with SLO-aware admission control",
    detail:
      "The inference-in-loop scheduler now ships with open traces and reproducible P99 benchmarks.",
  },
  {
    id: "entroprefill-preprint",
    date: "Dec 2025",
    title: "EntroPrefill preprint posted to arXiv",
    detail:
      "Mitigating long-context quadratic prefill latency via entropy-guided sparse attention.",
    link: "https://arxiv.org/abs/2512.03310",
    linkLabel: "arXiv:2512.03310",
  },
  {
    id: "ilrl-founded",
    date: "Sep 2025",
    title: "ILRL is founded",
    detail:
      "A remote-first lab for efficient LLM inference and ML systems — inference in loops, recurrence as a first-class systems concern.",
  },
];
