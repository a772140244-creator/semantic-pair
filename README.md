# Semantic Pair — Kiroween 2026

**Working name:** Semantic Pair  

Dual-remote brainstorm tool that shows live AI **semantic-distance** and **creativity-stage** cues for two collaborators.

| Field | Value |
|--------|--------|
| Hackathon | Kiroween 2026 |
| Category | Frankenstein |
| Author | ZhuoQI Yin (solo student) |
| GitHub (planned) | `a772140244-creator` |
| License | MIT |

## Why `/.kiro` is in the repo

The `.kiro/` directory (steering, specs, hooks) is an **intentional** part of this Kiroween deliverable.  
**Do not gitignore `.kiro`.** Reviewers and tooling expect it in the public tree.

## Stack

- Next.js (App Router) + TypeScript
- Embedding API placeholder (deterministic mock for local demo)
- Realtime: in-memory / WebSocket stub; Supabase-ready interface

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build check
npm test        # stub / unit tests when present
```

## MVP demo

1. Type brainstorm ideas in **Person A** and **Person B**.
2. Click **Refresh cues** for a mocked semantic distance (0–1) and stage label.
3. Embeddings are **mocked** until a real API is wired — no API keys required for the demo.

## Docs

- [docs/DEVPOST.md](docs/DEVPOST.md) — submission blurb
- [docs/VIDEO_SCRIPT.md](docs/VIDEO_SCRIPT.md) — ~170s video outline
- [docs/KIRO_USAGE.md](docs/KIRO_USAGE.md) — Kiro surfaces used
- [log/steps.md](log/steps.md) — scaffold / build notes

## License

MIT © 2026 ZhuoQI Yin
