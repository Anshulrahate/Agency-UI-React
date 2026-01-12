import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import TrustedBy from "./Component/TurstedBy/TrustedBy";
import Services from "./Component/Services/Services";
import Work from "./Component/Work/Work";
import Teams from "./Component/Teams/Teams";
import ContactUs from "./Component/ContactUs/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./Component/Footer/Footer";

const App = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // 🎯 Custom cursor logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.15;
      position.current.y += (mouse.current.y - position.current.y) * 0.15;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;

        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 🌙 Theme handling
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dark:bg-black min-h-screen">
      <Toaster />

      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <Work />
      <Teams />
      <ContactUs />
      <Footer theme={theme} setTheme={setTheme} />

      {/* Cursor outline */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-blue-400 pointer-events-none z-[9999] "
        style={{transition:'transform 0.1s ease-out'}}
      ></div>

      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-blue-400 pointer-events-none z-[9999]"
      ></div>
    </div>
  );
};

export default App;
