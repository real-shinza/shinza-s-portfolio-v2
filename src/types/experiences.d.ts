import { SkillsByCategory } from '.';

export type ExperienceEntry = {
  skills: SkillsByCategory,
};

export type Experiences = {
  educations: Record<string, ExperienceEntry>,
  works: Record<string, ExperienceEntry>,
};
