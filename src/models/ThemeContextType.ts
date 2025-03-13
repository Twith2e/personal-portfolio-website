import { Dispatch, SetStateAction } from "react";

export type ThemeContextType = {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
};
