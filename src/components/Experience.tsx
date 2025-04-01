export default function Experience() {
  const experienceData = [
    {
      company: "SQI College of ICT ",
      jobDescription: "Fullstack Developer ",
      location: "Ibadan, Nigeria",
      date: "April 2024 - Till Date",
      avif: "/sqi.avif",
      webp: "/sqi.webp",
      src: "/sqi.png",
      achievements: [
        "Cloned X formerly known as Twitter using HTML, BOOTSTRAP and CSS.",
        "Designed and Developed an ecommerce site using HTML, CSS and Firebase.",
        "Currently working on a messaging app.",
        "Ensured all codes are properly versioned and maintained using a distributed version control system (GIT).",
      ],
      links: [
        "https://abdulbasittwitter.surge.sh/x.html",
        "https://shoplift-333fe.web.app",
      ],
      website: "https://edu.sqi.ng",
    },
    {
      company: "Unilag Microfinance Bank",
      jobDescription: "IT Officer/Fullstack Developer",
      location: "Lagos, Nigeria",
      date: "December 2024 - Till Date",
      avif: "/umfb.avif",
      webp: "/umfb.webp",
      src: "/umfb.png",
      achievements: [
        "Creating digital forms for various purposes with ReactJs and converting users' data to pdf using JSPDF leading to 90% reduction in manual processing.",
        "Ensuring all codes are properly versioned and maintained using a distributed version control system (GIT).",
        "Ensuring all staff files are being backed up.",
        "Currently working on a HR System.",
      ],
      website: "https://unilagmfbank.com",
    },
  ];

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
              <img width={60} src={exp.src} alt={exp.src} />
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
