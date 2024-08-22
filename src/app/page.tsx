import CallToAction from "@/components/homepage/CallToAction";
import ExtensiveCoverage from "@/components/homepage/ExtensiveCoverage";
import Hero from "@/components/homepage/Hero";
import KeysNumbers from "@/components/homepage/KeysNumbers";
import OurGoal from "@/components/homepage/OurGoal";
import OurPrestations from "@/components/homepage/OurPrestations";
import Testimonials from "@/components/homepage/Testimonials";
import TheyTrustUs from "@/components/homepage/TheyTrustUs";
import YourSupport from "@/components/homepage/YourSupport";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      {/* <TheyTrustUs /> */}
      <OurGoal />
      <OurPrestations />
      <YourSupport />
      <ExtensiveCoverage />
      {/* <KeysNumbers /> */}
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
