import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Our commitment to an accessible product.",
};

export default function AccessibilityPage() {
  return <LegalPage file="11-accessibility-statement.md" />;
}
