import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms of using Civentry.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service">
      <p>
        We&rsquo;re finalizing our full terms of service. In short: Civentry
        helps you understand your HOA&rsquo;s finances, but it isn&rsquo;t a
        substitute for professional financial, legal, or accounting advice.
      </p>
      <p>
        Questions before the full terms are posted? Reach us at{" "}
        <a className="font-medium text-teal" href="mailto:hello@civentry.com">
          hello@civentry.com
        </a>
        .
      </p>
    </LegalShell>
  );
}
