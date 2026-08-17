import { skillGroups } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import { TechBadge } from "@/components/TechIcon";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="01 · Skills" title="Tecnologias que uso" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-surface-border bg-surface p-5"
          >
            <h3 className="mb-3 font-mono text-sm text-accent">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <TechBadge name={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
