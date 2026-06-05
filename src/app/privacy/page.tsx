import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Civentry handles your data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy">
      <p>
        We&rsquo;re finalizing our full privacy policy. Civentry treats your
        association&rsquo;s financial documents as confidential — they&rsquo;re
        used to generate your insights and nothing else.
      </p>
      <p>
        Questions about how your data is handled? Email us at{" "}
        <a className="font-medium text-teal" href="mailto:hello@civentry.com">
          hello@civentry.com
        </a>{" "}
        and we&rsquo;ll walk you through it.
      </p>
    </LegalShell>
  );
}
