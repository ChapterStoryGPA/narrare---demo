import { disciplines } from "@/lib/content";

export default function DisciplineList() {
  return (
    <div className="border-t border-line">
      {disciplines.map((d) => (
        <div
          key={d.num}
          className="grid grid-cols-1 items-baseline gap-2 border-b border-line py-6 md:grid-cols-[90px_1.1fr_1.6fr] md:gap-8 md:py-7"
        >
          <span className="font-display text-lg italic text-brass">{d.num}</span>
          <h3 className="text-2xl font-medium">{d.title}</h3>
          <p className="text-base text-muted">{d.body}</p>
        </div>
      ))}
    </div>
  );
}
