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

export const roadmap = [
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
    title: "Real Estate Project",
    text: "Currently developing a real estate app for rental management and property listings. Features include automated rent reminders for owners and property browsing for users.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chocoffee",
    text: "Chocoffee project entails the development of a fully operational frontend website catering to a coffee cafe. This comprehensive platform provides an immersive user experience by elegantly presenting menu offerings, ambiance, and facilitates seamless online reservations.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
    to:"https://cho-coffee.vercel.app/"
  },
  {
    id: "3",
    title: "Explore More",
    text: "Many More Back-End and Front-End Projects ",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
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

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Backend Intern @ Connect Link",
    text: "Worked on Company's Project Scheduler, build backend from scratch , integrating user Auth & made backend logic for scheduling meeting",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: github,
    imageUrl: githubBG,
  },
  {
    id: "1",
    title: "Building...",
    text: "Preparing to grab more opportunities....",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon3,
    imageUrl: githubBG,
    light: true,
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
