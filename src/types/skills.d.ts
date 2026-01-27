export type SkillLevel = {
  name: string;
  level: number;
};

export type SkillGroup = {
  id: string;
  skills: SkillLevel[];
};
