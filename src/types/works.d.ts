import { SkillsByCategory } from '.';

export type LinkEntry = {
  name: string,
  href: string,
}[];

export type WorkEntry = {
  image: string,
  tags: string[],
  skills: SkillsByCategory,
  links: LinkEntry,
};

export type Works = Record<string, WorkEntry>;
