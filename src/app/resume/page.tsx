import type { Metadata } from "next";
import { ResumeActions } from "@/components/ResumeActions";
import {
  personalInfo,
  about,
  experience,
  education,
  techStack,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume — Gabriel Fonseca",
  robots: { index: false },
};

export default function ResumePage() {
  const allTech = Object.values(techStack).flat();

  return (
    <div className="min-h-screen bg-white text-gray-900 print:bg-white">
      <ResumeActions />

      <article className="mx-auto max-w-3xl px-8 py-12 print:px-0 print:py-0">
        <header className="border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
          <p className="mt-1 text-lg text-gray-600">
            {personalInfo.shortHeadline}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {personalInfo.location} · {personalInfo.email} ·{" "}
            {personalInfo.linkedin.replace("https://", "")}
          </p>
        </header>

        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Summary
          </h2>
          <div className="mt-2 space-y-2 text-sm leading-relaxed text-gray-700">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Experience
          </h2>
          <div className="mt-3 space-y-5">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold">{job.company}</h3>
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
            Education
          </h2>
          <ul className="mt-2 space-y-1 text-sm text-gray-700">
            {education.map((e, i) => (
              <li key={i}>
                {e.degree} — <span className="text-gray-500">{e.status}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600">
            Technologies
          </h2>
          <p className="mt-2 text-sm text-gray-700">{allTech.join(" · ")}</p>
        </section>
      </article>
    </div>
  );
}
