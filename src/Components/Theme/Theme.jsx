import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (theme) => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  };

  useEffect(() => {
    applyTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-8 h-8 ml-6 bg-white rounded-full text-black dark:bg-black dark:text-white"
    >
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default Theme;
