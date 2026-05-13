import { FadeIn } from "../components/motion/FadeIn";
import { PageTransition } from "../components/motion/PageTransition";
import { Button } from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-widest text-accent mb-6">
              404 · Not found
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display-md text-ink-primary mb-6 text-balance">
              This page wandered off.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-ink-secondary mb-8">
              The link you followed might be broken, or the page may have moved.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Button href="/">Back to the homepage</Button>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
