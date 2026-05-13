import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  y?: number;
  duration?: number;
  className?: string;
  /**
   * Margin to expand/shrink the trigger zone. Negative values mean the
   * element triggers earlier (before fully entering viewport).
   * Default: "-100px"  - element animates in when 100px from entering viewport.
   */
  rootMargin?: string;
}

/**
 * Fades and slides up when scrolled into view. Use for any below-the-fold
 * content. Animation fires once on first visibility (the `once: true` option)
 * so users don't see repeated animations when scrolling back up.
 */
export function ScrollReveal({
  children,
  y = 24,
  duration = 0.7,
  className,
  rootMargin = "-100px",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: rootMargin }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
