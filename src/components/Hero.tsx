import { Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { Cta } from "./Cta";
import { DashboardMock } from "./mockups/DashboardMock";
import { primaryCta } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Atmosphere — faint blueprint grid, faded at the edges. */}
      <div
        className="bg-grid bg-fade-edges pointer-events-none absolute inset-x-0 top-0 h-[640px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-36">
        {/* Headline block */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[13px] font-medium text-slate backdrop-blur">
              <Sparkles size={14} className="text-gold" aria-hidden />
              Built by an HOA treasurer
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.025em] text-navy sm:text-6xl">
              HOA finances,
              <br className="hidden sm:block" /> <span className="text-teal">minus the headache.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
              Upload your reports, let the AI do the squinting, and actually
              understand where the money goes.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Cta href={primaryCta.href} variant="primary" size="lg" external arrow>
                {primaryCta.label}
              </Cta>
              <Cta href="#product" variant="secondary" size="lg">
                See how it works
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-5 text-[13px] text-mute">
              No credit card to start · Your first answers in minutes
            </p>
          </Reveal>
        </div>

        {/* Product — the dashboard, as hero. */}
        <Reveal delay={360} className="relative mt-16">
          <div
            className="aura-teal pointer-events-none absolute -inset-x-16 -top-10 bottom-0"
            aria-hidden
          />
          <div id="product" className="relative scroll-mt-24">
            <DashboardMock live />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
