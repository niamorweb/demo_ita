"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
  const { scrollY } = useScroll();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        // @ts-ignore
        const rect = ref.current.getBoundingClientRect();
        setInView(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply parallax effect only when the section is in view
  const y1 = useTransform(scrollY, (value) =>
    // @ts-ignore
    inView ? (value - ref.current.offsetTop) * -0.2 : 0
  );
  const y2 = useTransform(scrollY, (value) =>
    // @ts-ignore
    inView ? (value - ref.current.offsetTop) * -0.4 : 0
  );

  return (
    <section id="our-goal" ref={ref} className="py-32 px-10 bg-[#F4F0EE]">
      <div className="max-w-[1400px] overflow-hidden mx-auto flex flex-col gap-4 ">
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center mx-auto text-center justify-center max-w-[900px]">
            <span className="bg-mainDark text-white text-xs rounded-full py-1 px-4 mb-3">
              Présentation
            </span>
            <h2 className="text-xl lg:text-3xl font-semibold text-[#0B001C]">
              Première entreprise greentech dans l'analyse de donneés par
              satellite
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
          <button className="mt-6 flex items-center mx-auto hover:underline underline-offset-2 text-main gap-2 hover:gap-3 duration-150">
            Découvrir notre histoire
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-32">
          <div className="">
            <motion.img
              style={{ y: y1 }} // Applique la translation en Y pour la première image
              className="rounded-xl aspect-square lg:h-[300px] object-cover"
              src="https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg"
              alt=""
            />
          </div>
          <div className="-translate-x-12">
            <motion.img
              style={{ y: y2 }} // Applique la translation en Y pour la deuxième image
              className="rounded-xl aspect-square lg:h-[300px] object-cover"
              src="https://cdn.pixabay.com/photo/2015/12/07/14/18/drone-1080844_1280.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center mt-20 justify-center gap-6 mx-auto max-w-[1000]">
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
      </div>
    </section>
  );
}
