import { Sparkles, CheckCircle2, CornerDownLeft } from "lucide-react";
import { Panel } from "./shared";

export function CcrMock() {
  return (
    <Panel className="p-5">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-teal" aria-hidden />
        <h3 className="text-[15px] font-semibold text-navy">Ask the CC&amp;Rs</h3>
      </div>

      {/* Faux question input */}
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-line bg-page/70 px-3 py-2.5">
        <p className="flex-1 text-[13px] text-navy">
          What notice period is required before a special assessment vote?
        </p>
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal text-white">
          <CornerDownLeft size={14} aria-hidden />
        </span>
      </div>

      {/* Answer */}
      <div className="mt-4 border-t border-line pt-4">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold"
          style={{ background: "rgba(15,118,110,0.1)", color: "#0F766E" }}
        >
          <CheckCircle2 size={13} aria-hidden />
          Directly addressed
        </span>

        <p className="mt-3 text-[13px] leading-relaxed text-navy">
          Owners must receive written notice at least{" "}
          <span className="font-semibold">30 days</span> before a special
          assessment vote, and the notice has to state the purpose and amount.
        </p>

        <blockquote
          className="mt-3 pl-3.5 text-[13px] italic leading-relaxed text-slate"
          style={{ borderLeft: "3px solid #0F766E" }}
        >
          &ldquo;No special assessment shall be levied without no less than
          thirty (30) days&rsquo; written notice to all members stating the
          purpose and amount of the assessment.&rdquo;
        </blockquote>

        <p className="font-data mt-3 text-[11px] font-semibold text-teal">
          CC&amp;Rs · Article VII · Section 7.3 · Clause (b)
        </p>
      </div>
    </Panel>
  );
}
