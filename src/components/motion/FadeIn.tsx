import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // seconds before animation starts
  duration?: number; // seconds
  y?: number; // vertical translate distance in px
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
}

/**
 * Standard fade-up on mount. Use everywhere  - heroes, sections, individual
 * paragraphs. The `delay` prop is the most-used: chain delays to stagger
 * elements without needing the StaggerChildren wrapper.
 *
 * Respects prefers-reduced-motion: if the user has motion sensitivity
 * enabled, the element appears immediately with no animation.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 16,
  className,
  as = "div",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1], // custom cubic-bezier  - feels confident, not bouncy
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
