import React from "react";
import { motion } from "framer-motion";
import img from "../../single-page-developer-portfolio/starter-code/assets/images/IMG_7926.jpg";

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "4", label: "Companies" },
];

const stack = [
  "React", "TypeScript", "Node.js", "Java", "Python", "AWS", "MongoDB", "Docker"
];

const Intro = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-8">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-zinc-300 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl leading-[1.05]"
          >
            Hi, I'm<br />
            <span className="text-gradient">Ayush Dhananjai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed"
          >
            Software engineer building full-stack applications that enhance user experience.
            Currently pursuing an MS in Computer Science at Northeastern, with experience at{" "}
            <span className="text-white font-medium">Oracle</span>,{" "}
            <span className="text-white font-medium">Cohere Health</span>, and{" "}
            <span className="text-white font-medium">SharkNinja</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="https://drive.google.com/file/d/1Ra8TCyQyybRw5qrsluBS35de2yMOl7Os/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-black font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(78,225,160,0.4)]"
            >
              View Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {stack.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full text-xs font-medium text-zinc-400 border border-white/10 bg-white/5">
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-md"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl px-4 py-3">
                <div className="text-2xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 via-sky-500/20 to-violet-500/30 blur-2xl rounded-3xl" />
          <div className="relative glass rounded-3xl p-2 animate-float">
            <img
              src={img}
              alt="Ayush Dhananjai"
              className="w-full aspect-[3/4] object-cover rounded-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <div className="text-xs">
                <div className="font-semibold text-white">Based in Boston, MA</div>
                <div className="text-zinc-400">Currently @ Oracle Health</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
