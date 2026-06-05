"use client";

import { Sparkles } from "lucide-react";
import { BrowserFrame, AppSidebar } from "./chrome";
import { MetricCards } from "./MetricCards";
import { TreasurerBriefMock } from "./TreasurerBriefMock";
import { FloatingChip } from "./shared";

/**
 * The hero centerpiece: the Civentry dashboard shown fully and in context.
 * Browser chrome + the app's navy sidebar wrap the live metric cards and a
 * peek of the Treasurer Brief. A small "Brief ready" chip floats off the
 * corner for depth. All content stays accurate to the real app.
 */
export function HeroProduct() {
  return (
    <div className="relative">
      <BrowserFrame url="app.civentry.com/dashboard">
        <div className="flex">
          <AppSidebar />
          <div className="min-w-0 flex-1 bg-page p-4 sm:p-5">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <h3 className="text-[15px] font-bold text-navy">Dashboard</h3>
                <p className="text-xs text-mute">
                  Your financial picture, at a glance
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-slate">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-healthy" />
                Updated just now
              </span>
            </div>

            <MetricCards layout="auto" />

            <div className="mt-3.5 hidden sm:block">
              <TreasurerBriefMock />
            </div>
          </div>
        </div>
      </BrowserFrame>

      {/* Floating product chip for depth. */}
      <FloatingChip className="-top-4 right-5" delay={0.9}>
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold/15">
            <Sparkles size={14} className="text-gold" aria-hidden />
          </span>
          <div className="leading-tight">
            <p className="text-[12px] font-semibold text-navy">
              Treasurer Brief ready
            </p>
            <p className="text-[10px] text-mute">Generated just now</p>
          </div>
        </div>
      </FloatingChip>
    </div>
  );
}
