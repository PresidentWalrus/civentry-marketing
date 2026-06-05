import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "gold"
  | "outlineLight";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal active:translate-y-0";

const variants: Record<Variant, string> = {
  // The app's action color. Solid, confident, lifts on hover.
  primary:
    "bg-teal text-white shadow-[0_1px_2px_rgba(11,29,58,0.12),0_6px_16px_-6px_rgba(15,118,110,0.5)] hover:bg-[#0c5f58] hover:shadow-[0_4px_10px_rgba(11,29,58,0.14),0_14px_28px_-8px_rgba(15,118,110,0.6)] hover:-translate-y-0.5",
  // Quiet, bordered. Pairs beside the primary without competing.
  secondary:
    "bg-white text-navy border border-line hover:border-teal-light hover:text-teal hover:bg-teal-50 hover:-translate-y-0.5",
  // Inline text action.
  ghost: "text-slate hover:text-teal",
  // The single gold highlight (closing CTA only).
  gold:
    "bg-gold text-navy shadow-[0_1px_2px_rgba(11,29,58,0.18),0_8px_20px_-6px_rgba(212,175,55,0.6)] hover:bg-[#e0bd49] hover:shadow-[0_4px_12px_rgba(11,29,58,0.2),0_16px_32px_-8px_rgba(212,175,55,0.7)] hover:-translate-y-0.5",
  // Outlined, for placement on navy blocks.
  outlineLight:
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Show a trailing arrow that nudges on hover. */
  arrow?: boolean;
  className?: string;
  /** External links (the app) get the right rel hints. */
  external?: boolean;
};

export function Cta({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  external = false,
}: CtaProps) {
  return (
    <a
      href={href}
      {...(external ? { rel: "noopener" } : {})}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.25}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        />
      )}
    </a>
  );
}
