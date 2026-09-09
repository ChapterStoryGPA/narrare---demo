/**
 * NARRĀRE — project archive data.
 *
 * Sample / placeholder entries. Replace freely — no results, clients, or
 * credentials are implied by the sample copy below.
 *
 * The shape is deliberately wider than the homepage/shelf needs, so any
 * entry can later grow into a full case study (see `caseStudy`) without
 * changing the data model again.
 */

export type ProjectCategory =
  | "Digital Marketing"
  | "Content"
  | "Copywriting"
  | "Social Media"
  | "Creative Strategy"
  | "Website"
  | "Digital Product"
  | "Personal Project"
  | "Experiment"
  | "Case Study";

export type ProjectStatus = "Concept" | "In progress" | "Live";

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  role: string;
  tools: string;
  description: string;
  status: ProjectStatus;
  externalUrl?: string;
  /** Optional — populate when a project is ready to become a full case study. */
  caseStudy?: CaseStudySection[];
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Field Notes: A Content System",
    category: "Content",
    year: "Sample",
    role: "Content Lead",
    tools: "Notion, Sheets",
    description:
      "A placeholder entry for a real content system you've built — editorial calendars, tone-of-voice guidelines, or a repeatable content process.",
    status: "Concept",
  },
  {
    id: "p2",
    title: "Launch Copy for a Small Brand",
    category: "Copywriting",
    year: "Sample",
    role: "Copywriter",
    tools: "Docs",
    description:
      "Replace with a real copywriting project — website copy, campaign lines, or product messaging you're proud of.",
    status: "Concept",
  },
  {
    id: "p3",
    title: "Social Voice, Rebuilt",
    category: "Social Media",
    year: "Sample",
    role: "Strategist",
    tools: "Later, Canva",
    description:
      "A placeholder for a social media project — a rebrand of tone, a content pillar system, or a platform strategy.",
    status: "Concept",
  },
  {
    id: "p4",
    title: "Growth Plan for a Digital Product",
    category: "Digital Marketing",
    year: "Sample",
    role: "Marketing Lead",
    tools: "Meta Ads, Analytics",
    description:
      "Swap in a real digital marketing case — the channels used, the audience, and the thinking behind the plan.",
    status: "Concept",
  },
  {
    id: "p5",
    title: "Repositioning a Personal Brand",
    category: "Creative Strategy",
    year: "Sample",
    role: "Strategist",
    tools: "Miro, Docs",
    description:
      "A placeholder for creative strategy work — brand positioning, messaging architecture, or a campaign concept.",
    status: "Concept",
  },
  {
    id: "p6",
    title: "NARRĀRE",
    category: "Website",
    year: "2026",
    role: "Design & Build",
    tools: "Next.js, TypeScript, Tailwind",
    description:
      "This website. A personal archive built as an editorial, shelf-like experience — an ongoing project in itself.",
    status: "Live",
  },
  {
    id: "p7",
    title: "A Small Digital Product",
    category: "Digital Product",
    year: "Sample",
    role: "Maker",
    tools: "Figma",
    description:
      "Replace with a template, guide, or resource you've made and sold or shared.",
    status: "Concept",
  },
  {
    id: "p8",
    title: "An Ongoing Experiment",
    category: "Experiment",
    year: "Sample",
    role: "Solo",
    tools: "—",
    description:
      "A space for something unfinished — an idea you're testing that doesn't fit neatly elsewhere yet.",
    status: "In progress",
  },
];

export const shelfProjects = projects.slice(0, 6);

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export function romanish(n: number): string {
  const map = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return map[n - 1] ?? String(n);
}
