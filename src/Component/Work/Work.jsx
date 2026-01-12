import React from "react";
import Title from "../Title/Title";
import work_mobile_app from "../../assets/Images/work_mobile_app.png";
import work_fitness_app from  "../../assets/Images/work_fitness_app.png";
import work_dashboard_management from "../../assets/Images/work_dashboard_management.png";
import { motion } from "framer-motion";
const Work = () => {
  const workDoneData = [
    {
      title: "Brand Identity Design",
      description:
        "We crafted a unique and consistent brand identity that reflects the company’s vision and builds trust with its audience.",
      image: work_fitness_app
    },
    {
      title: "Website Development",
      description:
        "Developed a fast, responsive, and user-friendly website focused on performance, accessibility, and modern UI.",
      image: work_mobile_app,
    },
    {
      title: "Digital Marketing Campaign",
      description:
        "Executed data-driven digital marketing campaigns that increased engagement, reach, and conversion rates.",
      image: work_dashboard_management,
    },
    {
      title: "Social Media Management",
      description:
        "Managed and grew social media platforms with strategic content planning and audience engagement techniques.",
      image:  work_dashboard_management,
    },
    {
      title: "Content Strategy & Writing",
      description:
        "Delivered high-quality content strategies and compelling copy that communicates value and drives action.",
      image: work_mobile_app,
    },
    {
      title: "SEO Optimization",
      description:
        "Improved search engine rankings through on-page and technical SEO, resulting in increased organic traffic.",
      image: work_fitness_app
    },
  ];

  return (
    <motion.section
   initial='hidden'
   whileInView="visible"
   viewport={{once:true}}
   transition={{staggerChildren:0.2}}
  


      id="our-work"
      className="flex flex-col items-center gap-10 px-4 sm:px-12 xl:px-40 pt-24 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
        {workDoneData.map((work, index) => (
          <motion.div

          initial={{opacity:0, y:40}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:index*0.2}}
          viewport={{once:true}}
            key={index}
            className="cursor-pointer transition-transform duration-500 hover:scale-105"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">
              {work.title}
            </h3>
            <p className="text-sm opacity-60 w-5/6">
              {work.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
