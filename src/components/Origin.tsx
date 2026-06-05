import { Quote, Lock } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "./Eyebrow";

export function Origin() {
  return (
    <section
      id="origin"
      className="on-navy relative scroll-mt-16 overflow-hidden bg-navy"
    >
      {/* Atmosphere on the dark block. */}
      <div
        className="bg-grid-light bg-fade-edges pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2/3"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(100,182,176,0.16) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <Eyebrow tone="navy" className="justify-center">
            The origin
          </Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <Quote
            size={40}
            className="mx-auto mt-8 text-teal-light"
            aria-hidden
            fill="currentColor"
          />
        </Reveal>

        <Reveal delay={0.14}>
          <blockquote className="mt-6 text-balance text-2xl font-semibold leading-[1.45] tracking-[-0.01em] text-white sm:text-[2rem] sm:leading-[1.45]">
            Civentry was built by an HOA treasurer who&rsquo;s good enough with
            money to save his association plenty of it, but not lucky enough to
            get out of the job. The finances were never the hard part.{" "}
            <span className="text-teal-light">The hours were.</span> So he built
            the tool that hands those hours back.
          </blockquote>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2">
            <Lock size={14} className="text-gold" aria-hidden />
            <span className="text-sm font-medium text-white">
              For treasurers who can&rsquo;t quit.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
