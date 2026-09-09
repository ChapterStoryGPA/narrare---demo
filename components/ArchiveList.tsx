"use client";

import { useState } from "react";
import { projects, projectCategories, type Project } from "@/lib/projects";

export default function ArchiveList() {
  const [activeCat, setActiveCat] = useState<(typeof projectCategories)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const items: Project[] =
    activeCat === "All" ? projects : projects.filter((p) => p.category === activeCat);

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2.5">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCat(cat);
              setOpenId(null);
            }}
            className={`px-4 py-2.5 text-xs uppercase tracking-[0.08em] transition-colors ${
              activeCat === cat
                ? "border border-ink bg-ink text-ivory"
                : "border border-line text-muted hover:border-brass hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="border-t border-line">
        {items.map((p, i) => {
          const isOpen = openId === p.id;
          return (
            <div key={p.id}>
              <button
                onClick={() => setOpenId(isOpen ? null : p.id)}
                aria-expanded={isOpen}
                className="grid w-full grid-cols-[1fr_30px] items-center gap-x-6 gap-y-1.5 border-b border-line py-6 text-left max-md:[grid-template-areas:'title_arrow'_'meta_meta'] md:grid-cols-[70px_1.4fr_1fr_100px_40px]"
              >
                <span className="hidden font-display text-base italic text-brass md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[22px] font-medium max-md:[grid-area:title]">
                  {p.title}
                </span>
                <span className="text-[13px] uppercase tracking-[0.06em] text-muted max-md:[grid-area:meta]">
                  {p.category}
                </span>
                <span className="hidden text-sm text-muted-soft md:block md:text-right">
                  {p.year}
                </span>
                <span
                  className={`justify-self-end transition-transform duration-200 max-md:[grid-area:arrow] ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[18px] w-[18px] stroke-muted"
                  >
                    <path d="M6 14 14 6M8 6h6v6" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="grid animate-reveal grid-cols-1 gap-8 border-b border-line pb-11 md:grid-cols-[1.3fr_1fr]">
                  <div>
                    <p className="mb-4 text-charcoal">{p.description}</p>
                    <div className="border-t border-dashed border-line-on-dark pt-4 text-[13px] italic text-muted-soft">
                      {p.caseStudy
                        ? "Full case study below."
                        : "Full case study — overview, problem, strategy, execution, and reflection — can be added here when ready."}
                    </div>
                  </div>
                  <dl className="grid grid-cols-2 content-start gap-4 text-sm">
                    <Fact label="Category" value={p.category} />
                    <Fact label="Year" value={p.year} />
                    <Fact label="Role" value={p.role} />
                    <Fact label="Tools" value={p.tools} />
                    <Fact label="Status" value={p.status} />
                  </dl>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="mb-1 text-[11px] uppercase tracking-[0.06em] text-muted">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
