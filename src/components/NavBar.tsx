import { PiFoldersFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function NavBar() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <nav
      className={`font-jakarta flex justify-between items-center py-5 md:px-12 px-6 bg-[#fff] text-[#2b2b2b]`}
    >
      <span className="text-2xl font-bold">Abdulbasit Adebajo</span>
      <div className="hidden lg:flex gap-6 items-center text-[#2b2b2b] text-sm">
        <a className="flex gap-1 items-center hover:text-[#adebb3]" href="#xp">
          <FaBriefcase size={20} />
          <span>Work Experience</span>
        </a>
        <a
          className="flex gap-1 items-center hover:text-[#adebb3]"
          href="#projects"
        >
          <PiFoldersFill size={24} />
          <span>Projects</span>
        </a>
        <a
          className="flex gap-1 items-center hover:text-[#adebb3]"
          href="#education"
        >
          <FaUserGraduate size={20} />
          <span>Education</span>
        </a>
        <a
          className="flex gap-1 items-center hover:text-[#adebb3]"
          href="#contact"
        >
          <IoMdMail size={20} />
          <span>Contact Me</span>
        </a>
      </div>
      <button
        aria-label="sidebar button"
        onClick={() => setIsHidden(false)}
        className="lg:hidden cursor-pointer"
      >
        <LuMenu size={35} />
      </button>
      <Sidebar isHidden={isHidden} setIsHidden={setIsHidden} />
    </nav>
  );
}
