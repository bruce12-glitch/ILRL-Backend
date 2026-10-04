import { Router } from "express";
import { PEOPLE } from "../data/people";
import type { ApiResponse, PeopleGroup } from "../types";

const router = Router();

router.get("/", (_req, res) => {
  const body: ApiResponse<PeopleGroup> = { status: 200, data: PEOPLE };
  res.json(body);
});

export default router;
