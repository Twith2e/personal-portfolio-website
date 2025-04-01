import { PiFoldersFill } from "react-icons/pi";
import { FaBriefcase } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";
export default function Sidebar({
  isHidden,
  setIsHidden,
}: {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <aside
      className={`absolute top-0 right-0 bg-[#fff] h-screen w-full transition-transform duration-500 ease-in-out ${
        isHidden ? "translate-[999px]" : "translate-0"
      }`}
    >
      <div className="flex justify-end text-[#2b2b2b] absolute right-4 top-6">
        <button
          aria-label="sidebar close button"
          type="button"
          onClick={() => setIsHidden(true)}
          className="hover:text-red-500 cursor-pointer"
        >
          <MdOutlineClose size={40} />
        </button>
      </div>
      <ul className="py-5 w-full h-full flex flex-col items-center justify-center">
        <li onClick={() => setIsHidden(true)} className="px-3 py-2">
          <a
            className="flex gap-1 items-center hover:text-[#2C9AB7] text-2xl md:text-4xl"
            href="#xp"
          >
            <FaBriefcase size={20} />
            <span>Work Experience</span>
          </a>
        </li>
        <li onClick={() => setIsHidden(true)} className="px-3 py-2">
          <a
            className="flex gap-1 items-center hover:text-[#2C9AB7] text-2xl md:text-4xl"
            href="#projects"
          >
            <PiFoldersFill size={24} />
            <span>Projects</span>
          </a>
        </li>
        <li onClick={() => setIsHidden(true)} className="px-3 py-2">
          <a
            className="flex gap-1 items-center hover:text-[#2C9AB7] text-2xl md:text-4xl"
            href="#education"
          >
            <FaUserGraduate size={20} />
            <span>Education</span>
          </a>
        </li>
        <li onClick={() => setIsHidden(true)} className="px-3 py-2">
          <a
            className="flex gap-1 items-center hover:text-[#2C9AB7] text-2xl md:text-4xl"
            href="#contact"
          >
            <IoMdMail size={20} />
            <span>Contact Me</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
