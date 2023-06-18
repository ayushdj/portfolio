import React from "react";
import { useForm } from "react-hook-form";
import Warning from "../../single-page-developer-portfolio/starter-code/assets/images/warning.svg";

const Contact = () => {

  const form = useForm();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    window.open('mailto:ayushdj13@gmail.com?subject=' + data.name + ' - ' + data.email + '&body=' + data.chat);
  };
  return (
    <section className="bg-dark-gray lg:justify-center" id="contact">
      <div className=" text-white px-8 max-w-6xl mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center lg:items-center py-16">
          <div className="text-center xl:text-left mb-4">
            <h2 className="font-bold text-[40px] md:text-[72px] underline underline-offset-[5px] decoration-[#4EE1A0] mt-[-50px]">
              Contact Me!
            </h2>
            <p className="font-medium text-[18px] leading-7 max-w-[445px]">
              Let's connect! I would love to hear about your project and how I
              could help. Also, if you have any feedback/suggestions regarding
              the projects I've worked on above, please reach out!
            </p>
          </div>
          <div className=" ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="md:min-w-[445px] xs:min-w-[320px] w-full"
            >
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is required",
                    },
                  })}
                  //   onChange={handleNameChange}
                  className="bg-transparent border-b py-3 outline-none w-full placeholder:text-greyish focus:border-greenish transition-all"
                  placeholder="NAME"
                />
                {errors.name ? (
                  <img
                    className="absolute right-0 top-0 py-3"
                    src={Warning}
                    alt="warning"
                  />
                ) : (
                  ""
                )}
              </div>

              <p className="errors">{errors.name?.message}</p>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Sorry, invalid format here",
                    },
                  })}
                  className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-greyish focus:border-greenish transition-all"
                  placeholder="EMAIL"
                />
                {errors.email ? (
                  <img
                    className="absolute right-0 top-0 py-3"
                    src={Warning}
                    alt="Warning"
                  />
                ) : (
                  ""
                )}
              </div>
              <p className="errors">{errors.email?.message}</p>

              <div className="relative mt-2">
                <textarea
                  id="chat"
                  {...register("chat", {
                    required: {
                      value: true,
                      message: "message is required",
                    },
                  })}
                  className="bg-transparent border-b  outline-none w-full min-h-[107px] placeholder:text-greyish focus:border-greenish transition-all resize-none"
                  placeholder="MESSAGE"
                ></textarea>
                {errors.chat ? (
                  <img
                    className="absolute right-0 top-0 py-3"
                    src={Warning}
                    alt="warning"
                  />
                ) : (
                  ""
                )}
              </div>
              <p className="errors">{errors.chat?.message}</p>

              <div className="mt-6 flex xl:justify-end xs:justify-center">
                <button className="transparent uppercase underline underline-offset-[5px] decoration-[#4EE1A0] hover:text-greenish ">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white h-[1px] max-w-7xl mx-auto" />
      </div>
    </section>
  );
};

export default Contact;
