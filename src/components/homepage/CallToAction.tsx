import React from "react";

export default function CallToAction() {
  return (
    <section className="py-20 px-10 bg-[#0B001C] text-white">
      <div className="max-w-[1200px] overflow-hidden mx-auto flex items-center justify-center flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="uppercase">Support</span>
          <h2 className="text-5xl font-semibold">
            Votre accompagnement sur-mesure
          </h2>
          <p>On s'occupe de tout</p>
          <button className="mt-3 rounded-3xl bg-white text-[#0B001C] hover:scale-[102%] duration-150 py-3 px-6">
            Discutons-en
          </button>
        </div>
      </div>
    </section>
  );
}
