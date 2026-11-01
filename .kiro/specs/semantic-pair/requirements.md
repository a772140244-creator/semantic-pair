# Requirements — Semantic Pair

EARS-style requirements for the Kiroween 2026 MVP.

## Ubiquitous

- The system shall provide two brainstorm panels labeled Person A and Person B.
- The system shall display a semantic-distance score in the range 0.0–1.0 for the pair of texts.
- The system shall display a creativity-stage label derived from both texts (at least: diverge, converge).
- The system shall expose a "Refresh cues" control that recomputes distance and stage from current panel text.
- The system shall clearly indicate when embeddings / cues are mocked for demo (no live API).

## Event-driven

- WHEN the user activates "Refresh cues", the system shall recompute cues from the current Person A and Person B text without requiring a page reload.
- WHEN either panel text is empty, the system shall still return a defined score and stage (deterministic mock is acceptable).

## State-driven

- WHILE the app is in mock mode, the system shall not require embedding API keys to run locally.
- WHILE realtime sync is stubbed, the system shall keep a typed interface suitable for later WebSocket or Supabase wiring.

## Unwanted

- IF an embedding provider is unavailable, the system shall fall back to the deterministic mock rather than crash the UI.

## Optional / later

- WHEN realtime is enabled, the system shall sync panel text between two clients within a shared session id.
