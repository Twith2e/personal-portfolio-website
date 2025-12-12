import { experienceData } from "../data/experienceInfos";

export default function Experience() {
  return (
    <div className="font-jakarta md:px-12 px-6">
      <h2 className={`font-bold text-3xl text-center mb-10 header`}>
        Work Experience <span className="animate-bounce absolute">💼</span>
      </h2>
      <div className="flex flex-col gap-6 w-full">
        {experienceData.map((exp, index) => (
          <div
            className={`flex md:flex-row flex-col gap-10 w-full p-5 rounded-md border-1 shadow-xs shadow-[#ccc] border-[#b3b3b3]`}
            key={index}
          >
            <picture>
              <source srcSet={exp.avif} type="image/avif" />
              <source srcSet={exp.webp} type="image/webp" />
              <img width={50} height={50} src={exp.src} alt={exp.src} />
            </picture>
            <div className="w-full flex flex-col gap-3">
              <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                <h2 className="text-2xl font-bold">{exp.jobDescription}</h2>
                <span className="text-sm font-semibold">{exp.date}</span>
              </div>
              <span className="text-sm">
                <a
                  className="hover:text-[#adebb3]"
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company}
                </a>
                <span className={`mx-2 border-r-1 border-r-white`}></span>
                <span>{exp.location}</span>
              </span>
              <ul className="list-disc ps-5 text-sm ">
                {exp.achievements.map((achievement, index) => (
                  <li className="" key={index}>
                    <span className="mr-3">{achievement}</span>
                    {exp.links?.[index] ? (
                      <a
                        className="underline text-[#68ba7f] hover:text-[#adebb3] font-bold"
                        href={exp.links[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LINK
                      </a>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
