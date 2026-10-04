import { Router } from "express";
import { NEWS } from "../data/news";
import type { ApiResponse, NewsItem } from "../types";

const router = Router();

router.get("/", (_req, res) => {
  const body: ApiResponse<NewsItem[]> = {
    status: 200,
    data: NEWS,
    meta: { count: NEWS.length },
  };
  res.json(body);
});

export default router;
