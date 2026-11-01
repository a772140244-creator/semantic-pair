---
inclusion: always
---

# Structure — Semantic Pair

## Repo layout (intentional)

```
/
  app/                 # Next.js App Router UI
  lib/                 # cue math, mocks, realtime stubs
  .kiro/               # Kiro steering, specs, hooks — DO NOT gitignore
  docs/                # KIRO_USAGE, VIDEO_SCRIPT, DEVPOST
  log/                 # build / scaffold notes
```

## Conventions

- UI: side-by-side Person A / Person B textareas + center readout
- Mock semantic distance + creativity stage behind one refresh action
- Specs live under `.kiro/specs/semantic-pair/`
- Keep README clear that `/.kiro` is part of the deliverable
