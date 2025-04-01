export default function Skill({
  language,
  iconName,
}: {
  language: string;
  iconName: string;
}) {
  return (
    <div
      className={`flex gap-2 items-center py-2 px-4 bg-[#fff] text-[#333] border-1 border-[#b3b3b3] hover:scale-104 cursor-pointer`}
    >
      <i className={`${iconName} text-base`}></i>
      <span className="font-bold">{language}</span>
    </div>
  );
}
