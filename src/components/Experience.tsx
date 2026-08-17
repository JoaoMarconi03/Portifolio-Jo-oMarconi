import { experience } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="03 · Experiência" title="Onde já atuei" />
      <div className="space-y-8">
        {experience.map((item) => (
          <div
            key={item.company}
            className="rounded-lg border border-surface-border bg-surface p-6"
          >
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.company}
                </h3>
                <p className="text-sm text-accent">{item.role}</p>
              </div>
              <p className="font-mono text-xs text-muted">
                {item.period} · {item.location}
              </p>
            </div>
            <ul className="space-y-2">
              {item.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
