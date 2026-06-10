"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { experienceCompanies, experienceTags } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="experience" className="section-padding bg-surface/50">
      <div className="container-custom">
        <SectionTitle
          label={t.experience.label}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-border to-transparent md:block" />

          <div className="space-y-8">
            {t.experience.jobs.map((job, index) => (
              <motion.div
                key={experienceCompanies[index]}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 md:pl-16"
              >
                <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:block">
                  <div className="absolute inset-1 rounded-full bg-accent/60" />
                </div>

                <div className="glass glass-hover rounded-2xl p-6 shadow-glass">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white/[0.04] md:hidden">
                        <Briefcase size={18} className="text-accent-light" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {experienceCompanies[index]}
                        </h3>
                        <p className="text-sm text-accent-light">{job.role}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-border bg-white/[0.04] px-3 py-1 font-mono text-xs text-muted">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground-secondary"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experienceTags[index].map((tag) => (
                      <Badge key={tag} variant="accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
