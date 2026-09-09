import type { Metadata } from "next";
import ContactChannels from "@/components/ContactChannels";
import { site } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-14 pt-[170px] md:px-10">
        <div className="mx-auto max-w-container">
          <span className="mb-5 block text-[12.5px] font-semibold uppercase tracking-[0.16em] text-brass">
            Contact
          </span>
          <h1 className="max-w-[16ch] font-display text-[clamp(42px,7vw,84px)] font-normal italic">
            Let&apos;s start a conversation.
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-[90px]">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-10 md:grid-cols-2 md:gap-[70px]">
          <div>
            <span className="mb-5 block text-[12.5px] font-semibold uppercase tracking-[0.16em] text-brass">
              Email
            </span>
            <a
              href={`mailto:${site.email}`}
              className="inline-block break-words border-b-2 border-brass-soft pb-1.5 font-display text-[clamp(30px,4.6vw,46px)] font-normal italic transition-colors hover:text-brass"
            >
              {site.email}
            </a>
            <p className="mt-10 max-w-[48ch] text-sm italic text-muted-soft">
              The most direct way to reach me. I try to reply within a few days.
            </p>
          </div>
          <div>
            <span className="mb-2 block text-[12.5px] font-semibold uppercase tracking-[0.16em] text-brass">
              Elsewhere
            </span>
            <ContactChannels />
          </div>
        </div>
      </section>
    </>
  );
}
