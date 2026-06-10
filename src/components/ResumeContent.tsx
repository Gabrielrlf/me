"use client";

import { experienceCompanies, personalInfo, techStack } from "@/data/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

export function ResumeContent() {
  const { t } = useLanguage();
  const allTech = Object.values(techStack).flat();

  return (
    <article className="mx-auto max-w-3xl px-8 py-12 print:px-0 print:py-0">
      <header className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
        <p className="mt-1 text-lg text-gray-600">{t.personal.shortHeadline}</p>
        <p className="mt-2 text-sm text-gray-500">
          {t.personal.location} · {personalInfo.email} ·{" "}
          {personalInfo.linkedin.replace("https://", "")}
        </p>
      </header>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600">
          {t.resume.summary}
        </h2>
        <div className="mt-2 space-y-2 text-sm leading-relaxed text-gray-700">
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600">
          {t.resume.experience}
        </h2>
        <div className="mt-3 space-y-5">
          {t.experience.jobs.map((job, index) => (
            <div key={experienceCompanies[index]}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">{experienceCompanies[index]}</h3>
                <span className="text-xs text-gray-500">{job.period}</span>
              </div>
              <p className="text-sm text-gray-600">{job.role}</p>
              <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-sm text-gray-700">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600">
          {t.resume.education}
        </h2>
        <ul className="mt-2 space-y-1 text-sm text-gray-700">
          {t.about.educationItems.map((e, i) => (
            <li key={i}>
              {e.degree} — <span className="text-gray-500">{e.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600">
          {t.resume.technologies}
        </h2>
        <p className="mt-2 text-sm text-gray-700">{allTech.join(" · ")}</p>
      </section>
    </article>
  );
}
