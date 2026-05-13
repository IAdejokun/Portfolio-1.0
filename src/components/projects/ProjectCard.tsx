import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { HoverCard } from "../motion/HoverCard";
import { Tag } from "../ui/Tag";
import type { Project } from "../../data/projects";
import { cn } from "../../lib/cn";

interface ProjectCardProps {
  project: Project;
  index: number; // for staggered animation orchestration
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <HoverCard className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="group block bg-bg-surface border border-bg-subtle hover:border-accent/40 rounded-2xl p-8 transition-colors duration-300 h-full"
      >
        {/* Accent strip  - distinguishes projects visually */}
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={shouldReduceMotion ? { width: "3rem" } : { width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.2 + index * 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn("h-px", project.accentBgClass)}
          />
          <div className="flex items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-xs font-mono text-ink-tertiary">
              {project.year}
            </span>
          </div>
        </div>

        <h3
          className={cn(
            "font-serif text-3xl md:text-4xl mb-3 text-ink-primary group-hover:text-accent transition-colors",
            project.accentColorClass + "/0",
          )}
        >
          {project.name}
        </h3>

        <p className="text-ink-secondary mb-6 leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-bg-subtle">
          <span className="text-sm font-medium text-ink-primary">
            Read the breakdown
          </span>
          <ArrowUpRight className="w-4 h-4 text-ink-secondary group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
      </Link>
    </HoverCard>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles = {
    live: "bg-smartcart/10 text-smartcart border-smartcart/30",
    "in-progress": "bg-accent/10 text-accent border-accent/30",
    archived: "bg-bg-subtle text-ink-tertiary border-bg-subtle",
  };

  const labels = {
    live: "● Live",
    "in-progress": "○ Building",
    archived: "Archived",
  };

  return (
    <span
      className={cn(
        "text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border",
        styles[status],
      )}
    >
      {labels[status]}
    </span>
  );
}
