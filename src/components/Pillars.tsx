import { Hourglass, Eye, SlidersHorizontal, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const PILLARS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Hourglass,
    title: "Skip the hours of analysis",
    body: "The AI reads your financial reports and surfaces what matters — so you don't spend another evening doing it by hand.",
  },
  {
    icon: Eye,
    title: "Understand it in minutes",
    body: "Cash, budget, reserves — your whole financial picture, clear and current, without the digging.",
  },
  {
    icon: SlidersHorizontal,
    title: "You make the calls",
    body: "Every decision stays yours. Civentry just does the tedious part and hands you the answer.",
  },
];

export function Pillars() {
  return (
    <section className="border-t border-line/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden px-5 sm:px-8 md:grid-cols-3 md:gap-0">
        {PILLARS.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 90}
            className={`px-0 py-10 md:px-8 md:py-14 ${
              i > 0 ? "md:border-l md:border-line/70" : ""
            }`}
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl text-teal"
              style={{ background: "rgba(15,118,110,0.09)" }}
              aria-hidden
            >
              <p.icon size={20} strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-navy">{p.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">
              {p.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
