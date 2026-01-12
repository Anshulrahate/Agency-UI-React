import React from 'react'
import { company_logos } from '../../assets/company/company'
import { motion } from "framer-motion";
const TrustedBy = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
      
      <motion.h3
       initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
      
      className="font-semibold text-lg">
        Trusted By Leading Companies
      </motion.h3>

      <motion.div
        initial='hidden'
        whileInView='visible'
        transition={{staggerChildren:0.1}}
        viewport={{once:true}}      
      className="flex flex-wrap justify-center gap-8">
        {company_logos.map((logo, index) => (
          <motion.img
        variant={{
          hidden:{opacity:0, y:10},
          visible:{opacity:1, y:0},
        }}

        transition={{duration:0.4}}
           
            key={index}
            src={logo}
            alt="company-logo"
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </motion.div>

    </motion.div>
  )
}

export default TrustedBy
