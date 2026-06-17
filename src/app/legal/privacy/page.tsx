import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Civentry Privacy Policy.",
};

export default function PrivacyPage() {
  return <LegalPage file="02-privacy-policy.md" />;
}
