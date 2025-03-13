import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function PageLayout() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(isDarkMode);
  }, []);
  return (
    <div
      className={`relative h-screen overflow-auto px-3 pb-24 ${
        darkMode ? "bg-[#08090A] text-[#fafafa]" : "bg-white"
      }`}
    >
      <Outlet />
      <header className="fixed md:top-4 bottom-4 shadow-sm left-1/2 transform -translate-x-1/2 h-fit rounded-full bg-red-400">
        <NavBar />
      </header>
    </div>
  );
}
