# Steps log — Semantic Pair / Kiroween 2026

## 2026-11-01 13:45 CST (Asia/Shanghai)

- Created project skeleton under `/workspace/kiroween-2026`.
- Added `.kiro/steering/{product,tech,structure}.md`, specs, hooks, LICENSE (MIT © 2026 ZhuoQI Yin), README, `.gitignore` (`.kiro` not ignored), docs stubs, and this log.

## 2026-11-01 13:46 CST (Asia/Shanghai)

- `npx create-next-app@latest` refused non-empty dir (conflict with `.kiro/`, `README.md`, `app/`, `log/`). Hand-wrote minimal Next.js 15 + TS App Router scaffold instead.
- Implemented MVP UI (`app/page.tsx`): Person A / B panels, center distance + stage, Refresh cues, mock disclaimer.
- Added `lib/cues.ts`, `lib/embeddings.ts` placeholder, `lib/realtime.ts` in-memory stub, `lib/cues.test.mjs`.
- `npm install` succeeded.
- `npm run build` **passed** (Next.js 15.5.28).
- `npm test` passed (2 tests).
- No GitHub push; no secrets created.
2026-11-01 13:49:46 CST
Devpost Join → Cloudflare Turnstile stuck on register; handed box to user
2026-11-01 13:54:22 CST Devpost signup page visible after Cloudflare; handing Google SSO to user
2026-11-01 13:58:22 CST Logged into Devpost; on hackathon-recommendations preferences; filling and continuing
2026-11-01 14:09:17 CST Pref answers: employed_tech=No timezone=Asia/Shanghai birth_month=May; continuing form
2026-11-01 14:14:53 CST Preferences saved; profile https://devpost.com/a772140244; on kiroween register form awaiting field answers + CONFIRM
2026-11-01 14:15:40 CST User CONFIRM Register; submitting with ZhuoQI Yin, Solo, N/A Kiro ID, None yet, interest=spec/steering
2026-11-01 14:18:33 CST Devpost registered OK profile=https://devpost.com/a772140244
2026-11-01 14:26:17 CST Kiro User ID d-9067c98495.64a81478-40f1-70d4-1fff-f5543f8cf6b0
2026-11-01 14:31:27 CST Credits form submitted; awaiting Didit email + redeem code
2026-11-01 14:50:08 CST Created empty public repo https://github.com/a772140244-creator/semantic-pair
