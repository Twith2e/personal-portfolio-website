"use client";

import { Skill } from "@/lib/types";

const SkillCard = ({ id, category, desc, list }: Skill) => {
  return (
    <div
      key={id}
      className="p-5.5 space-y-3 border-t-3 border-t-accent rounded-b-[14px] bg-surface mt-11 w-full"
    >
      <h2 className="font-extrabold text-xl">{category}</h2>
      <p className="text-muted text-[10px] font-mono w-full p-0">{desc}</p>
      <ul className="space-y-3 text-sm">
        {list.map((l) => (
          <li key={l.id}>{l.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
