"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Code2 } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          label={t.about.label}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <GlassCard className="lg:col-span-3" delay={0.1}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                <Code2 size={20} className="text-accent-light" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t.about.whoIAm}
              </h3>
            </div>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              {t.about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-2" delay={0.2}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10">
                <GraduationCap size={20} className="text-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t.about.education}
              </h3>
            </div>
            <ul className="space-y-4">
              {t.about.educationItems.map((item, i) => (
                <li
                  key={i}
                  className="border-l-2 border-border pl-4 transition-colors hover:border-accent/50"
                >
                  <p className="text-sm font-medium text-foreground">
                    {item.degree}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {item.status}
                  </p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-muted">
            {t.about.coreExpertise}
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {t.about.expertise.map((skill, i) => (
              <Badge key={i} variant={i % 3 === 0 ? "accent" : "default"}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
