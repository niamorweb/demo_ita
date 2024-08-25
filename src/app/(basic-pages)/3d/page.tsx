// "use client";
// import React, { useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useGLTF, OrbitControls } from "@react-three/drei";
// import { motion } from "framer-motion-3d";

// function Model({ scrollY }: any) {
//   const modelRef = useRef();
//   const { scene } = useGLTF("/drone_3d.glb");

//   return (
//     <motion.mesh
//       //@ts-ignore
//       ref={modelRef}
//       rotation={[Math.PI / 4, scrollY, 0]} // Inclinaison initiale sur l'axe X, rotation dynamique sur l'axe Y
//       position={[0, 0, 0]}
//     >
//       <primitive object={scene} />
//     </motion.mesh>
//   );
// }

// export default function App() {
//   const scrollY = useScrollY(); // Hook personnalisé pour suivre le défilement

//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         {" "}
//         {/* Ajustez la position selon le besoin */}
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <OrbitControls enableZoom={false} />{" "}
//         {/* Désactive le zoom avec le scroll */}
//         <Model scrollY={scrollY} />
//       </Canvas>
//     </div>
//   );
// }

// function useScrollY() {
//   const [scrollY, setScrollY] = React.useState(0);

//   React.useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY / 1000);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return scrollY;
// }

"use client";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import BlurIn from "@/components/magicui/blur-in";
import Image from "next/image";

function Model({ url }: any) {
  //@ts-ignore
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  useFrame(() => {
    // if (meshRef.current) {
    //   meshRef.current.rotation.x += 0.01;
    // }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (meshRef.current) {
        //@ts-ignore
        meshRef.current.rotation.y = scrollY * 0.004;
        //@ts-ignore
        meshRef.current.rotation.x = scrollY * 0.003;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <primitive ref={meshRef} object={scene} scale={7} />;
}

export default function ThreeDModel() {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const isInView = useInView(textRef, { once: false });
  const isInView2 = useInView(textRef2, { once: false });

  return (
    <section className="px-10 pt-32 pb-60">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col relative">
          <div className="mx-auto flex flex-col items-center gap-3 max-w-[700px] ">
            <h2 className="text-xl lg:text-3xl font-semibold text-[#0B001C]">
              Nos créations de drones en model 3D
            </h2>
            <p className=" text-black/70 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in
              magni natus optio!
            </p>
          </div>
          <div className="sticky top-20">
            <Canvas style={{ height: "400px" }}>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Model url="/drone_3d.glb" />
            </Canvas>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div></div>
            <div></div>
            <motion.div
              ref={textRef}
              initial={{ opacity: 0 }} // Opacité initiale à 0
              animate={isInView ? { opacity: 1 } : {}} // Passe à 1 lorsqu'il est visible
              transition={{ duration: 2 }} // Durée de la transition
              className="max-w-[500px] text-left"
            >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                voluptatem deserunt natus eaque nihil dicta fuga fugiat
                similique, praesentium blanditiis commodi exercitationem unde
                totam voluptas voluptate ex dolorum explicabo? Nihil quod
                dolores a sunt earum et reiciendis omnis rem delectus
                laboriosam. Cum distinctio exercitationem nam omnis totam
                nostrum eum porro eius aperiam perferendis!
              </p>
            </motion.div>
          </div>
          <div className="mt-60 grid grid-cols-3 gap-8">
            <motion.div
              ref={textRef2}
              initial={{ opacity: 0 }} // Opacité initiale à 0
              animate={isInView2 ? { opacity: 1 } : {}} // Passe à 1 lorsqu'il est visible
              transition={{ duration: 2 }} // Durée de la transition
              className="max-w-[500px] text-left"
            >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                voluptatem deserunt natus eaque nihil dicta fuga fugiat
                similique, praesentium blanditiis commodi exercitationem unde
                totam voluptas voluptate ex dolorum explicabo? Nihil quod
                dolores a sunt earum et reiciendis omnis rem delectus
                laboriosam. Cum distinctio exercitationem nam omnis totam
                nostrum eum porro eius aperiam perferendis!
              </p>
            </motion.div>
            <div></div>
            <div></div>
          </div>
          <div className="mt-60 grid grid-cols-3">
            <Image
              src="https://cdn.pixabay.com/photo/2021/11/24/07/13/flycam-6820433_1280.png"
              width={400}
              height={400}
              alt=""
            />
            <div></div>
            <Image
              src="https://cdn.pixabay.com/photo/2021/11/24/07/13/flycam-6820433_1280.png"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="h-[50px]"></div>
        </div>
        <div className="mt-40 max-w-[800px] flex flex-col gap-5 mx-auto">
          <h2 className="text-xl lg:text-3xl font-semibold text-[#0B001C]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet.
          </h2>{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui
            libero eaque quas animi ex accusantium molestiae non? Aliquam
            impedit commodi nesciunt error dolore quis aliquid modi numquam quo
            debitis incidunt veritatis iure nam, voluptatem perspiciatis illum
            earum, provident nemo? Ut perferendis veritatis quidem voluptas
            aperiam ducimus quasi delectus, quaerat incidunt nisi dolore esse
            nam dolorum exercitationem, alias a sit quae labore nesciunt saepe
            ex laboriosam sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam qui libero eaque quas animi ex accusantium
            molestiae non? Aliquam impedit commodi nesciunt error dolore quis
            aliquid modi numquam quo debitis incidunt veritatis iure nam,
            voluptatem perspiciatis illum earum, provident nemo? Ut perferendis
            veritatis quidem voluptas aperiam ducimus quasi delectus, quaerat
            incidunt nisi dolore esse nam dolorum exercitationem, alias a sit
            quae labore nesciunt saepe ex laboriosam sapiente.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui
            libero eaque quas animi ex accusantium molestiae non? Aliquam
            impedit commodi nesciunt error dolore quis aliquid modi numquam quo
            debitis incidunt veritatis iure nam, voluptatem perspiciatis illum
            earum, provident nemo? Ut perferendis veritatis quidem voluptas
            aperiam ducimus quasi delectus, quaerat incidunt nisi dolore esse
            nam dolorum exercitationem, alias a sit quae labore nesciunt saepe
            ex laboriosam sapiente. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam qui libero eaque quas animi ex accusantium
            molestiae non? Aliquam impedit commodi nesciunt error dolore quis
            aliquid modi numquam quo debitis incidunt veritatis iure nam,
            voluptatem perspiciatis illum earum, provident nemo? Ut perferendis
            veritatis quidem voluptas aperiam ducimus quasi delectus, quaerat
            incidunt nisi dolore esse nam dolorum exercitationem, alias a sit
            quae labore nesciunt saepe ex laboriosam sapiente.
          </p>
        </div>
      </div>
    </section>
  );
}
