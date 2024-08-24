"use client";
import Image from "next/image";
import React, { useRef } from "react";
import NumberTicker from "../magicui/number-ticket";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function OurGoal() {
  const stats = [
    { value: 800, label: "Ha topographiés" },
    { value: 250, label: "Projets réalisés" },
    { value: 15, label: "Ingénieurs spécialisés" },
    { value: 100, label: "Territoire français couvert" },
    { value: 20, label: "Clients grands comptes" },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // Translation Y

  return (
    <section id="our-goal" className="py-32 px-10 ">
      <div className="max-w-[1400px] overflow-hidden mx-auto flex flex-col gap-4 ">
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center mx-auto text-center justify-center max-w-[700px]">
            <span className="uppercase font-thin text-sm lg:text-base">
              Présentation
            </span>
            <h2 className="text-3xl lg:text-5xl font-semibold text-[#0B001C]">
              Notre objectif
            </h2>
            <p className="mt-5 text-black/70 text-center">
              Intheair rend accessible l'imagerie aérienne en facilitant l'accès
              à la captation de données par drone et satellite, leur analyse
              immédiate, suivies de recommandations concrètes. Startup
              GreenTech, la mission d'Intheair est simple : Vous accompagner
              dans les étapes clés de vos projets pour vous aider à relever les
              défis techniques et environnementaux.
            </p>
          </div>{" "}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-5 mt-16">
          <motion.img
            style={{ y }} // Applique la translation en Y
            className="mx-auto rounded-xl lg:w-1/2 lg:h-[500px] object-cover"
            src="https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg"
            alt=""
          />
          <motion.img
            style={{ y }} // Applique la translation en Y
            className="mx-auto rounded-xl lg:w-1/2 lg:h-[500px] object-cover"
            src="https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg"
            alt=""
          />
        </div>

        <div className="flex items-center justify-center gap-6 mx-auto max-w-[1000]">
          {stats.map((stat, index) => (
            <>
              <div className="flex flex-col items-center text-center">
                <span className="text-lg lg:text-3xl font-semibold">
                  <NumberTicker value={stat.value} />
                </span>
                <span className="text-xs lg:text-base text-black/70">
                  {stat.label}
                </span>
              </div>
              {index < stats.length - 1 && (
                <div className="w-[1px] h-[40px] bg-black/70"></div>
              )}
            </>
          ))}
        </div>
        <button className="mt-6 flex items-center mx-auto hover:underline underline-offset-2 text-main gap-2 hover:gap-3 duration-150">
          Découvrir notre histoire
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
