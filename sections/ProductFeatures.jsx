"use client";

import { motion } from "framer-motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import styles from "../styles";

const features = [
  {
    icon: "fa-check-circle",
    heading: "Feature 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "fa-check-circle",
    heading: "Feature 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more features here
];

const ProductFeatures = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's New?" />
          <TitleText title={<>What's new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            test
          </div>
        </motion.div>
        <div className="flex">
          <div className="w-1/2 p-6">
            <div className="h-64 bg-gray-400"></div>
          </div>
          <div className="w-1/2 p-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <div className="flex">
                  <div className="w-1/2 text-center">
                    <i
                      className={`fa ${feature.icon} text-5xl text-green-500`}
                    ></i>
                    <h3 className="text-xl font-bold">{feature.heading}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mt-2 hover:text-gray-800">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductFeatures;
