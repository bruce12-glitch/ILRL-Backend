import express, { Request, Response } from "express";
import cors from "cors";
import { PROJECTS, PAPERS, PEOPLE, NEWS, STATS, LAB_META } from "./data/projects";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: [
      "https://bruce12-glitch.github.io",
      "http://localhost:5173",
      "http://localhost:4173",
    ],
    methods: ["GET"],
  })
);

app.use((_req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=300");
  next();
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "ILRL-Backend", projects: PROJECTS.length, papers: PAPERS.length });
});

app.get("/api/lab", (_req: Request, res: Response) => {
  res.json({ meta: LAB_META, stats: STATS, projects: PROJECTS, papers: PAPERS, people: PEOPLE, news: NEWS });
});

app.get("/api/projects", (_req: Request, res: Response) => {
  res.json(PROJECTS);
});

app.get("/api/projects/:id", (req: Request, res: Response) => {
  const normalizedId = req.params.id.toLowerCase().trim();
  const project = PROJECTS.find((p) => p.id.toLowerCase() === normalizedId);
  if (!project) {
    res.status(404).json({ error: `Project '${req.params.id}' not found` });
    return;
  }
  res.json(project);
});

app.get("/api/papers", (_req: Request, res: Response) => {
  res.json(PAPERS);
});

app.listen(PORT, () => {
  console.log(`ILRL-Backend listening on port ${PORT}`);
});