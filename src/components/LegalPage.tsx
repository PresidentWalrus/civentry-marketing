import fs from "node:fs";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import type { Components } from "react-markdown";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Cta } from "./Cta";

/**
 * Renders a legal/trust document from content/legal/*.md verbatim. The file is
 * read at build time and only its markdown syntax is converted to markup; the
 * wording is never altered. GFM gives us the subprocessor tables; remark-breaks
 * preserves the single-line breaks in the date and contact blocks.
 */

// Wrap tables so they can scroll horizontally on narrow screens.
const components: Components = {
  table({ node: _node, ...props }) {
    return (
      <div className="table-wrap">
        <table {...props} />
      </div>
    );
  },
};

export function LegalPage({ file }: { file: string }) {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), "content/legal", file),
    "utf8",
  );

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <article className="legal-prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={components}
          >
            {markdown}
          </ReactMarkdown>
        </article>

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
