import type { Metadata } from "next";
import ArchiveList from "@/components/ArchiveList";

export const metadata: Metadata = { title: "Project" };

export default function ProjectPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-[170px] md:px-10">
        <div className="mx-auto max-w-container">
          <span className="mb-5 block text-[12.5px] font-semibold uppercase tracking-[0.16em] text-brass">
            Project
          </span>
          <h1 className="font-display text-[clamp(42px,7vw,84px)] font-normal italic">
            The full archive.
          </h1>
          <p className="mt-5 max-w-[56ch] text-[17px] text-muted">
            Every volume on the shelf — marketing, content, and creative work, filed by
            category. Sample entries below; replace with your real projects.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-[90px]">
        <div className="mx-auto max-w-container">
          <ArchiveList />
        </div>
      </section>
    </>
  );
}
