import React from "react";
import Header from "../Header";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="bg-emerald-900 h-[500px]               ">
        <div className="absolute inset-0">
          <div className="flex justify-center">
            <Header />
          </div>
          <img
            src="hero-image.png"
            alt="community"
            className="object-cover mt-48    "
          />
          {/* <Image
          src="/hero-image.jpg"
          alt="Community"
          layout="fill"
          objectFit="cover"
          /> */}
        </div>
        <div className="flex justify-between">
          <div className="relative z-10 p-10 text-white">
            <h1 className="text-5xl font-bold mt-16">
              BUILDING A BETTER FUTURE TOGETHER
            </h1>
          </div>
          <div className="relative z-10 p-10 text-white">
            <p className="text-lg mt-16">
              GRAM Association is dedicated to empowering communities through
              sustainable future...
            </p>
            <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
              OUR PROGRAMS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
