import { ScrollReveal } from "../motion/ScrollReveal";
import { cn } from "../../lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Standard section header. Eyebrow (small uppercase label) + serif title +
 * optional description. Scroll-reveals into view.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn("mb-16", className)}>
      {eyebrow && (
        <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-display-md text-ink-primary text-balance mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-ink-secondary max-w-readable text-balance">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
