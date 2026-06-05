import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

const variants: Record<Variant, string> = {
  // The app's action color. Solid, confident, lifts on hover.
  primary:
    "bg-teal text-white shadow-[0_1px_2px_rgba(11,29,58,0.12),0_6px_16px_-6px_rgba(15,118,110,0.5)] hover:bg-[#0c5f58] hover:shadow-[0_2px_4px_rgba(11,29,58,0.12),0_10px_22px_-6px_rgba(15,118,110,0.55)] hover:-translate-y-px active:translate-y-0",
  // Quiet, bordered — pairs beside the primary without competing.
  secondary:
    "bg-white text-navy border border-line hover:border-teal-light hover:text-teal hover:bg-teal-50",
  // Inline text action.
  ghost: "text-slate hover:text-teal",
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
  /** External links (the app) get the right rel/target hints. */
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
