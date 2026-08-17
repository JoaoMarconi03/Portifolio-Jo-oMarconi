export const profile = {
  name: "João Victor Marconi",
  role: "Desenvolvedor Full-Stack Júnior",
  location: "Sorocaba, SP",
  email: "jvmarconi03@gmail.com",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-marconi-48a351231/",
  github: "https://github.com/JoaoMarconi03",
  heroHighlights: [
    { icon: "code", text: "Desenvolvendo interfaces e APIs com React, Next.js e Node.js" },
    { icon: "school", text: "Cursando Engenharia Mecânica (10º semestre) na UNISO" },
    { icon: "bulb", text: "Interesse em desenvolvimento front-end e back-end" },
    { icon: "search", text: "Buscando minha primeira oportunidade como desenvolvedor" },
  ] as const,
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "APIs REST"],
  },
  {
    title: "Banco de Dados",
    items: ["PostgreSQL", "SQL", "Supabase", "Prisma"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Docker", "Jest", "Python"],
  },
  {
    title: "Power Platform & Dados",
    items: ["Power Apps", "Power Automate", "Power BI", "Dataverse"],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: string;
  previewIcon: "store" | "courts";
  githubUrl?: string;
  liveUrl?: string;
  demoCredentials?: { email: string; password: string };
};

export const projects: Project[] = [
  {
    name: "Gerenciamento de Lojas",
    description:
      "SaaS para gestão de lojas — cadastro, estoque e operação centralizados em um só lugar.",
    stack: ["TypeScript", "PostgreSQL", "Prisma", "Supabase", "Docker"],
    status: "Finalizando últimos ajustes",
    previewIcon: "store",
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    name: "Gerenciamento de Quadras",
    description:
      "SaaS para gestão de quadras — reservas, agenda e disponibilidade em tempo real.",
    stack: ["TypeScript", "PostgreSQL", "Prisma", "Supabase", "Docker"],
    status: "Finalizando últimos ajustes",
    previewIcon: "courts",
    githubUrl: undefined,
    liveUrl: "https://maplayce.vercel.app/login",
    demoCredentials: { email: "demo@teste.com", password: "Demo123" },
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "ZF do Brasil",
    role: "Estagiário em Engenharia — Desenvolvimento de Soluções Digitais",
    location: "Sorocaba, SP",
    period: "Jun. 2024 – Mai. 2026",
    bullets: [
      "Desenvolvimento e manutenção de aplicações e soluções digitais integradas, com tratamento e modelagem de dados usando SQL, Azure, SharePoint e Power Platform.",
      "Criação de integrações e automações entre sistemas, conectando aplicações a fluxos de dados e reduzindo processos manuais.",
      "Construção e manutenção de dashboards com atualização automática e indicadores para apoio à tomada de decisão.",
      "Atuação em projetos multidisciplinares com impacto direto em produtividade, incluindo projeto com reconhecimento regional.",
    ],
  },
  {
    company: "Clarios",
    role: "Estagiário de Manutenção",
    location: "Sorocaba, SP",
    period: "Set. 2022 – Jun. 2024",
    bullets: [
      "Análise de dados e indicadores (KPIs) de manutenção, com consolidação e elaboração de relatórios para suporte à tomada de decisão.",
      "Atualização e análise de planilhas de controle e apoio à implementação da metodologia TPM.",
      "Participação em análises de falha (8D) e FMEA, contribuindo para ações de melhoria contínua.",
    ],
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    institution: "UNISO — Universidade de Sorocaba",
    degree: "Graduação — Engenharia Mecânica (10º semestre)",
    location: "Sorocaba, SP",
    period: "Conclusão em 2026",
  },
  {
    institution: "SENAI — Gaspar Ricardo Júnior",
    degree: "Técnico em Mecatrônica",
    location: "Sorocaba, SP",
    period: "Dez. 2021",
  },
  {
    institution: "SESI",
    degree: "Ensino Médio",
    location: "Votorantim, SP",
    period: "2021",
  },
];
