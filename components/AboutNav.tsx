"use client";

import { useEffect, useState } from "react";
import { aboutEntries } from "@/lib/content";

export default function AboutNav() {
  const [activeId, setActiveId] = useState(aboutEntries[0]?.id);

  useEffect(() => {
    const elements = aboutEntries
      .map((e) => document.getElementById(e.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav aria-label="About sections" className="sticky top-[120px] self-start">
      {aboutEntries.map((entry) => (
        <a
          key={entry.id}
          href={`#${entry.id}`}
          onClick={(e) => handleClick(e, entry.id)}
          className={`block border-l-2 py-2.5 pl-4 text-sm transition-colors ${
            activeId === entry.id
              ? "border-brass text-ink"
              : "border-transparent text-muted hover:text-ink"
          }`}
        >
          {entry.title}
        </a>
      ))}
    </nav>
  );
}
