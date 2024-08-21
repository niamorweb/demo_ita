import Image from "next/image";
import React from "react";
import randomImage from "@/assets/prestations_img_2.png";

export default function Testimonials() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center flex-col gap-14">
        <div className="flex flex-col items-center gap-3 text-center max-w-[700px]">
          <span className="uppercase">Témoignages</span>
          <h2 className="text-5xl font-semibold">
            Ce sont nos clients qui parlent le mieux de nous
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col border border-black/70 rounded-xl p-6 gap-4 max-w-[350px] text-sm">
            <Image
              className="w-[50px] h-[50px] rounded-full object-cover"
              src={randomImage}
              width={100}
              height={100}
              alt=""
            />
            <p className="">
              “Nous sommes ravis d’avoir travaillé avec intheair, votre
              réactivité et votre capacité d’écoute a permis de trouver les
              solutions les plus adaptées pour nos différents projets. Nous ne
              doutons pas que nous referons appel à vos services pour de futurs
              projets.”
            </p>
            <div className="flex flex-col gap-2">
              <p>Mattias</p>
              <p>Chef de projet - Tenergie</p>
            </div>
          </div>
          <div className="flex flex-col border border-black/70 rounded-xl p-6 gap-4 max-w-[350px] text-sm">
            <Image
              className="w-[50px] h-[50px] rounded-full object-cover"
              src={randomImage}
              width={100}
              height={100}
              alt=""
            />
            <p className="">
              “Nous sommes ravis d’avoir travaillé avec intheair, votre
              réactivité et votre capacité d’écoute a permis de trouver les
              solutions les plus adaptées pour nos différents projets. Nous ne
              doutons pas que nous referons appel à vos services pour de futurs
              projets.”
            </p>
            <div className="flex flex-col gap-2">
              <p>Mattias</p>
              <p>Chef de projet - Tenergie</p>
            </div>
          </div>
          <div className="flex flex-col border border-black/70 rounded-xl p-6 gap-4 max-w-[350px] text-sm">
            <Image
              className="w-[50px] h-[50px] rounded-full object-cover"
              src={randomImage}
              width={100}
              height={100}
              alt=""
            />
            <p className="">
              “Nous sommes ravis d’avoir travaillé avec intheair, votre
              réactivité et votre capacité d’écoute a permis de trouver les
              solutions les plus adaptées pour nos différents projets. Nous ne
              doutons pas que nous referons appel à vos services pour de futurs
              projets.”
            </p>
            <div className="flex flex-col gap-2">
              <p>Mattias</p>
              <p>Chef de projet - Tenergie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
