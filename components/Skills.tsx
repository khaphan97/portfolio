import { skills } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-24">
      <SectionHeading index="04" title="Technical skills" />
      <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {skills.map((group, index) => {
          // If there's an odd number of groups, let the last one span the full
          // width so the grid doesn't leave an empty orphan cell.
          const spanFull = index === skills.length - 1 && skills.length % 2 === 1;
          return (
            <StaggerItem key={group.label} className={`bg-surface/60 p-6 ${spanFull ? "sm:col-span-2" : ""}`}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
