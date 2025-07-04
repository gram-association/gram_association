"use client";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import OurPrograms from "./components/OurPrograms";
import Image from "next/image";
import FocusAreas from "./components/focusArea";
import OurImpact from "./components/ourImpact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 bg-[linear-gradient(to_bottom,_#1D352E_600px,_white_600px)] dark:bg-[linear-gradient(to_bottom,_#052e0c_600px,_#0f172a_600px)]">
      <section className="relative">
        <div className="flex flex-col sm:flex-row sm:h-[500px] max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="relative w-full sm:h-full">
            <Image
              src="/hero-image.png"
              alt="community"
              width={1152}
              height={700}
              className="object-cover w-full h-64 xs:h-72 sm:h-full sm:mt-60 sm:w-6xl sm:mx-auto"
              priority
            />
          </div>
          {/* Content Section */}
          <div className="flex flex-col sm:flex-row sm:justify-evenly sm:absolute sm:inset-0 w-full sm:w-[1277px] mt-6 sm:mt-12 px-4 sm:px-0">
            <div className="relative z-10 w-full sm:w-4xl text-white dark:text-white">
              <h1 className="text-xl xs:text-2xl sm:text-[48px] font-semibold text-center sm:text-left leading-tight sm:leading-snug">
                Building self-reliant India through self-reliant villages
              </h1>
            </div>
            <div className="hidden sm:block sm:mt-6 sm:mx-4 h-24 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="relative z-10 py-2 px-4 sm:px-2 text-white dark:text-gray-200 w-full sm:w-xl sm:mr-35">
              <p className="text-xs sm:text-sm text-center sm:text-left leading-relaxed">
                GRAM Association is dedicated to empowering communities through
                sustainable development, education, healthcare, and clean water
                initiatives that create lasting change.
              </p>
              <div className="flex justify-center sm:justify-start space-x-2 mt-4 sm:mt-5">
                <Link href="/contact-us">
                  <Button className="bg-[#5A829A] text-white py-1 px-4 w-fit rounded-full hover:bg-cyan-700 dark:hover:bg-cyan-800 text-xs xs:text-sm">
                    GET IN TOUCH
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About us */}
      <section className="py-8 md:pt-16 text-center mt-10 md:mt-40">
        <p className="container mx-auto bg-[#DEE6EB] dark:bg-gray-700 w-fit rounded-lg px-2 text-gray-700 dark:text-gray-200 flex items-center text-sm md:text-base">
          About Us
        </p>
        <h2 className="text-2xl md:text-5xl mt-4 text-center mb-6 text-gray-900 dark:text-gray-100">
          Indigenous wisdom meets Innovation
        </h2>
        <p className="max-w-5xl mx-auto text-xs md:text-[16px] text-center text-gray-600 dark:text-gray-400 px-4 md:px-0">
          GRAM Association is committed to building an inclusive, equitable, and
          sustainable future. We bridge the gap between age-old wisdom and
          modern technology to uplift low resource communities, promote
          sustainable livelihoods, reimagine traditional knowledge into
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
      <section className="py-8 md:py-16 bg-[#BAD1CA] dark:bg-gray-900 min-w-screen">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center bg-[#DEE6EB] dark:bg-gray-700 w-fit mx-auto rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-200 flex items-center">
            Our Vision & Mission
          </p>

          <h3 className="text-xl sm:text-2xl md:text-5xl mt-4 font-epilogue text-center mb-6 md:mb-8 text-gray-900 dark:text-gray-100">
            What Drives Us
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <div className="w-full md:w-[600px] max-w-full rounded-lg bg-white dark:bg-gray-800 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-epilogue mb-3 md:mb-2 text-gray-900 dark:text-gray-100">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-5">
                GRAM Association envisions an inclusive, equitable, and
                ecologically balanced society where self-reliant villages serve
                as the foundation of national development. By empowering
                self-governed, community-led institutions, we aim to foster
                sustainable rural ecosystems.
                <br />
                <br />
                Inspired by Mahatma Gandhi's belief that "the soul of India
                lives in its villages," we strive to support rural communities
                into centers of resilience, dignity, and prosperity.
                <br />
                <br />
                GRAM is committed towards enabling grassroots institutions and
                influencing policies through interventions, aspiring to be a
                recognised sectoral leader in livelihoods, water, agriculture,
                health, and education, aligning our efforts with key Sustainable
                Development Goals (SDGs)
              </p>
            </div>
            <div className="w-full md:w-[600px] max-w-full rounded-lg bg-white dark:bg-gray-800 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-epilogue mb-3 md:mb-4 text-gray-900 dark:text-gray-100">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                To strengthen community capacities for holistic and sustainable
                development by purposefully converging indigenous wisdom, and
                contemporary technological advancements. Our mission focuses on
                promoting sustainable livelihoods, ensuring water as well as
                sanitation, enhancing health and education, fostering
                environmental resilience, all through participatory and
                inclusive approaches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas */}
      <FocusAreas />

      {/* Our Programs */}
      <OurPrograms />

      {/* Get Involved */}
      <section className="py-8 bg-[#F8F1E9] dark:bg-gray-800 min-w-screen text-center">
        <p className="container mx-auto bg-gray-100 dark:bg-gray-700 w-fit rounded-lg px-4 py-2 text-gray-700 dark:text-gray-200 flex items-center text-sm sm:text-base">
          Get Involved
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-epilogue text-center mb-6 px-4 text-gray-900 dark:text-gray-100">
          Join Us in Making a Difference
        </h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-8 px-4 max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/donate.png"
              alt="donate_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg text-gray-900 dark:text-gray-100">
              DONATE
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
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
              src="/Volunteer.png"
              alt="Volunteer_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg text-gray-900 dark:text-gray-100">
              VOLUNTEER
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
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
              src="/partners.png"
              alt="partners_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg text-gray-900 dark:text-gray-100">
              PARTNER WITH US
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
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
