import { TbCode, TbSchool, TbBulb, TbSearch } from "react-icons/tb";
import type { IconType } from "react-icons";
import { profile } from "@/data/content";

const highlightIcons: Record<string, IconType> = {
  code: TbCode,
  school: TbSchool,
  bulb: TbBulb,
  search: TbSearch,
};

export default function Hero() {
  return (
    <section
      id="topo"
      className="mx-auto flex max-w-5xl flex-col items-start gap-12 px-6 py-24 md:flex-row md:items-center md:py-32"
    >
      <div className="flex-1">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3 py-1 font-mono text-xs text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Aberto a oportunidades júnior
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 font-mono text-lg text-accent">{profile.role}</p>

        <ul className="mt-6 max-w-xl space-y-3">
          {profile.heroHighlights.map((item) => {
            const Icon = highlightIcons[item.icon];
            return (
              <li
                key={item.text}
                className="flex items-center gap-3 text-sm text-muted"
              >
                <Icon className="h-4 w-4 shrink-0 text-accent" />
                {item.text}
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="rounded-md border border-surface-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
          >
            Contato
          </a>
        </div>
      </div>

      <div className="w-full max-w-sm flex-1 md:max-w-md">
        <div className="rounded-lg border border-surface-border bg-surface font-mono text-sm shadow-2xl shadow-black/40">
          <div className="flex items-center gap-1.5 border-b border-surface-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <pre className="overflow-x-auto px-4 py-4 leading-relaxed text-muted">
            <code>
              <span className="text-accent">const</span> dev = {"{"}
              {"\n"}
              {"  "}nome: <span className="text-foreground">
                &quot;João Victor Marconi&quot;
              </span>,{"\n"}
              {"  "}foco: [<span className="text-foreground">
                &quot;React&quot;
              </span>, <span className="text-foreground">
                &quot;Next.js&quot;
              </span>, <span className="text-foreground">
                &quot;Node.js&quot;
              </span>],{"\n"}
              {"  "}formação: <span className="text-foreground">
                &quot;Eng. Mecânica&quot;
              </span>,{"\n"}
              {"  "}usaIA: <span className="text-accent">true</span>,{"\n"}
              {"}"}
              {";"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
