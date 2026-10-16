export interface MetricItem {
  label: string;
  value: string;
  change?: string;
}

export interface CaseStudy {
  summary: string;
  problem: string;
  hypothesis: string;
  targetAudience: string;
  solution: string[];
  productDecisions: string[];
  metrics: MetricItem[];
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  prdDocUrl?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  featured: boolean;
  videoUrl?: string;
  thumbnailPlaceholder?: string;
  githubUrl?: string;
  liveUrl?: string;
  prdDocUrl?: string;
  metrics: MetricItem[];
  tags: string[];
  caseStudy: CaseStudy;
}

export interface ExperienceItem {
  id: string;
  indexNumber: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  duration: string;
  summary: string;
  metricBullets: string[];
  tags: string[];
}

export interface ExpertiseItem {
  indexNumber: string;
  title: string;
  description?: string;
  coreCompetencies?: string[];
}

export interface ToolItem {
  name: string;
  isHighlighted?: boolean;
  category?: 'ai' | 'product' | 'ops' | 'technical';
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
}

export type SocialChannelType =
  | 'email'
  | 'linkedin'
  | 'github'
  | 'phone'
  | 'calendar'
  | 'x';

export interface SocialChannel {
  name: string;
  url: string;
  handle: string;
  type: SocialChannelType;
}

export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  introStatement: {
    whiteTextPre: string;
    accentText1: string;
    whiteTextMid: string;
    accentText2: string;
    whiteTextPost: string;
    line2Accent1?: string;
    line2WhiteMid?: string;
    line2Accent2?: string;
    line2WhitePost?: string;
  };
  honors: string[];
  about: {
    headline: string;
    bioParagraphs: string[];
    credentialCallout: {
      stat: string;
      label: string;
      subtext: string;
    };
    status: {
      available: boolean;
      text: string;
      location: string;
    };
    portraitUrl?: string;
  };
  directChannels: SocialChannel[];
  expertise: ExpertiseItem[];
  tools?: ToolItem[];
  languages?: LanguageItem[];
  education?: EducationItem[];
}

