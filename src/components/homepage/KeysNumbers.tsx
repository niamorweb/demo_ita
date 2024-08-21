import React from "react";

export default function KeysNumbers() {
  const elements = [
    <img
      key="1"
      className="object-cover sm:h-full h-72 w-full rounded-md"
      src="https://images.unsplash.com/photo-1686918101049-d7fc95087424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80"
      alt="Gallery item 1"
    />,
    <img
      key="2"
      className="object-cover sm:h-full h-28 w-full rounded-md sm:col-span-2"
      src="https://images.unsplash.com/photo-1648614593495-e0955bf287e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
      alt="Gallery item 2"
    />,
    <img
      key="3"
      className="object-cover sm:h-full h-96 w-full rounded-md sm:row-span-2"
      src="https://images.unsplash.com/photo-1687273195751-14befe467d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1406&q=80"
      alt="Gallery item 3"
    />,
    <img
      key="4"
      className="object-cover sm:h-full h-40 w-full rounded-md sm:col-span-2"
      src="https://images.unsplash.com/photo-1687812693663-c322b9af62a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      alt="Gallery item 4"
    />,
    <img
      key="5"
      className="object-cover sm:h-full h-60 w-full rounded-md"
      src="https://images.unsplash.com/photo-1685980201821-6577f4feec1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      alt="Gallery item 5"
    />,
  ];

  return (
    <section className="py-20 px-10">
      <div className="max-w-[1400px] mx-auto flex items-center justify-center flex-col gap-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="uppercase">Nos réalisations</span>
          <h2 className="text-5xl font-semibold">Intheair en chiffres</h2>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[1000px] mx-auto flex justify-center items-center">
            <section className="w-full h-[600px] grid sm:grid-cols-10 sm:grid-rows-2 rounded-xl gap-5 grid-cols-1 auto-rows-auto">
              <div className="border border-black/70 p-10 flex col-span-5 row-span-1 w-full h-full rounded-xl">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-bold">5 000</span>
                  <span className="text-2xl text-black/70">
                    Ha topographiés
                  </span>
                </div>
              </div>
              <div className="p-10 border border-black/70 col-span-5 row-span-1 w-full h-full rounded-xl">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-bold">250 +</span>
                  <span className="text-2xl text-black/70">
                    Projets réalisés
                  </span>
                </div>
              </div>
              <div className="p-10 border border-black/70 col-span-3 row-span-1 w-full h-full rounded-xl">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-bold">15 +</span>
                  <span className="text-2xl text-black/70">
                    Ingénieurs spécialisés
                  </span>
                </div>
              </div>
              <div className="p-10 flex border border-black/70 col-span-4 row-span-1 w-full h-full rounded-xl">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-bold">100%</span>
                  <span className="text-2xl text-black/70">
                    Du territoire français couvert
                  </span>
                </div>
              </div>
              <div className="p-10 border border-black/70 col-span-3 row-span-1 w-full h-full rounded-xl">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-bold">20+</span>
                  <span className="text-2xl text-black/70">
                    Clients grands comptes
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
