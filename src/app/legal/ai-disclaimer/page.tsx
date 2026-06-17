import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "AI Disclaimer and Governance",
  description: "How Civentry uses AI and the limits of its outputs.",
};

export default function AiDisclaimerPage() {
  return <LegalPage file="03-ai-disclaimer-and-governance.md" />;
}
