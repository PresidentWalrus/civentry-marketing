import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "The agreements, policies, and notices that govern Civentry.",
};

type Doc = { label: string; slug: string; description: string };
type Group = { heading: string; docs: Doc[] };

// Every document lives at /legal/<slug>. Add a doc by adding an entry here
// and creating src/app/legal/<slug>/page.tsx.
const GROUPS: Group[] = [
  {
    heading: "General",
    docs: [
      {
        label: "Terms of Service",
        slug: "terms",
        description: "The agreement that governs use of Civentry.",
      },
      {
        label: "Privacy Policy",
        slug: "privacy",
        description: "What we collect, how we use it, and the choices you have.",
      },
      {
        label: "AI Disclaimer and Governance",
        slug: "ai-disclaimer",
        description: "How Civentry uses AI and the limits of its outputs.",
      },
      {
        label: "Financial Disclaimer",
        slug: "financial-disclaimer",
        description:
          "Important limits on the financial information Civentry provides.",
      },
      {
        label: "Security and Data Handling",
        slug: "security",
        description: "How we protect and handle your data.",
      },
      {
        label: "Acceptable Use Policy",
        slug: "acceptable-use",
        description: "The rules for using Civentry.",
      },
      {
        label: "Resident Notice",
        slug: "resident-notice",
        description:
          "Information for residents whose associations use Civentry.",
      },
      {
        label: "Accessibility Statement",
        slug: "accessibility",
        description: "Our commitment to an accessible product.",
      },
    ],
  },
  {
    heading: "For management companies",
    docs: [
      {
        label: "Commercial Terms",
        slug: "commercial-terms",
        description:
          "Terms for management companies and other commercial customers.",
      },
      {
        label: "Data Processing Agreement",
        slug: "dpa",
        description: "How we process personal data on a customer's behalf.",
      },
    ],
  },
  {
    heading: "For contractors",
    docs: [
      {
        label: "QuixBid Contractor Terms",
        slug: "quixbid-contractor-terms",
        description: "Terms for contractors who submit bids through QuixBid.",
      },
    ],
  },
];

export default function LegalHubPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <h1 className="text-[clamp(2rem,5vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-navy">
          Legal
        </h1>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-slate">
          The agreements, policies, and notices that govern Civentry. If you
          have a question about any of these, contact us at{" "}
          <a
            href="mailto:hello@civentry.com"
            className="text-teal underline underline-offset-2 hover:text-[#0c5f58]"
          >
            hello@civentry.com
          </a>
          .
        </p>

        <div className="mt-12 space-y-12">
          {GROUPS.map((group) => (
            <section key={group.heading}>
              <h2 className="text-xl font-bold tracking-[-0.01em] text-navy">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.docs.map((doc) => (
                  <li key={doc.slug}>
                    <a
                      href={`/legal/${doc.slug}`}
                      className="block rounded-2xl border border-line bg-white px-5 py-4 transition-colors hover:border-teal-light"
                    >
                      <p className="font-semibold text-navy">{doc.label}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate">
                        {doc.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <Cta href="/" variant="secondary">
            Back to home
          </Cta>
        </div>
      </main>
      <Footer />
    </>
  );
}
