import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
  SiJest,
  SiPython,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

type TechMeta = {
  icon: IconType;
  color: string;
};

const techMap: Record<string, TechMeta> = {
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss, color: "#1572b6" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e" },
  Prisma: { icon: SiPrisma, color: "#ffffff" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Git: { icon: SiGit, color: "#f05032" },
  GitHub: { icon: SiGithub, color: "#ffffff" },
  Jest: { icon: SiJest, color: "#c21325" },
  Python: { icon: SiPython, color: "#3776ab" },
  "APIs REST": { icon: TbApi, color: "#2dd4bf" },
};

export function TechBadge({ name }: { name: string }) {
  const meta = techMap[name];
  const Icon = meta?.icon;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-surface-border bg-background px-2.5 py-1 text-xs text-muted">
      {Icon && <Icon style={{ color: meta.color }} className="h-3.5 w-3.5" />}
      {name}
    </span>
  );
}
