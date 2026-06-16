import { FileText, Eye, Gavel, type LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const PILLARS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileText,
    title: "Skip the boring part.",
    body: "Someone has to read all forty pages of the board packet. Good news: it doesn't have to be you.",
  },
  {
    icon: Eye,
    title: "See the whole picture.",
    body: "Cash, budget, and reserves at a glance, instead of three spreadsheets and a prayer.",
  },
  {
    icon: Gavel,
    title: "You make the calls.",
    body: "Civentry does the math and hands you the answer. It doesn't get a vote, which is probably for the best.",
  },
];

export function Pillars() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-navy sm:text-[2.75rem]">
            Built for the decisions, not the busywork.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-slate">
            Civentry handles the reading, the math, and the paperwork, so the
            only thing left for the board is the call.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PILLARS.map((p) => (
            <StaggerItem
              key={p.title}
              lift
              className="hover-shadow card-shadow rounded-2xl border border-line bg-white p-7"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-teal"
                style={{ background: "rgba(15,118,110,0.09)" }}
                aria-hidden
              >
                <p.icon size={21} strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">
                {p.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
