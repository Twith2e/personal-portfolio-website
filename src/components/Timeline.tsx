const timelineData = [
  {
    logo: "/bells.webp",
    alt: "bellstech-logo",
    school: "Bells University of Technology",
    year: "2018-2023",
    degree: "Bachelor's Degree of Electrical and Electronics Engineering (EEE)",
  },
];

export default function Timeline() {
  return (
    <div className="timeline font-jakarta text-base">
      {timelineData.map((data, index) => (
        <div
          className="timeline-item flex flex-col md:flex-row items-start gap-1 md:items-center w-full bg-white text-[#2b2b2b] px-3 py-3 rounded-lg border-[#2b2b2b]"
          key={index}
        >
          <img
            className="rounded-full"
            height={120}
            width={120}
            src={data.logo}
            alt={data.alt}
          />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col md:flex-row items-start justify-between md:items-center w-full">
              <span className={`font-[600] md:text-2xl text-lg`}>
                {data.school}
              </span>
              <span>{data.year}</span>
            </div>
            <span>{data.degree}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
