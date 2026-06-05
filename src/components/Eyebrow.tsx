import type { ReactNode } from "react";

/**
 * Small mono section label, e.g. "02 — Reserves". The DM-Mono-on-labels
 * detail ties the marketing layout to the product's financial texture.
 */
export function Eyebrow({
  index,
  children,
  className = "",
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-data text-xs tracking-[0.16em] uppercase text-teal flex items-center gap-2 ${className}`}
    >
      {index && (
        <>
          <span className="text-gold">{index}</span>
          <span className="text-line" aria-hidden>
            —
          </span>
        </>
      )}
      <span className="text-teal/90">{children}</span>
    </p>
  );
}
