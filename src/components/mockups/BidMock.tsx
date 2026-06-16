import { Check } from "lucide-react";
import { Panel, MockLabel } from "./shared";

type Bid = {
  vendor: string;
  amount: string;
  tag?: string;
  recommended?: boolean;
};

const BIDS: Bid[] = [
  { vendor: "Valley Exteriors", amount: "$171,900", tag: "Lowest" },
  { vendor: "Summit Roofing", amount: "$182,400", tag: "Recommended", recommended: true },
  { vendor: "Ridgeline Co.", amount: "$205,000" },
];

export function BidMock() {
  return (
    <Panel accent="#0F766E" className="p-5">
      <div className="flex items-center justify-between">
        <MockLabel>Bid Center</MockLabel>
        <span className="rounded-full bg-teal/10 px-2.5 py-1 font-data text-[10px] font-semibold uppercase tracking-[0.08em] text-teal">
          3 bids in
        </span>
      </div>

      <div className="mt-3">
        <p className="text-[15px] font-bold text-navy">Roof replacement</p>
        <p className="font-data text-xs text-mute">RFP closes Mar 14</p>
      </div>

      <div className="mt-4 divide-y divide-line border-y border-line">
        {BIDS.map((b) => (
          <div key={b.vendor} className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-2.5">
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${
                  b.recommended ? "bg-teal" : "bg-line"
                }`}
                aria-hidden
              />
              <span className="text-[13px] font-medium text-navy">
                {b.vendor}
              </span>
              {b.tag && (
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    b.recommended
                      ? "bg-teal/10 text-teal"
                      : "bg-off-white text-mute"
                  }`}
                >
                  {b.tag}
                </span>
              )}
            </div>
            <span className="font-data text-[13px] font-semibold text-navy">
              {b.amount}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-start gap-1.5 text-xs leading-relaxed text-slate">
        <Check
          size={14}
          strokeWidth={2.5}
          className="mt-0.5 shrink-0 text-healthy"
          aria-hidden
        />
        <span>
          Recorded for the minutes: Summit chosen for the 5-year warranty over
          the lowest bid.
        </span>
      </div>
    </Panel>
  );
}
