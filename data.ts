import { Project } from "./types";

const language = [
  "HTML/CSS/Sass",
  "JavaScript (ES6+)",
  "TypeScript",
  "PHP",
  "Python",
  "Java",
  "SQL",
];
const frontend = ["React", "Tailwind", "Chakra UI", "Bootstrap"];
const backend = ["Node.js", "Express", "RESTful APIs", "Supabase"];
const database = ["MySQL", "PostgreSQL", "MongoDB"];
const framework = ["Next.js", "CodeIgniter"];
const tools = ["Git", "GitHub", "NPM", "Prisma"];

const experiences = [
  {
    logo: "/images/boc.png",
    company: "BOC Macau",
    position: "Scholastic Program",
    duration: "Jan 2014",
    location: "Macau",
  },

  {
    logo: "/images/default.png",
    company: "HMV & Associates",
    position: "Staff Accountant",
    duration: "Jan 2015 - Jul 2017",
    location: "Macau",
  },

  {
    logo: "/images/luso.png",
    company: "Luso Int'l Banking Ltd.",
    position: "Finance Officer",
    duration: "Feb 2018 - Aug 2020",
    location: "Macau",
  },
];

const experienceIT = [
  {
    logo: "/images/default.png",
    company: "Freelance",
    position: "Web Development",
    duration: "Jul 2023 - Present",
    location: "Brisbane",
  },

  {
    logo: "/images/jr.jpg",
    company: "JR Academy",
    position: "Web Developer Bootcamp",
    duration: "Aug 2023 - Present",
    location: "Brisbane",
  },
];

const commercialProjects = [
  {
    title: "Iron Force",
    img: "/images/iron_force.png",
    techStacks: ["HTML/CSS", "JavaScript"],
    github: "https://github.com/lyleyyy/gym-website.github.io",
    link: "https://iron-force.netlify.app/",
  },

  {
    title: "Work-in-Progress",
    img: "/images/jrp3.png",
    techStacks: ["Agile", "Next.js", "Vercel"],
    github: "",
    link: "",
  },
] as Project[];

const practiceProjects = [
  {
    title: "Gamehub",
    img: "/images/gamehub.png",
    techStacks: ["React", "Chakra UI"],
    github: "https://github.com/lyleyyy/game-hub-mosh",
    link: "https://game-hub-mosh-one.vercel.app/",
  },

  {
    title: "Spotify Clone",
    img: "/images/spotify.png",
    techStacks: ["Next.js", "Tailwind", "PostgreSQL"],
    github: "https://github.com/lyleyyy/next-spotify-clone",
    link: "https://next-spotify-clone-nine.vercel.app/",
  },

  {
    title: "Learning & Discussion Forum",
    img: "/images/ci.png",
    techStacks: ["CodeIgniter", "PHP", "MySQL"],
    github: "https://github.com/lyleyyy/game-hub-mosh",
    link: "",
  },
] as Project[];

export {
  language,
  frontend,
  backend,
  database,
  framework,
  tools,
  experiences,
  experienceIT,
  commercialProjects,
  practiceProjects,
};
