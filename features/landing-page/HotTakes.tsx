"use client";

import { hotTakes as Takes } from "@/lib/data";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { useState } from "react";

const HotTakes = () => {
  const [count, setCount] = useState(0);
  const takes = Takes;

  const changeTake = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
    if (count == takes.length - 1) {
      setCount(0);
    }
    console.log(count)
  };
  return (
    <div className="px-5.5 py-5 rounded-[14px] border border-dashed border-line mt-7">
      <h2 className="font-mono text-accent text-xs">HALF-TIME HOT TAKE</h2>
      <p className="text-foreground my-3.5">{takes[count].hot_take}</p>
      <button
        className="flex items-center gap-2 bg-surface border border-line px-5 h-11 rounded-[10px]"
        onClick={() => changeTake()}
      >
        <span>Another one</span> <ArrowRightIcon />
      </button>
    </div>
  );
};

export default HotTakes;
