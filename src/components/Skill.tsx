export default function Skill({
  language,
  iconName,
  fill,
}: {
  language: string;
  iconName: string | undefined;
  fill: string | undefined;
}) {
  return (
    <div
      className={`flex gap-2 items-center py-2 px-4 bg-[#fff] text-[#333] border-1 border-[#b3b3b3] hover:scale-104 cursor-pointer`}
    >
      <svg width={24} height={24} fill={fill && fill} aria-hidden="true">
        <use href={`/sprite.svg${iconName}`} />
      </svg>
      <span className="font-bold">{language}</span>
    </div>
  );
}
