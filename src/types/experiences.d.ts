export type ProjectEntry = {
  tags: string[]
};

export type ExperienceEntry = {
  type: 'education' | 'work',
  projects: Record<string, Project>
};

export type Experiences = Record<string, ExperienceEntry>
