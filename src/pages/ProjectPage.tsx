import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PROJECTS, type Project } from "../data/projects";
import { PageTransition } from "../components/motion/PageTransition";
import { FadeIn } from "../components/motion/FadeIn";
import { ScrollReveal } from "../components/motion/ScrollReveal";
import { Button } from "../components/ui/Button";
import { Tag } from "../components/ui/Tag";
import { cn } from "../lib/cn";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageTransition>
      <ProjectHero project={project} />
      <ProjectBody project={project} />
      <ProjectFooter project={project} />
    </PageTransition>
  );
}

function ProjectHero({ project }: { project: Project }) {
  const primaryLink = project.links.find((l) => l.primary);
  const secondaryLinks = project.links.filter((l) => !l.primary);

  return (
    <section className="relative border-b border-bg-subtle">
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <FadeIn>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-tertiary hover:text-ink-primary mb-12 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to all work
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <span
              className={cn(
                "text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border",
                project.accentColorClass,
                project.accentBgClass + "/10",
                "border-current/30",
              )}
            >
              {project.status === "live"
                ? "● Live"
                : project.status === "in-progress"
                  ? "○ Building"
                  : "Archived"}
            </span>
            <span className="text-xs font-mono text-ink-tertiary">
              {project.year}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1
            className={cn(
              "font-serif text-display-lg mb-6 text-balance",
              project.accentColorClass,
            )}
          >
            {project.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl font-serif text-ink-primary mb-12 max-w-readable leading-snug text-balance">
            {project.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-3 mb-10">
            {primaryLink && (
              <Button href={primaryLink.href} external>
                {primaryLink.label}
              </Button>
            )}
            {secondaryLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                variant="secondary"
                external
              >
                {link.label}
              </Button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Decorative accent strip at the bottom */}
      <FadeIn delay={0.5}>
        <div className={cn("h-1 w-32 mx-auto", project.accentBgClass)} />
      </FadeIn>
    </section>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <ScrollReveal>
        <p className="text-lg md:text-xl text-ink-secondary leading-relaxed mb-20 whitespace-pre-line text-balance">
          {project.longPitch}
        </p>
      </ScrollReveal>

      <div className="space-y-16">
        {project.sections.map((section) => (
          <ScrollReveal key={section.heading}>
            <h2 className="font-serif text-display-md text-ink-primary mb-6 text-balance">
              {section.heading}
            </h2>
            <p className="text-ink-secondary leading-relaxed whitespace-pre-line">
              {section.body}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function ProjectFooter({ project }: { project: Project }) {
  // Find the "other" project for the recommendation at the bottom
  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug);
  const next = otherProjects[0];

  return (
    <section className="border-t border-bg-subtle">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <ScrollReveal>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
            Continue exploring
          </p>
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="group flex items-center justify-between py-6 border-b border-bg-subtle hover:border-accent/40 transition-colors"
            >
              <div>
                <p className="text-xs text-ink-tertiary mb-2">Next project</p>
                <h3
                  className={cn(
                    "font-serif text-3xl text-ink-primary group-hover:text-accent transition-colors",
                  )}
                >
                  {next.name}
                </h3>
              </div>
              <ArrowLeft className="w-5 h-5 rotate-180 text-ink-secondary group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
          ) : (
            <Link
              to="/"
              className="text-ink-secondary hover:text-ink-primary transition-colors"
            >
              ← Back to all work
            </Link>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
