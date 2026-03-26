import type { ReactNode } from "react";

export default function Skill({
  language,
  iconName,
  fill,
  icon,
}: {
  language: string;
  iconName?: string;
  fill?: string;
  icon?: ReactNode;
}) {
  return (
    <div
      className={`flex gap-2 items-center py-2 px-4 bg-[#fff] text-[#333] border-1 border-[#b3b3b3] hover:scale-104 cursor-pointer`}
    >
      {icon ? (
        <span className="flex h-6 w-6 items-center justify-center" aria-hidden="true">
          {icon}
        </span>
      ) : (
        <svg width={24} height={24} fill={fill} aria-hidden="true">
          <use href={`/sprite.svg${iconName}`} />
        </svg>
      )}
      <span className="font-bold">{language}</span>
    </div>
  );
}
