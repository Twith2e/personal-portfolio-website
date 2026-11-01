"use client";

import { Quest } from "@/lib/types";

const QuestCard = ({ id, icon: IconComponent, quest, desc }: Quest) => {
  return (
    <div
      key={id}
      className="bg-surface rounded-2xl p-6.5 border border-line space-y-3"
    >
      <IconComponent color="#f5c842" size={32} />
      <p className="font-extrabold text-2xl">{quest}</p>
      <p className="text-muted">{desc}</p>
    </div>
  );
};

export default QuestCard;
