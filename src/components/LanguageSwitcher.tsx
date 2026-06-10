"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localeLabels, localeNames, locales, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "compact" | "full";
}

export function LanguageSwitcher({
  className,
  variant = "compact",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  if (variant === "full") {
    return (
      <div className={cn("flex gap-1 rounded-lg border border-border bg-white/[0.04] p-1", className)}>
        {locales.map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => handleSelect(loc)}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
              locale === loc
                ? "bg-accent text-white shadow-glow"
                : "text-foreground-secondary hover:bg-white/[0.06] hover:text-foreground"
            )}
          >
            {localeLabels[loc]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-9 items-center gap-1.5 rounded-lg border border-border bg-white/[0.04] px-2.5 text-sm text-foreground-secondary transition-all hover:border-border-hover hover:bg-white/[0.08] hover:text-foreground"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe size={14} />
        <span className="font-mono text-xs font-medium">{localeLabels[locale]}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-border bg-surface-elevated/95 p-1 shadow-glass backdrop-blur-xl"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => handleSelect(loc)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                  locale === loc
                    ? "bg-accent/15 text-accent-light"
                    : "text-foreground-secondary hover:bg-white/[0.06] hover:text-foreground"
                )}
              >
                <span>
                  <span className="font-mono text-xs font-semibold">
                    {localeLabels[loc]}
                  </span>
                  <span className="ml-2 text-xs text-muted">
                    {localeNames[loc]}
                  </span>
                </span>
                {locale === loc && <Check size={14} className="text-accent-light" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
