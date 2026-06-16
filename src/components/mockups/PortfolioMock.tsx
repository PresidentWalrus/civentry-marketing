import { ArrowRight } from "lucide-react";
import { Panel, MockLabel } from "./shared";

type Row = {
  name: string;
  component: string;
  year: number;
  open?: boolean;
};

const ROWS: Row[] = [
  { name: "Maplewood Commons", component: "Roof", year: 2026 },
  { name: "Oak Hill HOA", component: "Asphalt resurface", year: 2027 },
  { name: "Cedar Ridge", component: "Pool deck", year: 2026, open: true },
  { name: "Birchwood Village", component: "Exterior paint", year: 2028 },
];

export function PortfolioMock() {
  return (
    <Panel accent="#0F766E" className="p-5">
      <div className="flex items-center justify-between">
        <MockLabel>Reserve forecast</MockLabel>
        <span className="rounded-full bg-teal/10 px-2.5 py-1 font-data text-[10px] font-semibold uppercase tracking-[0.08em] text-teal">
          12 communities
        </span>
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-slate">
        Components nearing end of life across your book, each with a path to
        start bids.
      </p>

      <div className="mt-4 space-y-2">
        {ROWS.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-xl bg-page px-3.5 py-2.5"
          >
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-navy">
                {r.name}
              </p>
              <p className="font-data text-[11px] text-mute">
                {r.component} · ends {r.year}
              </p>
            </div>
            {r.open ? (
              <span className="shrink-0 rounded-full bg-watch/10 px-2.5 py-1 text-[11px] font-semibold text-watch">
                Bid open
              </span>
            ) : (
              <span className="inline-flex shrink-0 items-center gap-1 text-[12px] font-semibold text-teal">
                Start bid
                <ArrowRight size={12} strokeWidth={2.5} aria-hidden />
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-line pt-3 text-xs text-mute">
        <span className="font-data font-semibold text-navy">9 components</span>{" "}
        across your book need bids in the next 24 months.
      </div>
    </Panel>
  );
}
