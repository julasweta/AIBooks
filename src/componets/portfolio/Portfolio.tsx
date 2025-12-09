// Portfolio.tsx
import { useState } from "react";
import styles from "./Portfolio.module.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  site?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "AI‑Learning & Prompts Guide (MyMarket Lesson)",
    description: "Практичний гайд‑урок, який дає все необхідне, щоб розпочати заробляти з AI: готові промпти, скрипти, інструкції для інтеграції у вебпроєкти. Ідеальний для JS/TS‑розробників, які хочуть швидко підключити AI в свої Flow і підвищити продуктивність.",
    tech: ["AI Prompts", "Automation", "React.js", "Node.js", "Nest.js", "TypeScript"],
    link: "https://github.com/julasweta/AIBooks",
    site: "https://www.mymarket.pp.ua/ua/lesson",
    image: "/image.png",
  },
  {
    title: "Portfolio Designer",
    description: "Interactive portfolio website with React.js, Redux, Node.js.",
    tech: ["React", "Redux", "Node.js"],
    link: "https://github.com/julasweta/julides",
    site: "https://julasweta.github.io/julides",
    image: "/image2.png",
  },
  {
    title: "FBE Store",
    description: "FBE is a full-featured e-commerce application for managing products, carts, orders, and users.",
    tech: ["React.js", "Nest.js", "PostgreSQL"],
    link: "https://github.com/julasweta/fbe",
    site: "https://fbe.pp.ua",
    image: "/image3.png",
  },
];

// Дані про досвід
const experienceData = [
  {
    title: "Back-End Developer @ Own Small Business",
    period: "Jul 2022 - Present | Lviv, Ukraine",
    responsibilities: [
      "Back-End Web Development with Node.js and Nest.js",
      "Database management (PostgreSQL, MongoDB)",
      "Collaboration in small team projects",
    ],
  },
  {
    title: "Back-End Developer @ CHM Software Ltd.",
    period: "Jun 2024 - Feb 2025",
    responsibilities: [
      "Developed scalable backend systems",
      "Worked with TypeORM and PostgreSQL",
      "Implemented REST APIs and services",
    ],
  },
  {
    title: "Full-Stack Developer @ OKTEN SCHOOL",
    period: "Mar 2023 - Jan 2024 | Remote",
    responsibilities: [
      "Developed web applications with React, Node.js, Nest.js",
      "Redux state management, responsive UI",
      "Collaborated in remote team environment",
    ],
  },
];


const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux",
  "Node.js", "Nest.js", "MongoDB", "PostgreSQL", "Git", "REST API",
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Svitlana Horynska</h1>
        <p>Full-Stack Developer (React.js, Nest.js, Node.js, TS)</p>
        <div className={styles.contacts}>
          <a href="mailto:office.fly.app@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /> Email</a>
          <a href="https://github.com/julasweta" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/svitlana-horynska/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        </div>
<p></p>
        <div >EnglIsh level: A2</div>
      </header>

      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className={styles.experience}>
        <h2>Experience</h2>
        <div className={styles.cardBox}>
          {experienceData.map((exp, idx) => (
            <div key={idx} className={styles.expCard}>
              <h3>{exp.title}</h3>
              <span>{exp.period}</span>
              <ul>
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((p, idx) => (
            <div
              key={idx}
              className={styles.projectCard}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {p.image && <img src={p.image} alt={p.title} className={styles.projectImage} />}
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className={styles.tech}>
                {p.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              {hoveredProject === idx && p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  View on GitHub
                </a>
              )}
              {hoveredProject === idx && p.site && (
                <a href={p.site} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  View on Site
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Svitlana Horynska. All rights reserved.</p>
      </footer>
    </div>
  );
}

