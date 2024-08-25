import { article } from "@/data/article";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const elements = Array(24).fill(null);

  return (
    <div>
      <div className="grid gap-20 max-w-[1400px] max-auto px-10 py-28">
        <div className="mx-auto flex flex-col items-center gap-3 max-w-[700px] ">
          <h2 className="text-xl lg:text-3xl font-semibold text-[#0B001C]">
            Nos articles
          </h2>
          <p className=" text-black/70 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in
            magni natus optio!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {elements.map((elem, index) => (
            <div
              className="bg-white shadow-md rounded-xl flex flex-col overflow-hidden"
              key={index}
            >
              <Image
                className="w-full duration-300 object-cover flex-1 max-h-[200px]"
                src={`https://picsum.photos/id/${index + 1}/200/300`}
                width={500}
                height={500}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 gap-6 h-full max-w-[400px]">
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-black/70">Lecture: 3 min</p>
                  <h4 className="text-xl">{article.title}</h4>
                  <p className="text-sm text-black/70">
                    {article.shortDescription}
                  </p>
                </div>{" "}
                <Link
                  href="/blog-example"
                  className="flex self-end items-center gap-2 hover:underline underline-offset-2 duration-300 hover:gap-3 text-sm group"
                >
                  Lire l'article <ChevronRight className="w-4 h-4 " />{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mx-auto text-black/70">
          <button className="border border-black/70 flex items-center justify-center rounded-full h-10 w-10">
            <ChevronLeft />
          </button>
          <button className="border border-black/70 flex items-center justify-center rounded-full h-10 w-10">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
