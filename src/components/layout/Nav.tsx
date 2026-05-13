import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 backdrop-blur-md bg-bg-base/70 border-b border-bg-subtle"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-lg font-medium tracking-tight text-ink-primary hover:text-accent transition-colors"
        >
          ibukunoluwa<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-1">
          <NavItem to="#projects">Work</NavItem>
          <NavItem to="#about">About</NavItem>
          <a
            href="mailto:adejokunibk@gmail.com"
            className="ml-2 text-sm font-medium px-4 py-2 rounded-full bg-ink-primary text-bg-base hover:bg-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

function NavItem({ to, end, children }: { to: string; end?: boolean; children: React.ReactNode }) {
  if (to.startsWith("#")) {
    return (
      <a
        href={to}
        className="text-sm font-medium px-3 py-2 text-ink-secondary hover:text-ink-primary transition-colors"
      >
        {children}
      </a>
    );
  }
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn(
          "text-sm font-medium px-3 py-2 transition-colors",
          isActive ? "text-ink-primary" : "text-ink-secondary hover:text-ink-primary"
        )
      }
    >
      {children}
    </NavLink>
  );
}
