import { Reveal } from "./Reveal";
import { Cta } from "./Cta";
import { primaryCta, secondaryCta } from "@/lib/site";

export function ClosingCta() {
  return (
    <section className="px-5 pb-24 pt-4 sm:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-line bg-white px-6 py-20 text-center frame-shadow sm:py-24">
          {/* Atmosphere, echoing the hero. */}
          <div
            className="bg-grid bg-fade-edges pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div
            className="aura-teal pointer-events-none absolute inset-x-0 top-0 h-2/3"
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-navy sm:text-5xl">
              Get your evenings back.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-slate sm:text-xl">
              Understand the money in minutes. Keep the rest of your night.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Cta
                href={primaryCta.href}
                variant="primary"
                size="lg"
                external
                arrow
              >
                {primaryCta.label}
              </Cta>
              <Cta href={secondaryCta.href} variant="secondary" size="lg" external>
                {secondaryCta.label}
              </Cta>
            </div>

            <p className="mt-5 text-[13px] text-mute">
              No credit card to start · Your first answers in minutes
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
