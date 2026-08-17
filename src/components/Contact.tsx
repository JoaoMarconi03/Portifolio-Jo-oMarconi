import { profile } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="05 · Contato" title="Vamos conversar" />
      <div className="rounded-lg border border-surface-border bg-surface p-8 sm:p-10">
        <p className="max-w-xl text-base leading-relaxed text-muted">
          Estou em busca da minha primeira oportunidade como desenvolvedor.
          Se você tem uma vaga júnior ou quer trocar uma ideia, me chama.
        </p>
        <p className="mt-6 font-mono text-sm text-foreground">
          <span className="text-muted">email: </span>
          <span className="select-all">{profile.email}</span>
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-surface-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-surface-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
