export type CreativityStage = "diverge" | "explore" | "converge";

export type CueResult = {
  distance: number;
  stage: CreativityStage;
  mocked: true;
};

/** Simple deterministic string hash → unsigned 32-bit. */
function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Deterministic mock semantic cues from two brainstorm texts.
 * Same inputs always yield the same distance + stage (demo-safe, no API keys).
 */
export function computeMockCues(textA: string, textB: string): CueResult {
  const a = textA.trim();
  const b = textB.trim();
  const combined = `${a}\u0000${b}`;
  const h = hashString(combined.length === 1 ? "\u0000\u0000" : combined);
  // Mix length delta so empty vs filled texts still vary a bit but stay deterministic
  const lengthMix = (Math.abs(a.length - b.length) * 2654435761) >>> 0;
  const raw = (h ^ lengthMix) >>> 0;
  const distance = Math.round((raw / 0xffffffff) * 1000) / 1000;

  let stage: CreativityStage;
  if (distance >= 0.66) stage = "diverge";
  else if (distance >= 0.33) stage = "explore";
  else stage = "converge";

  return { distance, stage, mocked: true };
}
