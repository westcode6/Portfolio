import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="glass-effect shadow-inner rounded-xl p-2 md:p-6 w-fit"
      >
        <div className="glass-effect shadow-2xl rounded-xl   p-4">
          <p className="py-1 text-stone-400 text-sm tracking-wider">{testimonial}</p>
<span />
          <div className="mt-7 flex justify-between gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-[16px] font-medium">
                <span className="text-neutral-700">@</span> <span className="text-stone-500 italic">{name}</span>
              </p>
              <p className="mt-1 text-sm text-stone-6 00">
                {designation} of {company}
              </p>
            </div>

            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Feedbacks = () => {
  return (
    <div 
    
    className={`w-full glass-effect rounded-t-2xl shadow-inner mt-12 p-4 rounded-2xl  relative`}
    >
      <div
        className={`rounded-2xl min-h-[300px] border-b border-lime-500`}
      >
        <motion.div variants={textVariant()} className="">
          <p className={`${styles.sectionSubText}`}>What other's say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>

      <div
        className={`w-full rounded-2xl glass-effect -mt-44 px-2 py-14 flex flex-col sm:flex-row justify-center gap-6`}
      >
        {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
