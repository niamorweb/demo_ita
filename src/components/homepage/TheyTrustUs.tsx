"use client";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/image_hero.png";
import CarouselCompanies from "./CarouselCompanies";

export default function TheyTrustUs() {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 items-center justify-center">
        <h2 className="text-5xl font-semibold ">Ils nous font confiance</h2>
        <CarouselCompanies />
        {/* <div className="flex items-center flex-nowrap gap-3 overflow-hidden">
          {companyList.map((company, index) => (
            <Image
              className="max-h-[80px]"
              width={200}
              height={100}
              alt=""
              src={heroImage}
            />
          ))}
        </div>
        <div className="flex items-center flex-nowrap gap-3 overflow-hidden">
          {companyList.map((company, index) => (
            <Image
              className="max-h-[80px]"
              width={200}
              height={100}
              alt=""
              src={heroImage}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
