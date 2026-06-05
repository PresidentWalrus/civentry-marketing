/**
 * Single source of truth for outbound links + site metadata.
 *
 * The marketing site lives at civentry.com; the product lives at
 * app.civentry.com. Every "Get started" / "Log in" CTA on the site routes
 * here, so swapping the app URL is a one-line change.
 */

const APP_URL = "https://app.civentry.com";

export const site = {
  name: "Civentry",
  domain: "civentry.com",
  /** Owning entity, shown in the footer. */
  legalName: "Daddisyn Labs",
  description:
    "Civentry turns your HOA's messy financial reports into clear answers in minutes, so you get your evenings back.",
  app: {
    url: APP_URL,
    signup: `${APP_URL}/signup`,
    login: `${APP_URL}/login`,
  },
} as const;

/** Primary call-to-action, reused across the page. */
export const primaryCta = {
  label: "Get started",
  href: site.app.signup,
} as const;

export const secondaryCta = {
  label: "Log in",
  href: site.app.login,
} as const;

/** Top-nav anchor links. */
export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Why Civentry", href: "#origin" },
  { label: "Pricing", href: "#pricing" },
] as const;
