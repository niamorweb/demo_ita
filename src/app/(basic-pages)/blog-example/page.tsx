import { article } from "@/data/article";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="pb-40">
      <div className="relative">
        <Image
          className="w-full max-h-[500px] object-cover"
          src={article.image}
          width={2000}
          height={1000}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white flex items-center flex-col gap-3 justify-center">
          <span className="text-sm text-white/70">
            {article.readingTime} de lecture
          </span>
          <h2 className="text-xl lg:text-3xl font-semibold text-center">
            {article.title}
          </h2>
        </div>
      </div>
      <div className="px-4 lg:px-10">
        <div className="max-w-[800px] mx-auto flex flex-col mt-12 gap-4">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-32">
        <Image
          className="w-[80px] h-[80px] rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg"
          width={80}
          height={80}
          alt=""
        />
        <p className="mt-6">John Doe</p>
        <p>Ingérieur en IA</p>
      </div>
    </div>
  );
}
