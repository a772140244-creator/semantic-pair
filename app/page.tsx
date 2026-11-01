"use client";

import { useMemo, useState } from "react";
import { computeMockCues, type CueResult } from "@/lib/cues";

const initial: CueResult = computeMockCues("", "");

export default function HomePage() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [cues, setCues] = useState<CueResult>(initial);

  const stageHint = useMemo(() => {
    switch (cues.stage) {
      case "diverge":
        return "Ideas look far apart — lean into exploration.";
      case "explore":
        return "Mid-range distance — keep probing overlaps.";
      case "converge":
        return "Ideas are close — good moment to synthesize.";
      default:
        return "";
    }
  }, [cues.stage]);

  function refreshCues() {
    setCues(computeMockCues(textA, textB));
  }

  return (
    <main>
      <span className="badge">Kiroween 2026 · Frankenstein · MIT</span>
      <h1>Semantic Pair</h1>
      <p className="sub">
        Dual-remote brainstorm tool with live AI semantic-distance and creativity-stage
        cues for two collaborators. Solo student entry by ZhuoQI Yin.
      </p>

      <div className="grid">
        <section className="panel" aria-label="Person A">
          <h2>Person A</h2>
          <textarea
            value={textA}
            onChange={(e) => setTextA(e.target.value)}
            placeholder="Brainstorm ideas…"
            aria-label="Person A brainstorm"
          />
        </section>

        <section className="panel readout" aria-label="Semantic cues">
          <h2>Cues</h2>
          <div>
            <div className="metric">{cues.distance.toFixed(3)}</div>
            <div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
              semantic distance (0–1)
            </div>
          </div>
          <div>
            <span className="stage">{cues.stage}</span>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", margin: "0.6rem 0 0" }}>
              {stageHint}
            </p>
          </div>
          <button type="button" onClick={refreshCues}>
            Refresh cues
          </button>
        </section>

        <section className="panel" aria-label="Person B">
          <h2>Person B</h2>
          <textarea
            value={textB}
            onChange={(e) => setTextB(e.target.value)}
            placeholder="Brainstorm ideas…"
            aria-label="Person B brainstorm"
          />
        </section>
      </div>

      <p className="note" role="note">
        Embeddings are <strong>mocked</strong> for this demo (deterministic hash-based
        cues). No API keys required until a real embedding provider is wired.
      </p>
    </main>
  );
}
