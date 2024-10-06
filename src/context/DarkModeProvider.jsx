import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, SetDarkMode] = useState(false);

  const toggleDarkMode = () => {
    SetDarkMode(!darkMode);
    // console.log("test dark mode");
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
