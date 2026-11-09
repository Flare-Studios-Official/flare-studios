export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'Motion Graphics' | 'Brand Identity' | 'Video Editing' | 'Thumbnail Design' | 'Digital Experience' | 'Promotional Design';
  shortDescription: string;
  visualDirection: string;
  conceptDetail: string;
  deliverables: string[];
  tools: string[];
  accentColor: string;
  secondaryColor: string;
  year: string;
  clientType: string;
  creativeProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  deliverables: string[];
  software: string[];
  visualizerType: 'waveform' | 'kinetic' | 'grid' | 'geometry' | 'code';
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export interface Principle {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  description: string;
}
