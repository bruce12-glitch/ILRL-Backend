import { Router } from "express";
import type { ApiResponse } from "../types";

const router = Router();

router.get("/", (_req, res) => {
  const body: ApiResponse<{ ok: boolean; uptime: number }> = {
    status: 200,
    data: { ok: true, uptime: process.uptime() },
  };
  res.json(body);
});

export default router;
