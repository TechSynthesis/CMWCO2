"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import styles from "../styles";
// import Check from "check.svg";

const Check = ({ props }) => (
  <svg
    width="20"
    height="20"
    fill="currentColor"
    className="h-6 w-6 text-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <path d="M 16 3 C 8.800781 3 3 8.800781 3 16 C 3 23.199219 8.800781 29 16 29 C 23.199219 29 29 23.199219 29 16 C 29 14.601563 28.8125 13.207031 28.3125 11.90625 L 26.6875 13.5 C 26.886719 14.300781 27 15.101563 27 16 C 27 22.101563 22.101563 27 16 27 C 9.898438 27 5 22.101563 5 16 C 5 9.898438 9.898438 5 16 5 C 19 5 21.695313 6.195313 23.59375 8.09375 L 25 6.6875 C 22.699219 4.386719 19.5 3 16 3 Z M 27.28125 7.28125 L 16 18.5625 L 11.71875 14.28125 L 10.28125 15.71875 L 15.28125 20.71875 L 16 21.40625 L 16.71875 20.71875 L 28.71875 8.71875 Z" />
  </svg>
);

const FeatureSection = () => (
  <section className="bg-white pb-6">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto px-6 p-6 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <div className="mb-16 text-center">
            <TypingText
              title="Benifits of Dry Ice Blasting"
              textStyles="text-center"
            />
            <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
              How we change the game
            </p>
          </div>
          <div className="flex flex-wrap my-12">
            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
              <div className="flex items-center mb-6">
                <Check
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-6 w-6 text-blue-500"
                />
                <div className="ml-4 text-xl">Reduce Downtime</div>
              </div>
              <p className="leading-loose text-gray-500">
                Significantly quicker process leads to increased production
                time.
              </p>
            </div>
            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
              <div className="flex items-center mb-6">
                <Check
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-6 w-6 text-blue-500"
                />
                <div className="ml-4 text-xl">Non-abrasive</div>
              </div>
              <p className="leading-loose text-gray-500 ">
                Dry ice is a soft media that will not harm substrates{" "}
              </p>
            </div>
            <div
              className="
              w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8
            "
            >
              <div className="flex items-center mb-6">
                <Check
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-6 w-6 text-blue-500"
                />
                <div className="ml-4 text-xl">Operator safe</div>
              </div>
              <p className="leading-loose text-gray-500">
                Eliminates need for chemicals and repetitive, manual processes
              </p>
            </div>
            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
              <div className="flex items-center mb-6">
                <Check
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-6 w-6 text-blue-500"
                />
                <div className="ml-4 text-xl">Increase efficiency</div>
              </div>
              <p className="leading-loose text-gray-500">
                Clean equipment online, while eliminating need for cooldown and
                disassembly.
              </p>
            </div>
            <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
              <div className="flex items-center mb-6">
                <Check
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-6 w-6 text-blue-500"
                />
                <div className="ml-4 text-xl">
                  Improved part quality and reduced scrap
                </div>
              </div>
              <p className="leading-loose text-gray-500">
                Cleaner machinery and tooling results in higher quality
                products.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-8">
              <div className="flex items-center mb-6">
                <Check
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-6 w-6 text-blue-500"
                />
                <div className="ml-4 text-xl">
                  Non-toxic and non- conductive
                </div>
              </div>
              <p className="leading-loose text-gray-500">
                Dry ice is a food grade media and is safe for commercial use.
              </p>
            </div>
            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8 border-t">
              <div className="flex items-center mb-6">
                <Check
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-6 w-6 text-blue-500"
                />
                <div className="ml-4 text-xl">No secondary waste</div>
              </div>
              <p className="leading-loose text-gray-500">
                Dry ice blasting does not produce secondary waste streams,
                residue or moisture.
              </p>
            </div>
            <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8 border-t">
              <div className="flex items-center mb-6">
                <Check
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-6 w-6 text-blue-500"
                />
                <div className="ml-4 text-xl">Environmentally sustainable</div>
              </div>
              <p className="leading-loose text-gray-500">
                Dry ice is made of recycled CO, and does not add additional CO,
                to the atmosphere. It also significantly reduces water use for
                sanitation.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-8 border-t">
              <div className="flex items-center mb-6">
                <Check
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-6 w-6 text-blue-500"
                />
                <div className="ml-4 text-xl">
                  More efficiently allocate labor
                </div>
              </div>
              <p className="leading-loose text-gray-500">
                The process reduces time, labor and resources needeo.{" "}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
