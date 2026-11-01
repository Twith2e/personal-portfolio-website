"use client";

import { ArrowUpIcon } from "@phosphor-icons/react";
import Link from "next/link";

const Footer = ({ year }: { year: number }) => {
  return (
    <nav className="px-3 lg:px-35 flex justify-between items-center mb-14">
      <p className="font-mono text-xs text-muted">
        &copy; {year} Abdulbasit Adebajo. No pieces were
        harmed. Mostly pawns.
      </p>
      <Link
        href="/#top"
        className="flex items-center gap-1 font-mono text-xs text-muted"
      >
        Back to kick-off <ArrowUpIcon />
      </Link>
    </nav>
  );
};

export default Footer;
