import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "AI Disclaimer",
  description: "Civentry AI Disclaimer.",
};

export default function AiDisclaimerPage() {
  return <LegalPage file="03-ai-disclaimer.md" />;
}
