import React from "react";
import front_end_web from "../../data/front_end_projects";
import misc from "../../data/misc_projects";
import mobile from "../../data/mobile_projects";
import Carousel from "react-elastic-carousel";
import "./style.css";

const Projects = () => {
  const breakPoints = [
    { width: 375, itemsToShow: 1 },
    { width: 640, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1024, itemsToShow: 2 },
    { width: 1280, itemsToShow: 2 },
    { width: 1536, itemsToShow: 3 },
  ];

  return (
    <section class="p-4  max-w-7xl mx-auto" id="projects">
      <h1 class="text-4xl text-center font-bold mb-6 text-white underline underline-offset-[5px] decoration-[#4EE1A0]">
        Projects
      </h1>
      <h3 class="text-2xl text-center font-semibold text-white ">
        Full-Stack/Front-End
      </h3>

      <Carousel breakPoints={breakPoints} className="mt-2">
        {front_end_web.map((each, idx) => (
          <div
            id={each.id}
            className="flex justify-center text-center flex-wrap transition duration-500 w-full"
            key={each.projectName}
          >
            <div className="max-w-sm">
              <div className="p-4 flex-col bg-[#272728] shadow-lg rounded-lg h-full">
                <div className="flex rounded-full text-center justify-center">
                  <img
                    className="w-66 h-64 text-center "
                    src={each.imageLocation}
                    alt={"project image for " + each.projectName}
                  />
                </div>
                <div className="mt-2">
                  <h3 className="vertical-timeline-element-title justify-center !important text-[#d9dade] text-2xl text-bold font-bold">
                    {each.projectName}
                  </h3>
                </div>
                <div className="mt-2">
                  <h3 className="vertical-timeline-element-title justify-center text-[#bcbdc2]">
                    {each.projectDescription}
                  </h3>
                </div>
                <div className="mt-2">
                  <span className="text-[#bcbdc2]">Tech: {each.skills}</span>
                </div>
                <div className="mx-8 mt-4 mb-4">
                  <div className="bg-[#4EE1A0] w-[100%] h-[1px] max-w-7xl " />
                </div>
                <div className="mt-2">
                  <a href={each.repoUrl} rel="noreferrer" target="_blank">
                    <button
                      className="bg-transparent
                        text-white font-semibold py-2 px-4 border bg-[#2b3945]
                         hover:border-transparent rounded
                        hover:text-black rounded transition duration-500 py-2 text-md text-white hover:bg-gray-100"
                      id="repo-button"
                    >
                      <i class="fa-brands fa-lg fa-github"></i> &nbsp;
                      Repository
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <h3 class="text-2xl text-center font-semibold mt-8 text-white ">
        Mobile Applications
      </h3>
      <Carousel breakPoints={breakPoints} className="mt-2">
        {mobile.map((each, idx) => (
          <div
            id={each.id}
            className="flex justify-center text-center flex-wrap transition duration-500 w-full"
            key={each.projectName}
          >
            <div className="max-w-sm">
              <div className="p-4 flex-col bg-[#272728] shadow-lg rounded-lg h-full">
                <div className="flex rounded-full text-center justify-center">
                  <img
                    className="w-66 h-64 text-center "
                    src={each.imageLocation}
                    alt={"project image for " + each.projectName}
                  />
                </div>
                <div className="mt-2">
                  <h3 className="vertical-timeline-element-title justify-center !important text-[#d9dade] text-2xl text-bold font-bold">
                    {each.projectName}
                  </h3>
                </div>
                <div className="mt-2">
                  <h3 className="vertical-timeline-element-title justify-center text-[#bcbdc2]">
                    {each.projectDescription}
                  </h3>
                </div>
                <div className="mt-2">
                  <span className="text-[#bcbdc2]">Tech: {each.skills}</span>
                </div>
                <div className="mx-8 mt-4 mb-4">
                  <div className="bg-[#4EE1A0] w-[100%] h-[1px] max-w-7xl " />
                </div>
                <div className="mt-2">
                  <a href={each.repoUrl} rel="noreferrer" target="_blank">
                    <button
                      className="bg-transparent
                      text-white font-semibold py-2 px-4 border bg-[#2b3945]
                       hover:border-transparent rounded
                      hover:text-black rounded transition duration-500 py-2 text-md text-white hover:bg-gray-100"
                      id="repo-button"
                    >
                      <i class="fa-brands fa-lg fa-github"></i> &nbsp;
                      Repository
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <h3 class="text-2xl text-center font-semibold mt-8 text-white ">
        Miscellaneous{" "}
      </h3>
      <Carousel breakPoints={breakPoints} className="mt-2 mb-8">
        {misc.map((each, idx) => (
          <div
            id={each.id}
            className="flex justify-center text-center flex-wrap transition duration-500 w-full"
            key={each.projectName}
          >
            <div className="max-w-sm">
              <div className="p-4 flex-col bg-[#272728] shadow-lg rounded-lg h-full">
                <div className="flex rounded-full text-center justify-center">
                  <img
                    className="w-66 h-64 text-center "
                    src={each.imageLocation}
                    alt={"project image for " + each.projectName}
                  />
                </div>
                <div className="mt-2">
                  <h3 className="vertical-timeline-element-title justify-center !important text-[#d9dade] text-2xl text-bold font-bold">
                    {each.projectName}
                  </h3>
                </div>
                <div className="mt-2">
                  <h3 className="vertical-timeline-element-title justify-center text-[#bcbdc2]">
                    {each.projectDescription}
                  </h3>
                </div>
                <div className="mt-2">
                  <span className="text-[#bcbdc2]">Tech: {each.skills}</span>
                </div>
                <div className="mx-8 mt-4 mb-4">
                  <div className="bg-[#4EE1A0] w-[100%] h-[1px] max-w-7xl " />
                </div>
                <div className="mt-2">
                  <a href={each.repoUrl} rel="noreferrer" target="_blank">
                    <button
                      className="bg-transparent
                      text-white font-semibold py-2 px-4 border bg-[#2b3945]
                       hover:border-transparent rounded
                      hover:text-black rounded transition duration-500 py-2 text-md text-white hover:bg-gray-100"
                      id="repo-button"
                    >
                      <i class="fa-brands fa-lg fa-github"></i> &nbsp;
                      Repository
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
