import type { ReactNode } from "react";

/** A white product card — the surface used throughout the app's UI. */
export function Panel({
  children,
  accent,
  className = "",
}: {
  children: ReactNode;
  /** Optional colored left border (status / brand hex). */
  accent?: string;
  className?: string;
}) {
  return (
    <div
      className={`card-shadow rounded-2xl border border-line bg-white ${className}`}
      style={accent ? { borderLeft: `4px solid ${accent}` } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * A softly-shadowed frame that holds a feature's product visual — a "slice
 * of the app" on a faint page-tinted backing, without repeating the hero's
 * full app chrome.
 */
export function MockFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`frame-shadow rounded-[26px] border border-line bg-page/70 p-3 sm:p-4 ${className}`}
    >
      {children}
    </div>
  );
}

/** Small uppercase label used inside mockups (mono, muted). */
export function MockLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.09em] text-[#94A3B8]">
      {children}
    </p>
  );
}
