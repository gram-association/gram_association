import AboutSection from "@/components/aboutUs/AboutSection";

import Head from "next/head";

import OurStory from "@/components/aboutUs/OurStory";
import OurValues from "@/components/aboutUs/OurValues";
import OurTeam from "@/app/about-us/components/OurTeam";
import OurPartners from "@/app/about-us/components/OurPartners";

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
