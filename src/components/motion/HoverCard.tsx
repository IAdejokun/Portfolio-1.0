import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  lift?: number; // px to translate up on hover
}

/**
 * Subtle lift-on-hover effect with a spring physics curve.
 * Use on clickable cards. The spring feels alive without being bouncy.
 */
export function HoverCard({ children, className, lift = -6 }: HoverCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: lift }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
