import Image from "next/image";
import React from "react";
import heroImage from "@/assets/drone.jpg";
import CircleSVG from "@/assets/hero_circle.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-10 min-h-screen overflow-hidden pt-10 pb-20 flex items-center justify-center relative">
      <video
        className="object-cover absolute left-0 top-0 w-full h-full"
        width="1400" // Largeur de la vidéo
        height="400" // Hauteur de la vidéo
        // controls // Affiche les contrôles de lecture (play, pause, volume, etc.)
        autoPlay // Joue la vidéo automatiquement (optionnel)
        loop // Redémarre la vidéo après la fin (optionnel)
        muted // Démarre la vidéo sans son (optionnel)
      >
        <source src="/drone_video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>
      <div className=" absolute left-0 top-0 w-full h-full backdrop-brightness-[.3]"></div>
      <div className="max-w-[1400px] w-full grid gap-14 z-10">
        <div className="flex flex-col gap-4 text-white max-w-[700px]">
          <h1 className="text-[80px] leading-[80px] font-bold inline-block text-white">
            Elever l’analyse de{" "}
            <span className="relative inline-flex items-center">
              {/* <svg
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
              </svg> */}

              <span className="relative z-10">données</span>
            </span>
          </h1>
          <p className="text-white/70">
            Intheair accompagne vos projets grâce à l’analyse de données
            intelligente et prédictive. Bénéficiez de nos solutions innovantes
            de captation et traitement de données, par drone et satellite.
          </p>
          <div className="flex items-center gap-3 mt-3">
            {/* <button className="rounded-3xl bg-main text-white hover:scale-[102%] duration-150 py-2 px-5">
              Etre rappelé
            </button> */}
            <Link
              href="/#our-goal"
              className="cursor-pointer rounded-3xl border border-white text-white hover:scale-[102%] duration-150 py-2 px-5"
            >
              Découvrir nos solution
            </Link>
          </div>
        </div>
        {/* <Image
          className="h-full w-full object-cover rounded-2xl "
          width={600}
          height={600}
          alt=""
          src={heroImage}
        /> */}
      </div>
    </section>
  );
}
