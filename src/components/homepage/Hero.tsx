"use client";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/drone.jpg";
import CircleSVG from "@/assets/hero_circle.svg";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-10 min-h-screen overflow-hidden pt-10 pb-20 flex items-center justify-center relative">
      <video
        className="object-cover absolute left-0 top-0 w-full h-full"
        width="1400"
        height="400"
        autoPlay
        loop
        muted
      >
        <source src="/drone_video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>
      <div className=" absolute left-0 top-0 w-full h-full backdrop-brightness-[.3]"></div>
      <div className="max-w-[1400px] w-full grid gap-14 z-10">
        <div className="flex flex-col gap-4 text-white max-w-[700px]">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[45px] leading-[45px] lg:text-[80px] lg:leading-[80px] font-bold inline-block text-white"
          >
            Elever l’analyse de{" "}
            <span className="relative inline-flex items-center">
              <span className="relative z-10">données</span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70"
          >
            Intheair accompagne vos projets grâce à l’analyse de données
            intelligente et prédictive. Bénéficiez de nos solutions innovantes
            de captation et traitement de données, par drone et satellite.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mt-3"
          >
            {/* <button className="rounded-3xl bg-main text-white hover:scale-[102%] duration-150 py-2 px-5">
              Etre rappelé
            </button> */}
            <Link
              href="/#intro"
              className="cursor-pointer rounded-3xl border border-white text-white hover:scale-[102%] duration-150 py-2 px-5"
            >
              Découvrir nos solution
            </Link>
          </motion.div>
        </div>
        {/* <Image
          className="h-full w-full object-cover rounded-2xl "
          width={600}
          height={600}
          alt=""
          src={heroImage}
        /> */}
      </div>
    </section>
  );
}
