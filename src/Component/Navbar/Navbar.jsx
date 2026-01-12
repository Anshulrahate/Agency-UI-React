import React, { useState } from "react";
import dark_logo from "../../assets/Images/logo_dark.svg";
import logo from "../../assets/Images/logo.svg";
import arrow_icon from "../../assets/Images/arrow_icon.svg";
import close_icon from "../../assets/Images/close_icon.svg";
import menu_icon from "../../assets/Images/menu_icon.svg";
import ThemeTogglebtn from "../ThemetoggleBtn/ThemeTogglebtn";
import { motion } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 py-4"
    >
      {/* Logo */}
      <img
        src={theme === "dark" ? dark_logo : logo}
        alt="Logo"
        className="w-32 cursor-pointer"
      />

      {/* Menu */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm fixed sm:static top-0 right-0 h-full sm:h-auto flex flex-col sm:flex-row gap-5 pt-20 sm:pt-0 bg-blue-400 sm:bg-transparent text-white sm:text-inherit transition-all duration-300
        ${sideBarOpen ? "w-60 pl-10" : "w-0 overflow-hidden sm:w-auto"}`}
      >
        <img
          src={close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSideBarOpen(false)}
        />

        {["HOME", "SERVICES", "OUR WORK", "CONTACT US"].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            onClick={() => setSideBarOpen(false)}
            className="hover:text-primary border-b-2 border-transparent hover:border-b-gray-400 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeTogglebtn theme={theme} setTheme={setTheme} />

        <img
          src={menu_icon}
          alt="Menu"
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Connect
          <img src={arrow_icon} alt="Arrow" className="w-4 h-4" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
