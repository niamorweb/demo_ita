import Image from "next/image";
import React from "react";
import heroImage from "@/assets/drone.jpg";
import CircleSVG from "@/assets/hero_circle.svg";

export default function Hero() {
  return (
    <section className="px-10 min-h-n[80vh] pt-10 pb-20 flex items-center justify-center">
      <div className="max-w-[1400px] overflow-hidden mx-auto grid grid-cols-2 gap-14">
        <div className="flex flex-col gap-4">
          <h1 className="text-[90px] leading-[90px] font-bold inline-block ">
            Elever l’analyse de{" "}
            <span className="relative inline-flex items-center">
              <svg
                className="absolute inset-0 w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                width="486"
                height="136"
                viewBox="0 0 486 136"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path"
                  d="M75.0061 21.7943C108.977 12.3173 217.104 -5.86912 322.581 8.08276C399.406 18.2448 480.88 36.3692 482.977 70.6088C485.073 104.848 345.883 126.277 248.504 131.461C151.025 136.651 11.2221 129.643 3.34098 96.0471C-4.54012 62.451 125.847 21.7612 223.244 14.3123C266.714 10.9878 292.155 11.6683 335.135 17.3051"
                  stroke="#EA6E01"
                  stroke-width="6"
                  stroke-linecap="round"
                />
              </svg>

              <span className="relative z-10">données</span>
            </span>
          </h1>
          <p className="text-black/70">
            Intheair accompagne vos projets grâce à l’analyse de données
            intelligente et prédictive. Bénéficiez de nos solutions innovantes
            de captation et traitement de données, par drone et satellite,
            permettant de gérer efficacement et durablement vos infrastructures.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <button className="rounded-3xl bg-black text-white hover:scale-[102%] duration-150 py-3 px-6">
              Etre rappelé
            </button>
            <button className="rounded-3xl bg-orange-500 text-white hover:scale-[102%] duration-150 py-3 px-6">
              Demander une démo
            </button>
          </div>
        </div>
        <Image
          className="h-full w-full object-cover rounded-2xl"
          width={600}
          height={600}
          alt=""
          src={heroImage}
        />
      </div>
    </section>
  );
}
