import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { profile } from "@/lib/data";
import { GitHubIcon, MailIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <div className="mx-auto max-w-5xl px-5">
          <hr className="border-line" />
        </div>
        <Experience />
        <div className="mx-auto max-w-5xl px-5">
          <hr className="border-line" />
        </div>
        <Projects />
        <div className="mx-auto max-w-5xl px-5">
          <hr className="border-line" />
        </div>
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-fg-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-fg"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-fg"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
