"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, navigation } from "@/lib/site-config";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-6 py-5 transition-[background,padding] duration-300 md:px-10 ${
        scrolled
          ? "bg-ivory/95 py-3.5 backdrop-blur-sm border-b border-line"
          : "bg-gradient-to-b from-charcoal-deep/55 to-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={site.images.logo}
          alt={`${site.name} mark`}
          width={30}
          height={24}
          className={scrolled ? "" : "brightness-0 invert"}
          priority
        />
        <span
          className={`font-display text-[22px] tracking-wide ${
            scrolled ? "text-ink" : "text-ivory"
          }`}
        >
          {site.name}
        </span>
      </Link>

      <button
        className="z-[210] p-1.5 md:hidden"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          className={scrolled && !open ? "stroke-ink" : "stroke-ivory"}
        >
          {open ? (
            <>
              <line x1="6" y1="6" x2="20" y2="20" />
              <line x1="20" y1="6" x2="6" y2="20" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="23" y2="7" />
              <line x1="3" y1="13" x2="23" y2="13" />
              <line x1="3" y1="19" x2="23" y2="19" />
            </>
          )}
        </svg>
      </button>

      <nav
        aria-label="Primary"
        className={`flex items-center gap-8 max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:w-[min(320px,80vw)] max-md:flex-col max-md:items-start max-md:gap-6 max-md:bg-charcoal-deep max-md:px-8 max-md:pt-28 max-md:transition-transform max-md:duration-300 ${
          open ? "max-md:translate-x-0" : "max-md:translate-x-full"
        }`}
      >
        {navigation.map((item) => {
          const isActive = item.kind === "internal" && pathname === item.href;
          const isDark = !scrolled;
          const linkColor = "max-md:text-ivory";
          return item.kind === "internal" ? (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`border-b pb-1 text-[12.5px] uppercase tracking-[0.14em] transition-colors ${linkColor} ${
                isActive
                  ? "border-brass"
                  : "border-transparent opacity-85 hover:border-brass hover:opacity-100"
              } ${isDark ? "text-ivory" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-b border-transparent pb-1 text-[12.5px] uppercase tracking-[0.14em] opacity-85 transition-colors hover:border-brass hover:opacity-100 ${linkColor} ${
                isDark ? "text-ivory" : "text-ink"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
