import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";

import projectsRouter from "./routes/projects";
import publicationsRouter from "./routes/publications";
import peopleRouter from "./routes/people";
import newsRouter from "./routes/news";
import contactRouter from "./routes/contact";
import healthRouter from "./routes/health";

const app = express();
const PORT = process.env.PORT ?? 4000;

/* ── Security middleware ─────────────────────────────────────────────── */
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

/* ── CORS ────────────────────────────────────────────────────────────── */
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL ?? "http://localhost:5173",
      "https://bruce12-glitch.github.io",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

/* ── Request logging ─────────────────────────────────────────────────── */
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

/* ── Body parsing ────────────────────────────────────────────────────── */
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

/* ── Global rate limiter ─────────────────────────────────────────────── */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    error: "Too many requests — please try again later.",
  },
});
app.use(limiter);

/* ── API routes ──────────────────────────────────────────────────────── */
app.use("/api/health", healthRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/publications", publicationsRouter);
app.use("/api/people", peopleRouter);
app.use("/api/news", newsRouter);
app.use("/api/contact", contactRouter);

/* ── 404 handler ─────────────────────────────────────────────────────── */
app.use((_req, res) => {
  res.status(404).json({
    status: 404,
    error: "Route not found",
  });
});

/* ── Global error handler ────────────────────────────────────────────── */
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error("[ERROR]", err.message);
    res.status(500).json({
      status: 500,
      error:
        process.env.NODE_ENV === "production"
          ? "Internal server error"
          : err.message,
    });
  }
);

/* ── Start ───────────────────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`\n🔬 ILRL API running on http://localhost:${PORT}`);
  console.log(`   ENV  : ${process.env.NODE_ENV ?? "development"}`);
  console.log(`   CORS : ${process.env.FRONTEND_URL ?? "http://localhost:5173"}\n`);
});

export default app;
