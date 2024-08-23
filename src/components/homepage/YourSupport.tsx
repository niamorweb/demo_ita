"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Timeline } from "../magicui/timeline";

const steps = [
  {
    id: 1,
    title: "Cahier des charges",
    description:
      "Nous commençons par une étude approfondie de vos besoins, soit en réalisant une analyse détaillée, soit en collaborant étroitement avec vous pour co-créer un cahier des charges technique précis (CCTP). Cette étape est cruciale pour s'assurer que toutes les spécificités du projet sont bien définies et alignées sur vos objectifs.",
    image: "https://intheair.co/images/home/step-1.png",
  },
  {
    id: 2,
    title: "Acquisition",
    description:
      "Nous procédons à l'acquisition des données nécessaires en utilisant des technologies avancées telles que les drones ou les satellites. Ces données peuvent comprendre des images aériennes, des relevés topographiques, ou d'autres types de mesures environnementales. Cette étape garantit que nous avons des informations précises et actuelles pour l'analyse suivante.",
    image: "https://intheair.co/images/home/step-2.png",
  },
  {
    id: 3,
    title: "Analyse",
    description:
      "Les données collectées sont ensuite soumises à un traitement intelligent à l'aide d'algorithmes sophistiqués et de techniques d'analyse de pointe. Cette phase comprend la modélisation, la simulation, et l'interprétation des données pour en extraire des informations pertinentes et exploitables pour votre projet.",
    image: "https://intheair.co/images/home/step-3.png",
  },
  {
    id: 4,
    title: "Visualisation",
    description:
      "Les résultats de l'analyse sont présentés de manière claire et accessible sur notre plateforme dédiée. Vous pouvez explorer les livrables interactifs, visualiser les données sous forme de cartes, graphiques, ou modèles 3D, et partager ces informations avec vos équipes pour une prise de décision éclairée.",
    image: "https://intheair.co/images/home/step-4.png",
  },
  {
    id: 5,
    title: "Suggestions",
    description:
      "Sur la base des données analysées, nous formulons des recommandations précises pour optimiser vos infrastructures. Ces conseils sont conçus pour améliorer la durabilité, l'efficacité, et la performance de vos installations, tout en minimisant les coûts et en maximisant le retour sur investissement.",
    image: "https://intheair.co/images/home/step-5.png",
  },
];

const data = steps.map((step) => ({
  title: step.title,
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        {step.description}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="https://cdn.pixabay.com/photo/2024/01/30/14/29/field-8542201_1280.jpg"
          alt="template image"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2024/01/30/14/29/field-8542201_1280.jpg"
          alt="template image"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2024/01/30/14/29/field-8542201_1280.jpg"
          alt="template image"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
        <Image
          src="https://cdn.pixabay.com/photo/2024/01/30/14/29/field-8542201_1280.jpg"
          alt="template image"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        />
      </div>
    </div>
  ),
}));

export default function YourSupport() {
  return (
    <section className="py-32 px-10">
      <div className="max-w-[1400px] mx-auto flex items-start justify-start gap-8 relative">
        <div className="flex flex-col gap-3 sticky top-20">
          <span className="uppercase">Support</span>
          <h2 className="text-5xl font-semibold text-[#0B001C]">
            Votre accompagnement sur-mesure
          </h2>
          <p className=" text-black/70">On s'occupe de tout</p>

          <button className="mt-3 w-fit rounded-3xl bg-main text-white hover:scale-[102%] duration-150 py-2 px-5">
            Demander une démo
          </button>
        </div>
      </div>
      <Timeline data={data} />
    </section>
  );
}
