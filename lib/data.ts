"use client";

import {
  FilmSlateIcon,
  HorseIcon,
  SoccerBallIcon,
} from "@phosphor-icons/react";
import { Experience, Quest, SelectedWork, Skill } from "./types";

export const selectedWorks: Array<SelectedWork> = [
  {
    id: 1,
    tag: "The Opening",
    ref: "1. e4",
    image: "/cba.png",
    name: "Core Business/Banking App (NEAT)",
    description:
      "It helps NEAT Microcred manage their core business operations lifecycle like loan and customer creation right on the app with live reports as well. I work on the project as a backend engineer.",
    witty_comment: "Passed code review without VAR check.",
    stack: [
      {
        id: 1,
        name: "Golang",
      },
      {
        id: 2,
        name: "Gin",
      },
      {
        id: 3,
        name: "PostgreSQL",
      },
    ],
    link: "https://neatmc.mode3.tech",
  },
  {
    id: 2,
    tag: "The Middlegame",
    ref: "14. Nxd5",
    image: "/neatpay.png",
    name: "NeatPay",
    description:
      "It is a digital financial services platform. I was the Backend Engineer.",
    witty_comment: "A messy middlegame, a tidy finish. Like most good matches.",
    stack: [
      {
        id: 1,
        name: "Golang",
      },
      {
        id: 2,
        name: "Gin",
      },
      {
        id: 3,
        name: "PostgreSQL",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.mode3.neatmobile&hl=en",
  },
  {
    id: 3,
    tag: "The Endgame",
    ref: "62. Kg2",
    image: "/convex.png",
    name: "Convex ERP",
    description:
      "It is an ERP software for SMEs. I am the tech lead handling features and modules end-to-end.",
    witty_comment: "Shipped in stoppage time. No one needs to know.",
    stack: [
      {
        id: 1,
        name: "Buffalo",
      },
      {
        id: 2,
        name: "MySQL",
      },
      {
        id: 3,
        name: "React.js",
      },
      {
        id: 4,
        name: "TypeScript",
      },
      {
        id: 5,
        name: "TailwindCSS",
      },
      {
        id: 6,
        name: "Mantine UI",
      },
    ],
    link: "https://stagging.convex.ng",
  },
  {
    id: 4,
    tag: "Man of the Match",
    ref: "1-0",
    image: "/tack.png",
    name: "Tack",
    description: "This is a note taking app with an always-on-top feature",
    witty_comment: "Plot twist: it worked on first deploy.",
    stack: [
      {
        id: 1,
        name: "ElectronJS",
      },
      {
        id: 2,
        name: "HTML5",
      },
      {
        id: 3,
        name: "CSS",
      },
      {
        id: 4,
        name: "Sqlite3",
      },
    ],
    link: "https://github.com/Twith2e/tack/releases/tag/v1.0.0",
    source_code: "https://github.com/Twith2e/tack",
  },
];

export const skills: Array<Skill> = [
  {
    id: 1,
    category: "Forwards",
    desc: "Frontend. They get all the glory.",
    list: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Next.js",
      },
      {
        id: 3,
        name: "TypeScript",
      },
      {
        id: 4,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    id: 2,
    category: "Midfield",
    desc: "Backend. Connects everything.",
    list: [
      {
        id: 1,
        name: "Golang",
      },
      {
        id: 2,
        name: "Node.js",
      },
      {
        id: 3,
        name: "PostgreSQL",
      },
      {
        id: 4,
        name: "MySQL",
      },
      {
        id: 5,
        name: "REST",
      },
      {
        id: 6,
        name: "JWT",
      },
    ],
  },
  {
    id: 3,
    category: "Defence",
    desc: "Tooling. Keeps the lights on.",
    list: [
      {
        id: 1,
        name: "Git",
      },
      {
        id: 2,
        name: "GitHub",
      },
      {
        id: 3,
        name: "Nobus",
      },
    ],
  },
  {
    id: 4,
    category: "Goalkeeper",
    desc: "Testing. Last line of defence.",
    list: [
      {
        id: 1,
        name: "Vitest",
      },
      {
        id: 2,
        name: "Go test",
      },
      {
        id: 3,
        name: "Eslint",
      },
      {
        id: 4,
        name: "Code review",
      },
    ],
  },
];

export const experience: Array<Experience> = [
  {
    id: 1,
    start_date: "Dec 2024",
    end_date: "Apr 2025",
    location: "Akoka, Lagos",
    role: "Fullstack Developer/IT Officer",
    company: "Unilag Microfinance Bank",
    contribution: [
      {
        id: 1,
        text: "Created digital forms for various purposes with ReactJs and converting users' data to pdf using JSPDF leading to 90% reduction in manual processing.",
      },
      {
        id: 2,
        text: "Ensuring all codes are properly versioned and maintained using a distributed version control system (GIT).",
      },
      {
        id: 3,
        text: "Ensuring all staff files are being backed up.",
      },
    ],
    witty_desc: "Scored most of my goals in code review, assisted by caffeine.",
  },
  {
    id: 2,
    start_date: "Apr 2025",
    end_date: "Feb 2026",
    location: "Remote",
    role: "Frontend Developer",
    company: "Venueri",
    contribution: [
      {
        id: 1,
        text: "Built responsive, high-performance Next.js and React interfaces aligned with UI/UX designs.",
      },
      {
        id: 2,
        text: "Developed reusable components and clean code structures, improving maintainability and scalability.",
      },
      {
        id: 3,
        text: "Integrated REST APIs and WebSockets to support real-time interactions and dynamic workflows.",
      },
      {
        id: 4,
        text: "Optimized rendering and state updates to enhance performance and responsiveness.",
      },
      {
        id: 5,
        text: "Collaborated closely with designers, product managers, and backend engineers to deliver polished, accessible interfaces.",
      },
    ],
    witty_desc:
      "Youth academy years: broke production once, learned every lesson twice.",
  },
  {
    id: 3,
    start_date: "Feb 2026",
    end_date: "Current",
    location: "Orogun, Ibadan",
    role: "Tech lead SWE",
    company: "MODE3",
    contribution: [
      {
        id: 1,
        text: "Architected a secure authentication system using JWT with refresh token rotation, session tracking (SID), and replay protection(JTI).",
      },
      {
        id: 2,
        text: "Designed database schema and indexing strategy for scalable session and token management.",
      },
      {
        id: 3,
        text: "Implemented secure token hashing, validation, and revocation workflows aligned with industry best practices.",
      },
      {
        id: 4,
        text: "Developed modular backend architecture following layered design (transport, service, persistence separation).",
      },
      {
        id: 5,
        text: "Built production-ready REST APIs with request validation, structured error handling, and context-aware execution.",
      },
    ],
    witty_desc:
      "Current squad status: first-team starter, still arguing about tabs vs spaces.",
  },
];

export const quests: Array<Quest> = [
  {
    id: 1,
    quest: "Chess",
    icon: HorseIcon,
    desc: "Taught me to think three moves ahead, which is also how I name variables. Mostly.",
  },
  {
    id: 2,
    quest: "Football",
    icon: SoccerBallIcon,
    desc: "My code has a better defence than my team. At least my code gets reviewed before the final whistle.",
  },
  {
    id: 3,
    quest: "Movies",
    icon: FilmSlateIcon,
    desc: "I stay for the credits. Yes, all of them. Somebody has to read the names of the people who fixed the bugs.",
  },
];
