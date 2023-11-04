import React from "react";
import { Tilt } from "react-tilt";
// The Tilt element must be wrapped in a motion container
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ProjectCard = ({
  index,
  name,
  image,
  description,
  tags,
  source_code_link,
}) => {
  return (
    <div className="rounded-2xl shadow-2xl hover:shaow-inner">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}

          className="rounded-2xl bg-neutral-900 border-neutral-700 w-[250px] sm:w-[360px] md:p-4"
        >
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
            <img src={image} alt={name} className="w-full object-center rounded-2xl object-contain " />

            <div className="hidden right-0 inset md:flex justify-end card-img-hover">
              <div className="w-10 h-10 rounded-full text-lime-400 p-2 flex justify-center items-center cursor-pointer"
              onClick={() => {
                window.open(source_code_link)
              }}
              >
                <img src={github} alt="github" className="w-6 h-6 object-contain" />
              </div>
            </div>
          </div>
<span />
          <div className="p-2 rounded-xl">
            <h3 className="text-white text-xl sm:text-2xl font-semibold">{name}</h3>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 font-medium">{description}</p>



            <div className="w-full flex flex-wrap justify-between gap-4 mt-3">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-base font-medium ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
          </div>

          
        </Tilt>
      </motion.div>
    </div>
  );
};


const Works = () => {
  return (
    <div className={`border-t-2 border-green-400 rounded-2xl  p-2 sm:p-4`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-base text-neutral-400 max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-work
          examples of my work. Each project is briefly described with links to
          code repository and live demos in it. it reflects my ability to solve
          complex problems, work with different technologies and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="w-full no-scrollbar overflow-auto mt-20 flex items-center gap-5">
        {projects.map((project, index) => (
           <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
