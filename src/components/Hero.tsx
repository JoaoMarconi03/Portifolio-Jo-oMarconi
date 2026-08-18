import Image from "next/image";
import { TbCode, TbSchool, TbBulb, TbSearch } from "react-icons/tb";
import type { IconType } from "react-icons";
import { profile } from "@/data/content";

const highlightIcons: Record<string, IconType> = {
  code: TbCode,
  school: TbSchool,
  bulb: TbBulb,
  search: TbSearch,
};

const initials = profile.name
  .split(" ")
  .filter((part) => part.length > 0)
  .slice(0, 2)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

const orbitPositions = [
  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  "left-full top-1/2 -translate-x-1/2 -translate-y-1/2",
  "left-1/2 top-full -translate-x-1/2 -translate-y-1/2",
  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
];

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
          {profile.role}
        </h1>

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

      <div className="mx-auto w-full max-w-xs flex-1 px-11 md:max-w-sm md:px-8">
        <div className="relative mx-auto aspect-square w-full">
          {/* anéis orbitando, estilo "sistema solar" */}
          <div className="animate-orbit-ring-slow absolute inset-0 rounded-full border border-dashed border-accent/25" />
          <div className="animate-orbit-ring-fast absolute inset-6 rounded-full border border-dashed border-accent/15" />

          {/* rótulos orbitando ao redor da foto */}
          <div className="animate-orbit-labels absolute inset-[6%]">
            {profile.orbitFocus.map((label, index) => (
              <div
                key={label}
                className={`absolute flex items-center gap-1.5 ${orbitPositions[index % orbitPositions.length]}`}
              >
                <div className="animate-orbit-labels-counter flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="whitespace-nowrap rounded-full border border-surface-border bg-surface px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted">
                    {label.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* foto de perfil */}
          <div className="absolute inset-[14%] overflow-hidden rounded-full border-2 border-surface bg-surface shadow-2xl shadow-black/40 ring-1 ring-accent/30">
            {profile.photoUrl ? (
              <Image
                src={profile.photoUrl}
                alt={profile.name}
                fill
                sizes="(min-width: 768px) 320px, 260px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-soft to-surface">
                <span className="font-mono text-4xl font-semibold text-accent">
                  {initials}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
