export const personalInfo = {
  name: "Gabriel Fonseca",
  linkedin: "https://linkedin.com/in/gf0212",
  github: "https://github.com/Gabrielrlf",
  email: "Gabrieldevce@gmail.com",
};

export const experienceCompanies = [
  "Bankly",
  "Employer RH",
  "Exadel / CPQi Group",
  "Pague Menos",
  "FitBank",
];

export const experienceTags = [
  [".NET", "Kafka", "Kubernetes", "AWS", "OpenTelemetry", "AI"],
  ["AWS Lambda", "React", "TypeScript", "Serverless"],
  [".NET Core", "RabbitMQ", "MongoDB", "Grafana"],
  [".NET Core", "React", "Redux", "Full Stack"],
  [".NET Framework", "Financial APIs", "SQL Server"],
];

export const architectureIcons = [
  "cloud",
  "workflow",
  "network",
  "brain",
  "layers",
  "activity",
] as const;

export const highlightIcons = [
  "shield",
  "zap",
  "sparkles",
  "boxes",
  "server",
] as const;

export const techStack = {
  backend: [".NET 8", ".NET 10", "ASP.NET Core", "Minimal APIs", "Node.js", "NestJS"],
  frontend: ["React", "Next.js", "TypeScript"],
  cloud: ["AWS", "Kubernetes", "Docker", "OpenTelemetry", "GitHub Actions"],
  messaging: ["Kafka", "RabbitMQ"],
  databases: ["SQL Server", "MongoDB", "DynamoDB"],
  ai: [
    "Kiro",
    "AI Agents",
    "Multi-Agent Systems",
    "Agent Skills",
    "Steering",
    "AI Governance",
    "LLM Workflows",
  ],
};

export const navHrefs = [
  { key: "about" as const, href: "#about" },
  { key: "experience" as const, href: "#experience" },
  { key: "expertise" as const, href: "#expertise" },
  { key: "techStack" as const, href: "#tech-stack" },
  { key: "highlights" as const, href: "#highlights" },
  { key: "contact" as const, href: "#contact" },
];

export const heroTechBadges = [".NET", "AWS", "Kubernetes", "Kafka", "FinTech"];
