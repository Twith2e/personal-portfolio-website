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
    <div className="timeline font-jakarta">
      {timelineData.map((data, index) => (
        <div
          className="timeline-item flex gap-1 items-center w-full"
          key={index}
        >
          <img
            className="rounded-full"
            height={100}
            width={100}
            src={data.logo}
            alt={data.alt}
          />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center timeline-content w-full text-sm">
              <span className="text-[#FAFAFA] font-[600]">{data.school}</span>
              <span className="text-[#A3A3A3]">{data.year}</span>
            </div>
            <span className="text-xs text-[#A3A3A3]">{data.degree}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
