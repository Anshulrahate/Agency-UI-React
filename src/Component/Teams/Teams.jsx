import React from "react";
import Title from "../Title/Title";
import { teamMembersData } from "../../assets/company/company";
import { motion } from "framer-motion";
const Teams = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visiable"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-24 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the Team"
        desc="A passionate team of digital experts dedicated to your brand’s success."
      />

      <div
        
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full max-w-6xl"
      >
        {teamMembersData.map((team, index) => (
          <motion.div
          intial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg dark:shadow-white/5 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-semibold text-sm">{team.name}</h3>
              <p className="text-xs opacity-60">{team.post}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Teams;
