import { Panel, MockLabel } from "./shared";
import { AnimatedBar } from "@/components/motion";

const TIMELINE_START = 2026;
const TIMELINE_END = 2036;

const COMPONENTS = [
  { name: "Exterior paint", year: 2027, cost: "$48K" },
  { name: "Roof replacement", year: 2029, cost: "$220K" },
  { name: "Asphalt resurface", year: 2031, cost: "$310K" },
  { name: "Pool re-plaster", year: 2034, cost: "$62K" },
];

function pos(year: number) {
  return ((year - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * 100;
}

export function ReserveMock() {
  return (
    <div className="space-y-3.5">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {/* Health score */}
        <Panel accent="#DC2626" className="p-5">
          <MockLabel>Reserve Health Score</MockLabel>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-[28px] font-extrabold leading-none tracking-tight text-alert">
              AT RISK
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="font-data text-xl font-semibold text-navy">28%</span>
            <span className="text-sm text-mute">funded</span>
          </div>
          <AnimatedBar pct={28} color="#DC2626" height="h-2" className="mt-3" />
          <div className="mt-4 flex justify-between border-t border-line pt-3 text-xs">
            <div>
              <p className="font-data font-semibold text-navy">$454K</p>
              <p className="text-mute">reserves today</p>
            </div>
            <div className="text-right">
              <p className="font-data font-semibold text-navy">$1.6M</p>
              <p className="text-mute">fully funded</p>
            </div>
          </div>
        </Panel>

        {/* Recommended contribution */}
        <Panel accent="#0F766E" className="p-5">
          <MockLabel>Recommended Monthly</MockLabel>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="font-data text-[28px] font-semibold leading-none tracking-tight text-teal">
              +$480
            </span>
            <span className="text-sm text-mute">/mo</span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-slate">
            Raising the reserve contribution by{" "}
            <span className="font-data text-navy">$480</span> a month closes the
            gap over ten years, no special assessment.
          </p>
          <div className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-xs text-mute">
            <span className="font-data text-navy">$1,150</span>
            <span aria-hidden>→</span>
            <span className="font-data font-semibold text-teal">$1,630</span>
            <span>per month</span>
          </div>
        </Panel>
      </div>

      {/* Component timeline */}
      <Panel accent="#0F766E" className="p-5">
        <div className="flex items-center justify-between">
          <MockLabel>Component replacement timeline</MockLabel>
          <span className="font-data text-[10px] uppercase tracking-[0.09em] text-mute">
            Next 10 years
          </span>
        </div>

        {/* Axis (sm+) */}
        <div className="relative mt-8 hidden h-[88px] sm:block">
          <div className="absolute inset-x-0 top-[42px] h-px bg-line" />
          {COMPONENTS.map((c) => (
            <div
              key={c.name}
              className="absolute -translate-x-1/2"
              style={{ left: `${pos(c.year)}%` }}
            >
              <div className="mb-2 w-max -translate-x-1/2 rounded-lg border border-line bg-white px-2 py-1 text-center card-shadow">
                <p className="text-[11px] font-semibold text-navy">{c.name}</p>
                <p className="font-data text-[11px] text-teal">{c.cost}</p>
              </div>
              <span className="absolute left-1/2 top-[34px] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white bg-teal" />
              <p className="font-data absolute left-1/2 top-[52px] -translate-x-1/2 text-[11px] text-mute">
                {c.year}
              </p>
            </div>
          ))}
        </div>

        {/* List (mobile) */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
          {COMPONENTS.map((c) => (
            <div key={c.name} className="rounded-lg border border-line p-2.5">
              <p className="text-[12px] font-semibold text-navy">{c.name}</p>
              <p className="font-data text-[11px] text-mute">
                {c.year} · <span className="text-teal">{c.cost}</span>
              </p>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
