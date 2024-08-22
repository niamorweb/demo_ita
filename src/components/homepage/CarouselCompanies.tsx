"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    src: "https://intheair.co/images/home/parteners/veolia.png",
    alt: "Veolia",
  },
  {
    src: "https://intheair.co/images/home/parteners/tenergie.png",
    alt: "Tenergie",
  },
  {
    src: "https://intheair.co/images/home/parteners/aux-marseille.png",
    alt: "Eaux de Marseille",
  },
  {
    src: "https://intheair.co/images/home/parteners/rwe.png",
    alt: "RWE",
  },
  {
    src: "https://intheair.co/images/home/parteners/engie.png",
    alt: "Engie",
  },
  {
    src: "https://intheair.co/images/home/parteners/eiffage.png",
    alt: "Eiffage",
  },
  {
    src: "https://intheair.co/images/home/parteners/silosun.png",
    alt: "Silosun",
  },
  {
    src: "https://intheair.co/images/home/parteners/corsica.png",
    alt: "Corsica",
  },
  {
    src: "https://intheair.co/images/home/parteners/safe.png",
    alt: "Safe",
  },
  {
    src: "https://intheair.co/images/home/parteners/nge.png",
    alt: "NGE",
  },
];

const LogoCarousel = () => {
  // Concatène les logos pour éviter les coupures
  const logosToDisplay = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden mt-4">
      <motion.div
        className="flex items-center whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }} // Défilement de 50% pour un effet de continuité
        transition={{
          duration: 14, // Durée du défilement
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {logosToDisplay.map((logo, index) => (
          <div key={index} className="mx-8 flex-shrink-0">
            <Image
              width={200}
              height={200}
              src={logo.src}
              alt={logo.alt}
              className="max-h-[60px] max-w-[100px] object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function CarouselCompanies() {
  return (
    <div className="relative w-full antialiased">
      <main className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full mx-auto px-4 md:px-6 text-center">
          <LogoCarousel />
        </div>
      </main>
    </div>
  );
}
