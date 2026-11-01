"use client";
import Image from "next/image";
import HotTakes from "./HotTakes";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-18 lg:px-35 px-3">
      <div className="border border-line rounded-full px-4 py-2 text-muted text-[.8125rem] mb-7 w-fit flex gap-2 items-center font-mono text-xs">
        <span className="w-2 h-2 rounded-full bg-green"></span>
        <span>Open to SWE roles</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-14">
        <div className="">
          <h2 className="text-4xl leading-tight sm:text-5xl lg:text-6xl lg:leading-14 tracking-[-3.5%] font-extrabold">
            I ship code like I play chess:{" "}
            <span className="text-accent">patiently</span>, with the occasional
            sacrifice.
          </h2>
          <p className="text-muted text-[1.25rem] my-7">
            Full-stack developer. Football fan with a strong opinion about the
            referee. Watches movie credits to the very end. Writes jokes in
            commit messages.
          </p>
          <div className="flex gap-3.5 items-center">
            <Link
              href="/#projects"
              className="px-6.5 h-12 rounded-[10px] bg-accent text-background font-bold flex items-center justify-center"
            >
              <span>See the highlights</span>
            </Link>
            <Link
              href="/#contact"
              className="px-6.5 h-12 border border-line text-foreground rounded-[10px] font-bold flex items-center justify-center"
            >
              <span>Make a move</span>
            </Link>
          </div>
          <HotTakes />
        </div>
        <div className="w-full max-w-108 aspect-square mx-auto lg:mx-0">
          <div>
            <Image
              className="w-full h-full object-contain"
              src="/chess_board.png"
              width={432}
              height={432}
              alt="chess board"
              priority
            />
          </div>
          <p className="text-xs font-mono w-full">
            Giuoco Pianissimo, which literally means &apos;quiet game&apos;.
            Also my commit history the night before a deadline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
