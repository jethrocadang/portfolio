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
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "CSS", icon: SiCss3 },
  { name: "HTML", icon: SiHtml5 },
  { name: "ReactJS", icon: SiReact },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "ReactQuery", icon: SiReactquery },
  { name: "ReactRouter", icon: SiReactrouter },
  { name: "ReactHookForm", icon: SiReacthookform },
  { name: "Npm", icon: SiNpm },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Zod", icon: SiZod },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Shadcnui", icon: SiShadcnui },
  { name: "NodeJS", icon: SiNodedotjs },
  { name: "Prisma", icon: SiPrisma },
  { name: "Vercel", icon: SiVercel },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Laravel", icon: SiLaravel },
];

export const projects: IProject[] = [
  {
    title: "Applicant Tracking and Employee Training System",
    description: "text",
    technologies: [" Vite", "React JS", "Laravel","Spatie", "MySQl"],
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
