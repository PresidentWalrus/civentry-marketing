"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "./Eyebrow";
import { Cta } from "./Cta";
import { site } from "@/lib/site";

/* ============================================================
   SINGLE SOURCE OF TRUTH
   All prices + feature lists live here. To change pricing later,
   edit this object only. Annual = 10x monthly (2 months free).
   Only real, shipped features are listed.
   ============================================================ */

type Plan = {
  name: string;
  /** dollars per month (per the unit below). */
  monthly: number;
  /** dollars per year (10x monthly = 2 months free). */
  annual: number;
  /** Priced per community rather than per user. */
  perCommunity?: boolean;
  /** Contact-driven (no self-serve checkout yet): ignores the billing toggle. */
  contact?: boolean;
  tagline: string;
  bridge?: string;
  features: string[];
  /** Gold "hero" badge. */
  badge?: string;
  highlight?: boolean;
  /** Quiet teal tag (e.g. the entry plan). */
  tag?: string;
  /** Small line under the price. */
  note?: string;
};

const PRICING: Plan[] = [
  {
    name: "Solo",
    monthly: 9,
    annual: 90,
    tag: "Start here",
    tagline: "For the treasurer doing it all, out of their own pocket.",
    features: [
      "One treasurer (single login)",
      "Monthly financials and dashboard",
      "AI summaries and board talking points",
      "Basic meeting prep",
      "12 months of history",
    ],
  },
  {
    name: "Board",
    monthly: 39,
    annual: 390,
    perCommunity: true,
    highlight: true,
    badge: "Most popular",
    tagline: "For the whole board, priced per community.",
    bridge: "Everything in Solo, plus:",
    features: [
      "Up to 10 board members",
      "Red flags and variance analysis",
      "Reserve study analysis",
      "Budget builder",
      "Bid center (QuixBid) and decision records",
      "Agenda-aware meeting prep",
      "CC&R Assistant",
      "Resident transparency controls",
      "Unlimited history and uploads",
    ],
  },
  {
    name: "Management",
    monthly: 39,
    annual: 390,
    perCommunity: true,
    contact: true,
    note: "Volume discounts available",
    tagline: "For companies running a whole book of communities.",
    bridge: "Everything in Board, for every community, plus:",
    features: [
      "One login across your whole portfolio",
      "Portfolio view of every community",
      "Reserve-to-bid forecasting across communities",
      "Per-community billing",
    ],
  },
];

const REASSURANCE = ["Cancel anytime", "No setup fees", "Built for HOA budgets"];

type Billing = "monthly" | "annual";

/* Segmented single-select control (billing toggle). */
function Segmented({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
  ariaLabel: string;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex items-center rounded-full border border-line bg-white p-1"
    >
      {options.map((o) => {
        const active = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active ? "bg-navy text-white" : "text-slate hover:text-navy"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  // Contact plans show a flat per-community rate and ignore the toggle.
  const isAnnual = !plan.contact && billing === "annual";
  const amount = isAnnual ? plan.annual : plan.monthly;
  const period = plan.contact ? "" : isAnnual ? "/yr" : "/mo";

  // Secondary line: keep both cadences visible so the entry price is never buried.
  let sub: string;
  if (plan.contact) sub = plan.note ?? "";
  else if (isAnnual) sub = `2 months free · or $${plan.monthly}/mo`;
  else sub = `or $${plan.annual}/yr, 2 months free`;

  return (
    <div
      className={`flex h-full flex-col rounded-3xl bg-white p-7 ${
        plan.highlight
          ? "frame-shadow border-2 border-teal"
          : "card-shadow border border-line"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
        {plan.badge ? (
          <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#9a7b1f]">
            {plan.badge}
          </span>
        ) : plan.tag ? (
          <span className="rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-teal">
            {plan.tag}
          </span>
        ) : null}
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-slate">{plan.tagline}</p>

      <div className="mt-5 flex items-end gap-1.5">
        <span className="font-data text-[2.6rem] font-semibold leading-none tracking-tight text-navy">
          ${amount}
        </span>
        {period && <span className="pb-1 text-base text-mute">{period}</span>}
        {plan.perCommunity && (
          <span className="pb-1.5 text-xs text-mute">per community</span>
        )}
      </div>
      <p
        className={`mt-1.5 text-xs font-semibold ${
          isAnnual ? "text-teal" : "text-mute"
        }`}
      >
        {sub}
      </p>

      {plan.contact ? (
        <Cta
          href={site.contact.sales}
          variant="secondary"
          arrow
          className="mt-6 w-full"
        >
          Talk to us
        </Cta>
      ) : (
        <Cta
          href={site.app.signup}
          variant="primary"
          external
          arrow
          className="mt-6 w-full"
        >
          Get started
        </Cta>
      )}

      <div className="mt-7 border-t border-line pt-5">
        {plan.bridge && (
          <p className="mb-3 text-[13px] font-semibold text-navy">
            {plan.bridge}
          </p>
        )}
        <ul className="space-y-2.5">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex gap-2.5 text-[13px] leading-snug text-slate"
            >
              <Check
                size={16}
                strokeWidth={2.5}
                className="mt-px shrink-0 text-teal"
                aria-hidden
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Pricing() {
  // Annual is the default so the board-budget price reads first.
  const [billing, setBilling] = useState<Billing>("annual");

  return (
    <section id="pricing" className="scroll-mt-16 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-navy sm:text-[2.75rem]">
            Priced for volunteer budgets.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-slate">
            Flat per community, not per door. Approve it with the annual budget
            and move on.
          </p>
        </Reveal>

        {/* Billing toggle */}
        <Reveal
          delay={0.1}
          className="mt-10 flex items-center justify-center gap-2.5"
        >
          <Segmented
            ariaLabel="Choose a billing period"
            options={[
              { id: "annual", label: "Annual" },
              { id: "monthly", label: "Monthly" },
            ]}
            value={billing}
            onChange={(v) => setBilling(v as Billing)}
          />
          <span className="rounded-full bg-teal/10 px-2.5 py-1 text-xs font-semibold text-teal">
            2 months free
          </span>
        </Reveal>

        {/* Three offerings */}
        <Reveal
          delay={0.05}
          y={16}
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-stretch gap-5 md:grid-cols-3"
        >
          {PRICING.map((plan) => (
            <PlanCard key={plan.name} plan={plan} billing={billing} />
          ))}
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {REASSURANCE.map((r) => (
            <span key={r} className="flex items-center gap-1.5 text-xs text-mute">
              <Check size={13} className="text-teal" strokeWidth={2.5} />
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
