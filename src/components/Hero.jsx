import React from "react";
// import { StarsCanvas, ComputerCanvas } from "./canvas";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { profileLinks } from "../constants";
import { mann } from "../assets";
const Hero = () => {
  const myProfile = mann;
  return (
    <>
      <div>
        {/* <StarsCanvas /> */}
        <div className="relative z-0">
          <div
            className={`px-4 sm:px-0 py-10 mb-20 md:py-36  xl:flex-row flex-col-reverse flex w-full max-w-7xl mx-auto`}
          >
            <section
              className={`w-full h-full flex flex-col items-end justify-end relative`}
            >
              <div className="w-full px-4 rounded-xl glass-effect shadow-xl flex flex-col sm:flex-row  gap-4 items-center justify-between">
                <div className="w-full max-w-2xl pt-20 md:pr-20 sm:py-10">
                  <div className="glitch-wrapper w-full flex justify-start items-start">
                    <div className="w-full hidden max-w-2xl py-5">
                      <div className="glitch-wrapper hidden sm:block w-fit bg-neutral-900 rounded-xl shadow-xl p-2  justify-start items-start">
                        <p className="text-md text-lime-400 font-mono font-thin tracking-wider ">
                          Hello, I'm
                        </p>
                        <div
                          className="glitch hidden  ml-6 text-4xl md:text-xl text-lime-400 font-bold"
                          data-glitch="God'spower"
                        >
                          {" "}
                        </div>
                        <span class="font-sans text-white font-semibold ">
                          God'spower 👋
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="w-full max-w-xl mx-auto flex flex-col items-center justify-center"
                    // variants={slideIn("down", "", 0.1, 0.)}
                    variants={textVariant()}
                    // textVariant() method is used to animate the texts
                    // the vairiants prop is used to define what you're giving motion effects to
                  >
                    <h1
                      id=""
                      className="text-4xl  sm:text-5xl md:text-[62px] font-black text-white text-center sm:text-left"
                    >
                      Building digital products, brands, and experience
                      {/* <i class="fa fa-camera-retro fa-2x"></i> */}
                    </h1>
                  </motion.div>

                  <motion.p
                                 variants={slideIn("left", "", 0.23, 0.3)}

                    className="my-4 text-neutral-400 text-[13px] sm:text-base text-center sm:text-left max-w-3xl leading-7"
                  >
                    I'm a skilled software developer with Experience in
                    TypeScript and JavaScript, and expertise in framerwoks like
                    React, Node.js and Three.js. I'm a quick learner and
                    collaborate closely with clients to create efficient,
                    scalable, and user-friendly solutions that solve real-world
                    problems. Let's work together to bring your ideas to life!
                  </motion.p>
                  <div className="w-full flex flex-col items-center justify-center sm:items-start">
                    <ul className="list-none flex gap-2 mt-4">
                      {profileLinks.map((link) => (
                        <li
                          key={link.id}
                          className={`
            text-lime-400"
              px-2 py-2 rounded-xl bg-neutral-900 hover:text-lime-500 shadow-inner hover:shadow text-xs font-semibold cursor-pointer`}
                          onClick={() => {
                            setActive(link.title);
                          }}
                        >
                          <a
                            href={`#${link.id}`}
                            className="text-sm text-neutral-500 hover:text-lime-400 font-mono flex gap-1 items-center justify-center"
                          >
                            {/* <span className="w-1 ml-1 h-1 rounded-full bg-lime-400 bg-opacity-20 animate-ping"></span> */}
                            <span className="text-xs text-neutral-400 animate-pulse">
                              <i class={link.icon}></i>
                            </span>

                            <span className="text-xs">{link.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="w-full flex items-center justify-center sm:justify-start">
                      <button className="w-72 mt-5 sm:mt-8 bg-green-400 border border-green-400 text-neutral-900 shadow-xl rounded-xl md:rounded-tr-xl px-6  py-3 text-sm sm:text-base font-mono  font-bold  uppercase flex items-center justify-center gap-2">
                        let's build Together
                        <span className="text-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full  max-w-sm  md:flex items-center justify-center rounded-xl bg-neutral-800 bg-opacity-5">
                  {/* Image section */}

                  <motion.div
                    variants={slideIn("bottom", "tween", 0.23, 1)}
                    className="w-full hidden sm:block"
                  >
                    <div className="w-full md:w-96 h-80 bg-neutral-900 p-4 md:mt-0 rounded-full flex items-center justify-end">
                      <img
                        src={myProfile}
                        className="w-full h-full object-cover  border-4  border-neutral-800 rounded-full"
                        alt="my gif"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>

          <div className="absolute -bottom-4 xs:bottom-24 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-8 h-12 rounded-full border-4 border-white   flex justify-center items-start p-2 cursor-pointer">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="text-white w-2 h-2  rounded-full bg-white  mb-1"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
