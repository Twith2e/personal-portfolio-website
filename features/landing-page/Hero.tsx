"use client";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mb-18 lg:px-35 px-3" id="top">
      <div className="border border-line rounded-full px-4 py-2 text-muted text-[.8125rem] mb-7 w-fit flex gap-2 items-center font-mono text-xs">
        <span className="w-2 h-2 rounded-full bg-green"></span>
        <span>Open to SWE roles</span>
      </div>
      <div className="grid lg:grid-cols-2 gap-14">
        <div className="">
          <h2 className="text-6xl leading-14 tracking-[-3.5%] font-extrabold">
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
            <button className="px-6.5 h-12 rounded-[10px] bg-accent text-background font-bold">
              <span>See the highlights</span>
            </button>
            <button className="px-6.5 h-12 border border-line text-foreground rounded-[10px] font-bold">
              <span>Make a move</span>
            </button>
          </div>
          <div className="px-5.5 py-5 rounded-[14px] border border-dashed border-line mt-7">
            <h2 className="font-mono text-accent text-xs">
              HALF-TIME HOT TAKE
            </h2>
            <p className="text-foreground my-3.5">
              My code has a lot in common with my football team: great on paper,
              chaotic in the final minutes.
            </p>
            <button className="flex items-center gap-2 bg-surface border border-line px-5 h-11 rounded-[10px]">
              <span>Another one</span> <ArrowRightIcon />
            </button>
          </div>
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
