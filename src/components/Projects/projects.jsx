import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import front_end_web from "../../data/front_end_projects";
import misc from "../../data/misc_projects";
import mobile from "../../data/mobile_projects";

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Full-Stack / Web" },
  { id: "mobile", label: "Mobile" },
  { id: "misc", label: "Systems" },
];

const tagProjects = (projects, category) =>
  projects.map((p) => ({ ...p, category }));

const allProjects = [
  ...tagProjects(front_end_web, "web"),
  ...tagProjects(mobile, "mobile"),
  ...tagProjects(misc, "misc"),
];

const Projects = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="text-sm font-mono text-accent mb-3">{"// projects"}</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            A selection of projects ranging from full-stack apps to low-level systems.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                active === c.id
                  ? "bg-accent text-black border-accent shadow-[0_0_20px_rgba(78,225,160,0.3)]"
                  : "glass text-zinc-300 border-white/10 hover:border-white/30"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={`${project.category}-${project.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl overflow-hidden card-hover"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={project.imageLocation}
                    alt={project.projectName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono uppercase bg-black/60 backdrop-blur text-accent border border-accent/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                    {project.projectName}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 line-clamp-3">
                    {project.projectDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.skills.split(",").map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 bg-white/5 border border-white/5"
                      >
                        {s.trim()}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"
                  >
                    <i className="fa-brands fa-github" />
                    View repository
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                      <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
