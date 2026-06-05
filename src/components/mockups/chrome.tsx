import Image from "next/image";
import type { ReactNode } from "react";
import {
  Lock,
  LayoutDashboard,
  PiggyBank,
  Scale,
  FileText,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import logoIcon from "../../../public/logo-icon.png";

// Keep the sidebar mark at a fixed height, width following its natural ratio.
const ICON_H = 24;
const ICON_W = Math.round(ICON_H * (logoIcon.width / logoIcon.height));

/**
 * Browser-window chrome around a product surface, so it reads as the real
 * app in context rather than a flat card. Neutral dots + a domain pill.
 */
export function BrowserFrame({
  url = "app.civentry.com",
  children,
  className = "",
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`frame-shadow overflow-hidden rounded-2xl border border-line bg-white ${className}`}
    >
      <div className="flex h-11 items-center gap-3 border-b border-line bg-[#fbfbfc] px-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#dfe3e8]" />
          <span className="h-3 w-3 rounded-full bg-[#dfe3e8]" />
          <span className="h-3 w-3 rounded-full bg-[#dfe3e8]" />
        </div>
        <div className="mx-auto flex max-w-[62%] items-center gap-1.5 rounded-md border border-line/70 bg-off-white px-3 py-1">
          <Lock size={11} className="text-mute" aria-hidden />
          <span className="font-data truncate text-[11px] text-slate">{url}</span>
        </div>
        <div className="w-[52px]" aria-hidden />
      </div>
      {children}
    </div>
  );
}

const NAV: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: PiggyBank, label: "Reserves" },
  { icon: Scale, label: "Budget" },
  { icon: FileText, label: "Documents" },
  { icon: Sparkles, label: "Meeting prep" },
  { icon: Users, label: "Residents" },
];

/**
 * A slim navy app sidebar, shown beside the hero dashboard on large screens.
 * Adds the app's real navy chrome (and a confident color block) to the shot.
 */
export function AppSidebar() {
  return (
    <aside className="hidden w-[188px] shrink-0 flex-col bg-navy px-3 py-4 lg:flex">
      <div className="flex items-center gap-2 px-2 pb-5">
        <Image
          src={logoIcon}
          width={ICON_W}
          height={ICON_H}
          alt=""
          style={{ height: ICON_H, width: "auto" }}
        />
        <span className="text-sm font-semibold text-white">Civentry</span>
      </div>
      <nav className="flex flex-col gap-0.5">
        {NAV.map((n) => (
          <span
            key={n.label}
            className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] ${
              n.active
                ? "border-l-2 border-gold bg-white/10 font-medium text-white"
                : "text-white/55"
            }`}
          >
            <n.icon size={15} strokeWidth={2} aria-hidden />
            {n.label}
          </span>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-2 rounded-lg px-1 py-1">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-[11px] font-semibold text-white">
          RT
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white">
            Maplewood Commons
          </p>
          <p className="text-[10px] text-white/45">Treasurer</p>
        </div>
      </div>
    </aside>
  );
}
