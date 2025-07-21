import React, { useState, useEffect } from "react";
import Middleside from "./components/middleside/Middleside";
import RightMenuBar from "./components/rightmenubar/RightMenuBar";
import SideBar from "./components/sidebar/SideBar";

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState(() => {

    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      return savedMode === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);


  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (

    <div className="flex bg-[#f0f0f6] dark:bg-[#131313] min-h-screen">
      <SideBar isDarkMode={isDarkMode} />
      <Middleside isDarkMode={isDarkMode} />
      <RightMenuBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}