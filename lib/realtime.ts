/**
 * Supabase-ready / WebSocket-ready realtime stub (in-memory for single process).
 */
export type PanelId = "A" | "B";

export type RealtimeMessage = {
  panel: PanelId;
  text: string;
  at: number;
};

export type RealtimeListener = (msg: RealtimeMessage) => void;

export interface RealtimeSession {
  join(sessionId: string): Promise<void>;
  publish(panel: PanelId, text: string): Promise<void>;
  subscribe(cb: RealtimeListener): () => void;
  leave(): Promise<void>;
}

/** In-memory stub — replace with WebSocket or Supabase Realtime later. */
export class InMemoryRealtimeSession implements RealtimeSession {
  private sessionId: string | null = null;
  private listeners = new Set<RealtimeListener>();

  async join(sessionId: string): Promise<void> {
    this.sessionId = sessionId;
  }

  async publish(panel: PanelId, text: string): Promise<void> {
    const msg: RealtimeMessage = { panel, text, at: Date.now() };
    for (const cb of this.listeners) cb(msg);
  }

  subscribe(cb: RealtimeListener): () => void {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  async leave(): Promise<void> {
    this.sessionId = null;
    this.listeners.clear();
  }

  get currentSessionId(): string | null {
    return this.sessionId;
  }
}
