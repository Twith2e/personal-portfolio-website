import { createContext, useState } from "react";
import { ThemeContextType } from "../models/ThemeContextType";
import { ThemeContextProviderProps } from "../models/ThemeContextProviderProps";

export const ThemeContext = createContext<ThemeContextType>({
  setDarkMode: () => {},
  darkMode: false,
});

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [darkMode, setDarkMode] = useState(false);

  const value = {
    setDarkMode,
    darkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
