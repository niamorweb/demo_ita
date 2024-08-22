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
    <header className="px-10 py-4 z-50 sticky top-0">
      <nav className="max-w-[1400px] bg-black/30 backdrop-blur-lg text-white px-8 rounded-full overflow-hidden mx-auto py-4 flex items-center justify-between gap-3">
        <span className="text-xl font-bold">intheair</span>
        <div className="flex items-center gap-5 text-sm">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
