import React from "react";
import { Mail, FileText } from "lucide-react";
import { BIO } from "../../data/bio";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-bg-subtle mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-md">
            <p className="font-serif text-2xl text-ink-primary mb-3 text-balance">
              Building software that bridges research and practice.
            </p>
            <p className="text-sm text-ink-tertiary">
              {BIO.name} · {BIO.location}
            </p>
          </div>

          <div className="flex gap-2">
            <FooterLink href={BIO.links.github} label="GitHub">
              <GithubIcon className="w-4 h-4" />
            </FooterLink>
            <FooterLink href={BIO.links.linkedin} label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </FooterLink>
            <FooterLink href={BIO.links.cvView} label="View CV">
              <FileText className="w-4 h-4" />
            </FooterLink>
            <FooterLink href={BIO.links.email} label="Email">
              <Mail className="w-4 h-4" />
            </FooterLink>
          </div>
        </div>

        <p className="mt-12 pt-6 border-t border-bg-subtle text-xs text-ink-tertiary">
          © {new Date().getFullYear()} · Crafted with care.
        </p>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="w-10 h-10 rounded-full border border-bg-subtle hover:border-accent hover:text-accent text-ink-secondary grid place-items-center transition-colors"
    >
      {children}
    </a>
  );
}