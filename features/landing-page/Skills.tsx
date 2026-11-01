"use client";

import { skills } from "@/lib/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="lg:px-35 px-3 mt-24" id="squad">
      <h2 className="section-heading">SKILLS</h2>
      <h3 className="section-subheading">The squad</h3>
      <p className="section-description">
        Every good team needs balance. Mine has a few stars and a lot of
        reliable workers.
      </p>
      <div className="flex gap-5">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            id={skill.id}
            category={skill.category}
            desc={skill.desc}
            list={skill.list}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
