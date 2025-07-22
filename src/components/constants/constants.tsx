import {
  SiShadcnui,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiVercel,
  SiPrisma,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiCss3,
  SiReactquery,
  SiReacthookform,
  SiZod,
  SiNpm,
  SiGit,
  SiGithub,
  SiPostman,
  SiReactrouter,
  SiFigma,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiRadixui,
} from "react-icons/si";

export interface IContributor {
  avatar: string;
  name: string;
  role: string;
}

export interface IProject {
  title: string;
  description: string;
  technologies: string[];
  contributors: IContributor[];
  github: string;
  link: string;
  thumbnailUrl: string;
}

export const navItems = ["About", "Projects", "Contact"];

export const technologies = [
  { name: "TypeScript", icon: SiTypescript, color:"#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color:"" },
  { name: "CSS", icon: SiCss3, color:"" },
  { name: "HTML", icon: SiHtml5, color:"" },
  { name: "ReactJS", icon: SiReact, color:"" },
  { name: "NextJS", icon: SiNextdotjs, color:"" },
  { name: "ReactQuery", icon: SiReactquery, color:"" },
  { name: "ReactRouter", icon: SiReactrouter, color:"" },
  { name: "ReactHookForm", icon: SiReacthookform, color:"" },
  { name: "Npm", icon: SiNpm, color:"" },
  { name: "Git", icon: SiGit, color:"" },
  { name: "Figma", icon: SiFigma, color:"" },
  { name: "GitHub", icon: SiGithub, color:"" },
  { name: "Zod", icon: SiZod, color:"" },
  { name: "TailwindCSS", icon: SiTailwindcss, color:"" },
  { name: "Shadcnui", icon: SiShadcnui, color:"" },
  { name: "Radix UI", icon: SiRadixui, color:"" },
  { name: "NodeJS", icon: SiNodedotjs, color:"" },
  { name: "Prisma", icon: SiPrisma, color:"" },
  { name: "Vercel", icon: SiVercel, color:"" },
  { name: "MongoDB", icon: SiMongodb, color:"" },
  { name: "Laravel", icon: SiLaravel, color:"" },
  { name: "PHP", icon: SiPhp, color:"" },
  { name: "MySQL", icon: SiMysql, color:"" },
  { name: "Postman", icon: SiPostman, color:"" },
];

export const projects: IProject[] = [
  {
    title: "Applicant Tracking and Employee Training System",
    description: "text",
    technologies: [" Vite", "React JS", "Laravel", "Spatie", "MySQl"],
    contributors: [
      {
        avatar: "link",
        name: "Jossa Marie Advincula ",
        role: "Project Manager & UI/UX",
      },
      {
        avatar: "link",
        name: "Jethro R Cadang",
        role: "Full-stack Developer",
      },
      {
        avatar: "link",
        name: "John Erish Berboso",
        role: "Back-end Developer",
      },
      {
        avatar: "link",
        name: "John Michael Umali",
        role: "Front-end Developer",
      },
      {
        avatar: "link",
        name: "Jemyll Ramoya",
        role: "UI Designer",
      },
    ],
    github: "link",
    thumbnailUrl: "./placeholder.svg",
    link: "link",
  },
];
