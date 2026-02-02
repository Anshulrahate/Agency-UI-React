import React from "react";
import ads_icon from "../../assets/Images/ads_icon.svg";
import marketing_icon from "../../assets/Images/marketing_icon.svg";
import content_icon from "../../assets/Images/content_icon.svg";
import social_icon from "../../assets/Images/social_icon.svg";
import bgImage2 from "../../assets/Images/bgImage2.png";
import Title from "../Title/Title";
import { motion } from "framer-motion";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect and engage.",
      icon: ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver measurable results.",
      icon: marketing_icon,
    },
    {
      title: "Content Writing",
      description: "High-quality content that attracts, informs, and converts.",
      icon: content_icon,
    },
    {
      title: "Social Media",
      description: "We build a strong social presence and engage your audience.",
      icon: social_icon,
    },
  ];

  return (
    <motion.section
      id="services"
      className="relative flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 pt-24 text-gray-700 dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }} // ✅ NO index here
    >
      <img
        src={bgImage2}
        alt=""
        className="absolute -top-40 -left-40 -z-10 dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="We help you build a strong social media presence and engage with your audience."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // ✅ index OK here
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition"
          >
            <img src={service.icon} alt="" className="w-12 mb-4" />
            <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
            <p className="text-sm text-gray-500 dark:text-white/70">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
