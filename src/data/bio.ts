/**
 * Bio content — the About section content. Edited as data so you can iterate
 * on phrasing without touching JSX.
 */

// CV file ID from Google Drive — extracted once, used in two URL forms below.
// To update the CV: replace the file in Drive (keep same file ID), or upload
// a new version and update this constant.
const CV_FILE_ID = "1SUTWKHtETV-Z-qUVrNEJWsAs7LVZIxgY";

export const BIO = {
  name: "Adejokun Ibukunoluwa",
  location: "Lagos, Nigeria",
  email: "adejokunibk@gmail.com",
  phone: "+234 (0) 8076 259 143",

  // The hero claim — one sentence that earns attention
  hook: "Full-stack developer building software that bridges research and practice.",

  // Mid-paragraph that explains the hook
  intro:
    "Five+ years across enterprise web engineering, now specialising in applied AI/ML and cybersecurity research. I take techniques that usually live in academic papers - Deep Reinforcement Learning, Zero Trust Architecture - and ship them as working software that real people can use.",

  // Skills, organised by domain — surfaces on the About section
  skills: [
    {
      domain: "Frontend",
      items: ["React", "TypeScript", "Angular", "Tailwind", "Framer Motion"],
    },
    {
      domain: "Backend",
      items: ["Python", "FastAPI", "Django", "SQLAlchemy", "REST APIs"],
    },
    {
      domain: "AI / ML",
      items: [
        "PyTorch",
        "Deep Reinforcement Learning",
        "DQN",
        "NumPy",
        "Pandas",
      ],
    },
    {
      domain: "Security",
      items: [
        "Zero Trust Architecture",
        "JWT Auth",
        "OWASP IoT Top 10",
        "NIST 800-207",
      ],
    },
    {
      domain: "Infrastructure",
      items: ["PostgreSQL", "Render", "Vercel", "GitHub Actions", "Alembic"],
    },
  ],

  // Social/contact links
  links: {
    github: "https://github.com/IAdejokun",
    linkedin: "https://www.linkedin.com/in/adejokun-ibukunoluwa/",
    email: "mailto:adejokunibk@gmail.com",
    // View link opens Drive's viewer — best UX for casual reading
    cvView: `https://drive.google.com/file/d/${CV_FILE_ID}/view`,
    // Direct-download link forces a file save dialog — keep for future use
    cvDownload: `https://drive.google.com/uc?export=download&id=${CV_FILE_ID}`,
  },
};
