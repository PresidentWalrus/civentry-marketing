import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Security & Data Handling",
  description: "How Civentry protects and handles your data.",
};

export default function SecurityPage() {
  return <LegalPage file="05-security-and-data-handling.md" />;
}
