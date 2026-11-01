"use client";

import { selectedWorks } from "@/lib/data";
import WorkCard from "./WorkCard";

const Works = () => {
  return (
    <div className="px-3 lg:px-35 pt-24" id="projects">
      <h2 className="section-heading">SELECTED WORKS</h2>
      <h3 className="section-subheading">The starting lineup</h3>
      <p className="section-description">
        Four projects, ordered like a game: opening, middlegame, endgame, and
        the one that won me man of the match.
      </p>
      <div className="grid lg:grid-cols-2 gap-6 mt-11">
        {selectedWorks.map((work) => (
          <WorkCard
            key={work.id}
            id={work.id}
            tag={work.tag}
            ref={work.ref}
            image={work.image}
            name={work.name}
            description={work.description}
            witty_comment={work.witty_comment}
            stack={work.stack}
            link={work.link}
            source_code={work.source_code}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
