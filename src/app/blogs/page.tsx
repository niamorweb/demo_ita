import { article } from "@/data/article";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const elements = Array(24).fill(null);

  return (
    <div>
      <div className="border-b border-b-black/70 h-[100px] w-full"></div>
      <div className="grid gap-20 max-w-[1400px] max-auto px-10 py-32">
        <h2 className="text-5xl">Nos articles</h2>
        <div className="grid grid-cols-4 gap-6">
          {elements.map((elem, index) => (
            <div
              className="bg-white shadow-md rounded-xl flex flex-col overflow-hidden"
              key={index}
            >
              <Image
                className="w-full duration-300 object-cover flex-1 max-h-[200px]"
                src={article.image}
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
      </div>
    </div>
  );
}
