import React from "react";
import logo from "../../assets/Images/logo.svg";
import logo_dark from "../../assets/Images/logo_dark.svg";
import linkedin_icon from "../../assets/Images/linkedin_icon.svg";
import facebook_icon from "../../assets/Images/facebook_icon.svg";
import twitter_icon from "../../assets/Images/twitter_icon.svg";
import { motion } from "framer-motion";
import instagram_icon from "../../assets/Images/instagram_icon.svg";
const Footer = ({ theme, setTheme }) => {
  return (
    <motion.div
      initial={{opacity:0, y:20}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:0.5, delay:0.7}}
         viewport={{once:true}}
    
    className="bg-slate-50 dark:bg-gray-900 pt-10 mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      <motion.div
      
       initial={{opacity:0, y:20}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:0.5, delay:0.7}}
         viewport={{once:true}}
    
      className="flex justify-between max-lg:flex-col gap-10">
        <img
          src={theme === "dark" ? logo_dark : logo}
          className="w-32 sm:w-44"
          alt="logo"
        />

        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <ul className="space-y-2 flex gap-8">
          <li><a className="hover:text-blue-400" href="#hero">Home</a></li>
          <li><a className="hover:text-blue-400" href="#services">Services</a></li>
          <li><a className="hover:text-blue-400" href="#our-work">Our Work</a></li>
          <li><a className="hover:text-blue-400" href="#contact-us">Contact Us</a></li>
        </ul>
      </motion.div>

      <motion.div 
       initial={{opacity:0, y:20}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:0.5, delay:0.7}}
         viewport={{once:true}}
    
      className="text-gray-600 dark:text-gray-400">
        <h3 className="font-semibold">Subcribe to our new letter</h3>

        <p className="text-sm mt-2 mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="flex gap-2 text-sm">
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
          />
          <button className="bg-blue-500 text-white rounded px-6">
            Subscribe
          </button>
        </div>
      </motion.div>

       <hr className="border-gray-300 dark:border-gray-600 my-6"/>
       <motion.div
        initial={{opacity:0, y:20}}
         whileInView={{opacity:1, y:0}}
         transition={{duration:0.5, delay:0.7}}
         viewport={{once:true}}
    
       className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2025 &copy agency.ai All Right Reserved . -AnshulRahate </p>
        <div className="flex items-center justify-between gap-4">
            <img src={facebook_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={linkedin_icon} alt="" />
        </div>
       </motion.div>
    </motion.div>
  );
};

export default Footer;
