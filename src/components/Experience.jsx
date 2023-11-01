import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { experiences } from "../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience}) => (
  <VerticalTimelineElement
  // The various Attributes are used to control the appearance of our vertical TimeLineElement

    contentStyle={{ background: "transparent", color: "#a3e635"}} //this attribute sets the backgroud color of the TimeLineElement
    contentArrowStyle={{ borderRight: "12px solid #A3E635" }} //this is for the arrow
    date={experience.date} //here's the date 
    iconStyle={{ background: experience.iconBg }} // this for the icon background appearance
    icon={
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    } //this for the icon itself


  >
  
  <div className="w-full">
  <div className="p-2 sm:p-3 lg:p-6">
      <h3 className="text-white text-[24px]">{experience.title}</h3>
      <h5 className="text-base text-lime-400 font-mono font-thin mt-2">{experience.company_name}</h5>
<div className="mt-2 pb-4 pr-2 sm:pr-6">
  
<ul className="space-y-6">
        {experience.points.map((point, index) => (
          <div className="flex items-center justify-start gap-4 my-2 glass-effect shadow-2xl hover:shadow-inner rounded-2xl">
            <span className="w-4 h-6 rounded-2xl bg-lime-600 "></span>
              <li key={index} className="text-sm p-4 line-height-2 text-neutral-400 tracking-wide font-normal ">{point}</li>

            {/* <span className="w-4 h-2 rounded-2xl bg-lime-400 "></span> */}
<span />
          </div>
        ))}
      </ul>
</div>
    </div>
  </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <div className="">
      <motion.div variants={textVariant} className="text-center flex flex-col justify-center items-center">
       <p className={`${styles.sectionSubText} text-center`}>What i have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </motion.div>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="border-none">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} id={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// The VerticalTimeline Tag is used to wrap the VerticalTimelineElement tag and inside of this tag we specify the props that are used to control the appearance of our VerticalTimeline Elements 

/*  <VerticalTimeline>
      <VerticalTimelineElement 
      contentStyle={{your styles come in here}}
      contentArrowStyle={{ your styles come in here}}
      date={{your date comes here}}
      iconStyle={{iconStyles comes here}}
      icon={{
          <div>
              your desired icon come in here
          </div>
      }}
      >


      </VerticalTimelineElement>

    </VerticalTimeline>

    */

export default SectionWrapper(Experience, "Experience");
