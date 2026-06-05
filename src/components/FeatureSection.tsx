import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

export type FeatureSectionProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  visual: ReactNode;
  /** Flip the visual to the left on desktop (alternating rhythm). */
  reverse?: boolean;
};

/**
 * One feature beat: a payoff headline + a single line + a real product
 * visual. Brutally minimal copy — the product carries it. Alternates sides
 * down the page.
 */
export function FeatureSection({
  index,
  eyebrow,
  title,
  body,
  visual,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
      {/* Copy */}
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-navy sm:text-[2.5rem]">
          {title}
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-slate">
          {body}
        </p>
      </Reveal>

      {/* Visual */}
      <Reveal
        delay={120}
        className={reverse ? "lg:order-1" : ""}
      >
        {visual}
      </Reveal>
    </div>
  );
}
