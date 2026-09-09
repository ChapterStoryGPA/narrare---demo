import { site } from "@/lib/site-config";

const network = [
  { name: "Instagram", handle: "@prasetyo_a.m", url: site.social.instagram },
  { name: "LinkedIn", handle: site.author, url: site.social.linkedin },
  { name: "Discord", handle: "Community", url: site.social.discord },
  { name: "YouTube", handle: "@gilangprasetyo-s4f", url: site.social.youtube },
];

export default function NetworkList() {
  return (
    <div className="border-t border-line">
      {network.map((n) => (
        <a
          key={n.name}
          href={n.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border-b border-line py-6"
        >
          <span className="flex items-baseline gap-5">
            <span className="font-display text-[28px] italic transition-colors group-hover:text-brass">
              {n.name}
            </span>
            <span className="text-sm text-muted">{n.handle}</span>
          </span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[18px] w-[18px] stroke-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:stroke-brass"
          >
            <path d="M6 14 14 6M8 6h6v6" />
          </svg>
        </a>
      ))}
    </div>
  );
}
