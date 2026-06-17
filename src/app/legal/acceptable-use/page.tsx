import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "The rules for using Civentry.",
};

export default function AcceptableUsePage() {
  return <LegalPage file="08-acceptable-use-policy.md" />;
}
