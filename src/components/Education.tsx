import { useContext } from "react";
import Timeline from "./Timeline";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Education() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`md:px-12 ${darkMode ? "text-[#fafafa]" : "text-[#08090A]"}`}
    >
      <h2 className="text-xl font-bold">Education</h2>
      <Timeline />
    </div>
  );
}
