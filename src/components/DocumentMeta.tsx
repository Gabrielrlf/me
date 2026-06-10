"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function DocumentMeta() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", t.meta.description);
    }
  }, [t]);

  return null;
}
