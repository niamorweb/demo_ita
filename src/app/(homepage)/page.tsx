"use client";
import BackgroundChanger from "@/components/changebg";
import CallToAction from "@/components/homepage/CallToAction";
import ExtensiveCoverage from "@/components/homepage/ExtensiveCoverage";
import Hero from "@/components/homepage/Hero";
import KeysNumbers from "@/components/homepage/KeysNumbers";
import OurBlogs from "@/components/homepage/OurBlogs";
import OurGoal from "@/components/homepage/OurGoal";
import OurPrestations from "@/components/homepage/OurPrestations";
import Testimonials from "@/components/homepage/Testimonials";
import TheyTrustUs from "@/components/homepage/TheyTrustUs";
import YourSupport from "@/components/homepage/YourSupport";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TextRevealByWord from "@/components/magicui/text-reveal";
import Image from "next/image";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Section Two ScrollTrigger
    ScrollTrigger.create({
      trigger: ".section-two",
      start: "top 20%",
      end: "bottom 0%",
      onEnter: () => {
        gsap.to(".section-two", { duration: 1.0, backgroundColor: "#F7F7F8" });
      },
      onLeaveBack: () => {
        gsap.to(".section-two", { duration: 1.0, backgroundColor: "#000000" });
      },
    });
  }, []);

  return (
    <div className="relative">
      {/* <Header /> */}
      {/* <BackgroundChanger /> */}
      <Hero />
      {/* <TheyTrustUs /> */}
      <section id="intro" className="section-two bg-[#000000]">
        <div className="z-10 flex min-h-[42rem] items-center justify-center rounded-lg">
          <TextRevealByWord
            text="Intheair rend accessible l'imagerie aérienne en facilitant l'accès
              à la captation de données par drone et satellite, leur analyse
              immédiate, suivies de recommandations concrètes.."
          />
        </div>
      </section>
      <OurGoal />
      <OurPrestations />
      <YourSupport />
      <ExtensiveCoverage />
      <OurBlogs />
      {/* <KeysNumbers /> */}
      <Testimonials />
      <CallToAction />
      {/* <Footer /> */}
    </div>
  );
}
