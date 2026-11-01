# Design — Semantic Pair

## Overview

Minimal Next.js App Router UI: two textareas + center cue readout. Cue engine starts as a deterministic mock (hash of both strings → distance + stage). Real embedding API and realtime transport plug in behind stable interfaces.

## UI

```
┌─────────────┐  ┌──────────────┐  ┌─────────────┐
│  Person A   │  │ Distance     │  │  Person B   │
│  textarea   │  │ Stage        │  │  textarea   │
│             │  │ [Refresh]    │  │             │
└─────────────┘  └──────────────┘  └─────────────┘
Mock note: embeddings mocked until API wired
```

## Modules

- `app/page.tsx` — client UI for panels + readout
- `lib/cues.ts` — `computeMockCues(textA, textB) → { distance, stage }`
- `lib/realtime.ts` — stub interface (`RealtimeSession`) for later WS/Supabase
- `lib/embeddings.ts` — placeholder for real embedding provider

## Cue mock algorithm (demo)

1. Normalize and concatenate texts with a separator.
2. Simple string hash → float in [0, 1] for distance.
3. Map distance bands to stage: high distance → diverge; mid → explore; low → converge.
4. Same inputs always yield same outputs (demo reproducibility).

## Realtime stub

- Interface only: `join(sessionId)`, `publish(panel, text)`, `subscribe(cb)`.
- In-memory implementation for single-process demo; Supabase Realtime later.

## Security / ops

- No secrets in repo. `.env.example` optional later.
- MIT; solo student Frankenstein entry.
