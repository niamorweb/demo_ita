"use client";
import { useEffect, useState } from "react";

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState("bg-white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setBgColor("bg-blue-500"); // Changer de couleur après 300px de scroll
      } else {
        setBgColor("bg-white"); // Couleur de fond initiale
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${bgColor} h-screen transition-colors duration-500`}>
      <h1 className="text-center text-3xl p-10">
        Scroll down to change background color
      </h1>
      <div className="h-[150vh]"></div>{" "}
      {/* Contenu supplémentaire pour permettre le scroll */}
    </div>
  );
};

export default BackgroundChanger;
