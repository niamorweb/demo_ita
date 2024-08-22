import React from "react";

export default function OurGoal() {
  return (
    <section className="py-32 px-10">
      <div className="max-w-[1400px] overflow-hidden mx-auto flex flex-col gap-8 ">
        <div className="w-full flex items-end justify-between ">
          <div className="flex flex-col items-start max-w-[700px]">
            <span className="uppercase">Présentation</span>
            <h2 className="text-5xl font-semibold text-[#0B001C]">
              Notre objectif
            </h2>
            <p className="mt-5 text-black/70">
              Intheair rend accessible l'imagerie aérienne en facilitant l'accès
              à la captation de données par drone et satellite, leur analyse
              immédiate, suivies de recommandations concrètes. Startup
              GreenTech, la mission d'Intheair est simple : Vous accompagner
              dans les étapes clés de vos projets pour vous aider à relever les
              défis techniques et environnementaux.
            </p>
          </div>{" "}
          <button className="mt-3 rounded-3xl bg-[#0B001C] text-white hover:scale-[102%] duration-150 py-2 px-5">
            Découvrir notre histoire
          </button>
        </div>

        <video
          className="mx-auto rounded-xl h-[500px] object-cover"
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

        <div className="flex items-center justify-center gap-4 mx-auto max-w-[1000]">
          <div className="flex flex-col items-center text-center">
            <span className="text-xl font-semibold">800</span>
            <span className="text-black/70">Ha topographiés</span>
          </div>
          <div className="w-[1px] h-[40px] bg-black/70"></div>
          <div className="flex flex-col items-center text-center">
            <span className="text-xl font-semibold">90%</span>
            <span className="text-black/70">De nos clients satisfaits</span>
          </div>{" "}
          <div className="w-[1px] h-[40px] bg-black/70"></div>
          <div className="flex flex-col items-center text-center">
            <span className="text-xl font-semibold">90%</span>
            <span className="text-black/70">De nos clients satisfaits</span>
          </div>{" "}
          <div className="w-[1px] h-[40px] bg-black/70"></div>
          <div className="flex flex-col items-center text-center">
            <span className="text-xl font-semibold">90%</span>
            <span className="text-black/70">De nos clients satisfaits</span>
          </div>{" "}
          <div className="w-[1px] h-[40px] bg-black/70"></div>
          <div className="flex flex-col items-center text-center">
            <span className="text-xl font-semibold">90%</span>
            <span className="text-black/70">De nos clients satisfaits</span>
          </div>
        </div>
      </div>
    </section>
  );
}
