import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import DisciplineList from "@/components/DisciplineList";
import Shelf from "@/components/Shelf";
import EditorialList from "@/components/EditorialList";
import NetworkList from "@/components/NetworkList";
import { site } from "@/lib/site-config";
import { journal, workshop } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* INTRODUCTION */}
      <section id="introduction" className="py-24 md:py-[120px]">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <SectionHead eyebrow="Introduction" title="Who I am" />
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-[70px]">
            <p className="font-display text-[clamp(24px,3vw,34px)] italic leading-[1.35]">
              I work at the point where marketing, writing, and strategy meet —
              building the words and systems that help ideas travel.
            </p>
            <div className="space-y-4 text-charcoal">
              <p>
                NARRĀRE is where I keep that work: projects, essays, half-finished
                experiments, and the products I build on the side. Some of it is
                polished. Some of it is still being figured out. All of it is real.
              </p>
              <p>
                This page is a living document — replace this paragraph with your own
                introduction: where you&apos;re based, how you got into this work, and
                what a visitor should understand about you in the first thirty
                seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="bg-parchment py-24 md:py-[120px]">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <SectionHead
            eyebrow="What I do"
            title="Areas of work"
            lede="The disciplines this archive is built around."
          />
          <DisciplineList />
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="py-24 md:py-[120px]">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <SectionHead
            eyebrow="Selected work"
            title="The shelf"
            lede="A running archive of projects. Select a volume to open it."
          />
        </div>
        <div className="mx-auto max-w-container px-6 md:px-10">
          <Shelf />
          <div className="mt-11 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[13px] italic text-muted-soft">
              Showing a selection — the full archive lives on the Project page.
            </span>
            <Link
              href="/project"
              className="border-b border-brass-soft pb-0.5 text-[13px] uppercase tracking-[0.08em]"
            >
              View all projects ↗
            </Link>
          </div>
        </div>
      </section>

      {/* THE JOURNAL */}
      <section className="bg-parchment py-24 md:py-[120px]">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <SectionHead
            eyebrow="The journal"
            title="From the journal"
            lede="Notes on marketing, writing, and building things — published externally."
          />
          <EditorialList items={journal} href={site.articleUrl} altBg />
          <div className="mt-11 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[13px] italic text-muted-soft">
              Sample entries — replace with your published articles.
            </span>
            <a
              href={site.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-brass-soft pb-0.5 text-[13px] uppercase tracking-[0.08em]"
            >
              Read the journal ↗
            </a>
          </div>
        </div>
      </section>

      {/* THE WORKSHOP */}
      <section className="py-24 md:py-[120px]">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <SectionHead
            eyebrow="The workshop"
            title="Things I've made"
            lede="Templates, guides, and small digital products — available externally."
          />
          <EditorialList items={workshop} href={site.productUrl} />
          <div className="mt-11 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[13px] italic text-muted-soft">
              Sample entries — replace with your real products.
            </span>
            <a
              href={site.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-brass-soft pb-0.5 text-[13px] uppercase tracking-[0.08em]"
            >
              Visit the workshop ↗
            </a>
          </div>
        </div>
      </section>

      {/* THE NETWORK */}
      <section className="bg-parchment py-24 md:py-[120px]">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <SectionHead eyebrow="The network" title="Elsewhere" lede="Where the rest of this archive continues." />
          <NetworkList />
        </div>
      </section>

      {/* FINAL INVITATION */}
      <section className="bg-charcoal-deep px-6 py-[150px] text-center text-ivory md:px-10">
        <div className="mx-auto max-w-container">
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-brass-soft">
            Get in touch
          </span>
          <h2 className="mx-auto mt-5 max-w-[16ch] font-display text-[clamp(36px,6vw,68px)] font-normal italic">
            Have a story worth telling? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-6 max-w-[44ch] text-ivory/75">
            I&apos;m generally open to conversations about marketing, content, and
            creative work — reach out through the contact page.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2.5 border border-brass-soft px-6 py-3.5 text-[13px] uppercase tracking-[0.1em] transition-colors hover:bg-brass-soft hover:text-charcoal-deep"
          >
            Say hello
          </Link>
        </div>
      </section>
    </>
  );
}
