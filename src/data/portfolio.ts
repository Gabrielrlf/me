export const personalInfo = {
  name: "Gabriel Fonseca",
  headline:
    "Senior Software Engineer | Cloud-Native Applications | AI-Driven Solutions | .NET | AWS | Kubernetes | Event-Driven Architecture",
  shortHeadline: "Senior Software Engineer",
  tagline:
    "Building cloud-native, event-driven systems for fintech platforms at scale.",
  location: "Fortaleza, Brazil",
  linkedin: "https://linkedin.com/in/gf0212",
  github: "https://github.com/Gabrielrlf",
  email: "Gabrieldevce@gmail.com",
};

export const about = {
  paragraphs: [
    "I build cloud-native and event-driven systems for fintech platforms — the kind that process financial transactions, scale reliably, and demand high availability, observability, and resilience.",
    "Over 6+ years, I've worked across financial services, banking, gaming, and enterprise platforms, designing and developing scalable software solutions using .NET, AWS, Kubernetes, and modern distributed architectures.",
  ],
  expertise: [
    "Cloud-Native Applications",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Microservices",
    "AI-Assisted Software Engineering",
    "AWS Cloud",
    "Kubernetes",
    "FinTech Platforms",
    "Platform Modernization",
    "Backend Engineering",
    "Full Stack Development",
  ],
};

export const experience = [
  {
    company: "Bankly",
    role: "Senior Software Engineer",
    period: "Present",
    highlights: [
      "Primary .NET Engineer within the squad",
      "Development of cloud-native financial solutions",
      "Design and implementation of microservices",
      "Event-driven systems using Kafka and RabbitMQ",
      "AWS and Kubernetes environments",
      "OpenTelemetry observability",
      "AI-assisted development with Kiro",
      "Agent skills, steering, engineering rules, and governance",
    ],
    tags: [".NET", "Kafka", "Kubernetes", "AWS", "OpenTelemetry", "AI"],
  },
  {
    company: "Employer RH",
    role: "Senior Software Developer",
    period: "Previous",
    highlights: [
      "AWS serverless solutions",
      "React and TypeScript applications",
      "Python and Node.js Lambda functions",
      "Log migration projects",
      "Enterprise-scale applications",
    ],
    tags: ["AWS Lambda", "React", "TypeScript", "Serverless"],
  },
  {
    company: "Exadel / CPQi Group",
    role: "Software Engineer",
    period: "Previous",
    highlights: [
      ".NET Core microservices",
      "RabbitMQ messaging",
      "AWS CloudWatch",
      "Grafana",
      "SQL Server",
      "MongoDB",
      "Legacy modernization",
    ],
    tags: [".NET Core", "RabbitMQ", "MongoDB", "Grafana"],
  },
  {
    company: "Pague Menos",
    role: "Software Developer",
    period: "Previous",
    highlights: [
      "Full-stack applications",
      ".NET Core",
      "React",
      "Redux",
      "Sales Panel API",
    ],
    tags: [".NET Core", "React", "Redux", "Full Stack"],
  },
  {
    company: "FitBank",
    role: "Software Developer",
    period: "Previous",
    highlights: [
      "Financial APIs",
      ".NET Framework",
      "Worker Services",
      "SQL Server",
    ],
    tags: [".NET Framework", "Financial APIs", "SQL Server"],
  },
];

export const education = [
  {
    degree: "Associate Degree in Systems Analysis and Development",
    status: "Completed",
  },
  {
    degree: "Postgraduate Degree in Software Engineering",
    status: "Completed",
  },
  {
    degree: "Postgraduate Degree in Applied Artificial Intelligence Engineering",
    status: "In Progress",
  },
];

export const architectureFocus = [
  {
    title: "Cloud-Native Systems",
    description:
      "Designing resilient, containerized applications on AWS and Kubernetes with auto-scaling, health checks, and zero-downtime deployments.",
    icon: "cloud" as const,
  },
  {
    title: "Event-Driven Architecture",
    description:
      "Building asynchronous, loosely-coupled systems with Kafka and RabbitMQ for high-throughput financial transaction processing.",
    icon: "workflow" as const,
  },
  {
    title: "Distributed Systems",
    description:
      "Architecting microservices with clear boundaries, service discovery, and fault tolerance across geographically distributed infrastructure.",
    icon: "network" as const,
  },
  {
    title: "AI-Augmented Development",
    description:
      "Leveraging AI agents, steering, and governance frameworks to accelerate engineering velocity while maintaining code quality.",
    icon: "brain" as const,
  },
  {
    title: "Platform Engineering",
    description:
      "Modernizing legacy platforms into cloud-native architectures with CI/CD pipelines, infrastructure as code, and developer experience focus.",
    icon: "layers" as const,
  },
  {
    title: "Observability",
    description:
      "Implementing OpenTelemetry, distributed tracing, and metrics pipelines for deep visibility into production system behavior.",
    icon: "activity" as const,
  },
];

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

export const highlights = [
  {
    title: "Cloud-Native Fintech Systems",
    description:
      "Architected and delivered production-grade financial platforms processing transactions with high availability on AWS and Kubernetes.",
    metric: "99.9% Uptime",
    icon: "shield" as const,
  },
  {
    title: "Distributed Event-Driven Architectures",
    description:
      "Designed event-driven microservices with Kafka and RabbitMQ enabling real-time financial data flows across service boundaries.",
    metric: "Kafka + RabbitMQ",
    icon: "zap" as const,
  },
  {
    title: "AI-Assisted Engineering Workflows",
    description:
      "Pioneered AI-augmented development with agent skills, steering rules, and governance for accelerated, quality-focused delivery.",
    metric: "Kiro + Agents",
    icon: "sparkles" as const,
  },
  {
    title: "Microservices at Scale",
    description:
      "Built and maintained .NET microservices ecosystems with clear domain boundaries, API gateways, and service mesh patterns.",
    metric: ".NET Core",
    icon: "boxes" as const,
  },
  {
    title: "AWS & Kubernetes Platforms",
    description:
      "Deployed and operated containerized workloads on EKS with GitOps workflows, auto-scaling, and infrastructure automation.",
    metric: "EKS + Docker",
    icon: "server" as const,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];
