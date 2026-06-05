import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "./Eyebrow";

export type FeatureRowProps = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
  /** Flip the visual to the left on desktop (alternating rhythm). */
  reverse?: boolean;
};

/**
 * One feature beat: a big payoff headline + one line + a framed, alive
 * product visual. Sides alternate down the page.
 */
export function FeatureRow({
  index,
  eyebrow,
  title,
  body,
  visual,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.07] tracking-[-0.025em] text-navy sm:text-[2.6rem]">
          {title}
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate">
          {body}
        </p>
      </Reveal>

      <Reveal delay={0.12} y={32} className={reverse ? "lg:order-1" : ""}>
        {visual}
      </Reveal>
    </div>
  );
}
