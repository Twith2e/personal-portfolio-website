import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Skill({
  language,
  iconName,
  darkIcon,
}: {
  language: string;
  iconName: string;
  darkIcon: string | undefined;
}) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex gap-2 items-center py-2 px-3 rounded-full ${
        darkMode ? "bg-white text-[#333]" : "bg-[#333] text-white"
      }`}
    >
      {darkMode ? (
        <i className={`${iconName} text-2xl`}></i>
      ) : darkIcon ? (
        <i className={`${darkIcon} text-2xl`}></i>
      ) : (
        <i className={`${iconName} text-2xl`}></i>
      )}

      <span className="font-bold">{language}</span>
    </div>
  );
}
