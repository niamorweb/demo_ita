"use client";
import Image from "next/image";
import React, { useState } from "react";
import randomImage from "@/assets/prestations_img_2.png";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mattias",
    title: "Chef de projet - Tenergie",
    feedback:
      "Nous sommes ravis d’avoir travaillé avec intheair, votre réactivité et votre capacité d’écoute a permis de trouver les solutions les plus adaptées pour nos différents projets. Nous ne doutons pas que nous referons appel à vos services pour de futurs projets.",
    image: randomImage,
  },
  {
    id: 2,
    name: "Sarah",
    title: "Directrice Marketing - Solarex",
    feedback:
      "Une collaboration exceptionnelle avec intheair, qui nous a permis d’atteindre nos objectifs de manière fluide et efficace. Merci pour votre professionnalisme.",
    image: randomImage,
  },
  {
    id: 3,
    name: "Jean-Luc",
    title: "CEO - GreenTech",
    feedback:
      "Intheair a su comprendre nos besoins et nous proposer des solutions innovantes. Un partenaire de confiance pour nos futurs projets.",
    image: randomImage,
  },
  {
    id: 4,
    name: "Laura",
    title: "Responsable RH - EcoPower",
    feedback:
      "Merci à intheair pour leur travail exceptionnel et leur réactivité. Nous sommes très satisfaits du résultat final.",
    image: randomImage,
  },
  {
    id: 5,
    name: "Pierre",
    title: "Ingénieur - EnergyLab",
    feedback:
      "Intheair a su répondre à nos attentes et nous proposer des solutions adaptées. Nous sommes impatients de collaborer à nouveau.",
    image: randomImage,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-32 px-10 bg-[#0B001C] text-white">
      <div className="max-w-[1400px] mx-auto flex items-start justify-center flex-col gap-14">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col items-start gap-3 text-start max-w-[700px]">
            <span className="uppercase text-sm font-extralight">
              Témoignages
            </span>
            <h2 className="text-5xl font-semibold text-white">
              Ce sont nos clients qui parlent le mieux de nous
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <ArrowLeft
              onClick={prevTestimonial}
              className="cursor-pointer text-2xl"
            />
            <ArrowRight
              onClick={prevTestimonial}
              className="cursor-pointer text-2xl"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 relative">
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-4"
              initial={{ x: 0 }}
              animate={{ x: `-${current * (100 / 3)}%` }}
              transition={{ duration: 0.5 }}
            >
              {testimonials
                .slice(current, current + 3)
                .map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="flex-shrink-0 flex flex-col border border-white/70 rounded-xl p-6 gap-4 max-w-[350px] text-sm"
                  >
                    <Image
                      className="w-[50px] h-[50px] rounded-full object-cover"
                      src={testimonial.image}
                      width={50}
                      height={50}
                      alt={testimonial.name}
                    />
                    <p className="">{testimonial.feedback}</p>
                    <div className="flex flex-col gap-2">
                      <p>{testimonial.name}</p>
                      <p>{testimonial.title}</p>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
          {/* <ArrowRight
            onClick={nextTestimonial}
            className="absolute right-[-50px] cursor-pointer text-2xl"
          /> */}
        </div>
      </div>
    </section>
  );
}
