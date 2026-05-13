import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "../motion/ScrollReveal";
import { StaggerChildren, StaggerItem } from "../motion/StaggerChildren";
import { BIO } from "../../data/bio";

export function AboutBio() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Bridging research and practice."
        description="I move between two worlds - applied research and shipped product - and I think most interesting software lives at their intersection."
      />

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <ScrollReveal>
          <div className="space-y-4 text-ink-secondary leading-relaxed">
            <p>
              Five+ years building production web applications across enterprise
              contexts, translating Figma designs into Angular and React UIs,
              integrating REST APIs, shipping incrementally on real timelines.
            </p>
            <p>
              Now finishing an MSc in Computer Science where I've gone deep on
              two specialisations: applied AI/ML, specifically Deep
              Reinforcement Learning, and cybersecurity research focused on
              Zero Trust Architecture for legacy systems.
            </p>
            <p>
              The projects on this page are where those threads come together:
              production-shaped software that demonstrates research-grade
              techniques.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StaggerChildren className="space-y-6" staggerDelay={0.06}>
            {BIO.skills.map((group) => (
              <StaggerItem key={group.domain}>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
                    {group.domain}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm text-ink-primary border border-bg-subtle hover:border-ink-secondary/40 rounded-full px-3 py-1 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </ScrollReveal>
      </div>
    </Section>
  );
}
