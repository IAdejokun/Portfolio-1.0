import { ScrollReveal } from "../motion/ScrollReveal";
import { Button } from "../ui/Button";
import { BIO } from "../../data/bio";

export function ContactCTA() {
  return (
    <section className="border-t border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-40">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">
              Get in touch
            </p>
            <h2 className="font-serif text-display-lg text-ink-primary mb-8 text-balance">
              Working on something where research and practice meet?
            </h2>
            <p className="text-lg text-ink-secondary mb-12 text-balance">
              I'm open to full-time roles, research collaborations, and
              interesting consulting work. Lagos-based, remote-friendly,
              currently finishing my MSc.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href={BIO.links.email}>{BIO.email}</Button>
              <Button href={BIO.links.linkedin} variant="secondary" external>
                LinkedIn
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
