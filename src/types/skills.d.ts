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
  | 'backend'
  | 'frontend'
  | 'games'
  | 'databases'
  | 'infrastructure'
  | 'dev_tools'
  | 'analytics'
  | 'ai'
  | 'business_tools';

export type SkillsByCategory = Partial<Record<SkillCategory, string[]>>;
