import Link from "next/link";
import Image from "next/image";
import { site, navigation } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep px-6 pb-9 pt-14 text-ivory md:px-10">
      <div className="mx-auto max-w-container">
        <div className="flex flex-wrap items-start justify-between gap-8 border-b border-line-on-dark pb-10">
          <div className="flex items-center gap-3">
            <Image
              src={site.images.logo}
              alt={`${site.name} mark`}
              width={26}
              height={20}
              className="brightness-0 invert"
            />
            <span className="font-display text-xl">{site.name}</span>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-6">
            {navigation.map((item) =>
              item.kind === "internal" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[12.5px] uppercase tracking-[0.1em] text-ivory/70 transition-colors hover:text-brass-soft"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12.5px] uppercase tracking-[0.1em] text-ivory/70 transition-colors hover:text-brass-soft"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-2 pt-6 text-[12.5px] text-muted-soft">
          <span>
            {site.name} — {site.tagline}.
          </span>
          <span>&copy; {new Date().getFullYear()} {site.author}</span>
        </div>
      </div>
    </footer>
  );
}
