import React from "react";
import interventionsArea from "@/assets/intervention-areas.svg";
import Image from "next/image";
import CarouselCompanies from "./CarouselCompanies";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

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

export default function ExtensiveCoverage() {
  return (
    <section className="py-32 px-10 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-[1400px] overflow-hidden mx-auto flex flex-col gap-12 items-center text-center">
        <div className="flex flex-col gap-14 max-w-[1000px]">
          <div className="flex flex-col gap-3">
            <span className="uppercase">Couverture étendue</span>
            <h2 className="text-5xl font-semibold text-[#0B001C]">
              Large couverture du territoire français et à l’international
            </h2>
          </div>
          <div className="flex items-center gap-10 justify-around">
            <Image
              className="w-[500px] h-auto"
              src={interventionsArea}
              width={500}
              height={500}
              alt="Description of the image"
            />
            <div className="flex flex-col gap-3 text-start text-black/70">
              <p>
                Intheair déploie la première plateforme française de
                visualisation et d'exploitation de vos projets digitalisés.
              </p>
              <p>
                Avec notre Plateforme, bénéficiez de la puissance qu'apporte
                l'IA à la performance de vos projets.
              </p>
            </div>
          </div>{" "}
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p>Avec la confiance de nos partenaires</p>
          {/* <CarouselCompanies /> */}
          <div className="py-8 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={logos}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
