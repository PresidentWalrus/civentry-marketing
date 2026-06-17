import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Commercial Terms",
  description: "Terms for management companies and other commercial customers.",
};

export default function CommercialTermsPage() {
  return <LegalPage file="07-commercial-terms.md" />;
}
