import React from 'react'
import { motion } from "framer-motion";
const Title = ({ title, desc }) => {
  return (
    <motion.div
    
    
    className="flex flex-col items-center text-center gap-4">
      <motion.h2 
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6}}
      viewport={{once:true}}
      className="text-3xl sm:text-5xl font-medium">
        {title}
      </motion.h2>
      <motion.p 
        initial={{opacity:0, y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6}}
      viewport={{once:true}}
      
      className="max-w-lg text-gray-500 dark:text-white/75">
        {desc}
      </motion.p>
    </motion.div>
  )
}

export default Title
