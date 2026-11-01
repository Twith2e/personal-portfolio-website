"use client";

import { quests } from "@/lib/data";
import QuestCard from "./QuestCard";

const SideQuests = () => {
  return (
    <div className="px-3 lg:px-35 pt-24">
      <h2 className="section-heading">OFF THE CLOCK</h2>
      <h3 className="section-subheading">Side quests</h3>
      <div className="mt-11 flex flex-col md:flex-row gap-4">
        {quests.map((quest) => (
          <QuestCard
            key={quest.id}
            id={quest.id}
            quest={quest.quest}
            icon={quest.icon}
            desc={quest.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default SideQuests;
