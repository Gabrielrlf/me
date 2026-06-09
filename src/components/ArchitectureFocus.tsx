"use client";

import {
  Cloud,
  Workflow,
  Network,
  Brain,
  Layers,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { architectureFocus } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  workflow: Workflow,
  network: Network,
  brain: Brain,
  layers: Layers,
  activity: Activity,
};

export function ArchitectureFocus() {
  return (
    <AnimatedSection id="expertise" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          label="Architecture & Engineering"
          title="Technical expertise that scales"
          description="Deep specialization in the patterns and platforms that power modern distributed systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {architectureFocus.map((area, index) => {
            const Icon = iconMap[area.icon];
            return (
              <GlassCard key={area.title} delay={index * 0.08}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-br from-accent/20 to-transparent">
                  <Icon size={22} className="text-accent-light" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {area.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
