import { StaggerChildren, StaggerItem } from "../motion/StaggerChildren";
import { ProjectCard } from "./ProjectCard";
import { Section } from "../sections/Section";
import { SectionHeading } from "../sections/SectionHeading";
import { PROJECTS } from "../../data/projects";

export function ProjectGrid() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Two projects, one operating thesis."
        description="Both research-derived, both shipped end-to-end. Each demonstrates how techniques from academic literature translate into software people can actually use."
      />

      <StaggerChildren
        className="grid md:grid-cols-2 gap-6"
        staggerDelay={0.15}
      >
        {PROJECTS.map((project, i) => (
          <StaggerItem key={project.slug} className="h-full">
            <ProjectCard project={project} index={i} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
