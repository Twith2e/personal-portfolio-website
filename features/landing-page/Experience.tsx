"use client";

import { experience } from "@/lib/data";
import ExperienceSheet from "./ExperienceSheet";

const Experience = () => {
  return (
    <div className="px-3 lg:px-35 pt-24">
      <h2 className="section-heading" id="experience">
        EXPERIENCE
      </h2>
      <h3 className="section-subheading">Transfer history</h3>
      <p className="section-description">
        Clubs I&apos;ve played for, newest first. No loan deals, no
        controversial exits
      </p>
      <div className="space-y-5">
        {experience.reverse().map((xp) => (
          <ExperienceSheet
            key={xp.id}
            id={xp.id}
            start_date={xp.start_date}
            end_date={xp.end_date}
            role={xp.role}
            location={xp.location}
            company={xp.company}
            contribution={xp.contribution}
            witty_desc={xp.witty_desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
