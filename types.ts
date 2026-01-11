
export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export interface EducationItem {
  degree: string;
  university: string;
  focus: string[];
  period: string;
}
