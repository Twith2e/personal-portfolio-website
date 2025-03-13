import { useContext } from "react";
import { ProjectCardProps } from "../models/ProjectCard.model";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ProjectCard({
  img,
  sitename,
  progress,
  date,
  summary,
  languages,
  links,
}: ProjectCardProps) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col gap-2 border-2 rounded-lg pb-4 ${
        darkMode ? "border-white" : "border-gray-500"
      }`}
    >
      <img
        className="rounded-t-lg aspect-auto"
        height="110%"
        width="auto"
        src={img}
        alt="project-screenshot"
      />
      <h2 className="text-lg font-bold my-1 px-2">{sitename}</h2>
      <div className="flex gap-2 items-center px-2">
        <span
          className={`${
            progress.toLowerCase().includes("completed")
              ? "bg-green-500"
              : "bg-blue-500"
          } py-1 px-2 text-sm rounded-sm font-bold`}
        >
          {progress}
        </span>
        <span className="text-sm">{date}</span>
      </div>
      <div className="flex flex-col gap-3 px-2 font-jakarta">
        <p
          className={`text-sm ${
            darkMode ? "text-[#A3A3A3]" : "text-[#08090A]"
          }`}
        >
          {summary}
        </p>
        <div className="flex-wrap flex items-center gap-2">
          {languages.map((language, index) => (
            <div
              className="bg-[#262626] text-xs px-2 py-1 rounded-sm font-semibold text-[#fafafa]"
              key={index}
            >
              {language}
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          {links.map((link, index) => (
            <a
              className={`flex items-center gap-2 text-sm font-semibold w-fit py-1 px-2 rounded-lg hover:scale-[1.04] ${
                darkMode
                  ? "bg-[#fafafa] text-black"
                  : "bg-[#08090A] text-[#fafafa]"
              }`}
              key={index}
              href={link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.logo}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
