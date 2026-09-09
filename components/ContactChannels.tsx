import { site } from "@/lib/site-config";

const iconProps = {
  viewBox: "0 0 20 20",
  fill: "none",
  strokeWidth: 1.4,
  className: "h-4 w-4 stroke-muted transition-colors group-hover:stroke-brass",
};

const icons: Record<string, React.ReactNode> = {
  mail: (
    <svg {...iconProps}>
      <rect x="2" y="4" width="16" height="12" rx="1" />
      <path d="m3 5 7 6 7-6" />
    </svg>
  ),
  phone: (
    <svg {...iconProps}>
      <path d="M5 3h3l1.5 4L8 8.5a8 8 0 0 0 4 4l1.5-1.5 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 3.5 4.6 1.5 1.5 0 0 1 5 3Z" />
    </svg>
  ),
  ig: (
    <svg {...iconProps}>
      <rect x="2.5" y="2.5" width="15" height="15" rx="4" />
      <circle cx="10" cy="10" r="3.4" />
      <circle cx="14.3" cy="5.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  li: (
    <svg {...iconProps}>
      <rect x="2.5" y="2.5" width="15" height="15" rx="2" />
      <line x1="6.5" y1="8.5" x2="6.5" y2="14" />
      <circle cx="6.5" cy="5.7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M9.5 14V8.5M9.5 10.8c0-1.3 1-2.3 2.2-2.3s2 .8 2 2.2V14" />
    </svg>
  ),
  dc: (
    <svg {...iconProps}>
      <path d="M5 6.5C7.5 5 12.5 5 15 6.5c1 3 1 6 .3 8-1.4.9-2.6 1.2-2.6 1.2l-.6-1.3M5 6.5c-1 3-1 6-.3 8 1.4.9 2.6 1.2 2.6 1.2l.6-1.3" />
      <ellipse cx="7.7" cy="11.3" rx="1" ry="1.2" />
      <ellipse cx="12.3" cy="11.3" rx="1" ry="1.2" />
    </svg>
  ),
  yt: (
    <svg {...iconProps}>
      <rect x="2" y="5" width="16" height="10" rx="2.5" />
      <path d="M8.5 8.2v3.6l3.3-1.8-3.3-1.8Z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const channels = [
  { label: "Email", value: site.email, url: `mailto:${site.email}`, icon: "mail" },
  {
    label: "Phone",
    value: site.phone,
    url: `tel:${site.phone.replace(/\s+/g, "")}`,
    icon: "phone",
  },
  { label: "Instagram", value: "@prasetyo_a.m", url: site.social.instagram, icon: "ig" },
  { label: "LinkedIn", value: site.author, url: site.social.linkedin, icon: "li" },
  { label: "Discord", value: "Community", url: site.social.discord, icon: "dc" },
  { label: "YouTube", value: "@gilangprasetyo-s4f", url: site.social.youtube, icon: "yt" },
];

export default function ContactChannels() {
  return (
    <div className="border-t border-line">
      {channels.map((c) => {
        const isDirect = c.url.startsWith("mailto") || c.url.startsWith("tel");
        return (
          <a
            key={c.label}
            href={c.url}
            target={isDirect ? "_self" : "_blank"}
            rel={isDirect ? undefined : "noopener noreferrer"}
            className="group flex items-center justify-between gap-4 border-b border-line py-6"
          >
            <span className="w-[110px] flex-none text-[13px] uppercase tracking-[0.08em] text-muted">
              {c.label}
            </span>
            <span className="flex-1 text-left text-base transition-colors group-hover:text-brass">
              {c.value}
            </span>
            {icons[c.icon]}
          </a>
        );
      })}
    </div>
  );
}
