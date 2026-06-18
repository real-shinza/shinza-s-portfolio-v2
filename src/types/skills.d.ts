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
  | 'databases'
  | 'infrastructure'
  | 'native'
  | 'game_engines'
  | 'version_control'
  | 'testing'
  | 'ci_cd'
  | 'ai'
  | 'editors'
  | 'analytics'
  | 'communication'
  | 'productivity';

export type SkillsByCategory = Partial<Record<SkillCategory, string[]>>;
