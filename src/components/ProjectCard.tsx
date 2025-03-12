import { ProjectCardProps } from "../models/ProjectCard.model";

export default function ProjectCard({
  img,
  sitename,
  progress,
  date,
  summary,
  languages,
  links,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-2 border-2 border-white rounded-lg pb-4">
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
          } py-1 px-2 text-xs rounded-sm font-semibold`}
        >
          {progress}
        </span>
        <span className="text-sm">{date}</span>
      </div>
      <div className="flex flex-col gap-3 px-2 font-jakarta">
        <p className="text-[#A3A3A3] text-sm">{summary}</p>
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
              className="flex items-center gap-2 bg-[#fafafa] text-black text-sm font-semibold w-fit py-1 px-2 rounded-lg hover:scale-[1.04]"
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
