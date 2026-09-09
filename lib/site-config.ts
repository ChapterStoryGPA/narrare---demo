/**
 * NARRĀRE — centralized site configuration.
 *
 * Edit the values below to update personal information, links, and SEO
 * metadata across the entire site without touching component code.
 *
 * Values marked with brackets, e.g. "[DISCORD URL]", are placeholders
 * left intentionally blank — replace them with your real destinations.
 */

export const site = {
  name: "NARRĀRE",
  tagline: "Stories to remember",
  /** Replace with your real production domain once deployed (used for SEO/OG resolution). */
  url: "https://narrare.example.com",
  description:
    "NARRĀRE is the personal archive of Gilang Prasetyo Adjie — marketing, content, copywriting, and the ideas that hold them together.",
  author: "Gilang Prasetyo Adjie",
  email: "gilangprasetyoadjiem@gmail.com",
  phone: "+62 821 1540 3879",

  // External destinations — ARTICLE and PRODUCT are not internal routes.
  articleUrl: "[WORDPRESS / MEDIUM URL]",
  productUrl: "https://lynk.id/prasetyoadjie",

  social: {
    instagram: "https://www.instagram.com/prasetyo_a.m",
    linkedin: "https://www.linkedin.com/in/gilangprasetyoadjie/",
    discord: "[DISCORD URL]",
    youtube: "https://www.youtube.com/@gilangprasetyo-s4f",
  },

  images: {
    logo: "/images/logo.png",
    profile: "/images/profile.jpg",
  },

  seo: {
    ogImage: "/images/profile.jpg",
    locale: "en_US",
    twitterHandle: undefined as string | undefined,
  },
} as const;

export const navigation = [
  { label: "Home", href: "/", kind: "internal" as const },
  { label: "About", href: "/about", kind: "internal" as const },
  { label: "Project", href: "/project", kind: "internal" as const },
  { label: "Article", href: site.articleUrl, kind: "external" as const },
  { label: "Product", href: site.productUrl, kind: "external" as const },
  { label: "Contact", href: "/contact", kind: "internal" as const },
];
