import { Globe, Copy, ShieldCheck } from "lucide-react";
import { Panel, MockLabel } from "./shared";

export function ResidentMock() {
  return (
    <Panel className="p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe size={17} className="text-teal" aria-hidden />
          <h3 className="text-[15px] font-semibold text-navy">
            Resident access
          </h3>
        </div>
        {/* Toggle (on) */}
        <span className="flex h-[22px] w-10 items-center rounded-full bg-teal px-0.5">
          <span className="ml-auto h-[18px] w-[18px] rounded-full bg-white shadow-sm" />
        </span>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-slate">
        Residents get a board-approved, read-only snapshot. No owner names, no
        unit-level detail.
      </p>

      {/* Resident link */}
      <div className="mt-4 rounded-xl bg-page/70 p-3">
        <MockLabel>Resident link</MockLabel>
        <div className="mt-2 flex items-center justify-between gap-2">
          <code className="font-data truncate text-[13px] text-navy">
            civentry.com/r/maplewood-commons
          </code>
          <button
            type="button"
            className="flex shrink-0 items-center gap-1.5 rounded-lg border border-line bg-white px-2.5 py-1.5 text-xs font-semibold text-teal"
          >
            <Copy size={13} aria-hidden />
            Copy
          </button>
        </div>
      </div>

      {/* What residents see */}
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-line px-3 py-2.5">
        <ShieldCheck size={15} className="shrink-0 text-healthy" aria-hidden />
        <p className="text-xs text-mute">
          They see reserves on plan and the budget under, never an
          owner&rsquo;s balance.
        </p>
      </div>
    </Panel>
  );
}
