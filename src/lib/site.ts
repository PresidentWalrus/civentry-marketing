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
    "Civentry helps HOA boards make and document decisions. Reserves, budgets, bids, and meeting prep in one calm place, backed by financial clarity you can trust.",
  app: {
    url: APP_URL,
    signup: `${APP_URL}/signup`,
    login: `${APP_URL}/login`,
  },
  contact: {
    email: "hello@civentry.com",
    mailto: "mailto:hello@civentry.com",
    /** Contact-driven CTA for management companies (no self-serve yet). */
    sales: "mailto:hello@civentry.com?subject=Civentry%20for%20management%20companies",
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
  { label: "Management", href: "#management" },
  { label: "Why Civentry", href: "#origin" },
  { label: "Pricing", href: "#pricing" },
] as const;
