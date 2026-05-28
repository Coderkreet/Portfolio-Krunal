import React, { createContext, useContext, useState, useEffect } from "react";
import { theme } from "./theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    const mode = isDark ? "dark" : "light";
    const colors = theme[mode];

    // Set standard class-based dark mode
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Persist selection
    localStorage.setItem("theme", mode);

    // Apply color values as dynamic CSS variables on documentElement
    Object.keys(colors).forEach((key) => {
      // camelCase to kebab-case
      const cssKey = `--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      root.style.setProperty(cssKey, colors[key]);
    });
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme: theme[isDark ? "dark" : "light"] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
