import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "QuixBid Contractor Terms",
  description: "Terms for contractors who submit bids through QuixBid.",
};

export default function QuixbidContractorTermsPage() {
  return <LegalPage file="09-quixbid-contractor-terms.md" />;
}
