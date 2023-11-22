import React from "react";
// import { StarsCanvas } from "./canvas";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { profileLinks } from "../constants";
import { mann } from "../assets";
const Hero = () => {
  const myProfile = mann;
  return (
    <>
      {/* <StarsCanvas /> */}
      <div className="w-full">
        <div
          className={`px-4 sm:px-0 py-2 mb-20  md:py-24  xl:flex-row flex-col-reverse flex  w-full max-w-7xl mx-auto`}
        >
          <section
            className={`w-full sm:h-[50vh] glass-effect flex flex-col sm:flex-row justify-between relative`}
          >
            <div className="w-full sm:w-1/2 pt-10 sm:py-10">
              <motion.div
                className="w-full"
                variants={textVariant()}
                // textVariant() method is used to animate the texts
                // the vairiants prop is used to define what kind of motion effect you wish to apply
              >
                <div className="block sm:hidden w-32  md:w-96 mx-auto md:h-80  md:mt-0 rounded-full">
                  <img
                    src={myProfile}
                    className="w-full h-full object-cover shadow-2xl  border-8  border-neutral-900 rounded-full"
                    alt="my gif"
                  />
                </div>

                <div className="text-center sm:text-left sm:pr-10">
                  <p className="mt-1 text-lg font-thin  text-neutral-600 tracking-tight">
                    Hi, I'm{" "}
                    <span className="text-neutral-400  font-thin">
                      God'spower{" "}
                      {/* <i
                        className="fa fa-hand-peace-o text-4xl text-green-400 animate-bounce"
                        aria-hidden="true"
                      ></i> */}
                    </span>
                  </p>
                  <h1
                    id=""
                    className="mt-4 text-5xl sm:text-5xl md:text-[62px] font-black text-white text-center sm:text-left"
                  >
                    Building digital products, brands, and experience
                    {/* <i class="fa fa-camera-retro fa-2x"></i> */}
                  </h1>

                  <p className="my-4 sm:pr-20  text-neutral-500  text-[16px] sm:text-[18px] text-center sm:text-left font-medium leading-7">
                    A Web and UI designer, based in Nigeria, passionate about
                    Solving visual Problems and Enhancing User Experiences
                    {/* I'm a skilled software developer with Experience in
                      TypeScript and JavaScript, and expertise in framerwoks
                      like React, svelte, Node.js and Three.js. I'm a quick learner and 
                      collaborate closely with clients to create efficient,
                      scalable, and user-friendly solutions that solve
                      real-world problems. Let's work together to bring your
                      ideas to life! */}
                  </p>
                </div>
              </motion.div>

              <div className="w-full flex flex-col items-center justify-center sm:items-start">
             
                <div className="w-full flex items-center justify-center sm:justify-start">
                  <button className="w-full sm:w-fit mt-10 sm:mt-8 bg-green-500 border border-green-500 text-neutral-900 shadow-xl rounded-xl md:rounded-tr-xl px-6  py-3 text-sm sm:text-xl font-mono  font-black   uppercase flex items-center justify-center gap-2">
                    Try me
                    <span className="text-neutral-900">
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

            <div className="w-full  sm:w-1/2  flex items-start justify-start rounded-xl">
              {/* Image section */}

              <motion.div
                variants={slideIn("bottom", "tween", 0.23, 1)}
                className="w-full mt-8 hidden sm:flex item-center  justify-end"
              >
                <div className="glass-effect">
                  <div className="glass-effect">
                    <div className="glass-effect">
                    <svg id="10015.io" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="svg-pattern" x="0" y="0" width="51" height="51" patternUnits="userSpaceOnUse" patternTransform="translate(16, 16) rotate(99) skewX(45)"><svg width="35" height="35" viewBox="0 0 100 100"><g fill="#47ff86" opacity="0.95"><circle cx="72.5" cy="27.5" r="17.5"></circle><circle cx="72.5" cy="72.5" r="17.5"></circle><circle cx="27.5" cy="27.5" r="17.5"></circle><circle cx="27.5" cy="72.5" r="17.5"></circle></g></svg></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="#17171b"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#svg-pattern)"></rect></svg>
                      <div className="glass-effect flex flex-col items-center justify-center">
                        <div className="w-full md:w-96 glass-effect shadow-xl p-6 md:mt-0 rounded-full ">
                          <img
                            src={myProfile}
                            className="w-full h-full object-cover  border-12  border-yellow-400 rounded-full"
                            alt="my gif"
                          />
                        </div>
                        <ul className="glass-effect p-4 list-none flex gap-4 mt-4">
                  {profileLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`
          "
             hover:shadow text-xs font-semibold cursor-pointer`}
                      onClick={() => {
                        setActive(link.title);
                      }}
                    >
                      <a
                        href={`#${link.id}`}
                        className="text-2xl text-neutral-600 hover:text-lime-400 font-mono flex  items-center justify-center"
                      >
                        {/* <span className="w-1 ml-1 h-1 rounded-full bg-lime-400 bg-opacity-20 animate-ping"></span> */}
                        <span className="text-lg text-gray-100 w-8 h-8 flex items-center justify-center  rounded-full bg-neutral-900 animate-pulse">
                          <i className={link.icon}></i>
                        </span>

                        <span className="text-[14px]">{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        <div className="absolute -bottom-12 xs:bottom-24 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-8 h-12 rounded-full border-4 bg-neutral-800   flex justify-center items-start p-2 cursor-pointer">
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
    </>
  );
};

export default Hero;
