export default function Hero() {
  return (
    <div className="font-jakarta md:py-24 pt-4 flex flex-col items-center leading-6 md:px-12">
      <div className="flex gap-3">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-7xl font-bold" id="top">
            Hi, I'm Abdulbasit 👋
          </h1>
          <p className="md:text-xl">
            Passionate developer with a love for creating innovative solutions.
            I specialize in web development and enjoy working with various
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
            src="/avatar.jpeg"
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold">About</h2>
        <p className="text-[#A3A3A3]">
          I'm a fullstack developer who thrives on crafting seamless,
          interactive web experiences. I specialize in React and Nodejs. My
          portfolio showcases a blend of creative design and meticulous
          code—from manipulating image aesthetics and responsive layouts to
          integrating external links and interactive elements. I'm passionate
          about writing clean, efficient code that not only meets design goals
          but also enhances user engagement and performance. 🚀
        </p>
      </div>
    </div>
  );
}
