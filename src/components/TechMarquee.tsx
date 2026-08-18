import { marqueeTech } from "@/data/content";
import { getTechIcon } from "@/components/TechIcon";

export default function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="overflow-hidden border-y border-accent bg-accent py-3">
      <div className="animate-marquee flex w-max items-center gap-8 font-mono text-xs font-semibold tracking-wide text-background">
        {items.map((tech, index) => {
          const Icon = getTechIcon(tech);
          return (
            <span
              key={`${tech}-${index}`}
              className="flex items-center gap-8"
            >
              <span className="flex items-center gap-1.5">
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {tech.toUpperCase()}
              </span>
              <span aria-hidden="true">✦</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
