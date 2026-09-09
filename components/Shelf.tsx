"use client";

import { useState } from "react";
import Link from "next/link";
import { shelfProjects, romanish, type Project } from "@/lib/projects";

const spineBg = [
  "bg-[#332C22]",
  "bg-[#2B2F2C]",
  "bg-[#2E2723]",
  "bg-[#26251F]",
  "bg-[#302A28]",
  "bg-[#2A2E2E]",
];

export default function Shelf() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active: Project | undefined = shelfProjects.find((p) => p.id === openId);

  return (
    <div>
      <div
        className="scrollbar-hairline flex gap-0.5 overflow-x-auto border-y border-line pb-6"
        role="list"
        aria-label="Selected projects"
      >
        {shelfProjects.map((p, i) => (
          <div key={p.id} role="listitem" className="flex-none">
            <button
              aria-expanded={openId === p.id}
              aria-controls="shelf-detail"
              onClick={() => setOpenId((cur) => (cur === p.id ? null : p.id))}
              className={`flex min-h-[420px] w-[150px] flex-none flex-col justify-between border-r border-ivory/[0.08] p-6 text-ivory transition-transform duration-300 hover:-translate-y-1.5 ${
                spineBg[i % spineBg.length]
              }`}
            >
              <span className="font-display text-sm italic text-brass-soft">
                Vol. {romanish(i + 1)}
              </span>
              <span className="vertical-rl mx-auto my-auto font-display text-xl font-medium tracking-wide">
                {p.title}
              </span>
              <span className="text-[11px] uppercase tracking-[0.08em] text-muted-soft">
                {p.category}
              </span>
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div
          id="shelf-detail"
          className="mt-7 grid animate-reveal grid-cols-1 gap-6 bg-charcoal-deep p-7 text-ivory md:grid-cols-[1fr_1.4fr] md:gap-11 md:p-10"
        >
          <div>
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="mb-4 flex flex-wrap gap-2.5">
                  <Tag>{active.category}</Tag>
                  <Tag>{active.year}</Tag>
                  <Tag>{active.status}</Tag>
                </div>
                <h3 className="font-display text-[clamp(26px,3vw,36px)] font-normal italic">
                  {active.title}
                </h3>
              </div>
              <button
                aria-label="Close"
                onClick={() => setOpenId(null)}
                className="flex h-[34px] w-[34px] flex-none items-center justify-center border border-line-on-dark text-lg transition-colors hover:bg-brass-soft hover:text-charcoal-deep"
              >
                &times;
              </button>
            </div>
            <p className="mb-5 mt-4 text-ivory/80">{active.description}</p>
            <dl className="mb-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="mb-1 text-[11px] uppercase tracking-[0.08em] text-muted-soft">
                  Role
                </dt>
                <dd>{active.role}</dd>
              </div>
              <div>
                <dt className="mb-1 text-[11px] uppercase tracking-[0.08em] text-muted-soft">
                  Tools
                </dt>
                <dd>{active.tools}</dd>
              </div>
            </dl>
            <Link
              href="/project"
              className="border-b border-brass-soft pb-0.5 text-[13px] uppercase tracking-[0.08em]"
            >
              View in the full archive ↗
            </Link>
          </div>
          <div className="flex min-h-[220px] items-center justify-center border border-ivory/10 bg-ivory/[0.04]">
            <span className="font-display text-[15px] italic text-ivory/35">
              Cover artwork placeholder
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-line-on-dark px-2.5 py-1.5 text-[11px] uppercase tracking-[0.08em] text-brass-soft">
      {children}
    </span>
  );
}
