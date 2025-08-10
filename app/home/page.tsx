"use client";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import OurPrograms from "./components/OurPrograms";
import Image from "next/image";
import FocusAreas from "./components/focusArea";
import OurImpact from "./components/ourImpact";
import VisionMissionSection from "./components/visionMission";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 sm:px-6 md:px-8 lg:px-24 pt-16 pb-24 bg-[linear-gradient(to_bottom,_#1D352E_500px,_white_500px)]">
      <section className="flex flex-col w-full mt-8w-full max-w-7xl mx-auto mt-20 animate-fade-in">
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-16 px-4 sm:px-6 lg:px-4">
          {/* Left Column - Heading */}
          <div className="md:col-span-2 ">
            <h1 className=" text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white dark:text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              Building self-reliant India <br />
              through self-reliant villages
            </h1>
          </div>

          {/* Right Column - Description and CTA */}
          <div className="md:col-span-1 flex gap-4 md:gap-6">
            {/* Divider - Hidden on mobile and small tablets */}
            <div className="w-px hidden md:block bg-gray-300 dark:bg-gray-600 self-stretch"></div>

            <div className="flex-1 flex flex-col justify-center md:justify-start lg:justify-center">
              <p className="text-white dark:text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                GRAM Association is dedicated to empowering communities through
                sustainable development, education, healthcare, and clean water
                initiatives that create lasting change.
              </p>

              <div className="flex justify-start">
                <Link href="/contact-us">
                  <Button className="bg-[#5A829A] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-cyan-700 dark:hover:bg-cyan-800 text-xs sm:text-sm font-medium transition-colors">
                    GET IN TOUCH
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-6 ">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-gray-400">
            <Image
              src="/homeCommunity.png"
              alt="Community members in traditional Indian clothing working together in a rural village setting"
              width={1152}
              height={450}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
      {/* About us */}
      <section className="py-8 md:pt-16 text-center ">
        {/* <p className="container mx-auto bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-2 text-gray-700 dark:text-gray-200 flex items-center text-[17px] md:text-lg">
          About Us
        </p> */}
        <h2 className="text-2xl italic md:text-5xl mt-4 text-center mb-6 text-gray-900 dark:text-gray-100">
          “Indigenous wisdom meets Innovation”
        </h2>
        <p className="max-w-5xl mx-auto text-[16px] md:text-lg text-center text-gray-600 dark:text-gray-400 px-4 md:px-0">
          GRAM Association is committed to building an inclusive, equitable, and
          sustainable future. We bridge the gap between age-old wisdom and
          modern technology to uplift low resource communities, promote
          sustainable livelihoods, reinvent traditional knowledge into
          contemporary, sustainable practices while advancing holistic community
          development.
        </p>
        <Link href="/about-us">
          <Button className="mx-auto bg-[#5A829A] text-white py-1 w-fit mt-5 rounded-full hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-gray-600 dark:hover:text-gray-200 flex items-center text-xs md:text-base px-4 md:px-6">
            LEARN MORE
          </Button>
        </Link>
      </section>

      {/* Our Impact */}
      <OurImpact />

      {/* Our Vision and Mission */}
      <VisionMissionSection />

      {/* Our Focus Areas */}
      <FocusAreas />

      {/* Our Programs */}
      <OurPrograms />

      {/* Get Involved */}
      <section className="py-8 mt-4 bg-[#F8F1E9] dark:bg-gray-800 min-w-screen text-center">
        <p className="container mx-auto bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-4  text-gray-700 dark:text-gray-200 flex items-center text-sm sm:text-lg">
          Get Involved
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-epilogue text-center mb-6 px-4 text-gray-900 dark:text-gray-100">
          Join Us in Making a Difference
        </h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-8 px-4 max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/logos/donate.png"
              alt="donate_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg text-gray-900 dark:text-gray-100">
              DONATE
            </p>
            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
              Your generous contribution helps us continue our work and expand
              our reach to more communities.
            </p>
            <div className="mt-6 flex justify-center text-teal-500 dark:text-teal-400 gap-1">
              <Link
                href="/contact-us?type=donate"
                className="font-bold text-sm hover:underline"
              >
                DONATE NOW
              </Link>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/logos/Volunteer.png"
              alt="Volunteer_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg text-gray-900 dark:text-gray-100">
              VOLUNTEER
            </p>
            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
              Contribute your time, skills, and energy to support our programs
              and make a direct impact.
            </p>
            <div className="mt-6 flex justify-center text-teal-500 dark:text-teal-400 gap-1">
              <Link
                href="/contact-us"
                className="font-bold text-sm hover:underline"
              >
                BECOME A VOLUNTEER
              </Link>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/logos/partners.png"
              alt="partners_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg text-gray-900 dark:text-gray-100">
              PARTNER WITH US
            </p>
            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
              Join forces with us through strategic partnerships to amplify our
              impact and reach more communities.
            </p>
            <div className="mt-6 flex justify-center text-teal-500 dark:text-teal-400 gap-1">
              <Link
                href="/contact-us"
                className="font-bold text-sm hover:underline"
              >
                BECOME A PARTNER
              </Link>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
