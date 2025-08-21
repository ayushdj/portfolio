import React from "react";
// import Rings from "../../single-page-developer-portfolio/starter-code/assets/images/pattern-rings.svg";
import img from "../../single-page-developer-portfolio/starter-code/assets/images/Dhananjai, Ayush_JPP0388.jpeg";

const Intro = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto mt-12" id="about">
        <div className="">
          {/* <img
            className="absolute  xs:invisible md:visible top-[200px] max-w-[1000px] xl:left-[-4px] xl:top-[220px] z-0"
            src={Rings}
            alt=""
          /> */}
        </div>
        <div className="flex xs:flex-col lg:flex-row-reverse justify-between items-center text-white px-8 mx-auto mb-16 z-20">
          <div className="justify-start">
            <img
              className="flex rounded-lg flex-1 max-h-[400px] md:max-h-[550px] xl:max-h-[700px]"
              src={img}
              alt="ayush_dhananjai"
            />
          </div>

          <div className="max-w-[680px] text-center lg:text-left">
            <h1 className="xl:max-w-[680px] md:max-w-[445px] justify-start font-bold lg:text-[40px] xs:text-2xl mt-4 md:text-5xl xs:mb-4 tracking-[-1.14px] md:mb-12">
              Hello! I'm <br />{" "}
              <span className="underline underline-offset-[5px] decoration-[#4EE1A0] ">
                Ayush Dhananjai
              </span>
            </h1>
            <p className="max-w-[445px] font-medium text-lg mb-14">
              I'm a software Engineer with a passion for creating full-stack
              applications that enhance user experience. After completing my
              undergraduate studies in Astrophysics, I am now pursuing a Masters
              degree in Computer Science at Northeastern University. Since then,
              I have worked as a Software Engineer at Oracle and Lutron
              Electronics and as a Data Scientist/Data Analyst at SharkNinja.
              <br />
              <br />
              In my spare time, I love to fiddle with front-end projects. I am
              also a professional dancer! Feel free to checkout my latest
              performance{" "}
              <a
                className="underline underline-offset-[5px] decoration-[#4EE1A0]"
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=tSTMZNueUsI"
              >
                here.
              </a>
            </p>
            <a
              href="https://drive.google.com/file/d/1vY-utTo-d5jJ66VA3XHnpbTKfnL--C9B/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <button
                className="bg-transparent
                      text-white font-semibold py-2 px-4 border bg-[#2b3945]
                       hover:border-transparent rounded
                      hover:text-black rounded transition duration-500 py-2 text-md text-white hover:bg-gray-100"
                id="repo-button"
              >
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="mx-8">
          <div className="bg-white h-[1px] max-w-8xl mb-16 mx-auto" />
        </div>
      </section>
    </>
  );
};

export default Intro;
