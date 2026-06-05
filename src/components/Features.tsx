import { FileText, TriangleAlert } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "./Eyebrow";
import { FeatureRow } from "./FeatureSection";
import { MockFrame, FloatingChip } from "./mockups/shared";
import { BrowserFrame } from "./mockups/chrome";
import { MetricCards } from "./mockups/MetricCards";
import { ReserveMock } from "./mockups/ReserveMock";
import { BudgetMock } from "./mockups/BudgetMock";
import { TreasurerBriefMock } from "./mockups/TreasurerBriefMock";
import { ResidentMock } from "./mockups/ResidentMock";
import { CcrMock } from "./mockups/CcrMock";

const SECTION = "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28";

export function Features() {
  return (
    <>
      {/* 01 Dashboard - white, text left / product right */}
      <section id="features" className="scroll-mt-16 bg-white">
        <div className={SECTION}>
          <FeatureRow
            index="01"
            eyebrow="Dashboard"
            title="The whole picture, no scavenger hunt."
            body="Cash, reserves, budget, and who's behind on dues, all surfaced the moment you log in. The answer's no longer on page 17 of Financials_FINAL_v3.pdf."
            visual={
              <BrowserFrame url="app.civentry.com/dashboard">
                <div className="bg-page p-4">
                  <MetricCards layout="two" />
                </div>
              </BrowserFrame>
            }
          />
        </div>
      </section>

      {/* 02 Reserves - teal mist, full-bleed standout */}
      <section className="bg-mist">
        <div className={SECTION}>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow index="02" className="justify-center">
              Reserves
            </Eyebrow>
            <h2 className="mt-5 text-[2.1rem] font-extrabold leading-[1.06] tracking-[-0.025em] text-navy sm:text-[2.9rem]">
              The reserve study, minus 97 pages.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              A hundred pages of reserve study, and you need about three numbers
              from it: how funded you are, what you&rsquo;re on track for, and
              the contribution that keeps a special assessment off the table.
              Civentry surfaces them.
            </p>
          </Reveal>

          <Reveal delay={0.12} y={32} className="relative mx-auto mt-14 max-w-4xl">
            <MockFrame>
              <ReserveMock />
            </MockFrame>
            <FloatingChip className="-right-3 -top-5 lg:-right-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal/10">
                  <FileText size={14} className="text-teal" aria-hidden />
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-semibold text-navy">
                    100-page study
                  </p>
                  <p className="font-data text-[10px] text-mute">
                    distilled to 3 numbers
                  </p>
                </div>
              </div>
            </FloatingChip>
          </Reveal>
        </div>
      </section>

      {/* 03 Budget - white, product left / text right */}
      <section className="bg-white">
        <div className={SECTION}>
          <FeatureRow
            index="03"
            eyebrow="Budget"
            reverse
            title="Catch overspending before the board does."
            body="Budget versus actual, every category, overages flagged automatically. The insurance hike shouldn't be a surprise you discover live, in front of everyone."
            visual={
              <div className="relative">
                <MockFrame>
                  <BudgetMock />
                </MockFrame>
                <FloatingChip className="-left-3 top-10 lg:-left-8" delay={0.65}>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-watch/10">
                      <TriangleAlert
                        size={14}
                        className="text-watch"
                        aria-hidden
                      />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[12px] font-semibold text-navy">
                        Overage flagged
                      </p>
                      <p className="font-data text-[10px] text-mute">
                        Insurance +12%
                      </p>
                    </div>
                  </div>
                </FloatingChip>
              </div>
            }
          />
        </div>
      </section>

      {/* 04 Meeting prep - cream, text left / product right */}
      <section className="bg-cream">
        <div className={SECTION}>
          <FeatureRow
            index="04"
            eyebrow="Meeting prep"
            title="Walk in ready. Skip the homework."
            body="Civentry writes a plain-English brief before every meeting: what's up, what's down, and what a resident's about to grill you on. You'll sound like you read the whole packet. We won't tell."
            visual={
              <MockFrame>
                <TreasurerBriefMock />
              </MockFrame>
            }
          />
        </div>
      </section>

      {/* 05 Transparency - white, product left / text right */}
      <section className="bg-white">
        <div className={SECTION}>
          <FeatureRow
            index="05"
            eyebrow="Transparency"
            reverse
            title="Transparency, without the oversharing."
            body="Give residents a clean, board-approved view of the finances. They see where the money went. They don't see who's three months behind on their dues."
            visual={
              <MockFrame>
                <ResidentMock />
              </MockFrame>
            }
          />
        </div>
      </section>

      {/* 06 CC&R Assistant - teal mist, text left / product right */}
      <section className="bg-mist">
        <div className={SECTION}>
          <FeatureRow
            index="06"
            eyebrow="CC&R Assistant"
            title="Four cats and a pergola? Ask the documents."
            body="Residents ask the strangest things, and the answer's always buried in 200 pages of CC&Rs. Ask Civentry instead. Plain answer, exact clause, a few seconds."
            visual={
              <MockFrame>
                <CcrMock />
              </MockFrame>
            }
          />
        </div>
      </section>
    </>
  );
}
