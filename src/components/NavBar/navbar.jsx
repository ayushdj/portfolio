import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import github from "../../single-page-developer-portfolio/starter-code/assets/images/icon-github.svg";
import linkedin from "../../single-page-developer-portfolio/starter-code/assets/images/icon-linkedin.svg";
import twitter from "../../single-page-developer-portfolio/starter-code/assets/images/icon-twitter.svg";

const navItems = [
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/ayushdj", icon: github, alt: "github" },
  { href: "https://www.linkedin.com/in/ayush-dhananjai/", icon: linkedin, alt: "linkedin" },
  { href: "https://twitter.com/AyushDhananjai", icon: twitter, alt: "twitter" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 h-16">
        <Link
          to="about"
          smooth
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-accent transition-colors">
            ayushdj<span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                spy
                offset={-80}
                activeClass="!text-accent !bg-white/5"
                className="cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.alt}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all"
            >
              <img src={s.icon} alt={s.alt} className="w-4 h-4" />
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden w-10 h-10 grid place-items-center rounded-full bg-white/5 border border-white/10"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1">
            <span className={`h-0.5 w-5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth
                    spy
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-2 pt-3 border-t border-white/10 mt-2">
                {socials.map((s) => (
                  <a
                    key={s.alt}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 grid place-items-center rounded-full bg-white/5 border border-white/10"
                  >
                    <img src={s.icon} alt={s.alt} className="w-4 h-4" />
                  </a>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
