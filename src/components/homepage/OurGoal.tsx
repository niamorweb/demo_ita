import React from "react";

export default function OurGoal() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center max-w-[600px] mx-auto">
          <span className="uppercase">Présentation</span>
          <h2 className="text-5xl font-semibold">Notre objectif</h2>
          <p>
            Études de topographie, thermographie et inspection
            d’infrastructures, analyses de haute précision, suivies de
            recommandations concrètes
          </p>

          <button className="mt-3 rounded-3xl bg-black text-white hover:scale-[102%] duration-150 py-3 px-6">
            Voir plus
          </button>
        </div>

        <video
          className="mx-auto rounded-xl"
          width="800" // Largeur de la vidéo
          height="400" // Hauteur de la vidéo
          // controls // Affiche les contrôles de lecture (play, pause, volume, etc.)
          autoPlay // Joue la vidéo automatiquement (optionnel)
          loop // Redémarre la vidéo après la fin (optionnel)
          muted // Démarre la vidéo sans son (optionnel)
        >
          <source src="/drone_video.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>

        {/* <div className="flex items-start justify-center gap-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-semibold">800</span>
            <span className="text-black/70">Ha topographiés</span>
          </div>
          <div className="w-[1px] h-[40px] bg-black/70"></div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl font-semibold">90%</span>
            <span className="text-black/70">De nos clients satisfaits</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
