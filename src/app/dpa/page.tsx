import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Data Processing Agreement",
  description: "How we process personal data on a customer's behalf.",
};

export default function DpaPage() {
  return <LegalPage file="06-data-processing-agreement.md" />;
}
