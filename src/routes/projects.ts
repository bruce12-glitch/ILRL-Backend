import { Router } from "express";
import { PROJECTS } from "../data/projects";
import type { ApiResponse, Project } from "../types";

const router = Router();

router.get("/", (_req, res) => {
  const body: ApiResponse<Project[]> = {
    status: 200,
    data: PROJECTS,
    meta: { count: PROJECTS.length },
  };
  res.json(body);
});

router.get("/:id", (req, res) => {
  const project = PROJECTS.find((p) => p.id === req.params.id);
  if (!project) {
    res.status(404).json({ status: 404, error: "Project not found" });
    return;
  }
  const body: ApiResponse<Project> = { status: 200, data: project };
  res.json(body);
});

export default router;
