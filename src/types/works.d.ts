import { SkillsByCategory } from '.';

export type WorkEntry = {
  image: string,
  tags: string[],
  skills: SkillsByCategory,
};

export type Works = Record<string, WorkEntry>;
