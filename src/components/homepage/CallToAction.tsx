import React from "react";

export default function CallToAction() {
  return (
    <section className="py-32 px-10 bg-main text-white">
      <div className="max-w-[1200px] overflow-hidden mx-auto flex items-center justify-center flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="uppercase font-extralight text-sm lg:text-base">
            projet
          </span>
          <h2 className="text-3xl lg:text-5xl font-semibold">Un projet ?</h2>
          <p>On s'occupe de tout</p>
          <button className="mt-3 rounded-3xl bg-white text-main hover:scale-[102%] duration-150 py-2 px-5">
            Discutons-en
          </button>
        </div>
      </div>
    </section>
  );
}
