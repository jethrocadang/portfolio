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
  id: number;
  name: string;
  role: string;
  image: string;
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
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "" },
  { name: "CSS", icon: SiCss3, color: "" },
  { name: "HTML", icon: SiHtml5, color: "" },
  { name: "ReactJS", icon: SiReact, color: "" },
  { name: "NextJS", icon: SiNextdotjs, color: "" },
  { name: "ReactQuery", icon: SiReactquery, color: "" },
  { name: "ReactRouter", icon: SiReactrouter, color: "" },
  { name: "ReactHookForm", icon: SiReacthookform, color: "" },
  { name: "Npm", icon: SiNpm, color: "" },
  { name: "Git", icon: SiGit, color: "" },
  { name: "Figma", icon: SiFigma, color: "" },
  { name: "GitHub", icon: SiGithub, color: "" },
  { name: "Zod", icon: SiZod, color: "" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "" },
  { name: "Shadcnui", icon: SiShadcnui, color: "" },
  { name: "Radix UI", icon: SiRadixui, color: "" },
  { name: "NodeJS", icon: SiNodedotjs, color: "" },
  { name: "Prisma", icon: SiPrisma, color: "" },
  { name: "Vercel", icon: SiVercel, color: "" },
  { name: "MongoDB", icon: SiMongodb, color: "" },
  { name: "Laravel", icon: SiLaravel, color: "" },
  { name: "PHP", icon: SiPhp, color: "" },
  { name: "MySQL", icon: SiMysql, color: "" },
  { name: "Postman", icon: SiPostman, color: "" },
];

export const projects: IProject[] = [
  // {
  //   title: "Applicant Tracking and Employee Training System",
  //   description:
  //     "A final requirement for capstone project. This system is partial part of HRIS focusing on ATS and ETH. The system is built on a layered architecrure with React JS client & Laravel API server.",
  //   technologies: [" Vite", "React JS", "Laravel", "Spatie", "MySQl"],
  //   contributors: [
  //     {
  //       id: 1,
  //       image: "/jossa.JPG",
  //       name: "Jossa Marie Advincula ",
  //       role: "Project Manager & UI/UX",
  //     },
  //     {
  //       id: 2,
  //       image: "/jossa.JPG",
  //       name: "Jethro R Cadang",
  //       role: "Full-stack Developer",
  //     },
  //     {
  //       id: 3,
  //       image: "/erish.JPG",
  //       name: "John Erish Berboso",
  //       role: "Back-end Developer",
  //     },
  //     {
  //       id: 4,
  //       image: "/umali.JPG",
  //       name: "John Michael Umali",
  //       role: "Front-end Developer",
  //     },
  //     {
  //       id: 5,
  //       image: "/jem.JPG",
  //       name: "Jemyll Ramoya",
  //       role: "UI Designer",
  //     },
  //   ],
  //   github: "https://github.com/mickeyumali/lvcc-hris-frontend",
  //   thumbnailUrl: "./placeholder.svg",
  //   link: "#",
  // },
  {
    title: "ConnectED",
    description:
      "A web application contributing to the Quality Education SDG, and serves as a centralized repository of internships and scholarships in the Philippines.",
    github: "https://github.com/Kertsu/LV-ConnectED",
    link: "#",
    thumbnailUrl: "/connected.webp",
    technologies: [ "React JS", "Typescript", "Tailwind CSS", "Express JS", "TypeORM", "ShadcnUI", "Radix UI", "Framer Motion", "Axios", "React Router"],
    contributors: [
      {
        id: 1,
        name: "Kurtd Daniel Bigtas",
        image: "/kurtd.jpeg",
        role: "Full-stack Developer",
      },
      {
        id: 2,
        name: "Raven Dela Rama",
        image:
          "https://res.cloudinary.com/drlztlr1m/image/upload/v1729331139/Hackathon/olsermjsgxepfzalyzur.jpg",
        role: "Full-stack Developer",
      },
      {
        id: 3,
        name: "Allen Magadia",
        image:
          "https://res.cloudinary.com/drlztlr1m/image/upload/v1735027541/Hackathon/eqnna3fxoebpd64a1hve.jpg",
        role: "UI/UX Designer & Front-end Developer",
      },
      {
        id: 4,
        name: "Johnmack Faeldonia",
        image:
          "https://res.cloudinary.com/drlztlr1m/image/upload/v1729331139/Hackathon/xb9t23uznqfop14olmvl.jpg",
        role: "Project Manager & Front-end Developer",
      },
      {
        id: 5,
        name: "Jethro Cadang",
        image:
          "https://res.cloudinary.com/drlztlr1m/image/upload/v1729331140/Hackathon/wpxmy7np9h5dfryp0not.jpg",
        role: "Front-end Developer",
      },
    ],
  },
];
