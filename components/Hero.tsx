"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-config";

const HeroParticles = dynamic(() => import("./HeroParticles"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-charcoal-deep text-ivory">
      <div className="absolute inset-0">
        <HeroParticles />
      </div>
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative z-[2] grid w-full grid-cols-1 gap-14 px-6 pb-20 pt-40 md:grid-cols-[1.3fr_0.7fr] md:gap-16 md:px-10 md:pb-24 md:pt-[160px]">
        <div>
          <span className="mb-5 block text-[12.5px] font-semibold uppercase tracking-[0.16em] text-brass-soft">
            A personal archive
          </span>
          <h1 className="font-display text-[clamp(64px,12vw,156px)] font-normal italic leading-[0.92] tracking-wide">
            {site.name}
          </h1>
          <p className="mt-3.5 font-display text-[clamp(20px,2.4vw,28px)] italic text-brass-soft">
            {site.tagline}.
          </p>
          <p className="mt-6 max-w-[46ch] text-[17px] text-ivory/80">
            A working notebook kept by {site.author} — marketing, content, copywriting,
            and the ideas that hold them together. Everything made, written, and still
            in progress, gathered in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/project"
              className="inline-flex items-center gap-2.5 border border-brass-soft px-6 py-3.5 text-[13px] uppercase tracking-[0.1em] transition-colors hover:bg-brass-soft hover:text-charcoal-deep"
            >
              View the work
            </Link>
            <a
              href="#introduction"
              className="border-b border-brass-soft pb-0.5 text-[13px] uppercase tracking-[0.08em]"
            >
              Who I am ↓
            </a>
          </div>
        </div>

        <div className="max-w-[300px] justify-self-start md:justify-self-end">
          <figure className="m-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-line-on-dark">
              <Image
                src={site.images.profile}
                alt={`Portrait of ${site.author}`}
                fill
                priority
                sizes="(max-width: 768px) 200px, 300px"
                className="object-cover [filter:grayscale(35%)_sepia(8%)_contrast(1.02)]"
              />
            </div>
            <figcaption className="mt-3.5 text-[12px] uppercase tracking-[0.08em] text-muted-soft">
              {site.author}
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-[2] flex items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] text-muted-soft md:left-10">
        <span className="h-px w-9 bg-brass-soft" />
        Scroll
      </div>
    </section>
  );
}
