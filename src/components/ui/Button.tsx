import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
}

/**
 * Polymorphic button  - renders as <a> if href is provided, otherwise <button>.
 * Three variants:
 *  - primary: cream-on-dark, the dominant CTA
 *  - secondary: outlined, for parallel CTAs
 *  - ghost: text-only, for tertiary links
 *
 * External links get an ArrowUpRight icon and proper rel attributes.
 */
export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const base = cn(
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200",
    {
      "bg-ink-primary text-bg-base hover:bg-accent": variant === "primary",
      "border border-ink-secondary/40 text-ink-primary hover:bg-bg-surface hover:border-ink-secondary":
        variant === "secondary",
      "text-ink-secondary hover:text-ink-primary": variant === "ghost",
    },
    className,
  );

  const content = (
    <>
      {children}
      {external && <ArrowUpRight className="w-3.5 h-3.5" />}
    </>
  );

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { type: "spring" as const, stiffness: 400, damping: 25 },
      };

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={base}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={base} {...motionProps}>
      {content}
    </motion.button>
  );
}
