import { TbBuildingStore, TbCalendarWeek } from "react-icons/tb";
import { projects, type Project } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";
import { TechBadge } from "@/components/TechIcon";

const previewIcons: Record<Project["previewIcon"], typeof TbBuildingStore> = {
  store: TbBuildingStore,
  courts: TbCalendarWeek,
};

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="02 · Projetos" title="O que eu construí" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const PreviewIcon = previewIcons[project.previewIcon];
          return (
            <article
              key={project.name}
              className="flex flex-col rounded-lg border border-surface-border bg-surface p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <span className="shrink-0 rounded-full border border-surface-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted">
                  {project.status}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <TechBadge name={tech} />
                  </li>
                ))}
              </ul>

              <div className="mb-5 flex flex-1 items-center justify-center rounded-md bg-foreground/95 py-10">
                <PreviewIcon className="h-12 w-12 text-background/70" />
              </div>

              <div className="flex gap-4 text-sm font-medium">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-surface-border underline-offset-4 hover:decoration-accent"
                  >
                    Código
                  </a>
                ) : (
                  <span className="text-muted/50">Código em breve</span>
                )}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline decoration-surface-border underline-offset-4 hover:decoration-accent"
                  >
                    Demo
                  </a>
                ) : (
                  <span className="text-muted/50">Demo em breve</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
