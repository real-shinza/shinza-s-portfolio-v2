export type Project = {
  tags: string[]
};

export type ExperienceEntry = {
  projects: Record<string, Project>
};

export type Experiences = Record<string, ExperienceEntry>
