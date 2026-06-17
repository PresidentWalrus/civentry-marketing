import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Civentry Terms of Service.",
};

export default function TermsPage() {
  return <LegalPage file="01-terms-of-service.md" />;
}
