/**
 * Project metadata. Both projects in this portfolio plus space for future
 * additions. The order in this array is the display order on the homepage grid.
 */

export type ProjectStatus = "live" | "in-progress" | "archived";

export interface ProjectLink {
  label: string;
  href: string;
  /** Primary CTA on the project card. Only one project should have this true at a time. */
  primary?: boolean;
}

export interface ProjectSection {
  heading: string;
  body: string; // supports multiple paragraphs separated by \n\n
}

export interface Project {
  slug: string; // URL slug, e.g. "smartcart"
  name: string; // display name
  tagline: string; // one-line summary on the card
  status: ProjectStatus;
  year: string; // e.g. "2026"
  accentColorClass: string; // Tailwind class, e.g. "text-smartcart"
  accentBgClass: string; // Tailwind class, e.g. "bg-smartcart"
  tags: string[]; // tech stack badges
  links: ProjectLink[];

  // Short pitch  - shown on the homepage card AND atop the deep-dive page
  shortPitch: string;

  // Deep-dive content  - only rendered on /projects/:slug routes
  longPitch: string; // 1–2 paragraphs, non-technical
  sections: ProjectSection[]; // architecture, what's interesting, etc.
}

export const PROJECTS: Project[] = [
  {
    slug: "smartcart",
    name: "SmartCart AI",
    tagline:
      "An e-commerce platform where the recommendation engine actually learns from you.",
    status: "live",
    year: "2025 - 2026",
    accentColorClass: "text-smartcart",
    accentBgClass: "bg-smartcart",
    tags: ["React", "FastAPI", "PyTorch", "PostgreSQL", "Deep RL"],
    links: [
      {
        label: "Try it live",
        href: "https://smartcart-frontend.vercel.app",
        primary: true,
      },
      {
        label: "View on GitHub",
        href: "https://github.com/iadejokun/smartcart",
      },
    ],
    shortPitch:
      "A working e-commerce demo built around a Deep Q-Network  - a reinforcement-learning agent that learns each visitor's preferences as they shop and adapts its recommendations in real time.",
    longPitch:
      "Most 'AI recommendation' demos serve a fixed model trained once and never updated. SmartCart closes the loop: every add-to-cart becomes a reward signal that retrains the agent, and a live dashboard compares the AI's performance against a classical collaborative-filtering baseline.\n\nThe entire pipeline  - from user action to recommendation update  - is observable. You can watch the agent learn during a single browsing session.",
    sections: [
      {
        heading: "What it demonstrates",
        body: "A production-shaped MVP that takes a Deep Reinforcement Learning research technique (DQN with experience replay) and applies it to a problem real shoppers experience: 'why am I being shown things I'm not interested in?' The recommendation engine adapts to your actual behaviour in real time, and the system measures whether it's working.",
      },
      {
        heading: "What's under the hood",
        body: "PyTorch DQN agent with online and target networks for stable training. PostgreSQL replay buffer so training data survives restarts and can be inspected. Item-based collaborative filtering as the A/B baseline. JWT-based authentication with refresh-token rotation. Background trainer that fires every N cart events or every 60 seconds, whichever first, with promotion gating that prevents model regressions.",
      },
      {
        heading: "Why it matters",
        body: "Recommendation systems are everywhere  - Amazon, Netflix, Spotify, TikTok  - but most demonstrations of 'AI recommendations' don't actually demonstrate learning. They show a snapshot. SmartCart shows the process: the agent starts random, observes behaviour, and converges on preferences over the course of an interview demo.",
      },
    ],
  },
  {
    slug: "securevault",
    name: "SecureVault",
    tagline:
      "A password manager designed for systems that can't update their own security.",
    status: "live",
    year: "2025 - 2026",
    accentColorClass: "text-securevault",
    accentBgClass: "bg-securevault",
    tags: ["Angular", "FastAPI", "PostgreSQL", "Zero Trust", "NIST 800-207"],
    links: [
      {
        label: "Try it live",
        href: "https://securevaultte.netlify.app",
        primary: true,
      },
      {
        label: "View on GitHub",
        href: "https://github.com/iadejokun/securevault",
      },
    ],
    shortPitch:
      "A Zero Trust API key manager that brings modern security principles to legacy systems  - including IoT devices that can't have their firmware updated.",
    longPitch:
      "Older industrial and IoT devices were built when the internet was friendlier. They speak insecure protocols, can't accept security patches, and yet sit on networks alongside everything else. SecureVault demonstrates a way to protect them without replacing them.\n\nThe project implements NIST 800-207 Zero Trust principles  - verify every request, trust no boundary  - and applies them through a three-zone API microsegmentation model. Legacy devices stay legacy; their access gets brokered.",
    sections: [
      {
        heading: "What it demonstrates",
        body: "Modern security architectures (Zero Trust, microsegmentation) aren't only for new systems. They can be retrofitted around existing infrastructure that can't otherwise be modified  - which is most industrial computing and a growing fraction of IoT.",
      },
      {
        heading: "What's under the hood",
        body: "Three-zone API microsegmentation enforced at the application layer: insecure-but-monitored, authenticated-and-secure, and replay-attack-detection. Aligned with NIST SP 800-207. Mitigates three of the OWASP IoT Top 10 vulnerabilities. PostgreSQL-backed audit log for every request, indexed for forensic analysis. Synthetic traffic simulator for security testing in three modes (insecure, secure, attack).",
      },
      {
        heading: "Why it matters",
        body: "Every year, hospitals, factories, and utilities are breached through devices that should have been replaced a decade ago but weren't because replacement was too expensive. SecureVault is a research-grade implementation of one practical answer: protect the perimeter and the traffic, not just the device.",
      },
    ],
  },
];
