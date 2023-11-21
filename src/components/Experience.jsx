import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { experiences } from "../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience, index}) => (
<div className="w-full h-screen">
<VerticalTimelineElement
key={experience.index}
  // The various Attributes are used to control the appearance of our vertical TimeLineElement
    contentStyle={{ background: "transparent", color: "#bbbbbb"}} //this attribute sets the backgroud color of the TimeLineElement
    contentArrowStyle={{ borderRight: "12px solid #bbbbbb" }} //this is for the arrow
    date={experience.date} //here's the date 
    iconStyle={{ background: experience.iconBg }} // this for the icon background appearance
    icon={
      <div 
      
      className="w-full h-full flex items-center justify-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    } //this for the icon itself


  >
  
  <div 
  key={index}
  className="w-full">
  <div className="sm:p-3 lg:p-6">
      <h3 className="text-white text-[24px]">{experience.title}</h3>
      <h5 className="text-base text-stone-500 font-mono font-thin mt-2">{experience.company_name}</h5>
<div className="mt-2 pb-4 sm:pr-6">
  
<ul className="space-y-6">
        {experience.points.map((point, index) => (
          <div key={index} className="flex items-center justify-start gap-2 my-2 bg-neutral-900 shadow-2xl hover:shadow-inner rounded-2xl">
            <span className="w-4 h-6 rounded-2xl bg-green-600 "></span>
              <li  className="text-sm p-2 line-height-2 text-neutral-400 tracking-wide font-normal ">{point}</li>

            {/* <span className="w-4 h-2 rounded-2xl bg-green-400 "></span> */}
<span />
          </div>
        ))}
      </ul>
</div>
    </div>
  </div>
  </VerticalTimelineElement>
</div>
);

const Experience = () => {
  return (
    <>
      <div className="w-full">
      <motion.div variants={textVariant} className="text-center flex flex-col justify-center items-center">
       <p className={`${styles.sectionSubText} text-center`}>What i have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </motion.div>
      </div>

      <div className="w-full h-full mt-10 sm:mt-20 flex flex-col">
        <VerticalTimeline className="border-none">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} index={index} id={index} experience={experience} />
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
