"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] ralative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Wilfred Pinto
          </h4>
          <p className="mt-2 font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            CEO | CMW CO2 Technologies
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          Our mission at CMW is to revolutionize industrial cleaning through
          innovative and sustainable solutions. Our dry ice blasting technology
          provides a safe, effective, and eco-friendly alternative to
          traditional cleaning methods. We are dedicated to helping companies
          improve their operations and reduce their impact on the environment. ”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex flex-1 justify-center items-center"
      >
        <iframe
          width="1280"
          height="610"
          src="https://www.youtube.com/embed/Jw9gfDyy1Ic"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        {/* <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp/img"
            className="w-[155px] animate-spin-slow h-[155px] object-contain"
          />
        </motion.div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
