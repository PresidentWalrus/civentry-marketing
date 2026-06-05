import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

/** A white product card, the surface used throughout the app's UI. */
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
 * A framed "slice of the app": a white window holding the app's grey canvas
 * with white cards inside. The layering gives depth and lets the product pop,
 * especially on tinted sections.
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
      className={`frame-shadow rounded-[22px] border border-line bg-white p-2 sm:p-2.5 ${className}`}
    >
      <div className="rounded-2xl bg-page p-4 sm:p-5">{children}</div>
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

/**
 * A small product chip that floats off a framed surface for dimensionality.
 * Opacity fades in via Reveal (reduced-motion safe); gentle drift via CSS on a
 * separate element so the transforms never fight. Hidden on small screens.
 */
export function FloatingChip({
  children,
  className = "",
  delay = 0.5,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal
      y={0}
      delay={delay}
      className={`absolute z-10 hidden md:block ${className}`}
    >
      <div className="chip-float float-shadow rounded-xl border border-line bg-white px-3.5 py-2.5">
        {children}
      </div>
    </Reveal>
  );
}
