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
      iconName: "devicon-express-original colored",
      darkIcon: "devicon-express-original",
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
      iconName: "devicon-bash-plain colored",
      darkIcon: "devicon-bash-plain",
    },
    {
      language: "VSCode",
      iconName: "devicon-vscode-plain colored",
    },
  ];

  return (
    <div className="md:px-12 flex flex-col gap-9 font-jakarta mb-10">
      <h2 className="text-3xl font-bold text-center">
        Skills and Tools <span className="animate-bounce absolute">🛠️</span>
      </h2>
      <div className="flex gap-2 gap-y-6 flex-wrap">
        {skillsArray.map((skill) => (
          <Skill
            language={skill.language}
            iconName={skill.iconName}
            darkIcon={skill.darkIcon}
          />
        ))}
      </div>
    </div>
  );
}
