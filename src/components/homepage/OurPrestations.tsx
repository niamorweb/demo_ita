"use client";
import React, { useState } from "react";
import prestationImg1 from "@/assets/prestations_img_1.png";
import prestationImg2 from "@/assets/prestations_img_2.png";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import topographyImage from "@/assets/topography.webp";
import Link from "next/link";

export default function OurPrestations() {
  const data = [
    {
      title: "Études topographiques",
      description:
        "La fusion de la photogrammétrie et du Lidar, ainsi que le savoir-faire de nos géomètres, garantissent une qualité et une précision optimale pour l'ensemble de vos relevés topographiques.",
      img: "https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg",
    },
    {
      title: "Études géodésiques",
      description:
        "Nos experts en géodésie utilisent des technologies avancées pour vous fournir des mesures précises et fiables pour vos projets.",
      img: "https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_1280.jpg",
    },
    {
      title: "Cartographie numérique",
      description:
        "Obtenez des cartes numériques détaillées et précises adaptées à vos besoins grâce à nos outils de cartographie avancés.",
      img: "https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_1280.jpg",
    },
    {
      title: "Analyse de terrain",
      description:
        "Nous offrons des analyses approfondies du terrain pour une meilleure planification et une exécution réussie de vos projets.",

      img: "https://cdn.pixabay.com/photo/2024/01/30/14/29/field-8542201_1280.jpg",
    },
  ];
  return (
    <section className="py-32 px-10">
      <div className="max-w-[1400px] mx-auto flex justify-center flex-col gap-16">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col items-start gap-3 max-w-[600px] ">
            <span className="uppercase">Prestations</span>
            <h2 className="text-5xl font-semibold">Nos prestations</h2>
            <p className=" text-black/70">
              Études de topographie, thermographie et inspection
              d’infrastructures, analyses de haute précision, suivies de
              recommandations concrètes
            </p>
          </div>{" "}
          {/* <button className="mt-3 rounded-3xl bg-black text-white hover:scale-[102%] duration-150 py-3 px-6">
            Voir plus
          </button> */}
        </div>
        {/* <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-4">
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
        </div> */}
        {/* <motion.div className="grid w-full">
          {data.map((elem, index) => (
            <motion.div
              className="w-full border-b border-b-black/70 py-20 "
              key={index}
            >
              <div className="flex flex-col gap-3 max-w-[400px]">
                <h4 className="text-xl">{elem.title}</h4>{" "}
                <p>
                  X: {coords.x}, Y: {coords.y}
                </p>
                <p className="text-sm text-black/70">{elem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        <motion.div className="flex w-full gap-3">
          {data.map((elem, index) => (
            <motion.div
              className="border border-black/70  rounded-xl w-1/4 duration-300 hover:w-2/6 flex flex-col "
              key={index}
            >
              {" "}
              <Image
                className="w-full duration-300 object-cover flex-1 max-h-[200px]"
                src={elem.img}
                width={500}
                height={500}
                alt=""
              />
              <div className="flex flex-col justify-between p-8 gap-6 h-full max-w-[400px]">
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl">{elem.title}</h4>{" "}
                  <p className="text-sm text-black/70">{elem.description}</p>
                </div>{" "}
                <Link
                  href="#"
                  className="flex self-end items-center gap-2 hover:underline underline-offset-2 duration-300 hover:gap-3 text-sm group"
                >
                  En apprendre plus <ChevronRight className="w-4 h-4 " />{" "}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <Image className="absolute object-cover" src={topographyImage} width={300} height={300} alt="" /> */}
      </div>
    </section>
  );
}
