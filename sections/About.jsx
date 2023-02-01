"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="Who are we" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        At{" "}
        <span className="font-extrabold text-white">CMW CO2 TECHNOLOGIES</span>,
        we're leaders in the field of dry ice blasting, having been pioneers in
        the industry since 2004. As the only manufacturers and exporters of dry
        ice blasting machines in India, we're proud to offer our customers{" "}
        <span className="font-extrabold text-white">
          the highest quality equipment
        </span>{" "}
        that meets ISO-9001:2015 and CE standards. With a vast array of
        satisfied customers in a variety of industries, including power,
        petrochemical, rubber, automotive, foundry, food, and pharma. We're{" "}
        <span className="font-extrabold text-white">confident </span> in our
        ability to provide effective and efficient dry ice cleaning solutions.
        Let us <span className="font-extrabold text-white">show you </span> how
        we can help you with your cleaning needs, scroll down to learn more!
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down/icon"
        className="w-[18px] animate-bounce h-[28px] object-contain mt-7"
      />
    </motion.div>
  </section>
);

export default About;
