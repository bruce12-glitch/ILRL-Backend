# ILRL — Backend API

REST API serving the ILRL lab website data (projects, publications, people, news) plus the contact/join form.

[![CI](https://github.com/bruce12-glitch/ILRL-Backend/actions/workflows/ci.yml/badge.svg)](https://github.com/bruce12-glitch/ILRL-Backend/actions/workflows/ci.yml)
[![Node 22](https://img.shields.io/badge/Node-22-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)

---

## 🧭 About ILRL

**ILRL (Inference-in-Loop & Recurrence Lab)** is a remote-first research lab building open systems for efficient LLM inference. This backend serves the lab's public website data via a clean REST API.

**Founded:** October 2026  
**Contact:** inba.research.ilrl.labs@gmail.com  
**Organization:** [github.com/bruce12-glitch](https://github.com/bruce12-glitch)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 22+ (see `.nvmrc`)

### Installation
```bash
npm install
cp .env.example .env   # set PORT, FRONTEND_URL, SMTP_*
npm run dev            # http://localhost:4000 with auto-reload
```

### Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server with auto-reload (ts-node-dev) |
| `npm run build` | Compile TypeScript → `dist/` |
| `npm start` | Run compiled server from `dist/` |
| `npm run typecheck` | TypeScript check (no emit) |
| `npm run lint` | ESLint over `src/` |

### Environment Variables
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Port to listen on | `4000` |
| `NODE_ENV` | `development` or `production` | `development` |
| `FRONTEND_URL` | Allowed CORS origin for the frontend | `http://localhost:5173` |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | SMTP credentials for contact form | — |
| `MAIL_FROM` / `MAIL_TO` | Sender/recipient for contact mail | — |

Without SMTP credentials the contact endpoint accepts the payload, logs it, and answers `202` instead of failing.

---

## 📡 API Endpoints

All responses are JSON shaped `{ status, data }` (lists add `meta.count`).

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Liveness (`{ ok, uptime }`) |
| GET | `/api/projects` | All research projects |
| GET | `/api/projects/:id` | One project (`entroprefill`, `page-entrokv`, `recloop`) |
| GET | `/api/publications` | All papers (empty until real ones land) |
| GET | `/api/publications/:id` | One paper |
| GET | `/api/people` | `{ faculty, team, alumni }` |
| GET | `/api/news` | Lab news items |
| POST | `/api/contact` | Join/collab/general message (validated, rate-limited) |

### Example Response
```json
GET /api/projects/entroprefill
{
  "status": 200,
  "data": {
    "id": "entroprefill",
    "tag": "SYS–01",
    "name": "EntroPrefill",
    "area": "Prefill · Sparse Attention",
    "headline": "Mitigating long-context quadratic prefill latency with entropy-guided sparse attention",
    "status": "Active",
    "blurb": "...",
    "detail": "...",
    "contributions": [...],
    "metrics": [
      { "value": "3.1×", "label": "faster TTFT @ 256K ctx" },
      { "value": "−72%", "label": "prefill attention FLOPs" },
      { "value": "<0.4", "label": "NLL perplexity drift" }
    ],
    "arxiv": "https://arxiv.org/abs/2512.03310",
    "arxivLabel": "arXiv:2512.03310",
    "code": "https://github.com/bruce12-glitch/ILRL",
    "diagram": "prefill",
    "paperId": "entroprefill-paper"
  }
}
```

---

## 🔒 Security

- **Helmet** headers (CSP, HSTS, etc.)
- **CORS** restricted to `FRONTEND_URL` + lab Pages site
- **Rate limit:** 200 req / 15 min (global)
- **Body limit:** 10 KB JSON
- **Input validation:** express-validator on all mutating routes
- **Error handling:** no stack traces in production

---

## 📁 Project Structure

```
src/
├── server.ts      # App wiring (security, CORS, routes, errors)
├── types/         # Shared Project/Paper/Person/News/Contact types
├── data/          # In-memory datasets (mirrors frontend lab.ts)
│   ├── projects.ts
│   ├── publications.ts
│   ├── people.ts
│   └── news.ts
└── routes/        # health, projects, publications, people, news, contact
    ├── health.ts
    ├── projects.ts
    ├── publications.ts
    ├── people.ts
    ├── news.ts
    └── contact.ts
```

---

## 🔗 Links

- **Frontend Repo:** https://github.com/bruce12-glitch/ILRL-Frontend-
- **Backend Repo:** https://github.com/bruce12-glitch/ILRL-Backend
- **Organization:** https://github.com/bruce12-glitch

---

## 🛠 Tech Stack

- **Runtime:** Node.js 22 + TypeScript 5 (ESM via `ts-node-dev`)
- **Framework:** Express 5
- **Validation:** express-validator
- **Email:** Nodemailer (SMTP)
- **Security:** Helmet, CORS, express-rate-limit
- **Logging:** Morgan
- **Dev:** ts-node-dev (hot reload), ESLint 9 flat config

---

## 📦 Deployment

```bash
npm run build
npm start
# Runs on PORT (default 4000)
# Set NODE_ENV=production for production error handling
```

### Docker
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY dist ./dist
ENV NODE_ENV=production
EXPOSE 4000
CMD ["node", "dist/server.js"]
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Run `npm run typecheck && npm run lint && npm run build`
5. Open a PR

---

## 📄 License

MIT — see [LICENSE](LICENSE) for details.