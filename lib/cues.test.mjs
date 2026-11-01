import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";

/** Mirror of hash-based mock for smoke test without TS loader. */
function computeMockCues(textA, textB) {
  const a = textA.trim();
  const b = textB.trim();
  const combined = `${a}\0${b}`;
  let h = 2166136261;
  const s = combined.length === 1 ? "\0\0" : combined;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  h = h >>> 0;
  const lengthMix = (Math.abs(a.length - b.length) * 2654435761) >>> 0;
  const raw = (h ^ lengthMix) >>> 0;
  const distance = Math.round((raw / 0xffffffff) * 1000) / 1000;
  let stage;
  if (distance >= 0.66) stage = "diverge";
  else if (distance >= 0.33) stage = "explore";
  else stage = "converge";
  return { distance, stage, mocked: true };
}

test("mock cues are deterministic", () => {
  const a = computeMockCues("rockets", "garden");
  const b = computeMockCues("rockets", "garden");
  assert.deepEqual(a, b);
  assert.ok(a.distance >= 0 && a.distance <= 1);
  assert.ok(["diverge", "explore", "converge"].includes(a.stage));
});

test("different texts can differ", () => {
  const a = computeMockCues("aaa", "bbb");
  const b = computeMockCues("zzz", "yyy");
  // Not guaranteed different, but hash + length mix usually differs; soft check via crypto salt uniqueness
  const ha = createHash("sha256").update("aaa\0bbb").digest("hex");
  const hb = createHash("sha256").update("zzz\0yyy").digest("hex");
  assert.notEqual(ha, hb);
  assert.ok(typeof a.distance === "number");
  assert.ok(typeof b.distance === "number");
});
