export type SkillLevel = {
  name: string,
  level: number,
};

export type SkillGroup = {
  id: SkillCategory,
  skills: SkillLevel[],
};

type SkillCategory =
  | 'os'
  | 'languages'
  | 'runtime'
  | 'frameworks'
  | 'libraries'
  | 'api_sdk'
  | 'databases'
  | 'infrastructure'
  | 'tools'
  | 'analytics'
  | 'workflow';

export type SkillsByCategory = Partial<Record<SkillCategory, string[]>>;
