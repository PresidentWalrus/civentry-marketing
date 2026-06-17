import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Resident Notice",
  description: "Information for residents whose associations use Civentry.",
};

export default function ResidentNoticePage() {
  return <LegalPage file="10-resident-notice.md" />;
}
