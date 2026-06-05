import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Cta } from "./Cta";

/**
 * Minimal shell for the legal stubs. The real policy copy is being
 * finalized; until then these pages exist so footer links resolve and the
 * site reads as complete.
 */
export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-5 pb-24 pt-36 sm:px-8">
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-navy sm:text-4xl">
          {title}
        </h1>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate">
          {children}
        </div>
        <div className="mt-10">
          <Cta href="/" variant="secondary">
            Back to home
          </Cta>
        </div>
      </main>
      <Footer />
    </>
  );
}
