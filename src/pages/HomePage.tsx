import { Hero } from "../components/hero/Hero";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { AboutBio } from "../components/sections/AboutBio";
import { ContactCTA } from "../components/sections/ContactCTA";
import { PageTransition } from "../components/motion/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <ProjectGrid />
      <AboutBio />
      <ContactCTA />
    </PageTransition>
  );
}
