import { profile, stats } from "@/lib/data";
import { GitHubIcon, MailIcon, MapPinIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-44 left-1/2 h-80 w-[46rem] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs text-fg-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new opportunities
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-3 font-mono text-lg text-accent sm:text-xl">{profile.title}</p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          I build and ship end-to-end web products — from modern React &amp; Vue SPAs to Node.js and NestJS backends
          and the data pipelines behind them.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-4 w-4 text-accent" />
            {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <GitHubIcon className="h-4 w-4" />
            {profile.githubHandle}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-8 sm:max-w-lg">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-semibold text-fg sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-fg-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
