import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import BackgroundChanger from "../changebg";

export default function OurBlogs() {
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
    <section className="py-32 px-10 bg-blue-50">
      <div className="max-w-[1400px] mx-auto flex justify-center flex-col gap-16">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="flex flex-col items-center gap-3 max-w-[600px] ">
            <span className="uppercase">Articles</span>
            <h2 className="text-5xl font-semibold text-[#0B001C]">
              Notre blog
            </h2>
            <p className=" text-black/70">
              Études de topographie, thermographie et inspection
              d’infrastructures, analyses de haute précision, suivies de
              recommandations concrètes
            </p>
          </div>
          <button className="mt-3 flex items-center mx-auto hover:underline underline-offset-2 text-main gap-2 hover:gap-3 duration-150">
            Découvrir notre histoire
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((elem, index) => (
            <div
              className="bg-white shadow-md rounded-xl flex flex-col overflow-hidden"
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
              <div className="flex flex-col justify-between p-4 gap-6 h-full max-w-[400px]">
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-black/70">Lecture: 3 min</p>
                  <h4 className="text-xl">{elem.title}</h4>
                  <p className="text-sm text-black/70">{elem.description}</p>
                </div>{" "}
                <Link
                  href="/blog-example"
                  className="flex self-end items-center gap-2 hover:underline underline-offset-2 duration-300 hover:gap-3 text-sm group"
                >
                  Lire l'article <ChevronRight className="w-4 h-4 " />{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
