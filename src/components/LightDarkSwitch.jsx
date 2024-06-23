import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes"; // Install next-themes: npm install next-themes

const LightDarkSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-12 h-6 rounded-full bg-gray-300 p-1 transition-colors duration-300 ease-in-out focus:outline-none"
    >
      <span
        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform transform duration-300 ease-in-out ${
          theme === "dark" ? "translate-x-6" : ""
        }`}
      ></span>
    </button>
  );
};

export default LightDarkSwitch;
