"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navHrefs, personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-sm font-medium text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white/[0.04] text-xs font-bold text-accent-light transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
            GF
          </span>
          <span className="hidden sm:inline">{personalInfo.name.split(" ")[0]}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navHrefs.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-foreground-secondary transition-colors hover:bg-white/[0.04] hover:text-foreground"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <LanguageSwitcher className="ml-1" />
          <a
            href="#contact"
            className="ml-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-glow"
          >
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/[0.04] text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-custom flex flex-col gap-1 px-4 py-4">
              {navHrefs.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-foreground-secondary transition-colors hover:bg-white/[0.04] hover:text-foreground"
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-white"
              >
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
