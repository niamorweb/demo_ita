"use client";
import React, { useEffect, useRef, useState } from "react";
import interventionsArea from "@/assets/intervention-areas.svg";
import Image from "next/image";
import CarouselCompanies from "./CarouselCompanies";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useScroll, useTransform, motion } from "framer-motion";

const logos = [
  {
    src: "https://intheair.co/images/home/parteners/veolia.png",
    alt: "Veolia",
  },
  {
    src: "https://intheair.co/images/home/parteners/tenergie.png",
    alt: "Tenergie",
  },
  {
    src: "https://intheair.co/images/home/parteners/aux-marseille.png",
    alt: "Eaux de Marseille",
  },
  {
    src: "https://intheair.co/images/home/parteners/rwe.png",
    alt: "RWE",
  },
  {
    src: "https://intheair.co/images/home/parteners/engie.png",
    alt: "Engie",
  },
  {
    src: "https://intheair.co/images/home/parteners/eiffage.png",
    alt: "Eiffage",
  },
  {
    src: "https://intheair.co/images/home/parteners/silosun.png",
    alt: "Silosun",
  },
  {
    src: "https://intheair.co/images/home/parteners/corsica.png",
    alt: "Corsica",
  },
  {
    src: "https://intheair.co/images/home/parteners/safe.png",
    alt: "Safe",
  },
  {
    src: "https://intheair.co/images/home/parteners/nge.png",
    alt: "NGE",
  },
];

export default function ExtensiveCoverage() {
  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.3]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["100px", "40px"]);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref2.current) {
        // @ts-ignore
        const rect = ref2.current.getBoundingClientRect();
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
  const y1 = useTransform(scrollYProgress, (value) =>
    // @ts-ignore
    inView ? (value - ref2.current.offsetTop) * -0.2 : 0
  );
  const y2 = useTransform(scrollYProgress, (value) =>
    // @ts-ignore
    inView ? (value - ref2.current.offsetTop) * -0.4 : 0
  );

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], ["70%", "-130%"]);

  return (
    <section
      ref={ref2}
      className="py-32 px-10 h-[250vh] overflow-x-hidden bg-gradient-to-b flex flex-col items-center justify-center"
    >
      <div className="sticky top-[10%]">
        <div className="max-w-[1400px] py-16 relative mx-auto flex flex-col gap-12 text-white items-center text-center">
          <motion.div
            style={{ scale, borderRadius }}
            className="absolute top-0 left-0 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#232222] via-[#141313] to-95% to-black w-full h-full"
          ></motion.div>
          <div className="flex flex-col gap-14 max-w-[1000px] z-10">
            <div className="flex flex-col gap-3">
              <span className="uppercase text-sm lg:text-base">
                Couverture étendue
              </span>
              <h2 className="text-3xl lg:text-5xl font-semibold text-[#fff]">
                Large couverture du territoire français et à l’international
              </h2>
            </div>
            <div className="flex flex-col-reverse items-center gap-10 justify-around">
              <div className="flex items-center mt-40 ">
                <motion.img
                  style={{ y: parallaxY }}
                  className="w-[500px] aspect-auto h-auto rounded-lg"
                  src="https://cdn.pixabay.com/photo/2020/06/23/06/45/dji-5331570_1280.jpg"
                  alt=""
                ></motion.img>{" "}
                <div className="-translate-x-10">
                  <motion.img
                    style={{ y: parallaxY2 }}
                    className="w-[500px] h-[500px] object-cover rounded-lg"
                    src="https://cdn.pixabay.com/photo/2019/11/14/19/41/forest-4626959_1280.jpg"
                    alt=""
                  ></motion.img>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-start text-white/70">
                <p>
                  Intheair déploie la première plateforme française de
                  visualisation et d'exploitation de vos projets digitalisés.
                </p>
                <p>
                  Avec notre Plateforme, bénéficiez de la puissance qu'apporte
                  l'IA à la performance de vos projets.
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="flex flex-col gap-5 text-center z-10">
            <p>Avec la confiance de nos partenaires</p>
            {/* <CarouselCompanies /> */}
            <div className="py-8 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
                items={logos}
                direction="right"
                speed="normal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
