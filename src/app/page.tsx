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

export default function Home() {
  return (
    <div className="relative">
      {/* <Header /> */}
      {/* <BackgroundChanger /> */}
      <Hero />
      {/* <TheyTrustUs /> */}
      <div className="z-10 flex min-h-[42rem] items-center justify-center rounded-lg border">
        <TextRevealByWord
          text="Intheair rend accessible l'imagerie aérienne en facilitant l'accès
              à la captation de données par drone et satellite, leur analyse
              immédiate, suivies de recommandations concrètes.."
        />
      </div>
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
