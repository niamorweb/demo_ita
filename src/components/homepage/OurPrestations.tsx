import React from "react";
import prestationImg1 from "@/assets/prestations_img_1.png";
import prestationImg2 from "@/assets/prestations_img_2.png";
import Image from "next/image";

export default function OurPrestations() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center max-w-[600px] mx-auto">
          <span className="uppercase">Prestations</span>
          <h2 className="text-5xl font-semibold">Nos prestations</h2>
          <p>
            Études de topographie, thermographie et inspection
            d’infrastructures, analyses de haute précision, suivies de
            recommandations concrètes
          </p>
          <button className="mt-3 rounded-3xl bg-black text-white hover:scale-[102%] duration-150 py-3 px-6">
            Voir plus
          </button>
        </div>
        <div className="w-full max-w-[1000px] mx-auto flex justify-center items-center py-10">
          <section className="w-full h-[600px] grid sm:grid-cols-3 sm:grid-rows-10 rounded-xl gap-5 grid-cols-1 auto-rows-auto">
            <div className="border border-black/70 p-10 flex col-span-1 row-span-4 w-full h-full rounded-xl">
              <h4 className="text-xl self-end">
                Etudes <br /> topographiques
              </h4>
            </div>
            <div className="border border-black/70 col-span-2 row-span-5 w-full h-full rounded-xl">
              <Image
                src={prestationImg1}
                className="w-full h-full object-cover"
                width={600}
                height={600}
                alt=""
              />
            </div>
            <div className="border border-black/70 col-span-1 row-span-6 w-full h-full rounded-xl">
              <Image
                src={prestationImg2}
                className="w-full h-full object-cover"
                width={600}
                height={600}
                alt=""
              />
            </div>
            <div className="p-10 flex border border-black/70 col-span-2 row-span-5 w-full h-full rounded-xl">
              <p className="self-end">
                La fusion de la photogrammétrie et du Lidar, ainsi que le
                savoir-faire de nos géomètres, garantissent une qualité et une
                précision optimale pour l'ensemble de vos relevés topographiques
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
