import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";
import { GitHubIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/50 p-8 sm:p-12">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative">
          <SectionHeading
            index="05"
            title="Let's build something"
            subtitle="Open to full-stack and frontend roles, freelance work, and interesting collaborations. The fastest way to reach me is email."
          />

          <Stagger className="flex flex-wrap gap-3">
            <StaggerItem>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                <MailIcon className="h-4 w-4" />
                {profile.email}
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
