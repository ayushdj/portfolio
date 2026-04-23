import React from "react";
import { motion } from "framer-motion";
import OracleLogo from "../../single-page-developer-portfolio/starter-code/assets/images/oracle-svgrepo-com.svg";
import LutronLogo from "../../single-page-developer-portfolio/starter-code/assets/images/pngegg.png";
import Daco_768955 from "../../single-page-developer-portfolio/starter-code/assets/images/Daco_768955.png";
import SharkNinja from "../../single-page-developer-portfolio/starter-code/assets/images/Shark_logo_black.png";
import CohereHealthLogo from "../../single-page-developer-portfolio/starter-code/assets/images/CohereHealth.png";

const experiences = [
  {
    role: "Applications Developer 2 / Scrum Master",
    company: "Oracle — Health & AI",
    companyUrl: "https://www.oracle.com/health",
    date: "Jun 2024 — Present",
    location: "Burlington, MA",
    logo: OracleLogo,
    logoBg: "#C74634",
    current: true,
    tags: ["JavaScript", "Node.js", "Java", "MySQL", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    role: "Software Engineer I",
    company: "Cohere Health",
    companyUrl: "https://coherehealth.com/",
    date: "Oct 2023 — Jun 2024",
    location: "Boston, MA",
    logo: CohereHealthLogo,
    logoBg: "#ffffff",
    tags: ["React", "Node.js", "Groovy/Grails", "Micronaut", "MongoDB", "AWS", "Cypress"],
  },
  {
    role: "Software Engineering Co-Op",
    company: "Oracle — Health & AI",
    companyUrl: "https://www.oracle.com/health",
    date: "Jun 2022 — Dec 2022",
    location: "Burlington, MA",
    logo: OracleLogo,
    logoBg: "#C74634",
    tags: ["JavaScript", "Knockout.js", "Java", "J2EE", "Docker", "Jenkins"],
  },
  {
    role: "Embedded Software Engineering Co-Op",
    company: "Lutron Electronics",
    companyUrl: "https://www.lutron.com",
    date: "Jan 2022 — Jun 2022",
    location: "Boston, MA",
    logo: LutronLogo,
    logoBg: "#2196F3",
    tags: ["C++", "Python", "Jenkins", "Bitbucket"],
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Northeastern University",
    companyUrl: "https://www.khoury.northeastern.edu",
    date: "Jan 2021 — Dec 2021",
    location: "Boston, MA",
    logo: Daco_768955,
    logoBg: "#C8102E",
    tags: ["Java", "Python", "OOP", "Mentoring"],
  },
  {
    role: "Data Science Intern",
    company: "SharkNinja",
    companyUrl: "https://www.sharkninja.com/",
    date: "Aug 2019 — Jul 2020",
    location: "Needham, MA",
    logo: SharkNinja,
    logoBg: "#ffffff",
    tags: ["Python", "Machine Learning", "JupyterLab", "Data Analysis"],
  },
];

const Timeline = () => {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-mono text-accent mb-3">{"// career"}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Where I've <span className="text-gradient">worked</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            A timeline of roles spanning full-stack, embedded, and data engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Logo circle */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-12 h-12 rounded-full border-2 border-[#0a0a0a] shadow-lg grid place-items-center p-2 hover:scale-110 transition-transform"
                    style={{ background: exp.logoBg }}
                  >
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </a>
                  {exp.current && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                    </span>
                  )}
                </div>

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass card-hover rounded-2xl p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-accent mb-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                      </svg>
                      {exp.date}
                    </div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-zinc-400 text-sm mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span>{exp.location}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-accent/10 text-accent border border-accent/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
