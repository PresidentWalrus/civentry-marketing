import { Reveal } from "@/components/motion";
import { Cta } from "./Cta";
import { primaryCta, secondaryCta } from "@/lib/site";

export function ClosingCta() {
  return (
    <section className="on-navy relative overflow-hidden bg-navy">
      {/* Atmosphere echoing the hero, in light ink on dark. */}
      <div
        className="bg-grid-light bg-fade-edges pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2/3"
        style={{
          background:
            "radial-gradient(50% 70% at 50% 0%, rgba(100,182,176,0.18) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
            You can&rsquo;t quit.
            <br />
            Civentry&rsquo;s the next best thing.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Get the tedious part off your plate, and your evenings back.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Cta href={primaryCta.href} variant="gold" size="lg" external arrow>
              {primaryCta.label}
            </Cta>
            <Cta
              href={secondaryCta.href}
              variant="outlineLight"
              size="lg"
              external
            >
              {secondaryCta.label}
            </Cta>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-6 text-[13px] text-white/50">
            No credit card to start · Your first answers in minutes
          </p>
        </Reveal>
      </div>
    </section>
  );
}
