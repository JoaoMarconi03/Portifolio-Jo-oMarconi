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
              <div className="mb-4 flex flex-col items-start gap-2">
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

              <div className="mb-5 flex-1 overflow-hidden rounded-md border border-surface-border bg-foreground/95">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[16/10] w-full overflow-hidden"
                    aria-label={`Abrir demo de ${project.name}`}
                  >
                    <iframe
                      src={project.liveUrl}
                      title={`Prévia de ${project.name}`}
                      loading="lazy"
                      tabIndex={-1}
                      scrolling="no"
                      className="pointer-events-none h-[400%] w-[400%] origin-top-left scale-[0.25] border-0"
                    />
                  </a>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center">
                    <PreviewIcon className="h-12 w-12 text-background/70" />
                  </div>
                )}
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

              {project.demoCredentials ? (
                <p className="mt-3 rounded-md border border-surface-border bg-background px-3 py-2 font-mono text-xs text-muted">
                  Login demo: {project.demoCredentials.email} · Senha:{" "}
                  {project.demoCredentials.password}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
