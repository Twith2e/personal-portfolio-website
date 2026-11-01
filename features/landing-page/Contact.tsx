import Link from "next/link";

const Contact = () => {
  return (
    <div className="px-3 lg:px-35 mt-24">
      <div className="bg-accent text-background rounded-3xl px-10 py-14 space-y-5">
        <h2 className="text-xs font-mono">THE FINAL WHISTLE</h2>
        <p className="text-[4rem] leading-[4.65625rem] tracking-[-3.5%] font-extrabold">
          Let&apos;s build something. You bring the brief, I bring the commits.
        </p>
        <p className="text-xl">
          No pressure, no offside traps. Just a reply within a reasonable amount
          of extra time.
        </p>
        <div className="flex gap-2 items-center font-bold">
          <Link
            className="bg-background rounded-[10px] h-12.5 text-foreground px-7 flex items-center justify-center text-sm"
            href="mailto:abdulbasitadebajo1619@gmail.com"
          >
            <span>Email</span>
          </Link>
          <Link
            className="border-2 border-background rounded-[10px] h-12.5 px-7 flex items-center justify-center text-sm"
            href="https://github.com/Twith2e"
          >
            GitHub
          </Link>
          <Link
            className="border-2 border-background rounded-[10px] h-12.5 px-7 flex items-center justify-center text-sm"
            href="https://linkedin.com/in/abdulbasit-adebajo"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
