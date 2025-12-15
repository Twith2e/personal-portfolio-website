import Skill from "../components/Skill";

export default function SkillList() {
  const skillsArray = [
    {
      language: "HTML",
      iconName: "#html-124-svgrepo-com",
      fill: "#E34F26",
    },
    {
      language: "CSS",
      iconName: "#css3-02-svgrepo-com",
      fill: "#1572B6",
    },
    {
      language: "Bootstrap",
      iconName: "#bootstrap-fill-svgrepo-com",
      fill: "#6610f2",
    },
    {
      language: "TailwindCSS",
      iconName: "#tailwind-svgrepo-com",
      fill: "#06B6D4",
    },
    {
      language: "JavaScript",
      iconName: "#js01-svgrepo-com",
      fill: "#F7DF1E",
    },

    {
      language: "TypeScript",
      iconName: "#typescript-svgrepo-com",
      fill: "#3178C6",
    },
    {
      language: "ReactJs",
      iconName: "#react-svgrepo-com",
      fill: "#61DAFB",
    },
    {
      language: "NextJs",
      iconName: "#next-js-svgrepo-com",
      fill: "#000000",
    },
    {
      language: "AngularJs",
      iconName: "#angular-svgrepo-com",
      fill: "#B52E31",
    },
    {
      language: "NodeJs",
      iconName: "#node-js-svgrepo-com",
      fill: "#68A063",
    },
    {
      language: "Express",
      iconName: "#express-svgrepo-com",
    },
    {
      language: "MongoDB",
      iconName: "#mongo-svgrepo-com",
      fill: "#3FA037",
    },
    {
      language: "Redis",
      iconName: "#redis-svgrepo-com",
      fill: "#D82C20",
    },
    {
      language: "Firebase",
      iconName: "#firebase-svgrepo-com",
      fill: "#FF9100",
    },
  ];

  return (
    <div className="flex flex-col gap-9 font-jakarta mb-10">
      <div className="flex gap-2 gap-y-4 flex-wrap text-sm">
        {skillsArray.map((skill) => (
          <Skill
            language={skill.language}
            iconName={skill.iconName}
            fill={skill.fill}
          />
        ))}
      </div>
    </div>
  );
}
