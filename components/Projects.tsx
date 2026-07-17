import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";
import { ArrowUpRightIcon, LockIcon } from "./icons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors hover:border-accent/40 hover:bg-surface">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-0.5 font-mono text-xs text-accent">{project.tagline}</p>
        </div>

        {project.link ? (
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-fg-muted transition-colors group-hover:border-accent group-hover:text-accent"
          >
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        ) : (
          <span
            title="Private / proprietary repository"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] text-fg-muted"
          >
            <LockIcon className="h-3 w-3" />
            Private
          </span>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-fg-muted">{project.description}</p>

      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex w-fit items-center gap-1 font-mono text-xs text-accent transition-colors hover:underline"
        >
          {project.link.label}
          <ArrowUpRightIcon className="h-3 w-3" />
        </a>
      )}

      <ul className="mt-auto flex flex-wrap gap-2 pt-5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-fg-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-24">
      <SectionHeading
        index="03"
        title="Selected projects"
        subtitle="A mix of client and product work — analytics platforms, multi-language sites, and API-integration tooling. Several repositories are private or proprietary."
      />
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.name} className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
