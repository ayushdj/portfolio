import React from "react";
import github from "../../single-page-developer-portfolio/starter-code/assets/images/icon-github.svg";
import linkedin from "../../single-page-developer-portfolio/starter-code/assets/images/icon-linkedin.svg";
import twitter from "../../single-page-developer-portfolio/starter-code/assets/images/icon-twitter.svg";

const Footers = () => {
  return (
    <section className=" bg-dark-gray pb-8">
      <div className="flex flex-col  md:flex-row  justify-between items-center w-full h-20 md:h-16 text-white px-8 max-w-6xl mx-auto">
        <div className="">
          <h3 className="text-2xl font-bold xs:mt-2 md:mt-0">ayushdj</h3>
        </div>

        <ul className="flex xs:mt-4 md:mt-0">
          <li className="px-4">
            <a
              href="https://github.com/ayushdj"
              rel="noreferrer"
              target="_blank"
            >
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
      </div>
    </section>
  );
};

export default Footers;
