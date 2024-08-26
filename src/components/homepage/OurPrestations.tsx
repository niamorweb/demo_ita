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
import { FocusCards } from "../ui/focus-card";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
  {
    title: "Études topographiques",
    description:
      "La fusion de la photogrammétrie et du Lidar, ainsi que le savoir-faire de nos géomètres, garantissent une qualité et une précision optimale pour l'ensemble de vos relevés topographiques.",
    img: "https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg",
    category: "Topographie",
  },
  {
    title: "Études géodésiques",
    description:
      "Nos experts en géodésie utilisent des technologies avancées pour vous fournir des mesures précises et fiables pour vos projets.",
    img: "https://cdn.pixabay.com/photo/2017/07/29/13/17/plant-2551467_1280.jpg",
    category: "Etudes",
  },
  {
    title: "Cartographie numérique",
    description:
      "Obtenez des cartes numériques détaillées et précises adaptées à vos besoins grâce à nos outils de cartographie avancés.",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fon.abdn.ac.uk%2Fresources%2F7bc%2FH6H4qJ5Zkya7tP4Qg8SrHhNz7vXN-1600w.jpg&f=1&nofb=1&ipt=95a0a5b5ba95076a9e0215b47fc433341de3362919691778ff824107405c63d1&ipo=images",
    category: "Cartographie",
  },
  {
    title: "Analyse de terrain",
    description:
      "Nous offrons des analyses approfondies du terrain pour une meilleure planification et une exécution réussie de vos projets.",

    img: "https://cdn.pixabay.com/photo/2024/01/30/14/29/field-8542201_1280.jpg",
    category: "Analyse",
  },
];

export default function OurPrestations() {
  const cards = data.map((card, index) => (
    <Card key={card.img} card={card} index={index} />
  ));

  return (
    <section className="py-32 px-10 bg-gradient-to-b">
      <div className="max-w-[1400px] mx-auto flex justify-center flex-col">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col items-center text-center mx-auto gap-3 max-w-[600px] ">
            <div className="flex flex-col items-center gap-3 max-w-[700px] ">
              <span className="bg-mainDark text-white text-xs rounded-full py-1 px-4 mb-3">
                Prestations
              </span>
              <h2 className="text-xl lg:text-3xl font-semibold text-[#0B001C]">
                Toutes nos prestations
              </h2>
              <p className=" text-black/70 text-center">
                Études de topographie, thermographie et inspection
                d’infrastructures, analyses de haute précision, suivies de
                recommandations concrètes
              </p>
            </div>
          </div>{" "}
        </div>
        <Carousel items={cards} />

        {/* <Image className="absolute object-cover" src={topographyImage} width={300} height={300} alt="" /> */}
      </div>
    </section>
  );
}
