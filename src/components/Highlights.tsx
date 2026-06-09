"use client";

import {
  Shield,
  Zap,
  Sparkles,
  Boxes,
  Server,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { highlights } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  zap: Zap,
  sparkles: Sparkles,
  boxes: Boxes,
  server: Server,
};

export function Highlights() {
  return (
    <AnimatedSection id="highlights" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          label="Highlights"
          title="Featured engineering impact"
          description="Key areas where I've delivered measurable value across cloud, fintech, and AI-driven engineering."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <GlassCard
                key={item.title}
                delay={index * 0.08}
                className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-white/[0.08] to-transparent">
                    <Icon size={20} className="text-accent-light" />
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent-light">
                    {item.metric}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {item.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
