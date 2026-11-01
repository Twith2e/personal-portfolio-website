import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-35 py-5 flex items-center justify-between">
      <Link href="/#top" className="flex gap-2.5 items-center">
        <span className="bg-accent w-3.5 h-3.5 rounded-[3px]"></span>
        <span className="font-extrabold text-[1.375rem] text-foreground">
          Abdulbasit Adebajo
        </span>
      </Link>
      <ul className="flex gap-2 items-center text-muted text-sm">
        <li>
          <Link href="/#projects">projects</Link>
        </li>
        <li>
          <Link href="/#squad">squad</Link>
        </li>
        <li>
          <Link href="/#experience">experience</Link>
        </li>
        <li>
          <Link href="/#contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
