"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#projects", label: "projects" },
  { href: "/#squad", label: "squad" },
  { href: "/#experience", label: "experience" },
  { href: "/#contact", label: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-3 lg:px-35 py-5 flex items-center justify-between gap-3">
      <Link
        href="/#top"
        className="flex gap-2.5 items-center"
        onClick={() => setOpen(false)}
      >
        <span className="bg-accent w-3.5 h-3.5 rounded-[3px]"></span>
        <span className="font-extrabold text-lg sm:text-[1.375rem] text-foreground whitespace-nowrap">
          Abdulbasit Adebajo
        </span>
      </Link>

      <ul className="hidden md:flex gap-3 items-center text-muted text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="anchor" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="md:hidden text-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <XIcon size={28} /> : <ListIcon size={28} />}
      </button>

      {open && (
        <ul
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-background border-b border-line px-3 py-4 flex flex-col gap-4 text-muted"
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="block py-1"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
