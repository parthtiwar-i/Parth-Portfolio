import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  githubBG,
  chromecast,
  disc02,
  discord,
  discordBlack,
  figma,
  file02,
  fiver,
  framer,
  homeSmile,
  instagram,
  notification2,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  upwork,
  github,
  react,
  express,
  node,
  mongodb,
  javascript,
  html,
  css,
  tailwindcss,
  cpp,
  mern,
  python,
  redux,
  mui,
  postman,
  socket,
  threejs,
  firebase,
  linkedin,
  writeBlog,
} from "../assets";
import Parth from "../assets/Parth.png";

export const navigation = [
  {
    id: "0",
    title: "Projects",
    url: "#Projects",
  },
  {
    id: "1",
    title: "Works",
    url: "#works",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "Resume",
    url: "https://drive.google.com/file/d/1FJgoh9Z99TQqCM6oahinpvAC0T0wFNYO/view?usp=drive_link",
  },
  {
    id: "4",
    title: "Hire Me",
    url: "https://www.linkedin.com/in/parth-tiwari-9020721a7/",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Buy me a coffee",
    url: "https://www.linkedin.com/in/parth-tiwari-9020721a7/",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [Parth, notification2, figma];

export const companyLogos = [Parth, fiver, upwork];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const projects = [
  {
    id: "0",
    title: "Buy-It",
    text: "Buy-It, a React.js and Express.js e-commerce platform with MongoDB, ensures secure transactions and seamless browsing. With Stripe integration, it offers secure payments and includes features like order tracking and an admin panel for efficient management. Enjoy a streamlined shopping experience with robust administration capabilities.",
    date: "Jan 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    to: "https://buy-it-eight.vercel.app",
  },
  {
    id: "1",
    title: "Query PDF",
    text: "I engineered a Retrieval Augmented Generation (RAG) application using Langchain with FastAPI for the backend in Python, and React for the frontend. Leveraging FAISS for efficient vector data management and Recoil for state management, the platform seamlessly integrates with the Gemini API for Large Language Models (LLM) integration. Users can upload PDFs and generate tailored questions, streamlining information retrieval.",
    date: "march 2024",
    status: "done",
    imageUrl: roadmap4,
    to: "https://pdf-query-olive.vercel.app/",
  },
  {
    id: "2",
    title: "Thoughts",
    text: "Built a modern blog platform using React, TypeScript, Tailwind, and Framer Motion for a dynamic UI, with Cloudflare Hono, AWS S3, PostgreSQL, and Prisma powering a scalable backend. Users can create, read, and share blogs seamlessly.",
    date: "dec 2024",
    status: "done",
    imageUrl: writeBlog,
    to: "https://thoughts-orcin.vercel.app/",
  },
  {
    id: "3",
    title: "Chocoffee",
    text: "Chocoffee project entails the development of a fully operational frontend website catering to a coffee cafe. This comprehensive platform provides an immersive user experience by elegantly presenting menu offerings, ambiance, and facilitates seamless online reservations.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    to: "https://cho-coffee.vercel.app/",
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "MERN Stack",
    icon: mern,
  },
  {
    id: "1",
    title: "C++",
    icon: cpp,
  },
  {
    id: "2",
    title: "Python",
    icon: python,
  },
  {
    id: "3",
    title: "Figma",
    icon: figma,
  },
  {
    id: "4",
    title: "Redux/Recoil",
    icon: redux,
  },
  {
    id: "5",
    title: "MaterialUI",
    icon: mui,
  },
  {
    id: "6",
    title: "Socket.IO",
    icon: socket,
  },
  {
    id: "7",
    title: "ThreeJS",
    icon: threejs,
  },
  {
    id: "8",
    title: "Firebase",
    icon: firebase,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "react",
    icon: react,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "express",
    icon: express,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "node",
    icon: node,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "javascript",
    icon: javascript,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "html",
    icon: html,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "css",
    icon: css,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "tailwindcss",
    icon: tailwindcss,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Backend Intern @ Connect Link",
    text: " (Jan 2024 - March 2024 ) Created a backend system using Node.js, Express.js, and MongoDB for a meeting platform. Developed an innovativescheduling feature that streamlined meeting link generation, reducing setup time by 40% and increasing user satisfaction ratings by 25%.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: github,
    imageUrl: githubBG,
  },
  {
    id: "1",
    title: "ReactJs Intern @ Laxaar",
    text: `(May 2024 - Nov) Optimized role-based access, improved API performance by 30%, and reduced data fetch time by 40% in a stock analysis app. Built a scalable MVP template system, automated Vercel deployments, optimized CI/CD pipelines, and contributed to core enterprise features with SOLID principles.`,
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: github,
    imageUrl: githubBG,
  },
  {
    id: "2",
    title: "Fullstack Developer @ Laxaar",
    text: "(May 2024 - Present) Building a website builder",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: github,
    imageUrl: githubBG,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discordapp.com/users/jarvi_s_",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/parthtiwar_i",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/parthtiwar_i/",
  },
  {
    id: "4",
    title: "inkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/parth-tiwari-9020721a7/",
  },
];
