import React from "react";
import interventionsArea from "@/assets/intervention-areas.svg";
import Image from "next/image";

export default function ExtensiveCoverage() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 items-center text-center">
        <div className="flex flex-col gap-3 max-w-[700px]">
          <span className="uppercase">Couverture étendue</span>
          <h2 className="text-5xl font-semibold">
            Large couverture du territoire
          </h2>
          <div className="flex flex-col gap-3">
            <p>
              Intheair déploie la première plateforme française de visualisation
              et d'exploitation de vos projets digitalisés.
            </p>
            <p>
              Avec notre Plateforme, bénéficiez de la puissance qu'apporte l'IA
              à la
            </p>
          </div>
        </div>
        <Image
          className="w-[500px] h-auto"
          src={interventionsArea}
          width={500}
          height={500}
          alt="Description of the image"
        />
      </div>
    </section>
  );
}
