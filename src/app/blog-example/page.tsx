import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="pb-40">
      <div className="relative">
        <Image
          className="w-full max-h-[500px] object-cover"
          src="https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg"
          width={2000}
          height={1000}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white flex items-center flex-col gap-3 justify-center">
          <span className="text-sm text-white/70">3 min de lecture</span>
          <h2 className="text-4xl font-semibold text-center">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>
      </div>
      <div className=" max-w-[800px] mx-auto flex flex-col mt-12 gap-4">
        <div className=" mt-12">
          <p className="text-black/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sunt
            odit ratione ipsam beatae. Amet qui ad magni illum error deserunt
            odit libero sit odio fuga! Harum labore aliquam neque quos, eveniet
            ex repudiandae voluptatem numquam nostrum necessitatibus, temporibus
            autem omnis ducimus officiis doloribus deserunt quaerat eum iusto
            dolore! Fugiat dolores quas nam praesentium libero ducimus vitae
            beatae id deserunt, eius voluptatibus provident magni est repellat
            distinctio sed! Quia aut voluptatibus, assumenda corporis officia id
            quidem eaque dolorem debitis repudiandae totam recusandae
            exercitationem, saepe veritatis incidunt impedit est! Cumque culpa
            voluptatum voluptas! Dicta maiores nesciunt perspiciatis neque at
            consequuntur eos molestias, modi autem omnis iure ut, corrupti porro
            nihil voluptatibus nostrum eum ducimus alias, illum dolores
            exercitationem a magnam perferendis? Enim nostrum facilis esse sequi
            repellat facere, in quo. Nisi eum velit, nobis dolore laboriosam
            temporibus quasi commodi molestias aliquid, animi eos?
          </p>
          <br />
          <p className="text-black/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sunt
            odit ratione ipsam beatae. Amet qui ad magni illum error deserunt
            odit libero sit odio fuga! Harum labore aliquam neque quos, eveniet
            ex repudiandae voluptatem numquam nostrum necessitatibus, temporibus
            autem omnis ducimus officiis doloribus deserunt quaerat eum iusto
            dolore! Fugiat dolores quas nam praesentium libero ducimus vitae
            beatae id deserunt, eius voluptatibus provident magni est repellat
            distinctio sed! Quia aut voluptatibus, assumenda corporis officia id
            quidem eaque dolorem debitis repudiandae totam recusandae
            exercitationem, saepe veritatis incidunt impedit est! Cumque culpa
            voluptatum voluptas! Dicta maiores nesciunt perspiciatis neque at
            consequuntur eos molestias, modi autem omnis iure ut, corrupti porro
            nihil voluptatibus nostrum eum ducimus alias, illum dolores
            exercitationem a magnam perferendis? Enim nostrum facilis esse sequi
            repellat facere, in quo. Nisi eum velit, nobis dolore laboriosam
            temporibus quasi commodi molestias aliquid, animi eos?
          </p>
          <p className="text-black/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sunt
            odit ratione ipsam beatae. Amet qui ad magni illum error deserunt
            odit libero sit odio fuga! Harum labore aliquam neque quos, eveniet
            ex repudiandae voluptatem numquam nostrum necessitatibus, temporibus
            autem omnis ducimus officiis doloribus deserunt quaerat eum iusto
            dolore! Fugiat dolores quas nam praesentium libero ducimus vitae
            beatae id deserunt, eius voluptatibus provident magni est repellat
            distinctio sed! Quia aut voluptatibus, assumenda corporis officia id
            quidem eaque dolorem debitis repudiandae totam recusandae
            exercitationem, saepe veritatis incidunt impedit est! Cumque culpa
            voluptatum voluptas! Dicta maiores nesciunt perspiciatis neque at
            consequuntur eos molestias, modi autem omnis iure ut, corrupti porro
            nihil voluptatibus nostrum eum ducimus alias, illum dolores
            exercitationem a magnam perferendis? Enim nostrum facilis esse sequi
            repellat facere, in quo. Nisi eum velit, nobis dolore laboriosam
            temporibus quasi commodi molestias aliquid, animi eos?
          </p>
          <p className="text-black/70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sunt
            odit ratione ipsam beatae. Amet qui ad magni illum error deserunt
            odit libero sit odio fuga! Harum labore aliquam neque quos, eveniet
            ex repudiandae voluptatem numquam nostrum necessitatibus, temporibus
            autem omnis ducimus officiis doloribus deserunt quaerat eum iusto
            dolore! Fugiat dolores quas nam praesentium libero ducimus vitae
            beatae id deserunt, eius voluptatibus provident magni est repellat
            distinctio sed! Quia aut voluptatibus, assumenda corporis officia id
            quidem eaque dolorem debitis repudiandae totam recusandae
            exercitationem, saepe veritatis incidunt impedit est! Cumque culpa
            voluptatum voluptas! Dicta maiores nesciunt perspiciatis neque at
            consequuntur eos molestias, modi autem omnis iure ut, corrupti porro
            nihil voluptatibus nostrum eum ducimus alias, illum dolores
            exercitationem a magnam perferendis? Enim nostrum facilis esse sequi
            repellat facere, in quo. Nisi eum velit, nobis dolore laboriosam
            temporibus quasi commodi molestias aliquid, animi eos?
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-32">
        <Image
          className="w-[100px] h-[100px] rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2021/12/11/19/25/map-6863486_1280.jpg"
          width={100}
          height={100}
          alt=""
        />
        <p className="mt-6">John Doe</p>
        <p>Ingérieur en IA</p>
      </div>
    </div>
  );
}
