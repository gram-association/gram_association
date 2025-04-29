import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import WhoAreWe from "@/components/WhoAreWe";

export default function Home() {
  return (
    <>
      <Head>
        <title>GRAM Association</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <HeroSection />
      <WhoAreWe />

      <Footer />
      {/* <Navbar />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer /> */}
    </>
  );
}
