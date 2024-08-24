"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const variants = {
    hidden: { x: "100%" }, // Animation de disparition (menu hors écran)
    visible: { x: 0 }, // Animation d'apparition (menu sur l'écran)
    exit: { x: "100%" }, // Animation lors de la fermeture (menu hors écran)
  };

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
        <div className="hidden lg:flex items-center gap-5 text-sm">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          ))}
          <button className="w-fit rounded-3xl bg-secondary text-white hover:scale-[102%] duration-150 py-2 px-5">
            Demander une démo
          </button>
        </div>
        <button
          onClick={() => setIsMobileNavActive(true)}
          className="lg:hidden flex bg-white w-10 h-10 justify-center items-center rounded-full text-black"
        >
          <Menu />
        </button>

        {isMobileNavActive && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="fixed right-0 top-0 bottom-0 bg-white text-black w-[70vw] py-12 px-4  flex flex-col "
          >
            <button
              onClick={() => setIsMobileNavActive(false)}
              className="text-black self-end w-10 h-10"
            >
              <X />
            </button>
            <div className="lg:hidden flex flex-col gap-5">
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  {link.name}
                </Link>
              ))}
              <button className="w-fit rounded-3xl bg-secondary text-white hover:scale-[102%] duration-150 py-2 px-5">
                Demander une démo
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
