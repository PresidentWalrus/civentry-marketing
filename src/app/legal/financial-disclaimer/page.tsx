import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Financial Disclaimer",
  description: "Civentry Financial Disclaimer.",
};

export default function FinancialDisclaimerPage() {
  return <LegalPage file="04-financial-disclaimer.md" />;
}
