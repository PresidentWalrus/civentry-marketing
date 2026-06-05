import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";
import { FeatureSection, type FeatureSectionProps } from "./FeatureSection";
import { MockFrame } from "./mockups/shared";
import { MetricCards } from "./mockups/MetricCards";
import { ReserveMock } from "./mockups/ReserveMock";
import { BudgetMock } from "./mockups/BudgetMock";
import { TreasurerBriefMock } from "./mockups/TreasurerBriefMock";
import { ResidentMock } from "./mockups/ResidentMock";
import { CcrMock } from "./mockups/CcrMock";

/** Standard feature beats (Reserves is broken out separately, below). */
const FEATURES: FeatureSectionProps[] = [
  {
    index: "01",
    eyebrow: "Dashboard",
    title: "Your whole financial picture, without the digging.",
    body: "Cash, budget, reserves, and delinquencies — the numbers that matter, surfaced the moment you log in.",
    visual: (
      <MockFrame>
        <MetricCards layout="two" />
      </MockFrame>
    ),
  },
  {
    index: "03",
    eyebrow: "Budget",
    title: "Catch overspending before it's a problem.",
    body: "Budget vs. actual by category, variance flagged, next year's numbers ready — minus the manual tallying.",
    visual: (
      <MockFrame>
        <BudgetMock />
      </MockFrame>
    ),
    reverse: true,
  },
  {
    index: "04",
    eyebrow: "Meeting prep",
    title: "Walk in prepared, without the prep.",
    body: "Civentry writes the plain-English brief and the talking points for every board meeting. You just read.",
    visual: (
      <MockFrame>
        <TreasurerBriefMock />
      </MockFrame>
    ),
  },
  {
    index: "05",
    eyebrow: "Transparency",
    title: "Keep residents in the loop, minus the back-and-forth.",
    body: "Flip on a board-approved, resident-safe view — and stop fielding the same email about the reserves.",
    visual: (
      <MockFrame>
        <ResidentMock />
      </MockFrame>
    ),
    reverse: true,
  },
  {
    index: "06",
    eyebrow: "CC&R Assistant",
    title: "Stop digging through the CC&Rs.",
    body: "Ask your governing documents anything and get a plain-English answer with the exact clause cited — in seconds, not an afternoon.",
    visual: (
      <MockFrame>
        <CcrMock />
      </MockFrame>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Intro */}
        <Reveal className="mx-auto max-w-2xl pt-20 text-center sm:pt-28">
          <Eyebrow className="justify-center">Features</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.02em] text-navy sm:text-[2.75rem]">
            Built to hand your hours back.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate">
            Every feature does one job: take the tedious part off your plate,
            and leave the decisions to you.
          </p>
        </Reveal>

        {/* Dashboard — feature 01 */}
        <div className="divide-y divide-line/70">
          <FeatureSection {...FEATURES[0]} />
        </div>

        {/* Reserves — the standout, full-width */}
        <ReservesBeat />

        {/* Remaining beats */}
        <div className="divide-y divide-line/70 border-t border-line/70">
          {FEATURES.slice(1).map((f) => (
            <FeatureSection key={f.index} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * The standout. Centered intro, then a full-width product visual — the
 * reserve picture is Civentry's most differentiated feature, so it gets room.
 */
function ReservesBeat() {
  return (
    <div className="border-t border-line/70 py-14 sm:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow index="02" className="justify-center">
          Reserves
        </Eyebrow>
        <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-navy sm:text-[2.5rem]">
          Skip the hours of reserve math.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate">
          See exactly how funded you are, what you&rsquo;re on track for, and
          the one number that closes the gap — no spreadsheet gymnastics, no
          surprise special assessment.
        </p>
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-12 max-w-4xl">
        <MockFrame>
          <ReserveMock />
        </MockFrame>
      </Reveal>
    </div>
  );
}
