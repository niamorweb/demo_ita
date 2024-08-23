"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Timeline } from "../magicui/timeline";
import { ChevronRight, PenTool } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Cahier des charges",
    description:
      "Analyse approfondie des besoins pour définir un cahier des charges technique précis.",
    image: "https://intheair.co/images/home/step-1.png",
  },
  {
    id: 2,
    title: "Acquisition",
    description:
      "Collecte de données avec des technologies avancées comme les drones et satellites.",
    image: "https://intheair.co/images/home/step-2.png",
  },
  {
    id: 3,
    title: "Analyse",
    description:
      "Traitement des données pour extraire des informations pertinentes via des algorithmes avancés.",
    image: "https://intheair.co/images/home/step-3.png",
  },
  {
    id: 4,
    title: "Visualisation",
    description:
      "Présentation des résultats sous forme de cartes, graphiques, et modèles 3D sur une plateforme dédiée.",
    image: "https://intheair.co/images/home/step-4.png",
  },
  // {
  //   id: 5,
  //   title: "Suggestions",
  //   description:
  //     "Recommandations pour optimiser les infrastructures en maximisant l'efficacité et le retour sur investissement.",
  //   image: "https://intheair.co/images/home/step-5.png",
  // },
];

const data = steps.map((step) => ({
  title: step.title,
  content: (
    <div>
      <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
        {step.description}
      </p>
      <div className="grid">
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
    <section className="py-32 px-10 bg-blue-50">
      <div className="max-w-[1400px] mx-auto flex flex-col items-start justify-start gap-20 relative">
        <div className="flex flex-col gap-3 max-w-[700px] mx-auto items-center text-center">
          <span className="uppercase">Support</span>
          <h2 className="text-5xl font-semibold text-[#0B001C]">
            Votre accompagnement sur-mesure
          </h2>
          <p className=" text-black/70">On s'occupe de tout</p>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {steps.map((elem, index) => (
            <div
              className="text-center bg-mainDark rounded-2xl text-white flex flex-col items-center justify-center p-12"
              key={index}
            >
              <span className="flex items-center justify-center w-10 h-10 text-lg font-semibold border rounded-full border-white">
                {index + 1}
              </span>
              <h5 className="text-lg font-semibold mt-4 mb-2">{elem.title}</h5>
              <p className="text-sm">{elem.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <Timeline data={data} /> */}
    </section>
  );
}
