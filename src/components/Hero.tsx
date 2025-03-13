import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Hero() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="font-jakarta md:py-24 pt-4 flex flex-col items-center leading-6 md:px-12">
      <div className="flex gap-3">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-7xl font-bold" id="top">
            Hi, I'm Abdulbasit 👋
          </h1>
          <p className="md:text-xl">
            Passionate developer with a love for creating innovative solutions.
            I specialize in software development and enjoy working with various
            technologies to bring ideas to life. My goal is to build
            applications that are not only functional but also user-friendly and
            visually appealing.🤠
          </p>
        </div>
        <div className="relative flex-none md:w-64 md:h-64 h-24 w-24 bg-red-400 rounded-full overflow-hidden">
          <img
            alt="Ashwith Rai"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              color: "transparent",
            }}
            src="/me.avif"
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-bold">About</h2>
        <p className={`${darkMode ? "text-[#A3A3A3]" : "text-black"}`}>
          From messing around with{" "}
          <a href="freecodecamp.com" target="_blank" rel="noopener noreferrer">
            freecodecamp
          </a>{" "}
          to struggling with cs50's{" "}
          <span className="font-bold">Introduction to Computer Science</span> to
          now enjoying solving various clients's problems with code. I am a
          Fullstack Software Engineer who cares about attention to details in
          order to achieve the end results with good user interface without
          sacrificing user experience.🚀
        </p>
      </div>
    </div>
  );
}
