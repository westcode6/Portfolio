import React from "react";
// import { StarsCanvas } from "./canvas";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { profileLinks } from "../constants";
import { mann } from "../assets";
import { styles } from "../styles";

const Hero = () => {
  const myProfile = mann;
  return (
    <>
      {/* <StarsCanvas /> */}
      <div className="w-full hero-glass-effect">
        <div
          className={`p-${styles.paddingX} hidden px-4 sm:px-0 py-2 mb-16  md:py-24 flex-col-reverse  lg:flex-row  w-full max-w-7xl mx-auto`}
        >
          <section
            className={`w-full sm:h-[50vh] glass-effect flex flex-col justify-center items-center lg:flex-row lg:justify-between relative`}
          >
            <div className="w-full lg:w-1/2 md:px-10 pt-5 sm:py-10">
              <div className="w-full flex flex-col items-center justify-center sm:items-start">
                <div className="w-full px-10 flex items-center justify-center sm:justify-start">
                  <button className="w-full sm:w-fit mt-10 sm:mt-8 live-yellow  text-live-yellow shadow-xl rounded-full md:rounded-tr-xl px-6  py-4 text-2xl sm:text-xl animate-pulse font-black uppercase flex items-center justify-center gap-2">
                    <a
                      href="https://api.whatsapp.com/send?phone=09065017306"
                      className=""
                    >
                      {/* <span className="p-2 rounded-full shaodow-xl bg-neutral-900 mr-1 text-red-500  font-mono flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>{" "} */}
                      <span className="text-2xl">
                        <i className="fa fa-glass mr-1 " aria-hidden="true"></i>
                      </span>
                      Let's talk
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <main
          className={`px-6  md:px-16 lg:px-32 py-6 w-full 
        h-[105vh] lg:h-[90vh]`}
        >
          <header className="w-inherit h-inherit flex flex-col lg:flex-row p-2 sm:p-6">
            <div className="w-full md:max-w-1/2 flex flex-col items-center">
              <motion.div
                className="w-full"
                variants={textVariant()}
                // textVariant() method is used to animate the texts
                // the vairiants prop is used to define what kind of motion effect you wish to apply
              >
                <div className="block sm:hidden w-16  md:w-96 mx-auto md:h-80  md:mt-0 rounded-full">
                  <img
                    src={myProfile}
                    className="w-full h-full object-cover shadow-2xl  border-8  border-neutral-900 rounded-full"
                    alt="my gif"
                  />
                </div>

                <div className="w-full text-center sm:text-left mt-4 sm:pr-10">
                  <div className="w-full flex items-center justify-center lg:justify-start">
                    <p className="text-xl font-mono text-neutral-500">Hi,</p>
                    <span className="text-2xl text-neutral-600"> I'm 👀</span>{" "} 
                    
                    
                    <p className="px-2 text-2xl font-thin  text-white animate-pulse">God'spower</p>
                    </div>
                  <h1
                    id=""
                    className="mt-4 text-5xl sm:text-5xl md:text-[62px] font-black text-white text-center sm:text-left"
                  >
                    Building digital products, brands, and experience
                    {/* <i class="fa fa-camera-retro fa-2x"></i> */}
                  </h1>

                  <p className="mt-8 sm:pr-10 text-neutral-600  text-[18px] sm:text-[18px] text-center sm:text-left font-medium leading-7">
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
                  <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center sm:justify-start md:gap-10">
                    <button className="w-full sm:w-fit mt-5 sm:mt-8 live-yellow  text-live-yellow transform transition hover:-translate-x-4 shadow-xl rounded-full md:rounded-tl-xl px-6  py-4 text-2xl sm:text-xl animate-pulse font-black uppercase flex items-center justify-center gap-2">
                      <a
                        href="https://api.whatsapp.com/send?phone=09065017306"
                        className=""
                      >
                        {/* <span className="p-2 rounded-full shaodow-xl bg-neutral-900 mr-1 text-red-500  font-mono flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>{" "} */}
                        <span className="text-2xl">
                          <i
                            className="fa fa-glass mr-1 "
                            aria-hidden="true"
                          ></i>
                        </span>
                        Let's talk
                      </a>
                    </button>

                    <div className="w-fit py-2 flex items-center gap-2 lg:flex-col">
                      <button className="text-neutral-600 font-mono font-thin text-sm flex items-center lg:pt-6">
                        {" "}
                        <span className="text-2xl text-live-yellow">
                          <i
                            className="fa fa-phone mr-3"
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                        09065017306
                      </button>
                      <button className="text-neutral-600 font-mono font-thin text-sm flex items-center py-2">
                        {" "}
                        <span className="text-2xl text-live-yellow">
                          <i
                            className="fa fa-whatsapp mr-3 "
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                        09065017306
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:max-w-1/2 flex items-center justify-center">
              <motion.div
                variants={slideIn("bottom", "tween", 0.23, 1)}
                className="w-full mt-8 hidden sm:flex item-center  justify-end"
              >
                <div className="overflow-hidden p-2">
                  <div className="shadow-2xl">
                    <div className="shadow-2xl">
                      {/* <svg id="10015.io" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="svg-pattern" x="0" y="0" width="51" height="51" patternUnits="userSpaceOnUse" patternTransform="translate(16, 16) rotate(99) skewX(45)"><svg width="35" height="35" viewBox="0 0 100 100"><g fill="#47ff86" opacity="0.95"><circle cx="72.5" cy="27.5" r="17.5"></circle><circle cx="72.5" cy="72.5" r="17.5"></circle><circle cx="27.5" cy="27.5" r="17.5"></circle><circle cx="27.5" cy="72.5" r="17.5"></circle></g></svg></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="#17171b"></rect><rect x="0" y="0" width="100%" height="100%" fill="url(#svg-pattern)"></rect></svg> */}
                      <div className="live-green flex flex-col items-center justify-center">
                        <div className="w-full md:w-80  shadow-xl p-6 md:mt-0 rounded-full ">
                          <img
                            src={myProfile}
                            className="w-full h-full object-cover  border-12  border-yellow-400 rounded-full"
                            alt="my gif"
                          />
                        </div>
                        <ul className="live-yellow rounded-full p-4 list-none flex gap-4 mt-4">
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
                                className="bg-neutral-950  rounded-full p-2 text-2xl text-neutral-600  hover:text-lime-400 font-bold  font-mono flex  items-center justify-center"
                              >
                                {/* <span className="w-1 ml-1 h-1 rounded-full bg-lime-400 bg-opacity-20 animate-ping"></span> */}
                                <span className="text-lg text-neutral-500 w-8 h-8 flex items-center justify-center  rounded-full bg-neutral-950 animate-pulse">
                                  <i className={link.icon}></i>
                                </span>

                                <span className="text-[14px] font-mono font-black">
                                  {link.title}
                                </span>
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
          </header>
        </main>

        <div className="hidden md:absolute -bottom-40 xs:bottom-24 w-full  justify-center items-center">
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
