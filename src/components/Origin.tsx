import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

export function Origin() {
  return (
    <section
      id="origin"
      className="scroll-mt-20 border-t border-line/70 bg-gradient-to-b from-teal-50/60 to-page"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <Eyebrow className="justify-center">The origin</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <Quote
            size={40}
            className="mx-auto mt-8 text-teal-light"
            aria-hidden
            fill="currentColor"
          />
        </Reveal>

        <Reveal delay={140}>
          <blockquote className="mt-6 text-balance text-2xl font-semibold leading-[1.4] tracking-[-0.01em] text-navy sm:text-[2rem] sm:leading-[1.4]">
            Civentry was built by an HOA treasurer who&rsquo;s good enough with
            money to save his association plenty of it&nbsp;— but not lucky
            enough to get out of the job. The finances were never the hard part.{" "}
            <span className="text-teal">The hours were.</span> So he built the
            tool that hands those hours back.
          </blockquote>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-line bg-white/70 px-4 py-2 backdrop-blur">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
              CL
            </span>
            <span className="font-data text-xs uppercase tracking-[0.12em] text-slate">
              For treasurers who can&rsquo;t quit
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
