import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-24">
      <SectionHeading index="01" title="About" />
      <Stagger className="grid gap-10 md:grid-cols-3">
        <StaggerItem className="md:col-span-2">
          <p className="text-base leading-relaxed text-fg-muted">{profile.summary}</p>
        </StaggerItem>
        <StaggerItem className="rounded-2xl border border-line bg-surface/40 p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-fg-muted">What I do</h3>
          <ul className="mt-4 space-y-3 text-sm text-fg">
            <li className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              End-to-end product development, frontend to backend
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Third-party API &amp; platform integrations
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Analytics-grade data platforms &amp; pipelines
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Working with clients &amp; cross-cultural teams
            </li>
          </ul>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
