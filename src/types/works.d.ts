export type WorkEntry = {
  image: string;
  tags: string[];
  skills: Record<string, string[]>
};

export type Works = Record<string, WorkEntry>;
