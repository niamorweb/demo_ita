import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-10 py-20 bg-[#0D002D] text-white">
      <div className="max-w-[1400px] overflow-hidden mx-auto flex flex-col gap-5">
        <nav className="grid grid-cols-4 gap-3 bg-white text-[#0D002D] rounded-3xl py-20 px-10">
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-xl font-semibold">intheair</span>
            <p>
              Pôle de l’innovation, 6 Allée Léon Gambetta, 13001 Marseille,
              France
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-medium">Contacts</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="mailto:info@intheair.tech">+33 4 91 05 50 64</Link>
              <Link href="mailto:info@intheair.tech">info@intheair.tech</Link>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <h4 className="font-medium">Légal</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="mailto:info@intheair.tech">Mentions légales</Link>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <h4 className="font-medium">Nos réseaux sociaux</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="mailto:info@intheair.tech">Instagram</Link>
              <Link href="mailto:info@intheair.tech">Facebook</Link>
              <Link href="mailto:info@intheair.tech">LinkedIn</Link>
            </div>
          </div>
        </nav>
        <p>Intheair © Tous droits réservés 2024</p>
      </div>
    </footer>
  );
}
