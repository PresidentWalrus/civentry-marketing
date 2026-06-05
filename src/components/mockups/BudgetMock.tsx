import { Panel, MockLabel } from "./shared";

type Row = {
  name: string;
  actual: number;
  budget: number;
};

const ROWS: Row[] = [
  { name: "Landscaping", actual: 14200, budget: 18000 },
  { name: "Insurance", actual: 22640, budget: 22000 },
  { name: "Utilities", actual: 11980, budget: 12500 },
  { name: "Repairs & maintenance", actual: 7400, budget: 9000 },
  { name: "Management", actual: 14400, budget: 14400 },
];

const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

function BudgetRow({ name, actual, budget }: Row) {
  const over = actual > budget;
  const onTrack = actual === budget;
  const pct = Math.min((actual / budget) * 100, 100);
  const variance = Math.abs(budget - actual);
  const color = over ? "#DC2626" : "#16A34A";

  return (
    <div className="py-3">
      <div className="flex items-center justify-between text-[13px]">
        <span className="font-medium text-navy">{name}</span>
        <span
          className="font-data"
          style={{ color: onTrack ? "#6B7280" : color }}
        >
          {onTrack ? "on budget" : `${over ? "over" : "under"} ${fmt(variance)}`}
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-off-white">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <p className="font-data mt-1.5 text-[11px] text-mute">
        {fmt(actual)} of {fmt(budget)}
      </p>
    </div>
  );
}

export function BudgetMock() {
  return (
    <Panel className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <MockLabel>Budget vs Actual</MockLabel>
          <p className="font-data mt-1 text-[10px] uppercase tracking-[0.09em] text-mute">
            FY2026 · year to date
          </p>
        </div>
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: "rgba(22,163,74,0.12)", color: "#16A34A" }}
        >
          Under by $6,905
        </span>
      </div>

      <div className="mt-3 divide-y divide-line">
        {ROWS.map((r) => (
          <BudgetRow key={r.name} {...r} />
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-line pt-3.5 text-[13px]">
        <span className="font-semibold text-navy">Projected year-end</span>
        <span className="font-data font-semibold text-healthy">
          $8,140 surplus
        </span>
      </div>
    </Panel>
  );
}
