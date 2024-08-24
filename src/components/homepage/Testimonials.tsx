"use client";
import Image from "next/image";
import React, { useState } from "react";
import randomImage from "@/assets/prestations_img_2.png";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import Marquee from "../magicui/marquee";

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

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
  image,
  name,
  title,
  feedback,
}: {
  image: any;
  name: string;
  title: string;
  feedback: string;
}) => {
  return (
    <figure
      className={cn(
        "relative bg-white text-black w-64 overflow-hidden rounded-xl border p-4"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt=""
          src={image}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium">{title}</p>
        </div>
      </div>
      <blockquote className="mt-2  text-xs lg:text-sm text-black/70">
        {feedback}
      </blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section className="py-32 px-10 bg-main text-white">
      <div className="max-w-[1400px] mx-auto flex items-start justify-center flex-col gap-14">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col items-start gap-3 text-start max-w-[700px]">
            <span className="uppercase text-sm font-extralight lg:text-base">
              Témoignages
            </span>
            <h2 className="text-3xl lg:text-5xl font-semibold text-white">
              Ce sont nos clients qui parlent le mieux de nous
            </h2>
          </div>
        </div>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-main dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-main dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
