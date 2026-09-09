export default function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-16 grid grid-cols-1 items-start gap-4 md:mb-[64px] md:grid-cols-[0.9fr_1.6fr] md:gap-10">
      <span className="mb-3.5 block text-[12.5px] font-semibold uppercase tracking-[0.16em] text-brass">
        {eyebrow}
      </span>
      <div>
        <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal italic">
          {title}
        </h2>
        {lede && (
          <p className="mt-3 max-w-[52ch] text-[19px] text-muted md:mt-0">{lede}</p>
        )}
      </div>
    </div>
  );
}
