"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Linkedin,
  MapPin,
  Github,
  Mail,
} from "lucide-react";
import { heroTechBadges, personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan/10 blur-[100px] animate-pulse-glow" />

      <div className="container-custom relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-4xl flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-foreground-secondary">
              {t.personal.availability}
            </span>
            <span className="hidden items-center gap-1 text-sm text-muted sm:inline-flex">
              <MapPin size={12} />
              {t.personal.location}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
          >
            <span className="text-foreground">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-3xl text-balance text-lg font-medium text-foreground-secondary sm:text-xl lg:text-2xl"
          >
            {t.personal.shortHeadline}
            <span className="gradient-text">{t.personal.headlineSuffix}</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.personal.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap items-center justify-center gap-2"
          >
            {heroTechBadges.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-foreground-secondary"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-accent-light hover:shadow-[0_0_60px_rgba(99,102,241,0.3)]"
            >
              {t.hero.contactMe}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-border-hover hover:bg-white/[0.08]"
            >
              <Download size={16} />
              {t.hero.downloadResume}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-border-hover hover:bg-white/[0.08]"
            >
              <Linkedin size={16} />
              {t.hero.viewLinkedIn}
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">
              {t.hero.scroll}
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-muted to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
