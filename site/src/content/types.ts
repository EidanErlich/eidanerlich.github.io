export type Link = { label: string; url: string };

export type ExperienceItem = {
  title: string;
  organization: string;
  location?: string;
  start: string; // e.g., 'May 2024'
  end: string;   // e.g., 'Present'
  highlights: string[];
  tags?: string[];
  link?: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  links?: Link[];
  tags?: string[];
};

export type PublicationItem = {
  citation: string; // formatted citation
  links?: Link[];   // PDF, DOI, Code
};

export type Profile = {
  name: string;
  headline: string;
  summary: string;
  email: string;
  location?: string;
  social: {
    linkedin?: string;
    github?: string;
    googleScholar?: string;
    twitter?: string;
  };
};

export type SiteContent = {
  profile: Profile;
  stats: { label: string; value: string | number }[];
  interests: string[];
  experiences: ExperienceItem[];
  technical: {
    proficiencies: string[];
    projects: ProjectItem[];
    research: ProjectItem[];
  };
  publications: PublicationItem[];
  contact: {
    resumeUrl: string;
  };
};

export type SectionId = 'about' | 'experience' | 'technical' | 'publications' | 'contact';

export type SectionOrder = SectionId[];

