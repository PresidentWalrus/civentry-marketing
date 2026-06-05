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

type Tier = {
  name: string;
  /** dollars per month */
  monthly: number;
  /** dollars per year (10x monthly = 2 months free) */
  annual: number;
  tagline: string;
  /** "Everything in X, plus:" bridge line */
  bridge?: string;
  features: string[];
  /** the hero tier within its track */
  highlight?: boolean;
  badge?: string;
};

type Track = {
  id: string;
  label: string;
  tiers: Tier[];
};

const PRICING: Track[] = [
  {
    id: "solo",
    label: "Just me",
    tiers: [
      {
        name: "Free",
        monthly: 0,
        annual: 0,
        tagline: "Kick the tires. No card required.",
        features: [
          "1 user (just you)",
          "3 months of history",
          "Financial dashboard",
          "Basic AI summary",
          "3 document uploads / month",
        ],
      },
      {
        name: "Solo",
        monthly: 9,
        annual: 90,
        tagline: "For the treasurer flying solo.",
        bridge: "Everything in Free, plus:",
        features: [
          "12 months of history",
          "AI summary and board meeting talking points",
          "5 document uploads / month",
        ],
      },
      {
        name: "Solo+",
        monthly: 19,
        annual: 190,
        tagline: "Solo, with the good stuff.",
        bridge: "Everything in Solo, plus:",
        features: [
          "24 months of history",
          "Red flags and variance analysis",
          "Reserve study analysis",
          "Annual budget tools",
          "10 document uploads / month",
        ],
      },
    ],
  },
  {
    id: "board",
    label: "My whole board",
    tiers: [
      {
        name: "Board",
        monthly: 49,
        annual: 490,
        tagline: "For when the whole board's involved.",
        bridge: "Everything in the Solo plans, plus:",
        highlight: true,
        badge: "Most popular",
        features: [
          "Up to 10 board members",
          "Unlimited history",
          "Unlimited document uploads",
          "Transparency controls and resident page",
          "CC&R Assistant (50 questions / month)",
          "Resident summary export",
        ],
      },
      {
        name: "Board+",
        monthly: 79,
        annual: 790,
        tagline: "The whole board, every tool.",
        bridge: "Everything in Board, plus:",
        features: [
          "Unlimited board members",
          "Historical document import",
          "CC&R Assistant (150 questions / month)",
        ],
      },
    ],
  },
];

const REASSURANCE = ["Cancel anytime", "No setup fees", "Built for HOA budgets"];

type Billing = "monthly" | "annual";

/* Segmented single-select control (track + billing toggles). */
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
              active
                ? "bg-navy text-white"
                : "text-slate hover:text-navy"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function PlanCard({ tier, billing }: { tier: Tier; billing: Billing }) {
  const amount = billing === "annual" ? tier.annual : tier.monthly;
  const period = billing === "annual" ? "/yr" : "/mo";
  const isFree = tier.monthly === 0;
  const sub = isFree
    ? "Free forever"
    : billing === "annual"
      ? "2 months free"
      : "billed monthly";

  return (
    <div
      className={`flex h-full flex-col rounded-3xl bg-white p-7 ${
        tier.highlight
          ? "frame-shadow border-2 border-teal"
          : "card-shadow border border-line"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-navy">{tier.name}</h3>
        {tier.badge && (
          <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#9a7b1f]">
            {tier.badge}
          </span>
        )}
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-slate">{tier.tagline}</p>

      <div className="mt-5 flex items-end gap-1.5">
        <span className="font-data text-[2.6rem] font-semibold leading-none tracking-tight text-navy">
          ${amount}
        </span>
        <span className="pb-1 text-base text-mute">{period}</span>
      </div>
      <p
        className={`mt-1.5 text-xs font-semibold ${
          billing === "annual" && !isFree ? "text-teal" : "text-mute"
        }`}
      >
        {sub}
      </p>

      <Cta
        href={site.app.signup}
        variant="primary"
        external
        arrow
        className="mt-6 w-full"
      >
        Get started
      </Cta>

      <div className="mt-7 border-t border-line pt-5">
        {tier.bridge && (
          <p className="mb-3 text-[13px] font-semibold text-navy">
            {tier.bridge}
          </p>
        )}
        <ul className="space-y-2.5">
          {tier.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-[13px] leading-snug text-slate">
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
  const [trackId, setTrackId] = useState(PRICING[0].id);
  const [billing, setBilling] = useState<Billing>("monthly");

  const track = PRICING.find((t) => t.id === trackId) ?? PRICING[0];
  const twoUp = track.tiers.length === 2;

  return (
    <section id="pricing" className="scroll-mt-16 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Pricing</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-navy sm:text-[2.75rem]">
            Priced for volunteer budgets.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-slate">
            Pay for the hours you get back, not a per-door enterprise contract.
          </p>
        </Reveal>

        {/* Toggles */}
        <Reveal
          delay={0.1}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
        >
          <Segmented
            ariaLabel="Choose a plan track"
            options={PRICING.map((t) => ({ id: t.id, label: t.label }))}
            value={trackId}
            onChange={setTrackId}
          />
          <div className="flex items-center gap-2.5">
            <Segmented
              ariaLabel="Choose a billing period"
              options={[
                { id: "monthly", label: "Monthly" },
                { id: "annual", label: "Annual" },
              ]}
              value={billing}
              onChange={(v) => setBilling(v as Billing)}
            />
            <span className="rounded-full bg-teal/10 px-2.5 py-1 text-xs font-semibold text-teal">
              2 months free
            </span>
          </div>
        </Reveal>

        {/* Cards (re-fade when the track switches) */}
        <Reveal
          key={trackId}
          delay={0.05}
          y={16}
          className={`mx-auto mt-12 grid grid-cols-1 items-stretch gap-5 ${
            twoUp ? "max-w-3xl sm:grid-cols-2" : "max-w-5xl md:grid-cols-3"
          }`}
        >
          {track.tiers.map((tier) => (
            <PlanCard key={tier.name} tier={tier} billing={billing} />
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
