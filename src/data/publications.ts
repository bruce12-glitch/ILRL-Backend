import type { Paper } from "../types";

export const PAPERS: Paper[] = [
  {
    id: "page-entrokv-paper",
    title:
      "Page-EntroKV: Entropy-Tiered Paged KV-Cache Compression for Breaking the Memory Wall in Long-Context LLM Inference",
    authors: ["Bruce Raman", "Priya Nair", "Sara Okonkwo", "Ananya Iyer"],
    venue: "arXiv preprint",
    area: "KV-Cache",
    date: "Mar 2026",
    year: 2026,
    arxiv: "https://arxiv.org/abs/2603.01421",
    arxivLabel: "arXiv:2603.01421",
    code: "https://github.com/bruce12-glitch/ILRL",
    abstract:
      "Manages the KV cache as entropy-tiered pages across FP16, FP8 and 2-bit residencies, cutting cache memory by 68% and lifting decode throughput 2.4× under SLO-aware eviction.",
    selected: true,
  },
  {
    id: "recloop-paper",
    title:
      "RecLoop: Inference-in-Loop Scheduling with Recurrence-Aware Continuous Batching for Low-Latency LLM Serving",
    authors: ["Leo Zhang", "Bruce Raman", "Aditi Verma", "Marcus Feld"],
    venue: "arXiv preprint",
    area: "Serving",
    date: "Jan 2026",
    year: 2026,
    arxiv: "https://arxiv.org/abs/2601.00887",
    arxivLabel: "arXiv:2601.00887",
    code: "https://github.com/bruce12-glitch/ILRL",
    abstract:
      "Closes the loop between scheduler and kernels: recurrence-cost predictions drive admission, preemption and speculative loops, reducing P99 decode latency by 41%.",
    selected: true,
  },
  {
    id: "entroprefill-paper",
    title:
      "EntroPrefill: Mitigating Long-Context Quadratic Prefill Latency via Entropy-Guided Sparse Attention",
    authors: ["Bruce Raman", "Aditi Verma", "Ananya Iyer"],
    venue: "arXiv preprint",
    area: "Prefill",
    date: "Dec 2025",
    year: 2025,
    arxiv: "https://arxiv.org/abs/2512.03310",
    arxivLabel: "arXiv:2512.03310",
    code: "https://github.com/bruce12-glitch/ILRL",
    abstract:
      "Entropy-guided pruning of low-information key ranges restores near-linear prefill: 3.1× faster time-to-first-token at 256K context with bounded perplexity drift.",
    selected: true,
  },
  {
    id: "memory-wall-survey",
    title:
      "Beyond the Memory Wall: A Systems Survey of KV-Cache Management for Efficient LLM Serving",
    authors: ["Sara Okonkwo", "Priya Nair", "Marcus Feld"],
    venue: "arXiv preprint",
    area: "Survey",
    date: "Oct 2025",
    year: 2025,
    arxiv: "https://arxiv.org/abs/2510.05241",
    arxivLabel: "arXiv:2510.05241",
    abstract:
      "A systems-taxonomy of paging, quantization, eviction and offload techniques for KV-cache management, with an open benchmark harness.",
  },
  {
    id: "tokens-not-free",
    title:
      "Tokens per Second Are Not Free: Characterizing Throughput-Latency Trade-offs in Continuous-Batch LLM Inference",
    authors: ["Leo Zhang", "Ananya Iyer"],
    venue: "arXiv preprint",
    area: "Systems",
    date: "Jul 2025",
    year: 2025,
    arxiv: "https://arxiv.org/abs/2507.01158",
    arxivLabel: "arXiv:2507.01158",
    abstract:
      "A measurement study across open serving stacks showing where continuous batching wins, where it stalls, and which knobs actually move P99 tail latency.",
  },
  {
    id: "entrocache",
    title: "EntroCache: Entropy-Aware Eviction for Multi-Turn Dialogue KV Reuse",
    authors: ["Aditi Verma", "Bruce Raman"],
    venue: "Systems workshop paper",
    area: "KV-Cache",
    date: "May 2025",
    year: 2025,
    arxiv: "https://arxiv.org/abs/2505.04472",
    arxivLabel: "arXiv:2505.04472",
    abstract:
      "Early lab work showing attention-entropy outperforms recency heuristics as an eviction signal for multi-turn KV reuse — the seed of Page-EntroKV.",
  },
];
