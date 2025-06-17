import { Button } from "@/components/ui/Button";
import { Epilogue } from "next/font/google";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import OurPrograms from "./components/OurPrograms";
import Image from "next/image";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-epilogue",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 bg-[linear-gradient(to_bottom,_#1D352E_600px,_white_600px)]">
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
          <div className="flex flex-col sm:flex-row sm:justify-evenly sm:absolute sm:inset-0 w-full sm:w-[1270px] mt-6 sm:mt-12 px-4 sm:px-0">
            <div
              className={`${epilogue.variable} relative z-10 w-full sm:w-4xl sm:ml-4 py-2 text-white`}
            >
              <h1 className="text-xl xs:text-2xl sm:text-[54px] font-semibold font-epilogue text-center sm:text-left leading-tight sm:leading-snug">
                Building self-reliant India through self-reliant villages
              </h1>
            </div>
            <div className="hidden sm:block sm:mt-6 sm:mx-4 h-24 w-px bg-gray-300"></div>
            <div className="relative z-10 py-2 px-4 sm:px-2 text-white w-full sm:w-xl sm:mr-35">
              <p className="text-xs sm:text-sm text-center sm:text-left leading-relaxed">
                GRAM Association is dedicated to empowering communities through
                sustainable development, education, healthcare, and clean water
                initiatives that create lasting change.
              </p>
              <div className="flex justify-center sm:justify-start space-x-2 mt-4 sm:mt-5">
                <Link href="/contact-us">
                  <Button className="bg-[#5A829A] text-white py-1 px-4 w-fit rounded-full hover:bg-cyan-700 text-xs xs:text-sm">
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
        <p className="container mx-auto bg-[#DEE6EB] w-fit rounded-lg px-2 text-gray-700 flex items-center text-sm md:text-base">
          About Us
        </p>
        <h2 className="text-2xl md:text-4xl mt-4 text-center mb-6">
          Indigenous wisdom meets Innovation
        </h2>
        <p className="max-w-3xl mx-auto  text-xs md:text-sm text-center text-gray-600 px-4 md:px-0">
          GRAM Association is committed to building an inclusive, equitable, and
          sustainable future. We bridge the gap between age-old wisdom and
          modern technology to uplift low resource communities, promote
          sustainable livelihoods, reimagine traditional knowledge into
          contemporary, sustainable practices while advancing holistic community
          development.
        </p>
        <Link href="/about-us">
          <Button className=" mx-auto bg-[#5A829A] text-white py-1 w-fit mt-5 rounded-full hover:bg-gray-200 hover:text-gray-700 flex items-center text-xs md:text-base px-4 md:px-6">
            LEARN MORE
          </Button>
        </Link>
      </section>

      {/* Our Impact */}
      <section className="py-8 md:pb-16 text-center mt-10 md:mt-0">
        <p className="container mx-auto bg-[#DEE6EB] w-fit rounded-lg px-2 text-gray-700 flex items-center text-sm md:text-base">
          Our Impact
        </p>
        <h2 className="text-2xl md:text-4xl mt-4 text-center mb-6">
          Driving Meaningful Change
        </h2>

        <div className="flex flex-wrap justify-center bg-[#F8F1E9] w-full min-w-5xl mx-auto py-8 px-4 rounded-lg space-x-4 md:space-x-8 space-y-4 md:space-y-0">
          <div className="w-1/2 md:w-auto text-center">
            <p className="text-2xl md:text-4xl font-bold text-[#5A829A]">
              10K+
            </p>
            <p className="text-xs md:text-base">Lives Transformed</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          <div className="w-1/2 md:w-auto text-center">
            <p className="text-2xl md:text-4xl font-bold text-[#5A829A]">10+</p>
            <p className="text-xs md:text-base">Villages Impacted</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          <div className="w-1/2 md:w-auto text-center">
            <p className="text-2xl md:text-4xl font-bold text-[#5A829A]">50+</p>
            <p className="text-xs md:text-base">Women Trained</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          <div className="w-1/2 md:w-auto text-center">
            <p className="text-2xl md:text-4xl font-bold text-[#5A829A]">3</p>
            <p className="text-xs md:text-base">Water bodies rejuvenated</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-gray-300"></div>

          <div className="w-1/2 md:w-auto text-center">
            <p className="text-2xl md:text-4xl font-bold text-[#5A829A]">8</p>
            <p className="text-xs md:text-base">SDGs addressed</p>
          </div>
        </div>
      </section>

      {/* Our Vission and Mission */}
      <section className="py-8 md:py-16 bg-[#BAD1CA] min-w-screen">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center bg-[#DEE6EB] w-fit mx-auto rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 flex items-center">
            Our Vision & Mission
          </p>

          <h3 className="text-xl sm:text-2xl md:text-4xl mt-4 text-center mb-6 md:mb-8">
            What Drives Us
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <div className="w-full md:w-[600px] max-w-full rounded-lg bg-white p-4 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 text-xs sm:text-xs leading-5">
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
            <div className="w-full md:w-[600px] max-w-full rounded-lg bg-white p-4 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
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

      {/* our focus areas */}
      <section className="min-h-screen py-8 md:py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="inline-block bg-[#DEE6EB] rounded-lg px-2 py-1 text-sm text-gray-700 mb-4 md:mb-6">
            Our Focus Areas
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-start mb-6 md:mb-8">
            THE 5 Es
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="hidden md:block">
            <Image
              src="/5Es.png"
              alt="5 Es Illustration"
              width={576}
              height={576}
              className="w-full max-w-[576px] h-auto"
            />
          </div>
          <div className="space-y-4 text-left w-full md:w-1/2">
            <div className="flex gap-4 items-start">
              <div>
                <Image
                  src="/Group 6.png"
                  alt="Entrepreneurship Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold">Entrepreneurship:</p>
                <p className="text-gray-400 text-sm">
                  Fostering a spirit of innovation, ownership, and initiative to
                  drive sustainable change
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div>
                <Image
                  src="/Group 8.png"
                  alt="Edification Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold">Enrichment</p>
                <p className="text-gray-400 text-sm">
                  Developing learning opportunities that help people grow and
                  uplift communities within their society
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div>
                <Image
                  src="/Group 7.png"
                  alt="Empowerment Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold">Enablement</p>
                <p className="text-gray-400 text-sm">
                  Enabling individuals and communities to serve themselves,
                  instilling confidence and driving a positive impact
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div>
                <Image
                  src="/Group 9.png"
                  alt="Education Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold">Education</p>
                <p className="text-gray-400 text-sm">
                  Enabling individuals and communities to serve themselves,
                  instilling confidence and driving a positive impact
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div>
                <Image
                  src="/Group 10.png"
                  alt="Environment Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <p className="font-bold">Environment:</p>
                <p className="text-gray-400 text-sm">
                  Promoting sustainable practices and environmental
                  consciousness for future generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <OurPrograms />

      {/* Get Involved */}
      <section className="py-8 bg-[#F8F1E9] min-w-screen text-center">
        <p className="container mx-auto bg-gray-100 w-fit rounded-lg px-4 py-2 text-gray-700 flex items-center text-sm sm:text-base">
          Get Involved
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 text-center mb-6 px-4">
          Join Us in Making a Difference
        </h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-8 px-4 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/donate.png"
              alt="donate_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg">DONATE</p>
            <p className="text-sm  text-gray-500 leading-relaxed">
              Your generous contribution helps us continue our work and expand
              our reach to more communities.
            </p>
            <div className="mt-6 flex justify-center text-teal-500 gap-1">
              <Link href="" className="font-bold text-sm hover:underline">
                DONATE NOW
              </Link>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/Volunteer.png"
              alt="Volunteer_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg">VOLUNTEER</p>
            <p className="text-sm  text-gray-500 leading-relaxed">
              Contribute your time, skills, and energy to support our programs
              and make a direct impact.
            </p>
            <div className="mt-6 flex justify-center text-teal-500 gap-1">
              <Link href="" className="font-bold text-sm hover:underline">
                BECOME A VOLUNTEER
              </Link>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
            <Image
              src="/partners.png"
              alt="partners_img"
              width={50}
              height={50}
              className="w-12 h-12 mx-auto"
            />
            <p className="font-bold my-2 text-lg">PARTNER WITH US</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Join forces with us through strategic partnerships to amplify our
              impact and reach more communities.
            </p>
            <div className="mt-6 flex justify-center text-teal-500 gap-1">
              <Link href="" className="font-bold text-sm hover:underline">
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
