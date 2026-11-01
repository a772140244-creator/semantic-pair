/**
 * Placeholder for a real embedding provider.
 * MVP uses computeMockCues; swap this when API keys are available.
 */
export type EmbeddingVector = number[];

export interface EmbeddingProvider {
  embed(texts: string[]): Promise<EmbeddingVector[]>;
}

export class MockEmbeddingProvider implements EmbeddingProvider {
  async embed(texts: string[]): Promise<EmbeddingVector[]> {
    // Tiny deterministic pseudo-vectors for interface demos only
    return texts.map((t) => {
      const out: number[] = [];
      let h = 0;
      for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0;
      for (let i = 0; i < 8; i++) {
        h = (Math.imul(h ^ (h >>> 16), 0x45d9f3b) + i) | 0;
        out.push(((h >>> 0) % 1000) / 1000);
      }
      return out;
    });
  }
}
