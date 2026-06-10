"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      label: t.contact.email,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: t.contact.linkedin,
      value: "linkedin.com/in/gf0212",
      href: personalInfo.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: t.contact.github,
      value: "github.com/Gabrielrlf",
      href: personalInfo.github,
      icon: Github,
      external: true,
    },
  ];

  return (
    <AnimatedSection id="contact" className="section-padding bg-surface/50">
      <div className="container-custom">
        <SectionTitle
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-8 shadow-glass sm:p-12"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan/10 blur-[80px]" />

            <div className="relative grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {t.contact.getInTouch}
                </h3>
                <p className="mt-3 text-foreground-secondary leading-relaxed">
                  {t.contact.body}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                  <MapPin size={14} />
                  {t.personal.location}
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-accent-light hover:shadow-[0_0_60px_rgba(99,102,241,0.3)]"
                >
                  <Send size={16} />
                  {t.contact.sendEmail}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <div className="space-y-3">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-white/[0.02] p-4 transition-all hover:border-border-hover hover:bg-white/[0.06]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/[0.04] transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                        <Icon
                          size={18}
                          className="text-foreground-secondary transition-colors group-hover:text-accent-light"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted">
                          {link.label}
                        </p>
                        <p className="text-sm text-foreground">{link.value}</p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground group-hover:opacity-100"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
