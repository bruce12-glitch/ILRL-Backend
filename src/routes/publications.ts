import { Router } from "express";
import { PAPERS } from "../data/publications";
import type { ApiResponse, Paper } from "../types";

const router = Router();

router.get("/", (_req, res) => {
  const body: ApiResponse<Paper[]> = {
    status: 200,
    data: PAPERS,
    meta: { count: PAPERS.length },
  };
  res.json(body);
});

router.get("/:id", (req, res) => {
  const paper = PAPERS.find((p) => p.id === req.params.id);
  if (!paper) {
    res.status(404).json({ status: 404, error: "Publication not found" });
    return;
  }
  const body: ApiResponse<Paper> = { status: 200, data: paper };
  res.json(body);
});

export default router;
