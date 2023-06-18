import React from "react";
import github from "../../single-page-developer-portfolio/starter-code/assets/images/icon-github.svg";
import linkedin from "../../single-page-developer-portfolio/starter-code/assets/images/icon-linkedin.svg";
import twitter from "../../single-page-developer-portfolio/starter-code/assets/images/icon-twitter.svg";
import { Link } from "react-scroll";

const NavBar = () => {
  
  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full h-20 md:h-16 text-white px-8 max-w-7xl mx-auto">
      <div className="mb-2">
        <h3 className="text-2xl font-bold xs:mt-2 md:mt-0">ayushdj</h3>
      </div>
      <div class="relative inline-block text-center w-96 xs:mb-8 md:mb-0">
        <div class="flex md:mt-[-20px] absolute mb-9 w-96">
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex-1 rounded transition duration-500 py-2 text-md text-white hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
          >
            About Me
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex-1 rounded transition duration-500 py-2 text-md text-white hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex-1 rounded transition duration-500 py-2 text-md text-white hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="flex-1 rounded transition duration-500 py-2 text-md text-white hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <ul className="flex xs:mt-4 md:mt-0">
        <li className="px-4">
          <a href="https://github.com/ayushdj" rel="noreferrer" target="_blank">
            <img src={github} alt="github" />
          </a>
        </li>

        <li className="px-4">
          <a
            href="https://www.linkedin.com/in/ayush-dhananjai/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="px-4">
          <a
            href="https://twitter.com/AyushDhananjai"
            rel="noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
