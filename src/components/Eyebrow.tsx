import type { ReactNode } from "react";

/**
 * Small mono section label, e.g. "02 / Reserves". The index + thin rule
 * give the page an Attio-style numbered system. The DM-Mono-on-labels detail
 * ties the layout to the product's financial texture.
 */
export function Eyebrow({
  index,
  children,
  tone = "light",
  className = "",
}: {
  index?: string;
  children: ReactNode;
  tone?: "light" | "navy";
  className?: string;
}) {
  const label = tone === "navy" ? "text-teal-light" : "text-teal";
  const rule = tone === "navy" ? "bg-white/25" : "bg-line";
  return (
    <p
      className={`font-data flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] ${className}`}
    >
      {index && (
        <>
          <span className="text-gold">{index}</span>
          <span className={`h-3 w-px ${rule}`} aria-hidden />
        </>
      )}
      <span className={label}>{children}</span>
    </p>
  );
}
