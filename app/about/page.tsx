import type { Metadata } from "next";
import AboutNav from "@/components/AboutNav";
import { aboutEntries } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-[170px] md:px-10">
        <div className="mx-auto max-w-container">
          <span className="mb-5 block text-[12.5px] font-semibold uppercase tracking-[0.16em] text-brass">
            About
          </span>
          <h1 className="max-w-[14ch] font-display text-[clamp(42px,7vw,84px)] font-normal italic">
            The person behind the archive.
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-[90px]">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-[60px]">
          <AboutNav />
          <div>
            {aboutEntries.map((entry, i) => (
              <article
                key={entry.id}
                id={entry.id}
                className={`pb-14 md:pb-16 ${
                  i < aboutEntries.length - 1 ? "mb-14 border-b border-line md:mb-16" : ""
                }`}
              >
                <span className="mb-3.5 block text-[12.5px] font-semibold uppercase tracking-[0.16em] text-brass">
                  {entry.num}
                </span>
                <h2 className="mb-5 font-display text-[clamp(26px,3.4vw,36px)] font-normal italic">
                  {entry.title}
                </h2>
                <div className="max-w-[62ch] space-y-4 text-charcoal">
                  {entry.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  {entry.list && (
                    <ul className="list-disc space-y-2 pl-5">
                      {entry.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
