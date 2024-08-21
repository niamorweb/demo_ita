import React from "react";

export default function YourSupport() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="uppercase">Support</span>
          <h2 className="text-5xl font-semibold">
            Votre accompagnement sur-mesure
          </h2>
          <p>On s'occupe de tout</p>
        </div>
        <div className="grid w-full max-w-[800px] mx-auto">
          <div className="border-b border-b-black/70 py-10 w-full">
            <span className="rounded-full border-[1px] border-black/70 h-[40px] w-[40px] flex items-center justify-center">
              1
            </span>
            <h4 className="font-semibold text-lg">Cahier des charges</h4>
            <p>Étude ou co-création ou CCTP</p>
          </div>{" "}
          <div className="border-b border-b-black/70 py-10 w-full">
            <span className="rounded-full border-[1px] border-black/70 h-[40px] w-[40px] flex items-center justify-center">
              1
            </span>
            <h4 className="font-semibold text-lg">Cahier des charges</h4>
            <p>Étude ou co-création ou CCTP</p>
          </div>{" "}
          <div className="border-b border-b-black/70 py-10 w-full">
            <span className="rounded-full border-[1px] border-black/70 h-[40px] w-[40px] flex items-center justify-center">
              1
            </span>
            <h4 className="font-semibold text-lg">Cahier des charges</h4>
            <p>Étude ou co-création ou CCTP</p>
          </div>{" "}
          <div className="border-b border-b-black/70 py-10 w-full">
            <span className="rounded-full border-[1px] border-black/70 h-[40px] w-[40px] flex items-center justify-center">
              1
            </span>
            <h4 className="font-semibold text-lg">Cahier des charges</h4>
            <p>Étude ou co-création ou CCTP</p>
          </div>
        </div>
      </div>
    </section>
  );
}
