export const profile = {
  name: "Phan Huy Kha",
  title: "Full-Stack Software Engineer",
  location: "Da Nang, Vietnam",
  email: "khaphan2806@gmail.com",
  github: "https://github.com/khaphan97",
  githubHandle: "khaphan97",
  summary:
    "Full-stack software engineer with 4 years of experience building and shipping end-to-end web products — from modern React and Vue SPAs to Node.js and NestJS backends and the data pipelines behind them. Experienced across third-party API integrations and analytics-grade data platforms, working directly with clients and cross-cultural teams.",
  available: true,
};

export const stats = [
  { value: "4+", label: "Years shipping products" },
  { value: "6+", label: "Products delivered" },
  { value: "3", label: "Countries of teammates" },
];

export type Experience = {
  org: string;
  url?: string;
  role: string;
  meta: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    org: "Rezonate",
    url: "https://getrezonate.com/Rezonate.dc",
    role: "Software Engineer",
    meta: "Aug 2021 — Present",
    location: "Singapore (Remote)",
    points: [
      "Develop and maintain full-stack chatbot products across the stack using Node.js, Vue.js, and React within an Agile delivery team.",
      "Designed and shipped a standalone AI-powered voice-calling product with Nuxt.js, integrating the third-party VAPI platform.",
      "Integrated the WhatsApp Cloud API to add new messaging channels to chatbot products.",
      "Partnered directly with clients (Singapore, Malaysia) and cross-cultural teams (Singapore, Indonesia, Vietnam) to turn complex requirements into shipped features.",
      "Refactored legacy UI and delivered new interfaces, improving maintainability and resolving longstanding component issues.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: { href: string; label: string };
  private?: boolean;
};

export const projects: Project[] = [
  {
    name: "Danang Fantasticity Analytics",
    tagline: "Marketing analytics dashboard",
    description:
      "Full-stack internal dashboard unifying GA4, Facebook, Instagram, and TikTok marketing data into one normalized reporting platform. A role-protected, CDP-style workspace with scheduled provider-sync workers, user management, and audit logging.",
    tags: [
      "React 19",
      "Vite",
      "TanStack Router/Query",
      "NestJS",
      "Drizzle ORM",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "Docker",
    ],
    private: true,
  },
  {
    name: "Da Nang Fantasticity",
    tagline: "Official tourism portal",
    description:
      "Led end-to-end frontend development of Da Nang's official tourism site from scratch — a multi-language experience (Vietnamese, English, Japanese, Chinese, Korean, Russian) built on Next.js and consuming a headless WordPress API, with Mapbox maps and Auth0 authentication.",
    tags: ["Next.js 14", "TypeScript", "WordPress (headless)", "Tailwind CSS", "next-intl", "Mapbox", "Auth0"],
    link: { href: "https://danangfantasticity.com", label: "danangfantasticity.com" },
  },
  {
    name: "WhatsApp Portal",
    tagline: "WhatsApp Business API onboarding",
    description:
      "Self-service onboarding and management platform for the WhatsApp Business API, built for Rezonate as a Meta Business Support Partner. Handles WABA onboarding via Facebook Embedded Signup, phone-number management, partner tokens, and admin controls.",
    tags: ["NestJS", "React 19", "Prisma", "PostgreSQL", "Auth0", "Ant Design", "Docker / AKS"],
    private: true,
  },
  {
    name: "Rezonate v2",
    tagline: "Enterprise AI platform",
    description:
      "Enterprise-grade AI platform for assistant management, multi-channel communication (chat, calls, SMS, email), knowledge-base integration, and analytics — with multi-tenant deployments across Cloudflare Workers and Azure Kubernetes.",
    tags: ["Nuxt 4", "TypeScript", "Cloudflare Workers", "Drizzle ORM", "PostgreSQL", "Docker / AKS"],
    private: true,
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  {
    label: "Frontend",
    items: [
      "React",
      "Vue",
      "Next.js",
      "Nuxt.js",
      "TanStack Router/Query",
      "Zustand",
      "Tailwind CSS",
      "Recharts",
      "Ant Design",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "Drizzle ORM", "Prisma", "BullMQ", "REST APIs"],
  },
  { label: "Data & Infra", items: ["PostgreSQL", "Redis", "Docker", "Nginx", "Cloudflare Workers", "Azure (AKS)"] },
  {
    label: "Integrations & AI",
    items: ["GA4 Data API", "Meta Graph / Marketing API", "TikTok API", "WhatsApp Cloud API", "VAPI", "Auth0"],
  },
];
