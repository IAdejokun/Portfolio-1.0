import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("max-w-6xl mx-auto px-6 py-24 md:py-32", className)}
    >
      {children}
    </section>
  );
}
