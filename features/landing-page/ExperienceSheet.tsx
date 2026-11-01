import { Experience } from "@/lib/types";

const ExperienceSheet = ({
  id,
  start_date,
  end_date,
  location,
  role,
  company,
  contribution,
  witty_desc,
}: Experience) => {
  return (
    <div key={id} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10 mt-11">
      <div className="flex flex-col gap-1 font-mono text-sm md:whitespace-nowrap">
        <span className="text-accent">
          {start_date} - {end_date}
        </span>
        <span className="text-muted">{location}</span>
      </div>
      <div className="text-muted">
        <h2 className="font-bold text-xl md:text-[1.625rem]">
          <span className="text-foreground">{role}</span> at {company}
        </h2>
        {contribution.map((c) => (
          <p key={c.id}>{c.text}</p>
        ))}
        <p className="mt-2.5 text-foreground">&quot;{witty_desc}&quot;</p>
      </div>
    </div>
  );
};

export default ExperienceSheet;
