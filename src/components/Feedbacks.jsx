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
        className="glass-effect hover:bg-neutral-900  hover:shadow-xl  rounded-xl  md:p-10 w-full sm:w-[320px]"
      >
        <div className="border-t-2 border-neutral-900  p-2">
          <p className="py-1 text-neutral-400 text-sm tracking-wider">{testimonial}</p>

          <div className="mt-7 flex justify-between gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-[16px] font-medium">
                <span className="text-green-500">@</span> <span class="text-green-400">{name}</span>
              </p>
              <p className="mt-1 text-sm text-neutral-200">
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
    
    className={`w-full border-t-2 border-green-400 rounded-t-2xl shadow-xl mt-12 p-4 rounded-2xl  relative`}
    >
      <div
        className={`rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What other's say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>

      <div
        className={`w-full rounded-2xl -mt-44 pb-14 flex flex-wrap justify-between gap-7 `}
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
