import React from "react";
import github from "../../single-page-developer-portfolio/starter-code/assets/images/icon-github.svg";
import linkedin from "../../single-page-developer-portfolio/starter-code/assets/images/icon-linkedin.svg";
import twitter from "../../single-page-developer-portfolio/starter-code/assets/images/icon-twitter.svg";

const socials = [
  { href: "https://github.com/ayushdj", icon: github, alt: "github" },
  { href: "https://www.linkedin.com/in/ayush-dhananjai/", icon: linkedin, alt: "linkedin" },
  { href: "https://twitter.com/AyushDhananjai", icon: twitter, alt: "twitter" },
];

const Footers = () => {
  return (
    <footer className="relative border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="font-bold text-white">
            ayushdj<span className="text-accent">.</span>
          </span>
          <span className="text-zinc-500 text-sm ml-3">
            © {new Date().getFullYear()} Ayush Dhananjai. Built with React & Tailwind.
          </span>
        </div>
        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.alt}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all"
              >
                <img src={s.icon} alt={s.alt} className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footers;
