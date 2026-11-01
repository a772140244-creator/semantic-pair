# Tasks — Semantic Pair

## Scaffold

- [x] Create repo skeleton with `.kiro` steering, specs, hooks
- [x] Add MIT LICENSE, README, `.gitignore` (keep `.kiro`)
- [x] Add docs stubs (KIRO_USAGE, VIDEO_SCRIPT, DEVPOST) and `log/steps.md`
- [x] Scaffold Next.js + TypeScript App Router app at repo root
- [x] Implement MVP UI: A/B panels, distance, stage, Refresh cues
- [x] Add mock cue module + UI mock disclaimer
- [x] `npm install` and `npm run build` green

## Core MVP

- [x] Extract `lib/cues.ts` deterministic mock
- [x] Add `lib/embeddings.ts` placeholder interface
- [x] Add `lib/realtime.ts` in-memory / Supabase-ready stub
- [x] Basic CSS for side-by-side demo layout
- [x] Optional: trivial unit test for cue determinism (`npm test`)

## Post-MVP (hackathon stretch)

- [ ] Wire real embedding provider behind env flag
- [ ] WebSocket or Supabase Realtime two-client sync
- [ ] Session share link
- [ ] Polish Devpost + ~170s video per `docs/VIDEO_SCRIPT.md`
- [ ] Public GitHub repo under `a772140244-creator` (manual; do not auto-push from scaffold)
