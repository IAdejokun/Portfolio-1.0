import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { BIO } from "../../data/bio";
import { Button } from "../ui/Button";

/**
 * Hero — the first 100vh of the page.
 *
 * CTA hierarchy (intentional, do not flatten):
 *   - Primary: "See the work" (dominant — get them to the projects)
 *   - Secondary: "Get in touch" (parallel CTA)
 *   - Tertiary: "View CV" (ghost link, visually quieter)
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Split the hook into words for individual staggered animation
  const words = BIO.hook.split(" ");

  // Timing convenience — when each subsequent block animates in
  const headingDoneAt = 0.3 + words.length * 0.08;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center">
      <BackgroundGlyph />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <h1 className="font-serif text-display-xl text-ink-primary mb-8 max-w-4xl text-balance">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.3 + i * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: headingDoneAt + 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-ink-secondary max-w-readable mb-12 text-balance"
        >
          {BIO.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: headingDoneAt + 0.45, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Button href="#projects">See the work</Button>
          <Button href={BIO.links.email} variant="secondary">
            Get in touch
          </Button>
          <Button href={BIO.links.cvView} variant="ghost" external>
            View CV
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-ink-tertiary flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function BackgroundGlyph() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0.05 } : { opacity: 0, scale: 1.05 }}
      animate={{ opacity: 0.05, scale: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
      aria-hidden="true"
    >
      <span className="font-serif text-[40vw] leading-none text-ink-primary block">
        I
      </span>
    </motion.div>
  );
}