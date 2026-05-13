import { cn } from "../../lib/cn";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-ink-secondary border border-bg-subtle rounded",
        className,
      )}
    >
      {children}
    </span>
  );
}
