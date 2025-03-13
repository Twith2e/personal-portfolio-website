import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

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
  const { darkMode } = useContext(ThemeContext);
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
              <span
                className={`font-[600] text-lg ${
                  darkMode ? "text-[#fafafa]" : "text-[#08090A]"
                }`}
              >
                {data.school}
              </span>
              <span
                className={`${darkMode ? "text-[#a3a3a3]" : "text-[#000]"}`}
              >
                {data.year}
              </span>
            </div>
            <span
              className={`text-xs ${
                darkMode ? "text-[#A3A3A3]" : "text-[#08090A]"
              }`}
            >
              {data.degree}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
