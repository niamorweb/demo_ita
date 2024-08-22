"use client";
import React, { useState } from "react";
import prestationImg1 from "@/assets/prestations_img_1.png";
import prestationImg2 from "@/assets/prestations_img_2.png";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function OurPrestations() {
  const data = [
    {
      title: "Études topographiques",
      description:
        "La fusion de la photogrammétrie et du Lidar, ainsi que le savoir-faire de nos géomètres, garantissent une qualité et une précision optimale pour l'ensemble de vos relevés topographiques.",
      img1: prestationImg1,
      img2: prestationImg2,
    },
    {
      title: "Études géodésiques",
      description:
        "Nos experts en géodésie utilisent des technologies avancées pour vous fournir des mesures précises et fiables pour vos projets.",
      img1: prestationImg1,
      img2: prestationImg2,
    },
    {
      title: "Cartographie numérique",
      description:
        "Obtenez des cartes numériques détaillées et précises adaptées à vos besoins grâce à nos outils de cartographie avancés.",
      img1: prestationImg1,
      img2: prestationImg2,
    },
    {
      title: "Analyse de terrain",
      description:
        "Nous offrons des analyses approfondies du terrain pour une meilleure planification et une exécution réussie de vos projets.",
      img1: prestationImg1,
      img2: prestationImg2,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="py-20 px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center max-w-[600px] mx-auto">
          <span className="uppercase">Prestations</span>
          <h2 className="text-5xl font-semibold">Nos prestations</h2>
          <p>
            Études de topographie, thermographie et inspection
            d’infrastructures, analyses de haute précision, suivies de
            recommandations concrètes
          </p>
          <button className="mt-3 rounded-3xl bg-black text-white hover:scale-[102%] duration-150 py-3 px-6">
            Voir plus
          </button>
        </div>
        <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-4">
          <div className="flex items-center gap-3 self-end">
            <button
              onClick={handlePrev}
              className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black text-white"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="h-[40px] w-[40px] flex items-center justify-center rounded-full bg-black text-white"
            >
              <ArrowRight />
            </button>
          </div>
          <AnimatePresence>
            <motion.section
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[600px] grid sm:grid-cols-3 sm:grid-rows-10 rounded-xl gap-5 grid-cols-1 auto-rows-auto"
            >
              <div className="border border-black/70 p-10 flex col-span-1 row-span-4 w-full h-full rounded-xl">
                <h4 className="text-xl self-end">{data[currentIndex].title}</h4>
              </div>
              <div className="border border-black/70 col-span-2 row-span-5 w-full h-full rounded-xl">
                <Image
                  src={data[currentIndex].img1}
                  className="w-full h-full object-cover"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
              <div className="border border-black/70 col-span-1 row-span-6 w-full h-full rounded-xl">
                <Image
                  src={data[currentIndex].img2}
                  className="w-full h-full object-cover"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
              <div className="p-10 flex border border-black/70 col-span-2 row-span-5 w-full h-full rounded-xl">
                <p className="self-end">{data[currentIndex].description}</p>
              </div>
            </motion.section>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
