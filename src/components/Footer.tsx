"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white/[0.04] font-mono text-xs font-bold text-accent-light">
            GF
          </span>
          <div>
            <p className="text-sm font-medium text-foreground">
              {personalInfo.name}
            </p>
            <p className="text-xs text-muted">
              {t.footer.role} · {t.personal.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-xs text-muted">
          © {year} {personalInfo.name.split(" ")[0]} Fonseca
        </p>
      </div>
    </footer>
  );
}
