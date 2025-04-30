import AboutSection from "@/components/aboutUs/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

import OurImpact from "@/components/home/OurImpact";
import VisionMision from "@/components/home/VisionMission";
import OurFocusAreas from "@/components/home/OurFocusArea";
import OurPrograms from "@/components/home/OurPrograms";
import GetInvolved from "@/components/home/GetInvolved";
import OurStory from "@/components/aboutUs/OurStory";
import OurValues from "@/components/aboutUs/OurValues";
import OurTeam from "@/components/aboutUs/OurTeam";
import OurPartners from "@/components/aboutUs/OurPartners";

export default function Home() {
  return (
    <>
      <Head>
        <title>GRAM Association</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      {/* <HeroSection />
      <OurImpact />
      <VisionMision />
      <OurFocusAreas />
      <OurPrograms />
      <GetInvolved />
      <Footer /> */}
      <AboutSection />
      <OurStory />
      <OurValues />
      <OurTeam />
      <OurPartners />
    </>
  );
}
