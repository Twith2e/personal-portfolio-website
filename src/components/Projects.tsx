import { projectsInfos } from "../data/projectInfos";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div
      className={`font-jakarta flex flex-col gap-5 md:px-12 px-6 bg-[#fff] text-[#2b2b2b] py-12`}
      id="projects"
    >
      <h2 className="text-center text-3xl font-bold header">
        Featured Projects
      </h2>
      <span className="text-lg md:text-xl">
        I build projects from 0 to 1, turning ideas into reality. Take a look at
        some of my favorite projects below.
      </span>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 flex flex-col gap-5">
        {projectsInfos.map((info, index) => (
          <ProjectCard
            key={index}
            img={info.img}
            avif={info.avif}
            webp={info.webp}
            sitename={info.sitename}
            progress={info.progress}
            date={info.date}
            summary={info.summary}
            languages={info.languages}
            links={info.links}
          />
        ))}
      </div>
    </div>
  );
}
