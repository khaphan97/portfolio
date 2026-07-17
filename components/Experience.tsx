import { experience, education } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-24">
      <SectionHeading index="02" title="Experience" />

      <div className="space-y-8">
        {experience.map((job) => (
          <article
            key={job.org}
            className="relative rounded-2xl border border-line bg-surface/40 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight">
                {job.role} <span className="text-fg-muted">·</span>{" "}
                <span className="text-accent">{job.org}</span>
              </h3>
              <span className="font-mono text-xs text-fg-muted">{job.meta}</span>
            </div>
            <p className="mt-1 text-sm text-fg-muted">{job.location}</p>

            <ul className="mt-5 space-y-3">
              {job.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="mt-12 mb-5 font-mono text-xs uppercase tracking-wider text-fg-muted">Education</h3>
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.org}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl border border-line bg-surface/40 p-6"
          >
            <div>
              <h4 className="font-semibold tracking-tight">{edu.org}</h4>
              <p className="mt-1 text-sm text-fg-muted">{edu.detail}</p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-fg-muted">{edu.meta}</span>
              <p className="text-xs text-fg-muted">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
