import Skill from "../components/Skill";

export default function SkillList() {
  const skillsArray = [
    {
      language: "HTML",
      iconName: "devicon-html5-plain colored",
    },
    {
      language: "CSS",
      iconName: "devicon-css3-plain colored",
    },
    {
      language: "Bootstrap",
      iconName: "devicon-bootstrap-plain colored",
    },
    {
      language: "TailwindCSS",
      iconName: "devicon-tailwindcss-original colored",
    },
    {
      language: "JavaScript",
      iconName: "devicon-javascript-plain colored",
    },

    {
      language: "TypeScript",
      iconName: "devicon-typescript-plain colored",
    },
    {
      language: "ReactJs",
      iconName: "devicon-react-original colored",
    },

    {
      language: "Redux",
      iconName: "devicon-redux-original colored",
    },
    {
      language: "AngularJs",
      iconName: "devicon-angularjs-plain colored",
    },
    {
      language: "NodeJs",
      iconName: "devicon-nodejs-plain-wordmark colored",
    },
    {
      language: "Express",
      iconName: "devicon-express-original",
    },
    {
      language: "MongoDB",
      iconName: "devicon-mongodb-plain colored",
    },
    {
      language: "Redis",
      iconName: "devicon-redis-plain colored",
    },
    {
      language: "Firebase",
      iconName: "devicon-firebase-plain colored",
    },
    {
      language: "Git",
      iconName: "devicon-git-plain colored",
    },
    {
      language: "Git Bash",
      iconName: "devicon-bash-plain",
    },
    {
      language: "VSCode",
      iconName: "devicon-vscode-plain colored",
    },
  ];

  return (
    <div className="flex flex-col gap-9 font-jakarta mb-10">
      <div className="flex gap-2 gap-y-4 flex-wrap text-sm">
        {skillsArray.map((skill) => (
          <Skill language={skill.language} iconName={skill.iconName} />
        ))}
      </div>
    </div>
  );
}
