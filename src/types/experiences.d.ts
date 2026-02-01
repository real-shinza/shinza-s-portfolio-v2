import { SkillsByCategory } from '.';

export type ProjectEntry = {
  skills: SkillsByCategory,
};

export type ExperienceEntry = {
  type: 'education' | 'work',
  projects: Record<string, ProjectEntry>
};

export type Experiences = Record<string, ExperienceEntry>
