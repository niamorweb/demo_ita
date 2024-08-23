"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Cahier des charges",
    description: "Étude ou co-création ou CCTP",
    image: "https://intheair.co/images/home/step-1.png",
  },
  {
    id: 2,
    title: "Acquisition",
    description: "Données collectées par drone ou satellite",
    image: "https://intheair.co/images/home/step-2.png",
  },
  {
    id: 3,
    title: "Analyse",
    description: "Traitement intelligent des données",
    image: "https://intheair.co/images/home/step-3.png",
  },
  {
    id: 4,
    title: "Visualisation",
    description: "Livrables accessibles sur notre plateforme dédiée",
    image: "https://intheair.co/images/home/step-4.png",
  },
  {
    id: 5,
    title: "Recommandations",
    description: "Conseils d’optimisation de vos infrastructures",
    image: "https://intheair.co/images/home/step-5.png",
  },
];

export default function YourSupport() {
  const [visibleSteps, setVisibleSteps] = useState<any>([]);

  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepIndex = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            //@ts-ignore
            setVisibleSteps((prev: any) => [...new Set([...prev, stepIndex])]);
          } else {
            setVisibleSteps((prev: any) =>
              prev.filter((index: any) => index !== stepIndex)
            );
          }
        });
      },
      {
        threshold: 0.5, // 50% of the element is visible
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (stepRefs.current) {
        stepRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <section className="py-32 px-10">
      <div className="max-w-[1400px] mx-auto flex items-start justify-center gap-8 relative">
        <div className="flex flex-col gap-3 sticky top-20">
          <span className="uppercase">Support</span>
          <h2 className="text-5xl font-semibold text-[#0B001C]">
            Votre accompagnement sur-mesure
          </h2>
          <p className=" text-black/70">On s'occupe de tout</p>

          <button className="mt-3 w-fit rounded-3xl bg-main text-white hover:scale-[102%] duration-150 py-2 px-5">
            Demander une démo
          </button>
        </div>
        <div className="w-full max-w-[1000px] mx-auto overflow-hidden grid gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              //@ts-ignore
              ref={(el) => (stepRefs.current[index] = el)}
              className={`bg-white shadow-md rounded-lg py-20 w-full flex justify-around items-center ${
                index % 2 === 0 ? "flex-row " : "flex-row-reverse"
              }`}
              data-index={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={
                visibleSteps.includes(index)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col gap-2">
                <span className="rounded-full border-[1px] border-black/70 h-[40px] w-[40px] flex items-center justify-center">
                  {step.id}
                </span>
                <h4 className="font-semibold text-lg mt-4">{step.title}</h4>
                <p className="mt-2 text-black/70">{step.description}</p>
              </div>

              <motion.div
                animate={{
                  translateY: [-10, 10],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="max-h-[150px] object-contain"
                  src={step.image}
                  alt=""
                  width={200}
                  height={200}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
