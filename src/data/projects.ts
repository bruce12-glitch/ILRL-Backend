import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "entroprefill",
    tag: "SYS–01",
    name: "EntroPrefill",
    area: "Prefill · Sparse Attention",
    headline:
      "Mitigating long-context quadratic prefill latency with entropy-guided sparse attention",
    status: "Active",
    blurb:
      "Prefill cost grows quadratically with prompt length. EntroPrefill measures per-token attention entropy on the fly and prunes low-information key ranges before they reach the attention kernel — rebuilding a causal mask that keeps computation near-linear in context length.",
    detail:
      "Ships as a drop-in prefill path: an entropy scorer fused into the sampling loop, a hardware-aware block-sparse kernel, and a calibration pass that bounds perplexity drift. Composes with paged KV managers and requires no changes to model weights.",
    contributions: [
      "Entropy-guided token scoring that identifies low-information key ranges at layer depth, before attention executes.",
      "Block-sparse prefill kernel preserving causal masks, fused with FlashAttention-style tiling for Hopper GPUs.",
      "Calibration protocol with a guaranteed perplexity-drift bound (<0.4 NLL) across LongBench and RULER.",
    ],
    metrics: [
      { value: "3.1×", label: "faster TTFT @ 256K ctx" },
      { value: "−72%", label: "prefill attention FLOPs" },
      { value: "<0.4", label: "NLL perplexity drift" },
    ],
    arxiv: "https://arxiv.org/abs/2512.03310",
    arxivLabel: "arXiv:2512.03310",
    code: "https://github.com/bruce12-glitch/Entro-Prefill",
    diagram: "prefill",
    paperId: "entroprefill-paper",
  },
  {
    id: "page-entrokv",
    tag: "SYS–02",
    name: "Page-EntroKV",
    area: "KV-Cache · Memory",
    headline:
      "Breaking the KV-cache memory wall with entropy-tiered, paged cache compression",
    status: "Active",
    blurb:
      "Decode throughput is bounded by KV-cache residency — the memory wall. Page-EntroKV manages the cache as entropy-tiered pages: hot pages in FP16 on HBM, warm in FP8, cold in 2-bit off-device, under an SLO-aware eviction policy.",
    detail:
      "Importance is estimated from attention entropy rather than recency heuristics. The paged layout plugs into vLLM-style block tables so admissions, preemption and tier migration are scheduler-visible operations.",
    contributions: [
      "Entropy-tiered paged cache: FP16 / FP8 / 2-bit pages with per-page migration cost modelling.",
      "SLO-aware eviction that provably bounds quality loss under contiguous decode deadlines.",
      "vLLM-compatible block-table integration; tier migration overlaps with kernel execution.",
    ],
    metrics: [
      { value: "−68%", label: "KV-cache memory footprint" },
      { value: "2.4×", label: "decode throughput @ context" },
      { value: "4.9×", label: "larger resident batch @ 128K" },
    ],
    arxiv: "https://arxiv.org/abs/2603.01421",
    arxivLabel: "arXiv:2603.01421",
    code: "https://github.com/bruce12-glitch/PageEntro-KV",
    diagram: "kv",
    paperId: "page-entrokv-paper",
  },
];
