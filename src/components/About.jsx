import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// Create The Service Card Component to render our services
export const ServiceCard = ({index, title, icon, desc}) => {
  return (
    <Tilt className="xs:w-[220px] bg-neutral-900 w-full  rounded-xl">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        // animation pattern
        className="w-full"
      >
        {/* The Tilt options are coming into this div */}
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="w-full  shadow-xl border border-neutral-800 px-10 py-10 rounded-2xl flex flex-col  items-center justify-center gap-2">
          <img src={icon} alt={title} className="w-16 h-16 object-contain object-center" />
          <h4 className="text-white text-base font-normal mt-2">{title}</h4>
          <p className="mt-2 text-base text-neutral-400">{desc}</p>
        </div>
      </motion.div>
      
    </Tilt>
  );
};


const About = () => {
  return (
    <>
<div id="about" className={`px-4 md:px-0 flex flex-col items-center justify-center text-center`}>
      {/* NOTE: that every motion effects must be passed as props in the motion tag */}
     <div>
     <motion.div
      className="w-full max-w-xl mx-auto flex flex-col items-center justify-center"
        variants={textVariant()} // textVariant() method is used to animate the texts
        // the vairiants prop is used to define what you're giving motion effects to
      >
        {/* <h2 className="bg-primary">Chech the color here</h2> */}
        {/* <p className={`${styles.sectionSubText}`}>Introduction

        </p> */}
        <h2 className={`${styles.sectionHeadText}`}><span className="border-b-4 border-lime-400 rounded-b-2xl px-4 shadow-xl">Collaborate</span> with brands and agencies to create impactful results</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-gray-gradient text-[16px] max-w-3xl leading-7 hidden">
        I'm a skilled software developer with Experience in TypeScript and
        JavaScript, and expertise in framerwoks like React, Node.js and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
     </div>

      <div className="px-5 mt-8 md:mt-24 flex flex-end justify-end flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>

    </>
  );
};

export default SectionWrapper(About, "about")
