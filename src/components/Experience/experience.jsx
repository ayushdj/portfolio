import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import OracleLogo from "../../single-page-developer-portfolio/starter-code/assets/images/oracle-svgrepo-com.svg";
import LutronLogo from "../../single-page-developer-portfolio/starter-code/assets/images/pngegg.png";
import Daco_768955 from "../../single-page-developer-portfolio/starter-code/assets/images/Daco_768955.png";
import SharkNinja from "../../single-page-developer-portfolio/starter-code/assets/images/Shark_logo_black.png";
// import NortheasternSVG from './northeastern.svg'
// import

const Timeline = () => {
  return (
    <div class="p-4 mt-4" id="experience">
      <h1 class="text-4xl text-center font-bold mb-6 text-white underline underline-offset-[5px] decoration-[#4EE1A0]">
        Experience
      </h1>
      <section className="max-w-6xl mx-auto mt-12 mb-16">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="June 2022 - December 2022"
            iconStyle={{ background: "#C74634", color: "#fff" }}
            icon={
              <a
                href="https://www.oracle.com/health"
                target="_blank"
                rel="noreferrer"
              >
                <img src={OracleLogo} alt="oracle logo"></img>
              </a>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              Full-Stack Software Engineer
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              Oracle Health & AI
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Burlington, MA USA
            </h4>
            <p className="text-[#bcbdc2]">
              JavaScript, HTML, CSS, Node.js, Knockout.js, Java, MySQL, J2EE,
              REST API's, Docker, Jenkins, GitLab, Jira, Confluence
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="January 2022 - June 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <a
                href="https://www.lutron.com/en-US/pages/default.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LutronLogo} alt="Lutron logo"></img>
              </a>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              Embedded Software Engineer
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              Lutron Electronics
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Boston, MA USA
            </h4>
            <p className="text-[#bcbdc2]">
              C++, Python, Jenkins, Bitbucket, Jira, Confleunce
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="January 2021 - December 2021"
            iconStyle={{ background: "#C8102E", color: "#fff" }}
            icon={
              <a
                href="https://www.khoury.northeastern.edu"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Daco_768955} alt="Northeastern logo"></img>
              </a>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              Graduate Teaching Assistant
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              Northeastern University
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Boston, MA USA
            </h4>
            <p className="text-[#bcbdc2]">
              Java, Python, Objected Oriented Design, Mentoring
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#272728", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #272728" }}
            date="August 2019 - July 2020"
            iconStyle={{ background: "#54c2c2", color: "#fff" }}
            icon={
              <a
                href="https://www.sharkninja.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="xl:mt-5 lg:mt-4 sm:mt-4 md:mt-4 xs:mt-4"
                  src={SharkNinja}
                  alt="SharkNinja logo"
                ></img>
              </a>
            }
          >
            <h3 className="vertical-timeline-element-title !important text-[#d9dade] text-2xl text-bold decoration-[#4EE1A0] font-bold">
              Data Science Intern
            </h3>
            <h3 className="vertical-timeline-element-title text-[#d9dade]">
              SharkNinja
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#d9dade]">
              <i class="fa-solid fa-location-dot"></i> Needham, MA USA
            </h4>
            <p className="text-[#bcbdc2]">
              Python, Machine Learning, Data Analysis, JupyterLab, GitHub, Jira,
              Confluence
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
      <div className="mx-8">
        <div className="bg-white h-[1px] max-w-7xl mb-16 mx-auto" />
      </div>
    </div>
  );
};

export default Timeline;
