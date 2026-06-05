import {
  Wallet,
  PiggyBank,
  Scale,
  Clock,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";
import { CountUp, AnimatedBar } from "@/components/motion";

/* Status palette mirrors the app's financial-health semantics. */
const STATUS = {
  alert: "#DC2626",
  healthy: "#16A34A",
  watch: "#D97706",
  teal: "#0F766E",
} as const;

type Status = keyof typeof STATUS;

function IconChip({ icon: Icon, status }: { icon: LucideIcon; status: Status }) {
  const color = STATUS[status];
  return (
    <span
      className="flex h-9 w-9 items-center justify-center rounded-[10px]"
      style={{ background: `${color}14`, color }}
      aria-hidden
    >
      <Icon size={18} strokeWidth={2} />
    </span>
  );
}

function Label({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
      {children}
    </p>
  );
}

function Card({
  status,
  children,
}: {
  status: Status;
  children: React.ReactNode;
}) {
  return (
    <div
      className="lift card-shadow flex flex-col rounded-[20px] border border-line bg-white p-5"
      style={{ borderLeft: `4px solid ${STATUS[status]}` }}
    >
      {children}
    </div>
  );
}

/**
 * The four headline metric cards from the Civentry dashboard, recreated as
 * crisp HTML/CSS. Figures count up and bars fill as the cards enter view.
 * Numbers are realistic-but-fake (a believably underfunded demo HOA).
 * `layout="two"` keeps a 2-up grid for narrow columns (Tailwind breakpoints
 * are viewport-based, so a full-width 4-up would cram a half-width column).
 */
export function MetricCards({ layout = "auto" }: { layout?: "auto" | "two" }) {
  const grid =
    layout === "two"
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4";
  return (
    <div className={`grid gap-3.5 ${grid}`}>
      {/* Operating Cash (running low) */}
      <Card status="alert">
        <div className="mb-3 flex items-start justify-between">
          <IconChip icon={Wallet} status="alert" />
        </div>
        <Label>Operating Cash</Label>
        <p className="font-data mt-1.5 text-[26px] font-medium leading-none tracking-tight text-navy">
          <CountUp value={25764.59} prefix="$" decimals={2} />
        </p>
        <p className="mt-3 flex items-center gap-1 text-[13px] font-medium text-alert">
          <ArrowDown size={13} strokeWidth={2.5} aria-hidden />
          <span className="font-data">$1,240</span>
          <span className="font-normal text-mute">vs last month</span>
        </p>
      </Card>

      {/* Reserve Balance (28% funded) */}
      <Card status="alert">
        <div className="mb-3 flex items-start justify-between">
          <IconChip icon={PiggyBank} status="alert" />
        </div>
        <Label>Reserve Balance</Label>
        <p className="font-data mt-1.5 text-[26px] font-medium leading-none tracking-tight text-navy">
          <CountUp value={454408.94} prefix="$" decimals={2} />
        </p>
        <p className="mt-3 text-[13px]">
          <span className="font-data font-semibold text-teal">28% funded</span>
        </p>
        <AnimatedBar pct={28} color={STATUS.teal} className="mt-2" />
        <p className="mt-2 text-xs text-mute">
          vs <span className="font-data">$1.6M</span> fully-funded target
        </p>
      </Card>

      {/* Budget vs Actual (under budget) */}
      <Card status="healthy">
        <div className="mb-3 flex items-start justify-between">
          <IconChip icon={Scale} status="healthy" />
          <span
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
            style={{ background: `${STATUS.healthy}1A`, color: STATUS.healthy }}
          >
            Under budget
          </span>
        </div>
        <Label>Budget vs Actual</Label>
        <p className="font-data mt-1.5 text-[26px] font-medium leading-none tracking-tight text-navy">
          Under by <CountUp value={6905} prefix="$" />
        </p>
        <AnimatedBar pct={90} color={STATUS.healthy} className="mt-2.5" />
        <p className="mt-2 text-xs text-mute">
          <span className="font-data">$62,180</span> actual ·{" "}
          <span className="font-data">$69,085</span> budget
        </p>
      </Card>

      {/* Delinquency (watch) */}
      <Card status="watch">
        <div className="mb-3 flex items-start justify-between">
          <IconChip icon={Clock} status="watch" />
        </div>
        <Label>Delinquency</Label>
        <p className="font-data mt-1.5 text-[26px] font-medium leading-none tracking-tight text-navy">
          <CountUp value={32303} prefix="$" />
        </p>
        <p className="mt-3 text-[13px] text-slate">
          <span className="font-data">36</span> units ·{" "}
          <span className="font-data">30%</span> rate
        </p>
      </Card>
    </div>
  );
}
