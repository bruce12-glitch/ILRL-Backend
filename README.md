# ILRL — Backend

REST API serving the lab website data (projects, publications, people, news)
plus the contact/join form. Node.js + Express + TypeScript.

Frontend: [`ILRL-Frontend-`](https://github.com/bruce12-glitch/ILRL-Frontend-).

## Prerequisites

- Node.js 22 (see `.nvmrc`)

## Setup

```bash
npm install
cp .env.example .env   # set PORT, FRONTEND_URL and SMTP_* below
npm run dev            # http://localhost:4000 with auto-reload
```

## Scripts

| Command           | Purpose                          |
| ----------------- | -------------------------------- |
| `npm run dev`     | Dev server with auto-reload      |
| `npm run build`   | Compile TypeScript → `dist/`     |
| `npm start`       | Run the compiled server          |
| `npm run typecheck` | TypeScript check, no emit      |
| `npm run lint`    | ESLint over `src/`               |

## Environment

| Variable       | Purpose                                              |
| -------------- | ---------------------------------------------------- |
| `PORT`         | Port to listen on (default `4000`)                   |
| `NODE_ENV`     | `development` or `production` (error detail, logging)|
| `FRONTEND_URL` | Allowed CORS origin for the frontend                 |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | SMTP credentials for the contact form |
| `MAIL_FROM` / `MAIL_TO` | Sender/recipient for contact mail          |

`.env` is git-ignored; `.env.example` documents every value. Without SMTP
credentials the contact endpoint accepts the payload, logs it and answers
`202` instead of failing — wire real credentials to enable delivery.

## API

All responses are JSON shaped `{ status, data }` (lists add `meta.count`).

| Method | Path                 | Description                              |
| ------ | -------------------- | ---------------------------------------- |
| GET    | `/api/health`        | Liveness (`{ ok, uptime }`)              |
| GET    | `/api/projects`      | All research projects                    |
| GET    | `/api/projects/:id`  | One project (`entroprefill`, …)          |
| GET    | `/api/publications`  | All papers (empty until real ones land)  |
| GET    | `/api/publications/:id` | One paper                             |
| GET    | `/api/people`        | `{ faculty, team, alumni }`              |
| GET    | `/api/news`          | Lab news items                           |
| POST   | `/api/contact`       | Join/collab/general message (validated, rate-limited) |

Security: `helmet` headers, CORS restricted to `FRONTEND_URL` plus the lab
Pages site, 10kb JSON body limit, global rate limit (200 req / 15 min).

## Project structure

```
src/
├── server.ts      # App wiring (security, CORS, routes, errors)
├── types/         # Shared Project/Paper/Person/News/Contact types
├── data/          # In-memory datasets (mirrors frontend lab.ts)
└── routes/        # health, projects, publications, people, news, contact
```

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs `npm ci`, `typecheck`,
`lint` and `build` on pushes/PRs to `main`.
