import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";
import { Cta } from "./Cta";
import { primaryCta } from "@/lib/site";

const TRACKS = ["Solo treasurer", "Full board"];
const REASSURANCE = ["Cancel anytime", "No setup fees", "Built for HOA budgets"];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.02em] text-navy sm:text-[2.5rem]">
            Priced for volunteer budgets.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-slate">
            Pay for the hours you get back — not a per-door enterprise contract.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-12 max-w-xl">
          <div className="card-shadow overflow-hidden rounded-[26px] border border-line bg-white">
            <div className="px-8 pt-9 text-center">
              {/* Two tracks */}
              <div className="flex justify-center gap-2">
                {TRACKS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-page/70 px-3 py-1 text-xs font-medium text-slate"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Starting price */}
              <div className="mt-7 flex items-end justify-center gap-1.5">
                <span className="font-data text-6xl font-medium leading-none tracking-tight text-navy">
                  $9
                </span>
                <span className="pb-1.5 text-base text-mute">/mo to start</span>
              </div>
              <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-slate">
                Plans for solo treasurers and full boards. Final tiers are
                landing soon — start now and lock in the early price.
              </p>
            </div>

            <div className="mt-8 px-8 pb-9">
              <Cta
                href={primaryCta.href}
                variant="primary"
                size="lg"
                external
                arrow
                className="w-full"
              >
                {primaryCta.label}
              </Cta>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {REASSURANCE.map((r) => (
                  <span
                    key={r}
                    className="flex items-center gap-1.5 text-xs text-mute"
                  >
                    <Check size={13} className="text-teal" strokeWidth={2.5} />
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
