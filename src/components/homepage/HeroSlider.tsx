"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import serviceImgCompressed1 from "/assets/services/compressed_1.jpg";
import serviceImgCompressed2 from "@/assets/compressed_2.jpg";
import serviceImgCompressed3 from "@/assets/compressed_3.jpg";
import serviceImgCompressed4 from "@/assets/compressed_4.jpg";
import serviceImg1 from "@/assets/service_1.jpg";
import serviceImg2 from "@/assets/service_2.webp";
import serviceImg3 from "@/assets/service_3.jpg";
import serviceImg4 from "@/assets/service_4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [
    "/assets/services/service_1.jpg",
    "/assets/services/service_2.webp",
    "/assets/services/service_3.jpg",
    "/assets/services/service_4.jpg",
    "/assets/services/service_3.jpg",
  ];
  const imagesCompressed = [
    "/assets/services/compressed_1.jpg",
    "/assets/services/compressed_2.jpg",
    "/assets/services/compressed_3.jpg",
    "/assets/services/compressed_4.jpg",
    "/assets/services/compressed_3.jpg",
  ];

  const data = [
    {
      title: "Études topographiques",
      description:
        "La fusion de la photogrammétrie et du Lidar, ainsi que le savoir-faire de nos géomètres, garantissent une qualité et une précision optimale pour l'ensemble de vos relevés topographiques.",
      img: "/assets/services/service_1.jpg",
      compressed_img: "/assets/services/compressed_1.jpg",
      category: "Topographie",
    },
    {
      title: "Études géodésiques",
      description:
        "Nos experts en géodésie utilisent des technologies avancées pour vous fournir des mesures précises et fiables pour vos projets.",
      img: "/assets/services/service_2.webp",
      compressed_img: "/assets/services/compressed_2.jpg",
      category: "Etudes",
    },
    {
      title: "Cartographie numérique",
      description:
        "Obtenez des cartes numériques détaillées et précises adaptées à vos besoins grâce à nos outils de cartographie avancés.",
      img: "/assets/services/service_3.jpg",
      compressed_img: "/assets/services/compressed_3.jpg",
      category: "Cartographie",
    },
    {
      title: "Analyse de terrain",
      description:
        "Nous offrons des analyses approfondies du terrain pour une meilleure planification et une exécution réussie de vos projets.",
      img: "/assets/services/service_4.jpg",
      compressed_img: "/assets/services/compressed_4.jpg",
      category: "Analyse",
    },
    {
      title: "Visée FH",
      description:
        "Nous offrons des analyses approfondies du terrain pour une meilleure planification et une exécution réussie de vos projets.",
      img: "/assets/services/service_5.jpg",
      compressed_img: "/assets/services/compressed_5.jpg",
      category: "FH",
    },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  const activeImageIndex = positionIndexes.indexOf(0);

  return (
    <div className="flex relative items-center flex-col justify-center bg-black h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-xl opacity-60 transition-all duration-300"
        style={{
          backgroundImage: `url(${data[activeImageIndex].compressed_img})`,
        }}
      ></div>
      <div className="flex flex-col backdrop-blur-sm backdrop-brightness-[.9] p-4 rounded-md gap-4 absolute left-[25%] top-2/3 -translate-y-1/2 z-50 text-white">
        <h2 className="text-6xl font-semibold">
          {data[activeImageIndex].title}
        </h2>
        <p className="text-xl">{data[activeImageIndex].category}</p>
      </div>
      {data.map((item, index) => (
        <motion.img
          key={index}
          src={item.img}
          alt={item.title}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{
            width: "40%",
            height: "70%",
            objectFit: "cover",
            position: "absolute",
          }}
        />
      ))}
      <div className="absolute bottom-10 right-10 flex flex-row gap-3 z-50 mt-40">
        <button
          className="text-black mt-[400px] bg-white rounded-md py-2 px-4"
          onClick={handleBack}
        >
          <ChevronLeft />
        </button>
        <button
          className="text-black mt-[400px] bg-white rounded-md py-2 px-4"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
