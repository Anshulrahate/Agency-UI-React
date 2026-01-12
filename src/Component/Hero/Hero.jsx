import React from "react";
import group_profile from "../../assets/Images/group_profile.png";
import hero_img from "../../assets/Images/hero_img.png"
import bgImage1 from '../../assets/Images/bgImage1.png'
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div
        className="flex  flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
        id="hero"
      >
        <motion.div
         initial={{opacity:0, y:20}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:0.5, delay:0.7}}
         viewport={{once:true}}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
          <img src={group_profile} alt="" className="w-20" />
          <p className="text-xs font-medium">Trusted By 10 peoples</p>
        </motion.div>
        <motion.h1
          initial={{opacity:0, y:40}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:0.6, delay:0.8}}
         viewport={{once:true}}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
          Turning imagination into{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            digital
          </span>{" "}
          impact.
        </motion.h1>
        <motion.p
         initial={{opacity:0, y:30}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:0.5, delay:1}}
         viewport={{once:true}}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-[80%] sm:max-w-lg pb-3">

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia
          numquam dignissimos aspernatur quidem doloremque, velit nostrum
          laborum non, voluptas illum sint nisi laudantium dolore? Harum in
          iusto ut placeat!
        </motion.p>

        <motion.div
           initial={{opacity:0, y:20}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:0.5, delay:0.7}}
         viewport={{once:true}}
        className="relative">
            <img src={hero_img} alt=""  className="w-full max-w-6xl"/>
            <img src={bgImage1} alt="" className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden " />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
