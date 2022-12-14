export const NAV_ITEMS = [
  { href: "#about", title: "about" },
  { href: "#projects", title: "projects" },
  { href: "#contact", title: "contact" },
];

export const FOCUSABLE_ELEMENTS = [
  "a[href]",
  "area[href]",
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  "select:not([disabled]):not([aria-hidden])",
  "textarea:not([disabled]):not([aria-hidden])",
  "button:not([disabled]):not([aria-hidden])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  '[tabindex]:not([tabindex^="-"])',
];

export const STAR_COUNT = 720;
export const STAR_SPEED = 0.08;

export const PROJECTS: CardProps[] = [
  {
    title: "Tiny Slug Url Shortener",
    image: "tsus",
    description: "A tiny url shortener and QR code generator.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "HeadlessUI",
      "Floating UI",
      "Prisma",
      "tRPC",
      "Tanstack-Query",
      "Jotai",
      "React-Hook-Form",
      "zod",
      "NextAuth",
      "PlanetScale",
    ],
    liveUrl: "https://tsus.vercel.app",
    githubUrl: "https://github.com/janosnanai/tiny-slug-url-shortener",
  },
  {
    title: "SchwiftyDB",
    image: "schwiftydb",
    description:
      "Rick and Morty series wiki, tapping into The Rick and Morty API.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "HeadlessUI",
      "GraphQL",
      "Tanstack-Query",
      "Jotai",
    ],
    liveUrl: "https://schwiftydb.vercel.app/",
    githubUrl: "https://github.com/janosnanai/schwifty-db",
  },
  {
    title: "IP Tracker",
    image: "ip-tracker",
    description: "IP tracker app, based on a Frontend Mentor challenge.",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "XState",
      "nanostores",
      "leaflet",
    ],
    liveUrl: "https://next-ip-tracker-kappa.vercel.app/",
    githubUrl: "https://github.com/janosnanai/next-ip-tracker",
  },
  {
    title: "Password Generator",
    image: "password-generator",
    description: "Password Generator app, a Frontend Mentor challenge.",
    stack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    liveUrl: "https://ubiquitous-vacherin-5ba2aa.netlify.app/",
    githubUrl: "https://github.com/janosnanai/password-generator",
  },
];
