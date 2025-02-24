export default function Hero() {
  return (
    <div className="font-jakarta md:py-24 pt-4 flex flex-col items-center leading-6">
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="text-2xl md:7xl font-bold">Hi, I'm Abdulbasit 👋</h1>
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
            src="https://avatars.githubusercontent.com/u/147788165?v=4"
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold">About</h2>
        <p>
          I'm a passionate web developer who loves turning ideas into
          functional, user-friendly applications. From crafting sleek weather
          apps to automating LeetCode-to-GitHub workflows, I enjoy building
          tools that make life easier. Recently, I developed Leet2Git, a tool
          that transforms LeetCode problems into well-structured GitHub
          repositories, andGet-My-Attendance, a WiFi-based attendance system. I
          also won the Best About Us Page Award in a web design competition and
          ranked Top 5 in a college hackathon. Currently, I'm sharpening my web
          development skills while gearing up to explore AI. 🚀
        </p>
      </div>
    </div>
  );
}
