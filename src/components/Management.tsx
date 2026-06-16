import { Check } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "./Eyebrow";
import { Cta } from "./Cta";
import { MockFrame, FloatingChip } from "./mockups/shared";
import { PortfolioMock } from "./mockups/PortfolioMock";
import { site } from "@/lib/site";

const POINTS = [
  "Reserve-to-bid forecasting across every community",
  "One portfolio view, one login for your whole book",
  "Per-community billing with volume discounts",
];

export function Management() {
  return (
    <section id="management" className="scroll-mt-16 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <Reveal>
            <Eyebrow>For management companies</Eyebrow>
            <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.07] tracking-[-0.025em] text-navy sm:text-[2.6rem]">
              Know which roof goes first.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate">
              Civentry reads the reserve studies across your whole book and
              surfaces the components nearing end of life, each with a path to
              open bids before a board is scrambling. The portfolio view and
              per-community billing come standard.
            </p>

            <ul className="mt-7 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-2.5 text-[15px] text-slate">
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    className="mt-0.5 shrink-0 text-teal"
                    aria-hidden
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Cta href={site.contact.sales} variant="primary" size="lg" arrow>
                Talk to us
              </Cta>
              <p className="mt-3 text-[13px] text-mute">
                Onboarding is hands-on for now, so we set you up personally.
              </p>
            </div>
          </Reveal>

          {/* Visual */}
          <Reveal delay={0.12} y={32} className="relative">
            <MockFrame>
              <PortfolioMock />
            </MockFrame>
            <FloatingChip className="-right-3 -top-5 lg:-right-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal/10 font-data text-[12px] font-semibold text-teal">
                  9
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-semibold text-navy">
                    Bids to open
                  </p>
                  <p className="font-data text-[10px] text-mute">
                    next 24 months
                  </p>
                </div>
              </div>
            </FloatingChip>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
