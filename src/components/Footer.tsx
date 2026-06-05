import { Logo } from "./Logo";
import { site } from "@/lib/site";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Log in", href: site.app.login },
        { label: "Get started", href: site.app.signup },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Why Civentry", href: "#origin" },
        { label: "Contact", href: "mailto:hello@civentry.com" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Logo height={28} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              HOA finances, minus the headache. Built by a treasurer who
              couldn&rsquo;t quit.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="font-data text-[11px] font-semibold uppercase tracking-[0.1em] text-mute">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate transition-colors hover:text-teal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mute">
            © 2026 {site.legalName}. All rights reserved.
          </p>
          <p className="max-w-md text-xs leading-relaxed text-mute/80">
            Civentry helps you understand your HOA&rsquo;s finances — it
            isn&rsquo;t a substitute for professional financial or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
