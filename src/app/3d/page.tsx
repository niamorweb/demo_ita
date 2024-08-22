"use client";
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";

function Model({ scrollY }: any) {
  const modelRef = useRef();
  const { scene } = useGLTF("/drone_3d.glb");

  return (
    <motion.mesh
      //@ts-ignore
      ref={modelRef}
      rotation={[Math.PI / 4, scrollY, 0]} // Inclinaison initiale sur l'axe X, rotation dynamique sur l'axe Y
      position={[0, 0, 0]}
    >
      <primitive object={scene} />
    </motion.mesh>
  );
}

export default function App() {
  const scrollY = useScrollY(); // Hook personnalisé pour suivre le défilement

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {" "}
        {/* Ajustez la position selon le besoin */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />{" "}
        {/* Désactive le zoom avec le scroll */}
        <Model scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

function useScrollY() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY / 1000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
