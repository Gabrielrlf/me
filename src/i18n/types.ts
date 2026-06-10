export type Locale = "en" | "pt-BR" | "es";

export interface JobTranslation {
  role: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  status: string;
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  metric: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  personal: {
    shortHeadline: string;
    headlineSuffix: string;
    tagline: string;
    location: string;
    availability: string;
  };
  nav: {
    about: string;
    experience: string;
    expertise: string;
    techStack: string;
    highlights: string;
    contact: string;
  };
  hero: {
    contactMe: string;
    downloadResume: string;
    viewLinkedIn: string;
    scroll: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    whoIAm: string;
    paragraphs: string[];
    education: string;
    educationItems: EducationItem[];
    coreExpertise: string;
    expertise: string[];
  };
  experience: {
    label: string;
    title: string;
    description: string;
    jobs: JobTranslation[];
  };
  architecture: {
    label: string;
    title: string;
    description: string;
    items: ArchitectureItem[];
  };
  techStack: {
    label: string;
    title: string;
    description: string;
    categories: {
      backend: string;
      frontend: string;
      cloud: string;
      messaging: string;
      databases: string;
      ai: string;
    };
  };
  highlights: {
    label: string;
    title: string;
    description: string;
    items: HighlightItem[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    getInTouch: string;
    body: string;
    sendEmail: string;
    email: string;
    linkedin: string;
    github: string;
  };
  footer: {
    role: string;
  };
  resume: {
    summary: string;
    experience: string;
    education: string;
    technologies: string;
    print: string;
    back: string;
  };
}
