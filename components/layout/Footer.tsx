"use client";

import { ArrowUpIcon } from "@phosphor-icons/react";

const Footer = ({ year }: { year: number }) => {
  return (
    <div className="px-3 lg:px-35 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-14">
      <p className="font-mono text-xs text-muted">
        &copy; {year} Abdulbasit Adebajo. No pieces were harmed. Mostly pawns.
      </p>
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex items-center gap-1 font-mono text-xs text-muted"
      >
        Back to kick-off <ArrowUpIcon />
      </a>
    </div>
  );
};

export default Footer;
