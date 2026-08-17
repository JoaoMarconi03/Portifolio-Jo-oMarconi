import { education } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="formacao" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="04 · Formação" title="Educação" />
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.institution}
            className="rounded-lg border border-surface-border bg-surface p-6"
          >
            <h3 className="text-base font-semibold text-foreground">
              {item.institution}
            </h3>
            <p className="mt-1 text-sm text-accent">{item.degree}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              {item.period} · {item.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
