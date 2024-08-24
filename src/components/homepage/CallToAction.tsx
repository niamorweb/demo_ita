import React from "react";

export default function CallToAction() {
  return (
    <section className="py-32 px-10 bg-[#232222] text-white">
      <div className="max-w-[1200px] overflow-hidden mx-auto flex items-center justify-center flex-col gap-8">
        <div className="flex flex-col items-center mx-auto text-center justify-center max-w-[900px]">
          <span className="bg-white text-[#232222] text-xs rounded-full py-1 px-4 mb-3">
            Projet
          </span>
          <h2 className="text-xl lg:text-3xl font-semibold text-white">
            Un projet ?
          </h2>
          <p className="mt-5 text-white/70 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime vel
            eius nesciunt natus perspiciatis?
          </p>
          <button className="mt-7 rounded-3xl bg-white text-[#232222] hover:scale-[102%] duration-150 py-2 px-5">
            Discutons-en
          </button>
        </div>
      </div>
    </section>
  );
}
