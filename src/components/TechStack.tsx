"use client";

import { motion } from "framer-motion";
import {
  Server,
  Monitor,
  Cloud,
  MessageSquare,
  Database,
  Sparkles,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { techStack } from "@/data/portfolio";

const categories = [
  { key: "backend" as const, label: "Backend", icon: Server, color: "accent" },
  { key: "frontend" as const, label: "Frontend", icon: Monitor, color: "cyan" },
  { key: "cloud" as const, label: "Cloud & DevOps", icon: Cloud, color: "accent" },
  {
    key: "messaging" as const,
    label: "Messaging",
    icon: MessageSquare,
    color: "cyan",
  },
  {
    key: "databases" as const,
    label: "Databases",
    icon: Database,
    color: "accent",
  },
  { key: "ai" as const, label: "AI & Agents", icon: Sparkles, color: "cyan" },
];

export function TechStack() {
  return (
    <AnimatedSection id="tech-stack" className="section-padding bg-surface/50">
      <div className="container-custom">
        <SectionTitle
          label="Tech Stack"
          title="Tools & technologies I work with"
          description="A curated stack for building production-grade cloud-native and AI-augmented systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, catIndex) => {
            const Icon = category.icon;
            const technologies = techStack[category.key];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className="glass glass-hover rounded-2xl p-6 shadow-glass"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                      category.color === "accent"
                        ? "border-accent/30 bg-accent/10"
                        : "border-cyan/30 bg-cyan/10"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={
                        category.color === "accent"
                          ? "text-accent-light"
                          : "text-cyan"
                      }
                    />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant={
                        category.color === "accent" ? "accent" : "cyan"
                      }
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
