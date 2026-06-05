import Image from "next/image";
import { ChevronDown } from "lucide-react";
import logoIcon from "../../../public/logo-icon.png";
import { MetricCards } from "./MetricCards";
import { TreasurerBriefMock } from "./TreasurerBriefMock";

/**
 * The Civentry dashboard, recreated as a crisp framed product view — the
 * page's hero. A minimal app top-bar over the live metric cards and the
 * AI Treasurer Brief. `live` enables the count-up + typing flourishes.
 */
export function DashboardMock({ live = false }: { live?: boolean }) {
  return (
    <div className="frame-shadow overflow-hidden rounded-2xl border border-line bg-white">
      {/* App top bar */}
      <div className="flex items-center justify-between border-b border-line bg-white/80 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <Image
            src={logoIcon}
            alt=""
            width={22}
            height={22}
            className="rounded-[6px]"
          />
          <span className="text-[13px] font-semibold text-navy">
            Maplewood Commons HOA
          </span>
          <ChevronDown size={14} className="text-mute" aria-hidden />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-data hidden text-[11px] uppercase tracking-[0.1em] text-mute sm:inline">
            Fiscal Year 2026
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-[11px] font-semibold text-white">
            RT
          </span>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="bg-page p-4 sm:p-5">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h3 className="text-[15px] font-bold text-navy">Dashboard</h3>
            <p className="text-xs text-mute">
              Your financial picture, at a glance
            </p>
          </div>
          <span className="hidden rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-slate sm:inline">
            Updated just now
          </span>
        </div>

        <MetricCards animate={live} />

        <div className="mt-3.5">
          <TreasurerBriefMock typing={live} />
        </div>
      </div>
    </div>
  );
}
