type Item = { cat: string; title: string; desc: string };

export default function EditorialList({
  items,
  href,
  altBg,
}: {
  items: Item[];
  href: string;
  altBg?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-3">
      {items.map((item) => (
        <a
          key={item.title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group block px-7 py-8 transition-colors hover:bg-charcoal-deep hover:text-ivory ${
            altBg ? "bg-parchment" : "bg-ivory"
          }`}
        >
          <span className="mb-4 block text-[11px] uppercase tracking-[0.1em] text-brass group-hover:text-brass-soft">
            {item.cat}
          </span>
          <h3 className="mb-3 text-[23px] font-medium leading-snug">{item.title}</h3>
          <p className="text-[15px] text-muted group-hover:text-ivory/75">{item.desc}</p>
        </a>
      ))}
    </div>
  );
}
