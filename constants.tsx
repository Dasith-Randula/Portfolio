
import { SkillCategory, Project, EducationItem } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Engineering",
    skills: [
      { name: "OOP", description: "Solid understanding of object-oriented principles." },
      { name: "Python", description: "Data structures and scripting logic." },
      { name: "Java", description: "Robust enterprise-level development." },
      { name: "C/C++", description: "Lower-level systems and logic efficiency." },
      { name: "Arduino", description: "Hardware-software integration & prototyping." },
      { name: "MySQL", description: "Relational database design and querying." },
    ]
  },
  {
    title: "Web & UI",
    skills: [
      { name: "HTML/CSS/JS", description: "Core web technologies and modern JS syntax." },
      { name: "Tailwind CSS", description: "Rapid utility-first styling and layouts." },
      { name: "UI Design", description: "Aesthetics-driven interface construction." },
      { name: "Responsive Design", description: "Multi-device layout consistency." },
      { name: "UX Practices", description: "User-centric flow and accessibility." },
    ]
  },
  {
    title: "Tools & Analytics",
    skills: [
      { name: "BI Tools", description: "Visualizing data for actionable insights." },
      { name: "Git", description: "Version control and collaborative workflows." },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Solaris Hub",
    description: "A centralized platform for celestial navigation and astronomy resources.",
    tech: ["React", "Three.js", "Tailwind"],
    link: "#",
    image: "https://picsum.photos/seed/solar/800/600"
  },
  {
    title: "EcoTrack",
    description: "IoT-based environmental monitoring dashboard for smart campus management.",
    tech: ["Python", "Arduino", "MySQL"],
    link: "#",
    image: "https://picsum.photos/seed/eco/800/600"
  },
  {
    title: "Nebula UI Kit",
    description: "A professional dark-themed component library for space-inspired web apps.",
    tech: ["HTML", "CSS", "JS"],
    link: "#",
    image: "https://picsum.photos/seed/nebula/800/600"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "BSc (Hons) in Software Engineering",
    university: "SLTC Research University",
    focus: ["Software Development", "Web Technologies", "UI/UX Methodologies"],
    period: "2021 - Present"
  }
];
