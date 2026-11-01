---
inclusion: always
---

# Tech — Semantic Pair

## Stack

- **Next.js** (App Router) + **TypeScript**
- Embedding API: placeholder / mock first; swap for real provider later
- Realtime: start with in-memory or WebSocket stub; keep a **Supabase-ready** interface boundary

## Principles

- Deterministic mock for demos (hash-based cues from both texts) — no API keys required for local run
- Thin client UI; cue computation behind a clear module boundary (`lib/semantic` or similar)
- Env vars only for real providers (never commit secrets)
- Prefer small, typed interfaces over premature infra

## Tooling

- `npm` scripts: `dev`, `build`, `start`, `test` (even if test is a stub initially)
- MIT license; copyright 2026 ZhuoQI Yin
