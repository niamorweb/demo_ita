import Link from "next/link";
import React from "react";

export default function Header() {
  const links = [
    {
      name: "Nos expertises",
      href: "#",
    },
    {
      name: "A propos de nous",
      href: "#",
    },
    {
      name: "Plateforme",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];

  return (
    <header className="px-10 py-2 z-50 absolute left-0 right-0 top-0 text-white">
      <nav className="max-w-[1400px] rounded-full overflow-hidden mx-auto py-4 flex items-center justify-between gap-3">
        <span className="text-xl font-bold">intheair</span>
        <div className="flex items-center gap-5 text-sm">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          ))}
          <button className="w-fit rounded-3xl bg-secondary text-white hover:scale-[102%] duration-150 py-2 px-5">
            Demander une démo
          </button>
        </div>
      </nav>
    </header>
  );
}
